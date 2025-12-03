const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

const createGopY = async (data) => {
    return await prisma.gopy.create({
        data: {
            hoten: data.hoten,
            email: data.email,
            sodienthoai: data.sodienthoai,

            rating: parseInt(data.rating), // chuyển về số

            danhgiachitiet: data.danhgiachitiet,  // JSON auto

            gopythem: data.gopythem || null,
        }
    });
};

const getGopyList = async () => {
    return await prisma.gopy.findMany();
}

const deleteGopY = async (id) => {
  return await prisma.gopy.delete({
    where: { id: Number(id) }
  });
};

module.exports = {
  createGopY,
  getGopyList,
  deleteGopY
};

