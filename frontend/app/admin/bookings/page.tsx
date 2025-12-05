"use client";

import { MapPin, Users, Calendar, Edit, Trash2, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import Api from "../../Api/Api";
import { useEffect, useState } from "react";

export default function BookingsManagement() {
  const router = useRouter();

  const [packages, setPackages] = useState<any[]>([]);
  const [preview, setPreview] = useState<any>(null);

  function formatDuration(str: string) {
    // Dạng 3n2d → 2 ngày 3 đêm
    const fullMatch = str.match(/(\d+)n(\d+)d/);
    if (fullMatch) {
      const days = fullMatch[1];
      const nights = fullMatch[2];
      return `${days} ngày ${nights} đêm`;
    }

    // Dạng 5n → 5 ngày
    const onlyDaysMatch = str.match(/(\d+)n/);
    if (onlyDaysMatch) {
      const days = onlyDaysMatch[1];
      return `${days} ngày`;
    }

    // Nếu chỉ ghi "3" → 3 ngày
    if (!isNaN(Number(str))) {
      return `${str} ngày`;
    }

    // Không đúng định dạng thì trả lại nguyên bản
    return str;
  }


  useEffect(() => {
    Api.get("goidichvu")
      .then((res) => {
        console.log(" Gói dịch vụ từ API:", res.data);
        setPackages(res.data);
      })
      .catch((err) => console.error(" Lỗi load gói dịch vụ:", err));
  }, []);

  const getImage = (pkg: any) => {
    try {
      if (!pkg?.hinhanh) return "";
      const arr = JSON.parse(pkg.hinhanh);
      if (Array.isArray(arr) && arr.length > 0) {
        return `http://localhost:3000/${arr[0]}`;
      }
      return "";
    } catch (e) {
      console.warn(" Lỗi parse ảnh:", e);
      return "";
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Quản lý gói dịch vụ du lịch</h1>

        <button
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          onClick={() => router.push("/admin/bookings/addgoidichvu")}
        >
          + Thêm gói mới
        </button>
      </div>

      {/* GRID hiển thị gói dịch vụ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
          >
            {/* Ảnh cover */}
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('${getImage(pkg)}')`,
                backgroundColor: "#f2f2f2",
              }}
            ></div>

            <div className="p-6">
              {/* Tên gói */}
              <h3 className="text-2xl font-bold mb-3">{pkg.tengoi}</h3>

              {/* Giá */}
              <p className="text-3xl font-bold text-green-600 mb-4">
                {Number(pkg.gia).toLocaleString()}đ
              </p>

              {/* Thông tin */}
              <div className="space-y-3 text-gray-700 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDuration(pkg.thoiluongngay)}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>{pkg.Diadiem?.tendiadiem ?? "Không có địa điểm"}</span>
                </div>

                <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-600">
                  Còn lại: {pkg.sochoconlai ?? 0} chỗ
                </span>
              </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-gray-100 hover:bg-gray-200 py-3 rounded-lg flex items-center justify-center gap-2 font-medium"
                  onClick={() => setPreview(pkg)}
                >
                  <Eye className="w-5 h-5" /> Xem
                </button>

                <button
                  className="flex-1 bg-blue-100 text-blue-600 hover:bg-blue-200 py-3 rounded-lg
                  flex items-center justify-center gap-2 font-medium"
                  onClick={() => router.push(`/admin/bookings/editgoidichvu/${pkg.id}`)}
                >
                  <Edit className="w-5 h-5" /> Sửa
                </button>


                <button
                  onClick={() => router.push(`/admin/bookings/deletegoidichvu/${pkg.id}`)}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Xóa
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
      {preview && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center p-6 z-50">
          
          <div className="bg-white w-[55%] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-6 relative">

            {/* nút đóng */}
            <button
              className="absolute top-3 right-4 text-red-500 text-xl"
              onClick={() => setPreview(null)}
            >
              ✖
            </button>

            {/* ảnh */}
            {preview.hinhanh && (
              <img
                src={`http://localhost:3000/${JSON.parse(preview.hinhanh)[0]}`}
                className="w-full h-64 object-cover rounded-lg shadow mb-4"
              />
            )}

            <h2 className="text-3xl font-bold mb-2">{preview.tengoi}</h2>
            <p className="text-gray-600 mb-3">{preview.Diadiem?.tendiadiem}</p>

            <div className="border-t mb-4"></div>

            <p><strong>📍 Địa điểm:</strong> {preview.Diadiem?.tendiadiem}</p>
            <p><strong>📅 Thời lượng:</strong> {formatDuration(preview.thoiluongngay)}</p>
            <p><strong>👥 Số chỗ còn lại:</strong> {preview.sochoconlai}</p>
            <p><strong>💰 Giá:</strong> {Number(preview.gia).toLocaleString()}đ</p>
            <p><strong>🔥 Trạng thái:</strong> 
              {preview.trangthai === "active" ? " Đang mở" : " Đã đóng"}
            </p>

            <div className="border-t my-4"></div>

            <h3 className="font-semibold mb-2">📸 Danh sách hình ảnh</h3>
            <div className="grid grid-cols-3 gap-3">
              {preview.hinhanh && JSON.parse(preview.hinhanh).map((img: string, i:number) => (
                <img
                  key={i}
                  src={`http://localhost:3000/${img}`}
                  className="w-full h-28 object-cover rounded-lg border"
                />
              ))}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
