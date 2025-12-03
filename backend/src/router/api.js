const express = require('express');
const router = express.Router();
const roleController = require('../Controllers/roleController');
const userController = require('../Controllers/UserController');
const diadiemController = require('../Controllers/diadiemController');
const goiDichVuController = require('../Controllers/goidichvuController');
const lichtrinhController = require('../Controllers/lichtrinhController');
const lichtrinhCTController = require('../Controllers/lichtrinhCTController');
const thanhtoanController = require('../Controllers/thanhtoanController');
const hoadonController = require('../Controllers/hoadonController');
const gopyController = require('../Controllers/gopyController');
const bookingController = require('../Controllers/bookingController');

//role 
//tạo vai trò
router.post('/role',roleController.createRole);
//lấy vai trò theo id
router.get('/role/:id',roleController.getRoleById);
//sửa vai trò
router.put('/role/:id',roleController.updateRole);
//xóa vai trò
router.delete('/role/:id',roleController.deleteRole);

//user
//tạo người dùng
router.post('/user',userController.createUser);
//đăng nhập người dùng
router.post('/user/login',userController.loginUser);
//lấy tất cả người dùng
router.get('/user', userController.getUser);
//lấy người dùng theo id
router.get('/user/:id',userController.getUserById);
//sửa người dùng
router.put('/user/:id',userController.updateUser);
//xóa người dùng
router.delete('/user/:id',userController.deleteUser);
//đăng xuất người dùng
router.post('/user/logout', userController.logoutUser);
//chuyển trạng thái người dùng active <-> inactive
router.put('/user/toggle/:id', userController.toggleUserStatus);
//khóa/mở khóa người dùng
router.put('/user/lock/:id', userController.toggleLock);
//xóa người dùng (cập nhật trạng thái thành "deleted")
router.put("/user/:id/delete", userController.deleteUser);

//địa điểm
//tạo địa điểm
router.post('/diadiem',diadiemController.upload,diadiemController.createDiaDiem);
//lấy thông tin địa điểm
router.get('/diadiem',diadiemController.getDiaDiem);
//lấy thông tin địa điểm theo id
router.get('/diadiem/:id',diadiemController.getDiaDiemById);
//sửa thông tin địa điểm
router.put('/diadiem/:id',diadiemController.upload,diadiemController.updateDiaDiem);
//xóa địa điểm
router.delete('/diadiem/:id',diadiemController.deleteDiaDiem);

//goi dịch vụ
//tạo gói dịch vụ
router.post('/goidichvu',goiDichVuController.upload,goiDichVuController.createGoiDichVu);
//lấy tất cả gói dịch vụ
router.get('/goidichvu',goiDichVuController.getAllGoiDichVu);
//lấy gói dịch vụ theo id
router.get('/goidichvu/:id',goiDichVuController.getGoiDichVuById);
//sửa gói dịch vụ
router.put('/goidichvu/:id',goiDichVuController.upload,goiDichVuController.updateGoiDichVu);
//xóa gói dịch vụ
router.delete('/goidichvu/:id',goiDichVuController.deleteGoiDichVu);

//lịch trình
//tạo lịch trình
router.post('/lichtrinh',lichtrinhController.createLichTrinh);
//lấy lịch trình theo id
router.get('/lichtrinh/:id',lichtrinhController.getLichTrinhById);
//sửa lịch trình
router.put('/lichtrinh/:id',lichtrinhController.updateLichTrinh);
//xóa lịch trình
router.delete('/lichtrinh/:id',lichtrinhController.deleteLichTrinh);

//lịch trình chi tiết
//tạo lịch trình chi tiết
router.post('/lichtrinhct',lichtrinhCTController.createLichTrinhCT);
//lấy lịch trình chi tiết theo id
router.get('/lichtrinhct/:id',lichtrinhCTController.getLichTrinhCTById);
//sửa lịch trình chi tiết
router.put('/lichtrinhct/:id',lichtrinhCTController.updateLichTrinhCT);
//xóa lịch trình chi tiết
router.delete('/lichtrinhct/:id',lichtrinhCTController.deleteLichTrinhCT);

//thanh toán
//tạo thông tin thanh toán
router.post('/thanhtoan',thanhtoanController.createThanhToan);
//lấy thông tin thanh toán theo id
router.get('/thanhtoan/:id',thanhtoanController.getThanhToanById);
//sửa thông tin thanh toán
router.put('/thanhtoan/:id',thanhtoanController.updateThanhToan);
//xóa thông tin thanh toán
router.delete('/thanhtoan/:id',thanhtoanController.deleteThanhToan);

//hóa đơn
//tạo hóa đơn
router.post('/hoadon',hoadonController.createHoaDon);
//lấy hóa đơn theo id
router.get('/hoadon/:id',hoadonController.getHoaDonById);
//cập nhật hóa đơn
router.put('/hoadon/:id',hoadonController.updateHoaDon);
//xóa hóa đơn
router.delete('/hoadon/:id',hoadonController.deleteHoaDon);

//góp ý
// tạo góp ý
router.post("/gopy", gopyController.createGopY);
// lấy tất cả góp ý
router.get("/gopy", gopyController.getGopy);
// xóa góp ý
router.delete("/gopy/:id", gopyController.deleteGopY);

//booking
// tạo booking
router.post("/booking", bookingController.createBooking);
// lấy tất cả booking
router.get("/booking", bookingController.getAllBooking);
// lấy booking theo id
router.get("/booking/:id", bookingController.getBookingById);
// xác nhận booking
router.put("/booking/confirm/:id", bookingController.confirmBooking);
// xóa booking
router.delete("/booking/:id", bookingController.deleteBooking);
module.exports = router;