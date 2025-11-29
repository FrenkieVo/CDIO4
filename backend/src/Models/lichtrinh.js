const {PrismaClient} = require('../generated/client');
//tạo đối tượng prisma để truy vấn hàm đến database
const prisma = new PrismaClient();

//tao lich trinh
const createLichTrinh = async (data) => {
    return await prisma.lichtrinh.create({
        data: data
    });
}

//lay tat ca lich trinh
const getAllLichTrinh = async () => {
    return await prisma.lichtrinh.findMany();
}

//lay lich trinh theo id
const getLichTrinhById = async (id) => {
    return await prisma.lichtrinh.findUnique({
        where: { id: id }
    });
}

//sua lich trinh
const updateLichTrinh = async (id, data) => {
    return await prisma.lichtrinh.update({
        where: { id: id },
        data: data
    });
}

//xoa lich trinh
const deleteLichTrinh = async (id) => {
    return await prisma.lichtrinh.delete({
        where: { id: id }
    });
}

module.exports = {
    createLichTrinh,
    getLichTrinhById,
    updateLichTrinh,
    deleteLichTrinh
};