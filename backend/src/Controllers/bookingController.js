const bookingModel = require("../Models/bookingModel");
const goiDichVuModel = require("../Models/goidichvuModel");

const createBooking = async (req, res) => {
    try {
        const data = req.body;
        // 1. Lấy tour để kiểm tra số chỗ còn lại
        const tour = await goiDichVuModel.getGoiDichVuById(data.tour_id);
        if (!tour) return res.status(404).json({ message: "Tour không tồn tại" });

        // 2. Nếu hết chỗ → không cho đặt
        if (tour.sochoconlai < data.soluong) {
        return res.status(400).json({
            message: `Chỉ còn ${tour.sochoconlai} chỗ, không đặt được ${data.soluong} chỗ`
        });
        }

        const result = await bookingModel.createBooking(data);

        let newRemain = tour.sochoconlai - parseInt(data.soluong);
            if (newRemain < 0) newRemain = 0;

            await goiDichVuModel.updateGoiDichVu(data.tour_id, {
                sochoconlai: newRemain
            });

            res.status(201).json(result);
        } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Booking thất bại", error: err });
    }
};

const getAllBooking = async (req, res) => {
    try {
        const result = await bookingModel.getAllBooking();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: "Lấy danh sách booking thất bại", error: err });
    }
};

const getBookingById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const booking = await bookingModel.getBookingById(id);
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: "Lấy chi tiết thất bại" });
    }
};

const confirmBooking = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await bookingModel.updateBooking(id, { status: "confirmed" });

        res.json({ message: "Xác nhận thành công", booking: result });
    } catch (err) {
        res.status(500).json({ message: "Lỗi xác nhận booking", error: err });
    }
};

const deleteBooking = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await bookingModel.deleteBooking(id);
        res.json({ message: "Xóa booking thành công" });
    } catch (err) {
        res.status(500).json({ message: "Lỗi xóa booking", error: err });
    }
};

//lấy lịch theo tour của user
const getBookingByUser = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const bookings = await bookingModel.getBookingByUser(user_id);

    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi lấy lịch đặt tour", error: err });
  }
};

module.exports = { 
    createBooking, 
    getAllBooking ,
    confirmBooking,
    deleteBooking,
    getBookingById,
    getBookingByUser
};

