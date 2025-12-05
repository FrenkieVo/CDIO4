const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

const createNoiDung = async (data) => prisma.noidung.create({ data });

const getAllNoiDung = async () =>
  prisma.noidung.findMany({ orderBy: { createdAt: 'desc' }});

const getNoiDungByDanhMuc = async (slug) =>
  prisma.noidung.findMany({
    where: { danhMuc: slug, trangThai: true },
    orderBy: { createdAt: 'desc' },
  });

const getDetail = async (id) =>
  prisma.noidung.findUnique({ where: { id: Number(id) }});

const deleteNoiDung = async (id) =>
  prisma.noidung.delete({ where: { id: Number(id) }});

const updateNoiDung = async (id, data) => {
  return prisma.noidung.update({
    where: { id: Number(id) },
    data
  });
};

module.exports = {
  createNoiDung,
  getAllNoiDung,
  getNoiDungByDanhMuc,
  getDetail,
  deleteNoiDung,
  updateNoiDung
};
