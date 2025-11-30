//import class prismaclient từ thư viện @prisma/client
const {PrismaClient} = require('../generated/client');
//tạo đối tượng prisma để truy vấn hàm đến database
const prisma = new PrismaClient();

//tao hoa don
const createHoaDon = async (data) => {
    return await prisma.hoadon.create({
        data: {
            tongtien: parseInt(data.tongtien),
            trangthai: data.trangthai,
            User_id: parseInt(data.User_id),
            Thanhtoan_id: parseInt(data.Thanhtoan_id),
            Lichtrinh_id: parseInt(data.Lichtrinh_id)
        }
    });
}

//lấy hóa đơn theo id
const getHoaDonById = async (id) => {
    return await prisma.hoadon.findUnique({
        where: { id: id }
    });
}

//cập nhật hóa đơn
const updateHoaDon = async (id, data) => {
    return await prisma.hoadon.update({
        where: { id: id },
        data: data
    });
}

//xóa hóa đơn
const deleteHoaDon = async (id) => {
    return await prisma.hoadon.delete({
        where: { id: id }
    });
}

module.exports = {
    createHoaDon,
    getHoaDonById,
    updateHoaDon,
    deleteHoaDon
};