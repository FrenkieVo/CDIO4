//import class prismaclient từ thư viện @prisma/client
const {PrismaClient} = require('../generated/client');
//tạo đối tượng prisma để truy vấn hàm đến database
const prisma = new PrismaClient();

const bcrypt = require('bcryptjs');
//tạo vai trò
const createUser = async (data) => {
    return await prisma.user.create({
        data:{
            hoten   : data.hoten,       
            email   : data.email,         
            matkhau  : data.matkhau,
            sodienthoai : data.sodienthoai,
            diachi      : data.diachi,
            trangthai   : data.trangthai,
            Role_id      : data.Role_id
        }
    });
}
//lấy thông tin người dùng 
const getUser = async () => {
    return await prisma.user.findMany({
        include:{
            Role: true
        }
    })
}
//lấy thông tin vai trò theo id
const getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: {id},
        select: {
            id: true,
            hoten: true,
            email: true,
            sodienthoai: true,
            diachi: true,
            trangthai: true,
            isLocked: true,
            Role: true
        }
    })
}
//sửa thông tin vai trò
const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id: Number(id) },
    data: {
      hoten: data.hoten,
      email: data.email,
      sodienthoai: data.sodienthoai,
      diachi: data.diachi,
      trangthai: data.trangthai,
      isLocked: data.isLocked,
      ...(data.Role_id && {
        Role: {
          connect: { id: Number(data.Role_id) }
        }
      })
    }
  });
};

//xoa user
const deleteUser = async (id) => {
    return await prisma.user.update({
        where: { id },
        data: { trangthai: "deleted" }
    });
};


//check email đã tồn tại trong table users
const checkEmail = async (email) => {
    // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu chưa
   const existingUser = await prisma.user.findFirst({
     where: {
       email: email,
     },
   });
   const errors = {};
  
  
   if (existingUser) {
     errors.email = 'email đã tồn tại';
   }
  
  
   return errors;
  }

  //mã hóa mật khẩu 
const checkLoginUser = async (data) => {
 // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu chưa
 const existingUser = await prisma.user.findFirst({
   where: {
     AND: [
       { email: data.email },
     ]
   },
 });
  if (!existingUser) {
   return false;
 }
 //  User bị admin khóa → CHẶN LOGIN
    if (existingUser.isLocked) {
        return { isLocked: true };
    }
 // So sánh mật khẩu không hash với mật khẩu đã được hash trong cơ sở dữ liệu
 const passwordMatch = await bcrypt.compare(data.matkhau, existingUser.matkhau);
  if (!passwordMatch) {
   return false;
 }
  return existingUser;
}

module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    checkEmail,
    checkLoginUser
}