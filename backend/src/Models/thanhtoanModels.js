//import class prismaclient từ thư viện @prisma/client
const {PrismaClient} = require('../generated/client');
//tạo đối tượng prisma để truy vấn hàm đến database
const prisma = new PrismaClient();

//thêm thông tin thanh toán
const createThanhToan = async (data) => {
    return await prisma.thanhtoan.create({
        data: data
    });
}

//lấy thông tin thanh toán theo id
const getThanhToanById = async (id) => {
    return await prisma.thanhtoan.findUnique({
        where: { id: id }
    });
}

//cập nhật thông tin thanh toán
const updateThanhToan = async (id, data) => {
    return await prisma.thanhtoan.update({
        where: { id: id },
        data: data
    });
}

//xóa thông tin thanh toán
const deleteThanhToan = async (id) => {
    return await prisma.thanhtoan.delete({
        where: { id: id }
    });
}

module.exports = {
    createThanhToan,
    getThanhToanById,
    updateThanhToan,
    deleteThanhToan
};