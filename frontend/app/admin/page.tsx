// app/(admin)/page.tsx
export default function AdminDashboard() {
  const today = new Date().toLocaleDateString("vi-VN");
  const stats = [3, 7, 3, 3, 3];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Chào mừng, Admin!</h1>
      <p className="text-gray-600 mb-10">Tổng quan hoạt động du lịch hôm nay, {today}.</p>

      {/* 5 ô xám */}
      <div className="flex flex-wrap gap-6 mb-12">
        {["Tài khoản", "Góp ý", "Tour", "Gói dịch vụ", "Nội dung"].map((label, i) => (
          <div key={i} className="bg-gray-200 rounded-2xl px-10 py-6 flex items-center gap-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-4xl font-bold">{stats[i]}</p>
              <p className="text-lg">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Truy cập nhanh */}
      <div>
        <h3 className="text-xl font-bold text-blue-600 mb-4">Truy cập nhanh</h3>
        <div className="space-x-8 text-lg">
          <a href="/admin/users" className="text-gray-700 hover:underline">Quản lý tài khoản</a>
          <a href="/admin/comments" className="text-gray-700 hover:underline">Quản lý góp ý</a>
          <a href="/admin/tours" className="text-gray-700 hover:underline">Quản lý tour</a>
          <a href="/admin/bookings" className="text-gray-700 hover:underline">Quản lý gói dịch vụ du lịch</a>
          <a href="/admin/contentss" className="text-gray-700 hover:underline">Quản lý nội dung</a>
        </div>
      </div>
    </div>
  );
}