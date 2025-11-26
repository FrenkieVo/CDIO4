// app/(admin)/users/page.tsx
import { Lock, Unlock, Trash2, UserCog } from "lucide-react";

export default function UsersManagement() {
  const users = [
    {
      name: "Nguyễn Văn A",
      email: "nva@gmail.com",
      username: "nva123",
      status: "active",
      role: "Admin",
      isLocked: false,
    },
    {
      name: "Trần Thị B",
      email: "tran.b@gmail.com",
      username: "ttb321",
      status: "active",
      role: "Admin",
      isLocked: false,
    },
    {
      name: "Lê Minh C",
      email: "le.c@gmail.com",
      username: "leminhc",
      status: "inactive",
      role: "Khách hàng",
      isLocked: true,
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        Quản lý tài khoản
      </h1>

      {/* Bảng */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 font-semibold text-gray-700">Họ và tên</th>
              <th className="text-left px-6 py-4 font-semibold text-gray-700">Email</th>
              <th className="text-left px-6 py-4 font-semibold text-gray-700">Tên đăng nhập</th>
              <th className="text-left px-6 py-4 font-semibold text-gray-700">Trạng thái</th>
              <th className="text-left px-6 py-4 font-semibold text-gray-700">Vai trò</th>
              <th className="text-center px-6 py-4 font-semibold text-gray-700">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-5 font-medium">{user.name}</td>
                <td className="px-6 py-5 text-gray-600">{user.email}</td>
                <td className="px-6 py-5 text-gray-600">{user.username}</td>
                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status === "active" ? "Đang hoạt động" : "Đã khóa"}
                  </span>
                </td>
                <td className="px-6 py-5 font-medium">
                  {user.role === "Admin" ? (
                    <span className="text-blue-600 font-semibold">Admin</span>
                  ) : (
                    "Khách hàng"
                  )}
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-2">
                    {/* Nút Phân quyền */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition shadow">
                      <UserCog className="w-4 h-4" />
                      Phân quyền
                    </button>

                    {/* Nút Khóa / Mở khóa */}
                    <button
                      className={`${
                        user.isLocked
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-orange-500 hover:bg-orange-600"
                      } text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition shadow`}
                    >
                      {user.isLocked ? (
                        <>
                          <Unlock className="w-4 h-4" />
                          Mở
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          Khóa
                        </>
                      )}
                    </button>

                    {/* Nút Xóa */}
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition shadow">
                      <Trash2 className="w-4 h-4" />
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nút chat cố định góc dưới */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-110">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}