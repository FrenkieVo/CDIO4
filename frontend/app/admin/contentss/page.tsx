// app/(admin)/contents/page.tsx
export default function ContentsManagement() {
  const contents = [
    { title: "Top 10 địa điểm du lịch đẹp nhất Việt Nam 2025", category: "Tin tức", views: 12500, date: "20/11/2025" },
    { title: "Kinh nghiệm du lịch Phú Quốc tự túc", category: "Cẩm nang", views: 8900, date: "18/11/2025" },
    { title: "Ưu đãi tour Tết 2026 – Giảm tới 30%", category: "Khuyến mãi", views: 15200, date: "15/11/2025" },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Quản lý nội dung du lịch</h1>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">+ Viết bài mới</button>
      </div>
      <div className="space-y-6">
        {contents.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition">
            <div className="flex items-center gap-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <div className="flex gap-6 text-gray-600">
                  <span>Danh mục: {c.category}</span>
                  <span>Lượt xem: {c.views.toLocaleString()}</span>
                  <span>Ngày đăng: {c.date}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200">Sửa</button>
              <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">Xóa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}