"use client";
import { useState, useEffect } from "react";
import Api from "@/app/Api/Api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const [tab, setTab] = useState("info");
  const [user, setUser] = useState<any>(null);
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    const u = sessionStorage.getItem("user");
    if (u) {
      const usr = JSON.parse(u);
      setUser(usr);

      Api.get(`booking/user/${usr.id}`).then(res => setBookings(res.data));
    }
  }, []);

    const handleSave = () => {
        if (!user.sodienthoai) {
            alert("Vui lòng nhập số điện thoại");
            return;
        }

        if (user.sodienthoai.length !== 10) {
            alert("Số điện thoại phải đúng 10 số");
            return;
        }

        Api.put(`user/${user.id}`, user)
            .then(res => {
            alert("Cập nhật thành công");

            // cập nhật lại session đúng user mới từ BE
            sessionStorage.setItem("user", JSON.stringify(res.data));

            // cập nhật state để hiển thị ngay
            setUser({
                ...res.data,
                hoten: "",
                sodienthoai: "",
                diachi: ""
            });
            })
            .catch(() => alert("Có lỗi, vui lòng thử lại"));
    };


  
  return (
    <>
      <Navbar />

      <div className="mt-[150px] max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-6 mb-10">
            <button
                onClick={() => setTab("info")}
                className={`px-6 py-2 rounded-md border transition font-medium
                ${tab === "info" 
                    ? "bg-[#d4b872] text-black border-[#d4b872]"
                    : "bg-white text-gray-600 border-gray-400 hover:bg-[#e6d199]"
                }`
                }
            >
                Thông tin cá nhân
            </button>

            <button
                onClick={() => setTab("booking")}
                className={`px-6 py-2 rounded-md border transition font-medium
                    min-w-[155px]
                ${tab === "booking" 
                    ? "bg-[#d4b872] text-black border-[#d4b872]"
                    : "bg-white text-gray-600 border-gray-400 hover:bg-[#e6d199]"
                }`
                }
            >
                Lịch đặt tour
            </button>
        </div>


        {tab === "info" && user && (
          <div className="space-y-4 text-lg">
            <label>Họ tên</label>
            <input className="border p-3 w-full"
              value={user.hoten || ""}
              onChange={e=>setUser({...user, hoten:e.target.value})}
            />

            <label>Số điện thoại</label>
                <input
                className="border p-3 w-full"
                value={user.sodienthoai || ""}
                onChange={e => {
                    let v = e.target.value;

                    // CHỈ CHO SỐ, LOẠI KÝ TỰ KHÁC
                    v = v.replace(/\D/g, "");

                    // GIỚI HẠN 10 SỐ
                    if (v.length > 10) v = v.slice(0, 10);

                    setUser({ ...user, sodienthoai: v });
                }}
                maxLength={10}
                placeholder="Nhập số điện thoại (10 số)"
            />

            <label>Địa chỉ</label>
            <input className="border p-3 w-full"
              value={user.diachi || ""}
              onChange={e=>setUser({...user, diachi:e.target.value})}
            />

            <button
              onClick={handleSave}
              className="mt-6 bg-[#d4b872] px-6 py-3 rounded text-black font-semibold mb-10"
            >
              Lưu thay đổi
            </button>
          </div>
        )}

        {tab === "booking" && (
            <div className="space-y-6 mb-24 mt-10">
                {bookings.map((b: any) => (
                <div
                    key={b.id}
                    className="border-b border-gray-300 pb-4 text-lg flex justify-between"
                >
                    {/* Bên trái */}
                    <div>
                    <p className="font-bold text-[18px]">{b.Goidichvu?.tengoi}</p>
                    <p>Ngày đặt: {new Date(b.createdAt).toLocaleDateString()}</p>
                    <p>Số lượng: {b.soluong}</p>
                    </div>

                    {/* Bên phải */}
                    <div className="text-right">
                    <p className="font-semibold text-[17px]">{b.sotien.toLocaleString()}đ</p>

                    <p
                        className={`mt-1 capitalize font-medium
                        ${
                            b.status === "confirmed"
                            ? "text-green-600"
                            : b.status === "pending"
                            ? "text-[#d4b872]"  // vàng nhã đúng theme
                            : "text-red-600"
                        }`}
                    >
                        Trạng thái: {b.status}
                    </p>
                    </div>
                </div>
                ))}
            </div>
        )}
        </div>

      <Footer />
    </>
  );
}
