const lichtrinhCTModel = require('../Models/lichtrinhCTModel');

//tao lich trinh chi tiet
const createLichTrinhCT = async (req, res) => {
    const data = req.body;
    data.Lichtrinh_id  = parseInt(data.Lichtrinh_id);
    data.Goidichvu_id  = parseInt(data.Goidichvu_id);
    if (data.ngaykhoihanh) {
        data.ngaykhoihanh = new Date(data.ngaykhoihanh).toISOString();
    }
    const lichtrinhCT = await lichtrinhCTModel.createLichTrinhCT(data);
    res.status(201).json(lichtrinhCT);
}

//lay lich trinh chi tiet theo id
const getLichTrinhCTById = async (req, res) => {
    const id = parseInt(req.params.id);
    const lichtrinhCT = await lichtrinhCTModel.getLichTrinhCTById(id);
    res.status(200).json(lichtrinhCT);
}

//sua lich trinh chi tiet
const updateLichTrinhCT = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    data.Lichtrinh_id  = parseInt(data.Lichtrinh_id);
    data.Goidichvu_id  = parseInt(data.Goidichvu_id);
    if (data.ngaykhoihanh) {
        data.ngaykhoihanh = new Date(data.ngaykhoihanh).toISOString();
    }
    const lichtrinhCT = await lichtrinhCTModel.updateLichTrinhCT(id, data);
    res.status(200).json(lichtrinhCT);
}

//xoa lich trinh chi tiet
const deleteLichTrinhCT = async (req, res) => {
    const id = parseInt(req.params.id);
    await lichtrinhCTModel.deleteLichTrinhCT(id);
    res.status(204).send();
}

module.exports = {
    createLichTrinhCT,
    getLichTrinhCTById,
    updateLichTrinhCT,
    deleteLichTrinhCT
};