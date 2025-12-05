const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

const createBooking = async (data) => {
    return await prisma.booking.create({
        data: {
            hoten: data.hoten,
            sodienthoai: data.sodienthoai,
            soluong: parseInt(data.soluong),
            sotien: parseInt(data.sotien),
            tour_id: parseInt(data.tour_id),
            user_id: data.user_id ? parseInt(data.user_id) : null,
        }
    });
};

const getAllBooking = async () => {
    return await prisma.booking.findMany({
        include: {
            Goidichvu:{
                include:{
                    Diadiem:true
                }
            }, // Lấy tên tour
            User: true   // Lấy thông tin người đặt
        },
        orderBy: { id: "desc" }
    });
};

const updateBooking = async (id, data) => {
    return await prisma.booking.update({
        where: { id },
        data
    });
};

const deleteBooking = async (id) => {
    return await prisma.booking.delete({
        where: { id },
    });
};

const getBookingById = async (id) => {
    return await prisma.booking.findUnique({
        where: { id },
        include: {
            Goidichvu: true,
            User: true
        }
    });
};

const getBookingByUser = async (user_id) => {
  return await prisma.booking.findMany({
    where: { user_id: Number(user_id) },
    include: {
      Goidichvu: {
        include: {
          Diadiem: true
        }
      },
      User: true
    },
    orderBy: { createdAt: "desc" }
  });
};


module.exports = {
    createBooking,
    getAllBooking,
    deleteBooking,
    updateBooking,
    getBookingById,
    getBookingByUser
};
