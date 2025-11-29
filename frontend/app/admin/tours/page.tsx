// app/(admin)/tours/page.tsx
import { Edit, Trash2, Eye } from "lucide-react";

export default function ToursManagement() {
  const tours = [
    { id: 1, name: "Tour Đà Lạt 3N2Đ", price: "5.900.000đ", duration: "3 ngày 2 đêm", slots: 25, booked: 18, status: "Đang mở" },
    { id: 2, name: "Tour Phú Quốc 4N3Đ", price: "12.500.000đ", duration: "4 ngày 3 đêm", slots: 20, booked: 20, status: "Hết chỗ" },
    { id: 3, name: "Tour Hà Nội - Sapa", price: "7.800.000đ", duration: "5 ngày 4 đêm", slots: 30, booked: 12, status: "Đang mở" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Quản lý tour</h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          + Thêm tour mới
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Tên tour</th>
              <th className="px-6 py-4 text-left">Giá</th>
              <th className="px-6 py-4 text-left">Thời gian</th>
              <th className="px-6 py-4 text-left">Số chỗ</th>
              <th className="px-6 py-4 text-left">Đã đặt</th>
              <th className="px-6 py-4 text-left">Trạng thái</th>
              <th className="px-6 py-4 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-5 font-medium">{tour.name}</td>
                <td className="px-6 py-5 font-bold text-blue-600">{tour.price}</td>
                <td className="px-6 py-5">{tour.duration}</td>
                <td className="px-6 py-5 text-center">{tour.slots}</td>
                <td className="px-6 py-5 text-center font-medium">{tour.booked}</td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${tour.status === "Đang mở" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {tour.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded"><Eye className="w-5 h-5" /></button>
                    <button className="text-green-600 hover:bg-green-50 p-2 rounded"><Edit className="w-5 h-5" /></button>
                    <button className="text-red-600 hover:bg-red-50 p-2 rounded"><Trash2 className="w-5 h-5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}