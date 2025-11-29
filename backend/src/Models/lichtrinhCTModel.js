const {PrismaClient} = require('../generated/client');
//tạo đối tượng prisma để truy vấn hàm đến database
const prisma = new PrismaClient();

//tao lich trinh
const createLichTrinhCT = async (data) => {
    return await prisma.lichtrinhCT.create({
        data: data
    });
}

//lay lich trinh theo id
const getLichTrinhCTById = async (id) => {
    return await prisma.lichtrinhCT.findUnique({
        where: { id: id }
    });
}

//sua lich trinh
const updateLichTrinhCT = async (id, data) => {
    return await prisma.lichtrinhCT.update({
        where: { id: id },
        data: data
    });
}

//xoa lich trinh
const deleteLichTrinhCT = async (id) => {
    return await prisma.lichtrinhCT.delete({
        where: { id: id }
    });
}

module.exports = {
    createLichTrinhCT,
    getLichTrinhCTById,
    updateLichTrinhCT,
    deleteLichTrinhCT
};