const {PrismaClient} = require('../generated/client');
const prisma = new PrismaClient();

//tạo lich trình mẫu
const createLichTrinhMau = async (req, res) => {
    a