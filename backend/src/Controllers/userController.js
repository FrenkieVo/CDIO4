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
  if(!checkLogin){
   return res.status(400).json({ message: 'email hoac pass sai'});
 } 
 const token = createJWT(checkLogin.id,checkLogin.email)
  res.json({ message: 'Đăng nhập thành công',token:token, user: checkLogin })
};

//lấy người dùng theo id
const getUser = async (req,res) => {
    const id = parseInt(req.params.id)
    const user = await userModel.getUserById(id);
    res.json(user); 
}

//lấy người dùng
const getUserById = async (req,res) => {
    const id = parseInt(req.params.id)
    const user = await userModel.getUserById(id);
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
const deleteUser = async (req,res) => {
    const id = parseInt(req.params.id);
    const user = await userModel.deleteUser(id);
    res.json(user); 
}
module.exports = {
    createUser,
    loginUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}