"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Api from "../../Api/Api";
import Image from "next/image";
import { MapPin, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();

  const [tour, setTour] = useState<any>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const u = sessionStorage.getItem("user");
        if (u) {
            const user = JSON.parse(u);
            setName(user.hoten || "");  
            setPhone(user.sodienthoai || "");
        }
    }, []);

    useEffect(() => {
        Api.get(`goidichvu/${id}`)
        .then((res) => {
            console.log(" Dữ liệu BE trả về:", res.data);   // <-- console FE
            setTour(res.data);
        })
        .catch(() => alert("Không tải được tour!"));
    }, [id]);

    function formatDuration(str: string) {
        return str
            .replace("n", " ngày ")
            .replace("d", " đêm")
            .replace("ngay", " ngày ")
            .replace("dem", " đêm");
    }

    const handleQuantityChange = (value: string) => {
        let v = Number(value);

        // Nếu tour chưa load xong → cho nhập bình thường
        if (!tour?.sochoconlai) {
            setQuantity(v);
            return;
        }

        // Giới hạn số lượng vé hợp lệ
        if (v > tour.sochoconlai) v = tour.sochoconlai;
        if (v < 1) v = 1;

        setQuantity(v);
    };


    const handleSubmit = () => {
        if (!name || !phone) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
        }
        const user = sessionStorage.getItem("user");
        let user_id = null;

        if (user) {
            user_id = JSON.parse(user).id;
        }
        const total = tour.gia * quantity;

        Api.post("booking", {
        tour_id: id,
        hoten: name,
        sodienthoai: phone,
        soluong: quantity,
        sotien: total,
        user_id: user_id
        })
        .then(() => {
            alert("Đặt tour thành công!");
            router.push("/");
        })
        .catch(() => alert("Đặt tour thất bại!"));
    };

    if (!tour)
        return <div className="p-10 text-center text-xl">Đang tải dữ liệu...</div>;

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen pb-20 mt-65">

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto mt-12 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* INFO CARD */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">{tour.tengoi}</h2>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2">
              <Clock className="text-yellow-600" /> 
              <b>Thời lượng:</b> {formatDuration(tour.thoiluongngay)}
            </p>

            <p className="flex items-center gap-2">
              <MapPin className="text-yellow-600" /> 
              <b>Địa điểm:</b> {tour.Diadiem?.tendiadiem}
            </p>

            <p className="flex items-center gap-2">
              <Users className="text-yellow-600" /> 
              <b>Số chỗ còn lại:</b> {tour.sochoconlai}
            </p>
          </div>

          <hr className="my-8" />

          <h3 className="text-2xl font-semibold mb-4 text-yellow-700">
            Thông tin khách hàng
          </h3>

          <div className="space-y-6">
            <div>
              <label className="font-semibold">Họ tên</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm"
                placeholder="Nhập họ tên"
              />
            </div>

            <div>
              <label className="font-semibold">Số điện thoại</label>
              <input
                value={phone}
                onChange={(e) => {
                    const v = e.target.value;
                    // Chỉ cho nhập số và tối đa 10 số
                    if (/^\d{0,10}$/.test(v)) setPhone(v);
                }}
                maxLength={10}
                className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm"
                placeholder="Nhập số điện thoại (10 số)"
                />
            </div>

            <div>
              <label className="font-semibold">Số lượng vé</label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
                placeholder={`Tối đa ${tour?.sochoconlai || "?"} vé`}
                className="w-full mt-2 px-4 py-3 border rounded-xl shadow-sm"
              />
            </div>
            <div className="mt-4 text-xl font-bold text-green-600">
              Tổng tiền: {(tour.gia * quantity).toLocaleString()}đ
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold rounded-full py-4 transition"
          >
            Xác nhận đặt tour
          </button>
        </div>

        {/* PRICE CARD */}
        <div className="bg-white p-8 rounded-2xl shadow-xl h-fit">
          <h3 className="text-2xl font-semibold mb-4">Giá tour</h3>
          <p className="text-4xl font-bold text-yellow-600 mb-3">
            {tour.gia.toLocaleString()}đ
          </p>
          <p className="text-gray-500 text-sm">/ khách</p>

          <hr className="my-6" />

          <p className="text-gray-700">
             Giá đã bao gồm:
          </p>

          <ul className="mt-3 space-y-2 text-gray-600 text-sm">
            <li>✔ Vé tham quan theo lịch trình</li>
            <li>✔ Hướng dẫn viên nhiệt tình</li>
            <li>✔ Xe đưa đón chất lượng cao</li>
            <li>✔ Bảo hiểm du lịch</li>
          </ul>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}
