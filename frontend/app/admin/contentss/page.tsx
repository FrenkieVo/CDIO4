"use client";

import { useEffect, useState } from "react";
import Api from "../../Api/Api";

export default function ContentsManagement() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    Api.get("gopy")
      .then(res => setFeedbacks(res.data))
      .catch(() => alert("Lỗi tải danh sách góp ý"));
  }, []);

  return (
    <div className="p-8">
      
      <h1 className="text-3xl font-bold mb-8">Quản lý góp ý khách hàng</h1>

      <div className="space-y-6">
        {feedbacks.length === 0 && (
          <p className="text-gray-600 text-lg">Chưa có góp ý nào.</p>
        )}

        {feedbacks.map((fb, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition"
          >
            <div className="flex items-center gap-6">

              {/* Avatar mặc định */}
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center text-gray-500 font-bold text-xl">
                {fb.hoten?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  {fb.hoten}
                </h3>

                <div className="flex gap-6 text-gray-600">
                  <span>Email: {fb.email}</span>
                  <span>Điện thoại: {fb.sodienthoai}</span>
                </div>

                <div className="mt-2 text-yellow-500 font-semibold">
                  ⭐ {fb.rating}/5 sao
                </div>

                <div className="mt-2 text-gray-700">
                  <span className="font-semibold">Góp ý:</span> {fb.gopythem || "Không có"}
                </div>
                
                <div className="text-gray-500 text-sm mt-2">
                  Ngày gửi: {new Date(fb.createdAt).toLocaleString("vi-VN")}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200">
                Xem chi tiết
              </button>
              <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
