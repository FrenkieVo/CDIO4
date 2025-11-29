// app/(admin)/bookings/page.tsx
import { MapPin, Users, Calendar, Edit, Trash2, Eye } from "lucide-react";

export default function BookingsManagement() {
  const packages = [
    { id: 1, name: "Gói VIP Đà Lạt - Khách sạn 5 sao", price: "15.900.000đ", duration: "3N2Đ", people: "2-4 người", includes: "Xe VIP + Ăn 5 bữa + HDV riêng" },
    { id: 2, name: "Gói Tiết kiệm Phú Quốc", price: "8.500.000đ", duration: "4N3Đ", people: "1-2 người", includes: "Xe đưa đón + Ăn sáng + Vé cáp treo" },
    { id: 3, name: "Gói Gia đình Hà Nội - Hạ Long", price: "22.000.000đ", duration: "5N4Đ", people: "4-6 người", includes: "Du thuyền 5 sao + BBQ + Vé tham quan" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Quản lý gói dịch vụ du lịch</h1>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
          + Thêm gói mới
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 h-48 flex items-center justify-center text-white text-4xl font-bold">
              VIP
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">{pkg.price}</p>
              
              <div className="space-y-3 text-gray-700 mb-6">
                <div className="flex items-center gap-3"><Calendar className="w-5 h-5" /> <span>{pkg.duration}</span></div>
                <div className="flex items-center gap-3"><Users className="w-5 h-5" /> <span>{pkg.people}</span></div>
                <div className="text-sm bg-gray-100 p-3 rounded-lg">{pkg.includes}</div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
                  <Eye className="w-5 h-5" /> Xem
                </button>
                <button className="flex-1 bg-blue-100 text-blue-600 hover:bg-blue-200 py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
                  <Edit className="w-5 h-5" /> Sửa
                </button>
                <button className="bg-red-100 text-red-600 hover:bg-red-200 p-3 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}