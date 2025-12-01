const {PrismaClient} = require('../generated/client');
//tạo đối tượng prisma để truy vấn hàm đến database
const prisma = new PrismaClient();

//tao gói dịch vụ
const createGoiDichVu = async (data) => {
    return await prisma.goidichvu.create({data});
}

//lấy tất cả gói dịch vụ
const getAllGoiDichVu = async () => {
    return await prisma.goidichvu.findMany({
        include: {
            Diadiem: true   // ← JOIN bảng địa điểm
        }
    });   
}

//lấy gói dịch vụ theo id
const getGoiDichVuById = async (id) => {
    return await prisma.goidichvu.findUnique({
        where: {id: parseInt(id)},
        include: {
            Diadiem: true   // ← JOIN bảng địa điểm
        }
    });
}

//sửa gói dịch vụ
const updateGoiDichVu = async (id, data) => {
    return await prisma.goidichvu.update({
        where: {id: parseInt(id)},
        data
    });
}

//xóa gói dịch vụ
const deleteGoiDichVu = async (id) => {
    return await prisma.goidichvu.delete({
        where: {id: parseInt(id)}
    });
}

module.exports = {
    createGoiDichVu,
    getAllGoiDichVu,
    getGoiDichVuById,
    updateGoiDichVu,
    deleteGoiDichVu
}