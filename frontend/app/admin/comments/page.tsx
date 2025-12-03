"use client";

import { useEffect, useState } from "react";
import { Star, Eye, Trash2, FileDown } from "lucide-react";
import Api from "../../Api/Api";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function ReviewsManagement() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [filter, setFilter] = useState(0);

  // Gọi API lấy góp ý
  useEffect(() => {
    Api.get("gopy")
      .then((res) => {
        console.log("Dữ liệu góp ý:", res.data);
        setReviews(res.data);
      })
      .catch((err) => console.error("Lỗi load góp ý:", err));
  }, []);

  // Xóa góp ý
  const deleteReview = (id: number) => {
    if (!confirm("Bạn có chắc muốn xóa góp ý này?")) return;

    Api.delete(`gopy/${id}`)
      .then(() => {
        alert("Xóa thành công!");
        setReviews((prev) => prev.filter((x) => x.id !== id));
      })
      .catch(() => alert("Lỗi xóa góp ý!"));
  };

  // Lọc theo sao
  const filteredReviews =
    filter === 0 ? reviews : reviews.filter((r) => r.rating === filter);

  // Xuất Excel
  const exportExcel = () => {
    const data = reviews.map((r) => ({
      "Họ tên": r.hoten,
      Email: r.email,
      "Số điện thoại": r.sodienthoai,
      "Đánh giá": r.rating,
      "Nội dung góp ý": r.gopythem,
      "Ngày gửi": new Date(r.createdAt).toLocaleDateString("vi-VN"),
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "GopY");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(file, "DanhSachGopY.xlsx");
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Quản lý góp ý</h1>

        <button
          onClick={exportExcel}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 flex items-center gap-2"
        >
          <FileDown className="w-5 h-5" /> Xuất Excel
        </button>
      </div>

      {/* Bộ lọc */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-gray-600">Lọc theo đánh giá:</span>
        <select
          value={filter}
          onChange={(e) => setFilter(Number(e.target.value))}
          className="px-3 py-2 border rounded-md"
        >
          <option value={0}>Tất cả</option>
          <option value={5}>5 sao</option>
          <option value={4}>4 sao</option>
          <option value={3}>3 sao</option>
          <option value={2}>2 sao</option>
          <option value={1}>1 sao</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Khách hàng</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Số ĐT</th>
              <th className="px-6 py-4 text-left">Đánh giá</th>
              <th className="px-6 py-4 text-left">Nội dung</th>
              <th className="px-6 py-4 text-left">Ngày</th>
              <th className="px-6 py-4 text-center">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {filteredReviews.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
                  Không tìm thấy góp ý nào
                </td>
              </tr>
            ) : (
              filteredReviews.map((r) => (
                <tr key={r.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-5 font-medium">{r.hoten}</td>
                  <td className="px-6 py-5">{r.email}</td>
                  <td className="px-6 py-5">{r.sodienthoai}</td>

                  <td className="px-6 py-5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < r.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </td>

                  <td className="px-6 py-5 max-w-xs truncate">
                    {r.gopythem || "—"}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {new Date(r.createdAt).toLocaleDateString("vi-VN")}
                  </td>

                  <td className="px-6 py-5 text-center">
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded">
                      <Eye className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => deleteReview(r.id)}
                      className="text-red-600 hover:bg-red-50 p-2 rounded ml-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
