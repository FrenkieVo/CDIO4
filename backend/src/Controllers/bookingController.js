const bookingModel = require("../Models/bookingModel");

const createBooking = async (req, res) => {
    try {
        const data = req.body;
        const result = await bookingModel.createBooking(data);
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


module.exports = { 
    createBooking, 
    getAllBooking ,
    confirmBooking,
    deleteBooking,
    getBookingById
};

