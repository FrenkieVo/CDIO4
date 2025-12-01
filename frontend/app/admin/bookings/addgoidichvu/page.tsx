"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, MapPin, Image as ImgIcon, Calendar, DollarSign } from "lucide-react";
import Api from "../../../Api/Api"
export default function AddGoiDichVuPage() {
    const router = useRouter();

    const [diadiems, setDiadiems] = useState<{ id: number; tendiadiem: string }[]>([]);
    const [loading, setLoading] = useState(false);
    
    type FormState = {
    tengoi: string;
    hinhanh: FileList | null;
    gia: string;
    thoiluongngay: string;
    Diadiem_id: string;
    mota: string;          
    trangthai: string;     
    sochoconlai: string; 
    };

    const [form, setForm] = useState<FormState>({
    tengoi: "",
    hinhanh: null,
    gia: "",
    thoiluongngay: "",
    Diadiem_id: "",
    mota: "",             
    trangthai: "",       
    sochoconlai:"", 
    });

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setForm((prev) => ({
            ...prev,
            hinhanh: e.target.files,
            }));
        }
    }



    useEffect(() => {
    fetch("http://localhost:3000/api/diadiem")
        .then((res) => res.json())
        .then((data) => {
            console.log(" Dữ liệu địa điểm nhận từ API:", data);
            setDiadiems(data);
        })
        .catch(err => console.error(" Lỗi gọi API /diadiem:", err));
    }, []);
    ;

    function handleChange(e : any) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formdata = new FormData();
    formdata.append("tengoi", form.tengoi);
    formdata.append("gia", form.gia);
    formdata.append("thoiluongngay", form.thoiluongngay);
    formdata.append("Diadiem_id", form.Diadiem_id);
    formdata.append("mota", form.mota);                  
    formdata.append("trangthai", form.trangthai);        
    formdata.append("sochoconlai", form.sochoconlai); 

    // Nếu có nhiều file ảnh
    if (form.hinhanh && form.hinhanh.length > 0) {
        for (const file of form.hinhanh) {
        formdata.append("hinhanh", file);
        }
    }

    console.log("FormData gửi đi:", formdata);

    Api.post("goidichvu", formdata, {
        headers: {
        "Content-Type": "multipart/form-data"
        }
    })
        .then((response: any) => {
        console.log("Thêm gói thành công", response.data);

        alert("Thêm gói dịch vụ thành công!");
        router.push("/admin/bookings");
        })

        .catch((err: any) => {
        console.error("Lỗi server:", err);
        alert("Có lỗi xảy ra!");
        })

        .finally(() => {
        setLoading(false);
        });
    }


  return (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

    {/* POPUP - KHÔNG CHE HẾT MÀN HÌNH, VẪN THẤY TRANG QUẢN LÝ SAU */}
    <div className="relative w-[750px] rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white/95 backdrop-blur-lg">

      {/* Background biển hoàng hôn – rõ hơn, không che chữ */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=90')",
        }}
      ></div>

      {/* Nội dung form nằm trên nền mờ */}
      <div className="relative p-10">

        <h1 className="text-3xl font-bold text-teal-700 text-center mb-6 flex items-center justify-center gap-2 drop-shadow-md">
          <PlusCircle className="w-8 h-8 text-teal-600" />
          Thêm gói dịch vụ du lịch
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

        {/* GRID 2 CỘT */}
        <div className="grid grid-cols-2 gap-6">

          {/* CỘT 1 */}
          <div className="space-y-5">
            
            {/* Tên gói */}
            <div>
              <label className="font-semibold text-gray-800">Tên gói dịch vụ</label>
              <input
                name="tengoi"
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border rounded-lg"
                placeholder="Ví dụ: Tour Bà Nà Hills"
                required
              />
            </div>

            {/* Hình ảnh */}
            <div>
              <label className="font-semibold text-gray-800">Hình ảnh tour</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-3 bg-white/90 border rounded-lg file:bg-teal-500 file:text-white"
                required
              />
            </div>

            {/* Giá */}
            <div>
              <label className="font-semibold text-gray-800">Giá tour (VNĐ)</label>
              <input
                name="gia"
                type="number"
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border rounded-lg"
                placeholder="1290000"
                required
              />
            </div>

            {/* Thời lượng */}
            <div>
              <label className="font-semibold text-gray-800">Thời lượng (ngày)</label>
              <input
                name="thoiluongngay"
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border rounded-lg"
                placeholder="1"
                required
              />
            </div>

          </div>

          {/* CỘT 2 */}
          <div className="space-y-5">

            {/* Trạng thái */}
            <div>
              <label className="font-semibold text-gray-800">Trạng thái</label>
              <select
                name="trangthai"
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border rounded-lg"
              >
                <option value="">-- Chọn trạng thái --</option>
                <option value="active">Đang hoạt động</option>
                <option value="inactive">Ngừng hoạt động</option>
                <option value="soldout">Hết chỗ</option>
              </select>
            </div>

            {/* Số chỗ */}
            <div>
              <label className="font-semibold text-gray-800">Số chỗ còn lại</label>
              <input
                name="sochoconlai"
                type="number"
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border rounded-lg"
                placeholder="Ví dụ: 20"
                required
              />
            </div>

            {/* Địa điểm */}
            <div>
              <label className="font-semibold text-gray-800">Địa điểm</label>
              <select
                name="Diadiem_id"
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border rounded-lg"
                required
              >
                <option value="">-- Chọn địa điểm --</option>
                {diadiems.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.tendiadiem}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

          {/* MÔ TẢ — FULL WIDTH */}
          <div>
            <label className="font-semibold text-gray-800">Mô tả</label>
            <textarea
              name="mota"
              onChange={handleChange}
              rows={4}
              className="w-full p-3 bg-white/90 border rounded-lg"
              placeholder="Nhập mô tả chi tiết..."
              required
            />
          </div>

          {/* BUTTON */}
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={() => router.push("/admin/bookings")}
              className="flex-1 py-3 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Hủy
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white"
            >
              {loading ? "Đang thêm..." : "Thêm mới"}
            </button>
          </div>

        </form>

      </div>
    </div>
  </div>
);

}
