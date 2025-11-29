// app/(admin)/reviews/page.tsx
import { Star, MessageSquare, Trash2, Eye } from "lucide-react";

export default function ReviewsManagement() {
  const reviews = [
    { id: 1, user: "Nguyễn Văn A", tour: "Tour Đà Lạt 3N2Đ", rating: 5, comment: "Rất tuyệt vời, hướng dẫn viên nhiệt tình!", date: "25/11/2025" },
    { id: 2, user: "Trần Thị B", tour: "Tour Phú Quốc", rating: 4, comment: "Đẹp nhưng ăn uống hơi ít món", date: "24/11/2025" },
    { id: 3, user: "Lê Minh C", tour: "Tour Hà Nội - Sapa", rating: 3, comment: "Xe hơi cũ, cần cải thiện", date: "23/11/2025" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Quản lý góp ý</h1>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Khách hàng</th>
              <th className="px-6 py-4 text-left">Tour</th>
              <th className="px-6 py-4 text-left">Đánh giá</th>
              <th className="px-6 py-4 text-left">Nội dung</th>
              <th className="px-6 py-4 text-left">Ngày</th>
              <th className="px-6 py-4 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-5 font-medium">{r.user}</td>
                <td className="px-6 py-5">{r.tour}</td>
                <td className="px-6 py-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-5 max-w-xs truncate">{r.comment}</td>
                <td className="px-6 py-5 text-gray-600">{r.date}</td>
                <td className="px-6 py-5 text-center">
                  <button className="text-blue-600 hover:bg-blue-50 p-2 rounded"><Eye className="w-5 h-5" /></button>
                  <button className="text-red-600 hover:bg-red-50 p-2 rounded ml-2"><Trash2 className="w-5 h-5" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}