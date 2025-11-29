const lichtrinhModel = require('../Models/lichtrinh');

//tao lich trinh
const createLichTrinh = async (req, res) => {
    const data = req.body;
    data.User_id = parseInt(data.User_id);
    const lichtrinh = await lichtrinhModel.createLichTrinh(data);
    res.status(201).json(lichtrinh);
}

//lay lich trinh theo id
const getLichTrinhById = async (req, res) => {
    const id = parseInt(req.params.id);
    const lichtrinh = await lichtrinhModel.getLichTrinhById(id);
    res.status(200).json(lichtrinh);
}

//sua lich trinh
const updateLichTrinh = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    const lichtrinh = await lichtrinhModel.updateLichTrinh(id, data);
    res.status(200).json(lichtrinh);
}

//xoa lich trinh
const deleteLichTrinh = async (req, res) => {
    const id = parseInt(req.params.id);
    await lichtrinhModel.deleteLichTrinh(id);
    res.status(204).send();
}

module.exports = {
    createLichTrinh,
    getLichTrinhById,
    updateLichTrinh,
    deleteLichTrinh
};