// app/(admin)/users/page.tsx
"use client";
import { useEffect, useState } from "react";
import Api from "../../Api/Api";
import { Lock, Unlock, Trash2, UserCog } from "lucide-react";
export default function UsersManagement() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const u = sessionStorage.getItem("user");
      if (u) setCurrentUser(JSON.parse(u));
    }
  }, []);
  
  // HÀM TẢI DANH SÁCH USER
  const loadUsers = () => {
    Api.get("user")
      .then(res => {
        console.log("Users:", res.data);
        setUsers(res.data);
      })
      .catch(err => console.error("Lỗi load users:", err));
  };

  // GỌI LẦN ĐẦU
  useEffect(() => {
    loadUsers();
  }, []);


  const handleToggleLock = (id: number) => {
    Api.put(`user/lock/${id}`, { currentUserId: currentUser.id })
      .then(() => loadUsers())
      .catch(err => alert(err.response?.data?.message));
  };

  const handleDelete = (id: number) => {
    if (!confirm("Bạn có chắc chắn muốn xóa tài khoản này không?")) return;

    Api.put(`user/${id}/delete`)
      .then(() => {
        alert("Tài khoản đã bị vô hiệu hóa!");
        loadUsers();
      })
      .catch(err => {
        console.error(err);
        alert("Không thể vô hiệu hóa tài khoản!");
      });
  };


    return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Quản lý tài khoản</h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <table className="w-full text-[15px]">
          <thead className="bg-gray-100 border-b font-medium">
            <tr>
              <th className="px-6 py-4 text-left w-[180px]">Họ và tên</th>
              <th className="px-6 py-4 text-left w-[240px]">Email</th>
              <th className="px-6 py-4 text-left w-[160px]">Tên đăng nhập</th>
              <th className="px-6 py-4 text-left w-[150px]">Số điện thoại</th>
              <th className="px-6 py-4 text-left w-[200px]">Địa chỉ</th>
              <th className="px-6 py-4 text-left w-[160px]">Trạng thái</th>
              <th className="px-6 py-4 text-left w-[120px]">Vai trò</th>
              <th className="px-6 py-4 text-center w-[200px]">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u: any, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                
                <td className="px-6 py-5 whitespace-nowrap">{u.hoten}</td>
                <td className="px-6 py-5 whitespace-nowrap">{u.email}</td>
                <td className="px-6 py-5 whitespace-nowrap">{u.email?.split("@")[0]}</td>
                <td className="px-6 py-5 whitespace-nowrap">{u.sodienthoai || "Chưa cập nhật"}</td>
                <td className="px-6 py-5 whitespace-nowrap">{u.diachi || "Chưa cập nhật"}</td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-[14px] font-medium ${
                      u.trangthai === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {u.trangthai === "active" ? "Đang hoạt động" : "Đã khóa"}
                  </span>
                </td>

                <td className="px-6 py-5 whitespace-nowrap font-semibold">
                  {u.Role?.tenrole || "Không có"}
                </td>

                <td className="px-6 py-5 text-center whitespace-nowrap">
                  <div className="flex justify-center gap-2">

                    {/* PHÂN QUYỀN */}
                    <button className="bg-blue-500 text-white px-3.5 py-2 rounded-lg flex items-center gap-1 hover:bg-blue-600 transition">
                      <UserCog size={18} />
                      <span>Quyền</span>
                    </button>

                    {/* KHÓA / MỞ */}
                    {u.isLocked ? (
                      <button
                        onClick={() => handleToggleLock(u.id)}
                        className="bg-green-500 text-white px-3.5 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600 transition"
                      >
                        <Unlock size={18} />
                        <span>Mở</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleToggleLock(u.id)}
                        disabled={u.trangthai === "active" || u.trangthai === "deleted"}
                        className={`px-3.5 py-2 rounded-lg flex items-center gap-1 text-white transition ${
                          u.trangthai === "active" || u.trangthai === "deleted"
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-orange-500 hover:bg-orange-600"
                        }`}
                      >
                        <Lock size={18} />
                        <span>Khóa</span>
                      </button>
                    )}

                    {/* XÓA */}
                    <button
                      onClick={() => handleDelete(u.id)}
                      disabled={u.trangthai === "deleted"}
                      className={`px-3.5 py-2 rounded-lg flex items-center gap-1 text-white transition ${
                        u.trangthai === "deleted"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      <Trash2 size={18} />
                      <span>Xóa</span>
                    </button>

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

