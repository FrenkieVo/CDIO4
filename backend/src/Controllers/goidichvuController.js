const goiDichVuModel = require('../Models/goidichvuModel');


//xử lý file:multer(xử lý ảnh)
const multer = require('multer')
const path = require('path')

//thiết lập multer dể xử lý tệp hình ảnh
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'uploads/goidichvu') //thư mục lưu trữ tệp hình ảnh (phải tạo sẵn)
    },
    filename : (req,file,cb) =>{
        const uniqueSuffix = Date.now() + '-' +
        Math.round(Math.random() * 1e9)
        cb(null, file.fieldname + '-' + uniqueSuffix + 
        path.extname(file.originalname));           
    }
})

const upload = multer({ storage }).array('hinhanh',5);

//tao gói dịch vụ
const createGoiDichVu = async (req, res) => {
    const data = req.body;
    const avatarFiles = req.files;

    data.gia = parseInt(data.gia) * 1000;
    data.thoiluongngay = data.thoiluongngay;
    data.Diadiem_id = parseInt(data.Diadiem_id);
    data.hinhanh = avatarFiles ? avatarFiles.map(file => file.path.replace(/\\/g, '/')) : [];
    data.hinhanh = JSON.stringify(data.hinhanh)

    const goiDichVu = await goiDichVuModel.createGoiDichVu(data);
    res.status(201).json(goiDichVu);
}

//lấy tất cả gói dịch vụ
const getAllGoiDichVu = async (req, res) => {
    const goiDichVus = await goiDichVuModel.getAllGoiDichVu();
    // format giá từng item
    const newgoiDichVus = goiDichVus.map(item => ({
        ...item,
        giaFormat: item.gia.toLocaleString('vi-VN') + 'đ'
    }));

    res.status(200).json(newgoiDichVus);
}

//lấy gói dịch vụ theo id
const getGoiDichVuById = async (req, res) => {
    const id = req.params.id;
    const data = await goiDichVuModel.getGoiDichVuById(id);

    if (!data) {
        return res.status(404).json({ message: "Không tìm thấy gói dịch vụ" });
    }

    const newData = {
        ...data,
        giaFormat: data.gia.toLocaleString("vi-VN") + "đ"
    };

    res.status(200).json(newData);
};


//sửa gói dịch vụ
const updateGoiDichVu = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    if (req.files && req.files.length > 0) {
        data.hinhanh = JSON.stringify(
            req.files.map(f => f.path.replace(/\\/g, "/")) 
        );
    }
    // Nếu có gửi giá mới → nhân ×1000
    if (data.gia) {
        data.gia = parseInt(data.gia) * 1000;
    }
    data.thoiluongngay = data.thoiluongngay;
    if (data.Diadiem_id) {
        data.Diadiem_id = parseInt(data.Diadiem_id);
    }
    const goiDichVu = await goiDichVuModel.updateGoiDichVu(id, data);
    const updated = await goiDichVuModel.updateGoiDichVu(id, data);
    
    const newData = {
        ...updated,
        giaFormat: updated.gia.toLocaleString("vi-VN") + "đ"
    };

    res.status(200).json(newData);
}

//xóa gói dịch vụ
const deleteGoiDichVu = async (req, res) => {
    const id = req.params.id;
    await goiDichVuModel.deleteGoiDichVu(id);
    res.status(204).send();
}

module.exports = {
    createGoiDichVu,
    getAllGoiDichVu,
    getGoiDichVuById,
    updateGoiDichVu,
    deleteGoiDichVu,
    upload
}