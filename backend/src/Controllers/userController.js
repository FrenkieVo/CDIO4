const userModel = require('../Models/userModel')
//mã hóa và so sánh mật khẩu
const bcrypt = require('bcryptjs')

//create token anh check api login
const jwt = require('jsonwebtoken')

//hàm tạo json web token
function createJWT(userId,email) {
// jwt.sign(payload, secret, options) là hàm tạo token:

// payload: chứa dữ liệu muốn lưu trong token (ví dụ: userId, username)

// 'bao-vic': là secret key – dùng để mã hóa và xác minh token.

// { expiresIn: '5h' }: token sẽ hết hạn sau 5 giờ.
    const token = jwt.sign({userId,email}, 'bao-vic' , {expiresIn:'5h'})
    return token
}

//hàm tạo người dùng
const createUser = async (req,res) => {
    const data = req.body;
    const errorsEmail = await userModel.checkEmail(data.email)
    if (Object.keys(errorsEmail).length > 0) {
        return res.status(400).json(errorsEmail);
    }
    //mã hóa password 
    data.matkhau = await bcrypt.hash(data.matkhau, 10)
    const user = await userModel.createUser(data);
    res.json(user); 
}

//hàm login người dùng
//mã hóa mật khẩu và so sánh
const loginUser = async (req, res) => {
 const data = req.body;
  const checkLogin = await userModel.checkLoginUser(data);

  // User bị khóa bởi Admin
  if (checkLogin.isLocked === true) {
    return res.status(403).json({
      errors: { login: "Tài khoản đã bị khóa bởi Admin!" }
    });
  }

  if(!checkLogin || checkLogin == false){
   return res.status(400).json({ errors: { login: "Email hoặc mật khẩu không đúng" }});
 } 

 // cập nhật trạng thái user đang online
  await userModel.updateUser(checkLogin.id, {
    trangthai: "active"
  });

   //  Lấy lại user sau khi update
  const updatedUser = await userModel.getUserById(checkLogin.id);

  const token = createJWT(checkLogin.id,checkLogin.email)
  res.json({ message: 'Đăng nhập thành công',token:token, user: updatedUser })
};

const logoutUser = async (req, res) => {
  const id = req.body.id;
  await userModel.updateUser(id, { trangthai: "inactive" });
  res.json({ message: "Đăng xuất thành công" });
}

//chuyển trạng thái người dùng active <-> inactive
const toggleUserStatus = async (req, res) => {
  const id = parseInt(req.params.id);

  // Lấy user hiện tại
  const user = await userModel.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: "User không tồn tại" });
  }

  const newStatus = user.trangthai === "active" ? "inactive" : "active";

  // Update trạng thái
  const updatedUser = await userModel.updateUser(id, { trangthai: newStatus });

  res.json({
    message: "Cập nhật trạng thái thành công",
    newStatus,
    user: updatedUser
  });
};

const toggleLock = async (req, res) => {
  const id = parseInt(req.params.id);
  const currentUserId = req.body.currentUserId; // FE gửi vào

  // Không cho tự khóa chính mình
  if (id === currentUserId) {
    return res.status(400).json({ message: "Không thể khóa tài khoản đang đăng nhập!" });
  }

  const user = await userModel.getUserById(id);
  if (!user) return res.status(404).json({ message: "User không tồn tại" });

  // Nếu đang active thì admin KHÔNG được khóa
  if (user.trangthai === "active" && user.isLocked === false) {
    return res.status(400).json({ message: "Không thể khóa tài khoản đang hoạt động!" });
  }

  // KHÔNG CHO KHÓA user đã deleted
  if (user.trangthai == "deleted") {
    return res.status(400).json({ message: "Tài khoản này đã bị vô hiệu hóa!" });
  }

  const newLock = !user.isLocked;

  const updated = await userModel.updateUser(id, { isLocked: newLock });

  res.json({
    message: newLock ? "Đã khóa tài khoản" : "Đã mở khóa tài khoản",
    user: updated
  });
};

//lấy người dùng theo id
const getUserById = async (req,res) => {
    const id = parseInt(req.params.id)
    const user = await userModel.getUserById(id);
    res.json(user); 
}

//lấy người dùng
const getUser = async (req,res) => {
    const user = await userModel.getUser();
    res.json(user); 
}

//sửa người dùng
const updateUser = async (req,res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    const user = await userModel.updateUser(id,data);
    res.json(user); 
}
//hàm xóa người dùng
const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);

    const user = await userModel.getUserById(id);
    if (!user) return res.status(404).json({ message: "User không tồn tại!" });

    if (user.trangthai === "deleted") {
        return res.status(400).json({ message: "Tài khoản này đã bị vô hiệu hóa trước đó!" });
    }

    const updated = await userModel.updateUser(id, { trangthai: "deleted" });

    res.json({
        message: "Xóa tài khoản thành công",
        user: updated
    });
};
module.exports = {
    createUser,
    loginUser,
    logoutUser,
    toggleUserStatus,
    toggleLock,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}