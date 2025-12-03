"use client";

import { useEffect, useState } from "react";
import Api from "../../Api/Api";
import { Edit, Trash2, Eye, Check,CheckCircle } from "lucide-react";

export default function ToursManagement() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);


  // ⬆ Lấy danh sách booking
  const loadBookings = () => {
    Api.get("booking")
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.error("Lỗi load booking:", err));
  };

  useEffect(() => {
    loadBookings();
  }, []);

  // ⬆ Xem chi tiết
  const handleView = (id: number) => {
    Api.get(`booking/${id}`)
      .then(res => {
        setSelectedBooking(res.data);
        setShowModal(true);
      })
      .catch(() => alert("Không xem được chi tiết"));
  };


  // ⬆ Xác nhận booking
  const handleConfirm = (id: number) => {
    if (!confirm("Xác nhận booking này?")) return;

    Api.put(`booking/confirm/${id}`)
      .then(() => {
        alert("Xác nhận thành công!");
        loadBookings();
      })
      .catch(() => alert("Xác nhận thất bại"));
  };

  // ⬆ Xóa booking
  const handleDelete = (id: number) => {
    if (!confirm("Bạn có chắc muốn xóa?")) return;

    Api.delete(`booking/${id}`)
      .then(() => {
        alert("Xóa thành công!");
        loadBookings();
      })
      .catch(() => alert("Xóa thất bại"));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Quản lý Booking</h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-center w-[180px]">Khách hàng</th>
              <th className="px-6 py-4 text-center w-[180px]">Tour</th>
              <th className="px-6 py-4 text-center w-[140px]">SĐT</th>
              <th className="px-6 py-4 text-center w-[100px]">Số vé</th>
              <th className="px-6 py-4 text-center w-[140px]">Tổng tiền</th>
              <th className="px-6 py-4 text-center w-[140px]">Ngày đặt</th>
              <th className="px-6 py-4 text-center w-[120px]">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-5 text-center">{b.hoten}</td>
                <td className="px-6 py-5 text-center">{b.Goidichvu?.tengoi}</td>
                <td className="px-6 py-5 text-center">{b.sodienthoai}</td>
                <td className="px-6 py-5 text-center">{b.soluong}</td>

                <td className="px-6 py-5 text-center font-bold text-blue-600">
                  {b.sotien.toLocaleString()}đ
                </td>

                <td className="px-6 py-5 text-center">
                  {new Date(b.createdAt).toLocaleDateString("vi-VN")}
                </td>

                <td className="px-6 py-5 text-center">
                  <div className="flex justify-center gap-3">

                    {/* XEM CHI TIẾT */}
                    <button
                      onClick={() => handleView(b.id)}
                      className="text-blue-600 hover:bg-blue-50 p-2 rounded"
                    >
                      <Eye className="w-5 h-5" />
                    </button>

                    {/* XÁC NHẬN */}
                    {b.status !== "confirmed" ? (
                      <button
                        onClick={() => handleConfirm(b.id)}
                        className="text-green-600 hover:bg-green-50 p-2 rounded"
                      >
                        <CheckCircle className="w-6 h-6" />
                      </button>
                    ) : (
                      <button
                        disabled
                        className="text-green-700 bg-green-100 p-2 rounded cursor-not-allowed"
                      >
                        <CheckCircle className="w-6 h-6" />
                      </button>
                    )}

                    {/* XÓA */}
                    <button
                      onClick={() => handleDelete(b.id)}
                      className="text-red-600 hover:bg-red-50 p-2 rounded"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                  </div>
                </td> 
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL XEM CHI TIẾT */}
      {showModal && selectedBooking && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-white w-[680px] p-10 rounded-3xl shadow-2xl border border-gray-200 relative animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-black text-xl transition"
            >
              ✖
            </button>

            {/* HEADER */}
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold text-gray-900">Chi tiết Booking</h2>
              <p className="text-gray-500 mt-2 text-lg">Thông tin chi tiết đặt tour</p>
            </div>

            {/* BODY */}
            <div className="grid grid-cols-2 gap-8 text-gray-800 text-lg">

              <div className="space-y-5">
                <div>
                  <p className="text-gray-500 text-base">Khách hàng</p>
                  <p className="font-semibold text-xl">{selectedBooking.hoten}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-base">User ID</p>
                  <p className="font-semibold text-xl">{selectedBooking.user_id || "Không có"}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-base">Số điện thoại</p>
                  <p className="font-semibold text-xl">{selectedBooking.sodienthoai}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-base">Số vé</p>
                  <p className="font-semibold text-xl">{selectedBooking.soluong}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-base">Ngày đặt</p>
                  <p className="font-semibold text-xl">
                    {new Date(selectedBooking.createdAt).toLocaleDateString("vi-VN")}
                  </p>
                </div>
              </div>

              {/* Cột 2 */}
              <div className="space-y-5">
                <div>
                  <p className="text-gray-500 text-base">Tour ID</p>
                  <p className="font-semibold text-xl">{selectedBooking.tour_id}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-base">Tên tour</p>
                  <p className="font-semibold text-xl">{selectedBooking.Goidichvu?.tengoi}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-base">Địa điểm</p>
                  <p className="font-semibold text-xl">
                    {selectedBooking.Goidichvu?.Diadiem?.tendiadiem}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-base">Thời lượng</p>
                  <p className="font-semibold text-xl">{selectedBooking.Goidichvu?.thoiluongngay}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-base">Giá tour</p>
                  <p className="font-bold text-green-600 text-2xl">
                    {selectedBooking.Goidichvu?.gia.toLocaleString()}đ
                  </p>
                </div>
              </div>

            </div>

            {/* TOTAL */}
            <div className="mt-8 p-5 rounded-xl bg-gray-50 border shadow-inner flex justify-between items-center">
              <span className="text-gray-700 font-semibold text-xl">Tổng tiền:</span>
              <span className="font-extrabold text-blue-600 text-3xl">
                {selectedBooking.sotien.toLocaleString()}đ
              </span>
            </div>

            {/* FOOTER */}
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-10 py-3 rounded-xl bg-gray-800 text-white hover:bg-black text-xl font-semibold transition"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
