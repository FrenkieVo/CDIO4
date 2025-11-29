const diadiemModel = require('../Models/diadiemModel')

//xử lý file:multer(xử lý ảnh)
const multer = require('multer')
const path = require('path')

//thiết lập multer dể xử lý tệp hình ảnh
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'uploads/diadiem') //thư mục lưu trữ tệp hình ảnh (phải tạo sẵn)
    },
    filename : (req,file,cb) =>{
        const uniqueSuffix = Date.now() + '-' +
        Math.round(Math.random() * 1e9)
        cb(null, file.fieldname + '-' + uniqueSuffix + 
        path.extname(file.originalname));           
    }
})

const upload = multer({ storage }).array('hinhanh',5);

//tạo địa điểm
const createDiaDiem = async (req, res) => {

    const data = req.body;
    const avatarFiles = req.files;

    data.hinhanh = avatarFiles ? avatarFiles.map(file => file.path.replace(/\\/g, '/')) : [];
    data.hinhanh = JSON.stringify(data.hinhanh)

    const newDiaDiem = await diadiemModel.createDiaDiem(data);
    res.status(201).json(newDiaDiem);
}

//lấy thông tin địa điểm
const getDiaDiem = async (req, res) => {
    const diaDiemList = await diadiemModel.getDiaDiem();
    res.status(200).json(diaDiemList);
}

//lấy thông tin địa điểm theo id
const getDiaDiemById = async (req, res) => {
    const id = parseInt(req.params.id);
    const diaDiem =  await diadiemModel.getDiaDiemById(id);
    res.status(200).json(diaDiem);
}

//sửa thông tin địa điểm
const updateDiaDiem = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    if (req.files && req.files.length > 0) {
        data.hinhanh = JSON.stringify(
            req.files.map(f => f.path.replace(/\\/g, "/")) 
        );
    }
    const updatedDiaDiem = await diadiemModel.updateDiaDiem(id, data);
    res.status(200).json(updatedDiaDiem);
}

//xoa địa điểm
const deleteDiaDiem = async (req, res) => {
    const id = parseInt(req.params.id);
    await diadiemModel.deleteDiaDiem(id);
    res.status(204).send();
}

module.exports = {
    upload,
    createDiaDiem,
    getDiaDiem,
    getDiaDiemById,
    updateDiaDiem,
    deleteDiaDiem,
}