const express = require('express');
const router = express.Router();
const roleController = require('../Controllers/roleController');
const userController = require('../Controllers/UserController');
const diadiemController = require('../Controllers/diadiemController');
const goiDichVuController = require('../Controllers/goidichvuController');
const lichtrinhController = require('../Controllers/lichtrinhController');
const lichtrinhCTController = require('../Controllers/lichtrinhCTController');

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
//lấy người dùng theo id
router.get('/user/:id',userController.getUserById);
//sửa người dùng
router.put('/user/:id',userController.updateUser);
//xóa người dùng
router.delete('/user/:id',userController.deleteUser);

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
module.exports = router;