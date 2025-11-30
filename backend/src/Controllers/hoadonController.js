const hoadonModel = require('../Models/hoadonModel');

//tao hoa don
const createHoaDon = async (req, res) => {
    const data = req.body;
    const hoaDon = await hoadonModel.createHoaDon(data);
    res.status(201).json(hoaDon);
}

//lấy hóa đơn theo id
const getHoaDonById = async (req, res) => {
    const id = parseInt(req.params.id);
    const hoaDon = await hoadonModel.getHoaDonById(id);
    res.status(200).json(hoaDon);
}

//cập nhật hóa đơn
const updateHoaDon = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    const hoaDon = await hoadonModel.updateHoaDon(id, data);
    res.status(200).json(hoaDon);
}

//xóa hóa đơn
const deleteHoaDon = async (req, res) => {
    const id = parseInt(req.params.id);
    await hoadonModel.deleteHoaDon(id);
    res.status(204).send();
}

module.exports = {
    createHoaDon,
    getHoaDonById,
    updateHoaDon,
    deleteHoaDon
};