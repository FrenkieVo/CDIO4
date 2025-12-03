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
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left">Họ và tên</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Tên đăng nhập</th>
              <th className="px-6 py-4 text-left">Trạng thái</th>
              <th className="px-6 py-4 text-left">Vai trò</th>
              <th className="px-6 py-4 text-center">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u: any, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-5">{u.hoten}</td>
                <td className="px-6 py-5">{u.email}</td>
                <td className="px-6 py-5">{u.email?.split("@")[0]}</td>

                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      u.trangthai === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {u.trangthai === "active" ? "Đang hoạt động" : "Đã khóa"}
                  </span>
                </td>

                <td className="px-6 py-5 font-medium">
                  {u.Role?.tenrole || "Không có"}
                </td>

                <td className="px-6 py-5 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <UserCog size={16} /> Phân quyền
                    </button>

                    {u.isLocked ? (
                      <button onClick={() => handleToggleLock(u.id)} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        <Unlock size={16} /> Mở khóa
                      </button>
                    ) : (
                      <button
                        onClick={() => handleToggleLock(u.id)}
                        disabled={u.trangthai === "active" || u.trangthai === "deleted"}
                        className={`px-4 py-2 rounded-lg text-white ${
                          u.trangthai === "active" || u.trangthai === "deleted"
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-orange-500 hover:bg-orange-600"
                        }`}
                      >
                        <Lock size={16} /> Khóa
                      </button>

                    )}
                    <button
                      onClick={() => handleDelete(u.id)}
                      disabled={u.trangthai === "deleted"}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 text-white ${
                        u.trangthai === "deleted"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      <Trash2 size={16} /> Xóa
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

