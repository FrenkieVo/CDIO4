"use client";

import { useRouter, useParams } from "next/navigation";
import Api from "../../../../Api/Api";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function DeleteGoiDichVu() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Bạn chắc chắn muốn xóa gói dịch vụ này?")) return;

    setLoading(true);
    try {
      await Api.delete(`goidichvu/${id}`);

      alert("Xóa thành công!");
      router.push("/admin/bookings");
    } catch (err: any) {
      console.error("Lỗi:", err);
      alert("Không thể xóa! Có thể gói này đang được sử dụng.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="relative w-[550px] p-8 rounded-3xl bg-white shadow-2xl border border-gray-200">

        {/* Tiêu đề */}
        <h1 className="text-2xl font-bold text-red-600 text-center mb-5 flex justify-center gap-2">
          <Trash2 className="w-7 h-7" />
          Xóa gói dịch vụ
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Bạn có chắc chắn muốn xóa gói dịch vụ này?<br />
          Hành động này không thể hoàn tác.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => router.push("/admin/bookings")}
            className="flex-1 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Hủy
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            {loading ? "Đang xóa..." : "Xóa ngay"}
          </button>
        </div>
      </div>
    </div>
  );
}
