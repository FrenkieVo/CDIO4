const {PrismaClient} = require('../generated/client');
//tạo đối tượng prisma để truy vấn hàm đến database
const prisma = new PrismaClient();

//tạo địa điểm
const createDiaDiem = async (data) => {
    return await prisma.diadiem.create({
        data:{
            tendiadiem   : data.tendiadiem,
            mota         : data.mota,
            diachi       : data.diachi,
            hinhanh     : data.hinhanh
        }
    });
}

//lấy thông tin địa điểm
const getDiaDiem = async () => {
    return await prisma.diadiem.findMany({
        //lấy những trường hiện ra
        select:{
            tendiadiem   : true,
            mota         : true,
            vitri        : true,
            hinhanh     : true
        }
    })
}

//lấy thông tin địa điểm theo id
const getDiaDiemById = async (id) => {
    return await prisma.diadiem.findUnique({
        where: {id}
    })
}

//sửa thông tin địa điểm
const updateDiaDiem = async (id,data) => {
    return await prisma.diadiem.update({
        where: {id},
        data
    })
}

//xoa địa điểm
const deleteDiaDiem = async (id) => {
    return await prisma.diadiem.delete({
        where: {id},
    })
}
module.exports = {
    createDiaDiem,
    getDiaDiem,
    getDiaDiemById ,
    updateDiaDiem,
    deleteDiaDiem
}