"use client";

import {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent
} from "react";
import { useParams, useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";
import Api from "../../../../Api/Api";

type DiaDiem = {
  id: number;
  tendiadiem: string;
};

type FormState = {
  tengoi: string;
  gia: string;
  thoiluongngay: string;
  Diadiem_id: string;
  hinhanh: FileList | null;
  oldhinhanh: string;
  mota: string;          
  trangthai: string;    
  sochoconlai: string;
};

export default function EditGoiDichVu() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [diadiems, setDiadiems] = useState<DiaDiem[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormState>({
    tengoi: "",
    gia: "",
    thoiluongngay: "",
    Diadiem_id: "",
    hinhanh: null,
    oldhinhanh: "",
    mota: "",          
    trangthai: "",    
    sochoconlai: ""
  });

  // Load địa điểm
  useEffect(() => {
    Api.get("diadiem")
      .then((res:any) => setDiadiems(res.data))
      .catch((err:any) => console.error("Lỗi tải địa điểm:", err));
  }, []);

  // Load gói dịch vụ để sửa
  useEffect(() => {
    Api.get(`goidichvu/${id}`)
      .then((res:any) => {
        const d = res.data;

        setForm({
          tengoi: d.tengoi,
          gia: d.gia,
          thoiluongngay: d.thoiluongngay,
          Diadiem_id: d.Diadiem_id,
          hinhanh: null,
          oldhinhanh: d.hinhanh,
          mota: d.mota || "",               
          trangthai: d.trangthai || "",     
          sochoconlai: d.sochoconlai || "",
        });
      })
      .catch((err:any) => console.error("Lỗi load gói:", err));
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm((prev) => ({
        ...prev,
        hinhanh: e.target.files,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
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

    if (form.hinhanh) {
      for (const file of form.hinhanh) {
        formdata.append("hinhanh", file);
      }
    }

    Api.put(`goidichvu/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(() => {
        alert("Cập nhật thành công!");
        router.push("/admin/bookings");
      })
      .catch((err:any) => alert("Có lỗi xảy ra!"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="relative w-[750px] rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white/95 backdrop-blur-lg">

        {/* Background giống trang thêm */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=90')",
          }}
        ></div>

        <div className="relative p-10">

          <h1 className="text-3xl font-bold text-teal-700 text-center mb-6 flex items-center justify-center gap-2 drop-shadow-md">
            <PlusCircle className="w-8 h-8 text-teal-600" />
            Sửa gói dịch vụ du lịch
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

          {/* GRID 2 CỘT */}
          <div className="grid grid-cols-2 gap-6">

            {/* CỘT TRÁI */}
            <div className="space-y-5">

              {/* Tên gói */}
              <div>
                <label className="font-semibold">Tên gói dịch vụ</label>
                <input
                  name="tengoi"
                  value={form.tengoi}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/90 border rounded-lg"
                  required
                />
              </div>

              {/* Ảnh hiện tại */}
              {form.oldhinhanh && (
                <div>
                  <label className="font-semibold">Ảnh hiện tại</label>
                  <img
                    src={`http://localhost:3000/${JSON.parse(form.oldhinhanh)[0]}`}
                    className="w-40 rounded-lg shadow-md mt-2"

                  />
                </div>
              )}

              {/* Ảnh mới */}
              <div>
                <label className="font-semibold">Chọn ảnh mới (nếu muốn)</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-3 bg-white/90 border rounded-lg file:bg-teal-500 file:text-white"
                />
              </div>

              {/* Giá */}
              <div>
                <label className="font-semibold">Giá tour</label>
                <input
                  name="gia"
                  type="number"
                  value={form.gia}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/90 border rounded-lg"
                  required
                />
              </div>

            </div>

            {/* CỘT PHẢI */}
            <div className="space-y-5">

              {/* Thời lượng */}
              <div>
                <label className="font-semibold">Thời lượng (ngày)</label>
                <input
                  name="thoiluongngay"
                  value={form.thoiluongngay}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/90 border rounded-lg"
                  required
                />
              </div>

              {/* Trạng thái */}
              <div>
                <label className="font-semibold">Trạng thái</label>
                <select
                  name="trangthai"
                  value={form.trangthai}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/90 border rounded-lg"
                  required
                >
                  <option value="">-- Chọn trạng thái --</option>
                  <option value="active">Đang hoạt động</option>
                  <option value="inactive">Ngừng hoạt động</option>
                  <option value="soldout">Hết chỗ</option>
                </select>
              </div>

              {/* Số chỗ */}
              <div>
                <label className="font-semibold">Số chỗ còn lại</label>
                <input
                  name="sochoconlai"
                  type="number"
                  value={form.sochoconlai}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/90 border rounded-lg"
                  required
                />
              </div>

              {/* Địa điểm */}
              <div>
                <label className="font-semibold">Địa điểm</label>
                <select
                  name="Diadiem_id"
                  value={form.Diadiem_id}
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

          {/* MÔ TẢ – FULL WIDTH */}
          <div>
            <label className="font-semibold">Mô tả</label>
            <textarea
              name="mota"
              rows={4}
              value={form.mota}
              onChange={handleChange}
              className="w-full p-3 bg-white/90 border rounded-lg"
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
              {loading ? "Đang lưu..." : "Lưu thay đổi"}
            </button>
          </div>
          
          </form>
        </div>
      </div>
    </div>
  );
}
