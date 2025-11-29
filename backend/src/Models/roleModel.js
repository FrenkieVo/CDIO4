//import class prismaclient từ thư viện @prisma/client
const {PrismaClient} = require('../generated/client');
//tạo đối tượng prisma để truy vấn hàm đến database
const prisma = new PrismaClient();

//tạo vai trò
const createRole = async (data) => {
    return await prisma.role.create({data});
}

//lấy thông tin vai trò theo id
const getRoleById = async (id) => {
    return await prisma.role.findUnique({
        where: {id}
    })
}
//sửa thông tin vai trò
const updateRole = async (id,data) => {
    return await prisma.role.update({
        where: {id},
        data
    })
}
//xoa vai tro
const deleteRole = async (id) => {
    return await prisma.role.delete({
        where: {id},
    })
}
module.exports = {
    createRole,
    getRoleById,
    updateRole,
    deleteRole
};