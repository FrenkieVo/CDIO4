const thanhtoanModel = require('../Models/thanhtoanModels');

// Thêm thông tin thanh toán
const createThanhToan = async (req, res) => {
    const data = req.body;
    if (data.tongtien) data.tongtien = parseInt(data.tongtien);
    if (data.User_id) data.User_id = parseInt(data.User_id);
    if (data.Goidichvu_id) data.Goidichvu_id = parseInt(data.Goidichvu_id);
    const result = await thanhtoanModel.createThanhToan(data);
    res.status(201).json(result);
}

// Lấy thông tin thanh toán theo id
const getThanhToanById = async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await thanhtoanModel.getThanhToanById(id);
    res.status(200).json(result);
}

// Cập nhật thông tin thanh toán
const updateThanhToan = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    if (data.tongtien) data.tongtien = parseInt(data.tongtien);
    const result = await thanhtoanModel.updateThanhToan(id, data);
    res.status(200).json(result);
}

// Xóa thông tin thanh toán
const deleteThanhToan = async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await thanhtoanModel.deleteThanhToan(id);
    res.status(200).json(result);
}

module.exports = {
    createThanhToan,
    getThanhToanById,
    updateThanhToan,
    deleteThanhToan
};