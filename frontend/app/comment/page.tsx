"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Api from "../Api/Api";
import { Star } from "lucide-react";

export default function FeedbackPage() {

  // STATE GÓP Ý THEO PHONG CÁCH ĐĂNG KÝ
  const [gopy, setGopy] = useState<GopYState>({
    hoten: "",
    email: "",
    sodienthoai: "",
    rating: 0,
    gopythem: "",
    danhgiachitiet: {
      "Chương trình tour": 0,
      "Điểm tham quan": 0,
      "Hướng dẫn viên": 0,
      "Đánh giá tổng quát": 0,
    }
  });

  type GopYState = {
    hoten: string;
    email: string;
    sodienthoai: string;
    rating: number;
    gopythem: string;
    danhgiachitiet: Record<string, number>;
  };

  const danhgiaItems = Object.keys(gopy.danhgiachitiet);

  const [errors, setErrors] = useState<Record<string, string>>({});

  // LẤY USER TỪ SESSION
  useEffect(() => {
    const stored = sessionStorage.getItem("user");
    if (stored) {
      const u = JSON.parse(stored);
      setGopy(prev => ({
        ...prev,
        hoten: u.hoten || "",
        email: u.email || "",
        sodienthoai: u.sodienthoai || "",
      }));
    }
  }, []);

  // HÀM ONCHANGE GIỐNG HASINPUT TRONG REGISTER
  function hasInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setGopy(prev => ({
      ...prev,
      [name]: value
    }));
  }

  // CHỈ RIÊNG SỐ ĐIỆN THOẠI (10 SỐ)
  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;
    if (val.length > 10) return;

    setGopy(prev => ({ ...prev, sodienthoai: val }));
  }

  // ĐÁNH GIÁ CHI TIẾT
  function handleDanhGia(item: string, value: number) {
    setGopy(prev => ({
      ...prev,
      danhgiachitiet: {
        ...prev.danhgiachitiet,
        [item]: value
      }
    }));
  }

  // SUBMIT GIỐNG FILE REGISTER
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let errs: Record<string, string> = {};
    let ok = true;

    if (!gopy.hoten) {
      errs.hoten = "Họ tên không được để trống";
      ok = false;
    }

    if (!gopy.email) {
      errs.email = "Email không được để trống";
      ok = false;
    }

    if (gopy.sodienthoai.length !== 10) {
      errs.sodienthoai = "Số điện thoại phải đúng 10 số";
      ok = false;
    }

    if (gopy.rating === 0) {
      errs.rating = "Bạn phải chọn số sao";
      ok = false;
    }

    if (!ok) {
      setErrors(errs);
      return;
    }

    Api.post("gopy", gopy)
      .then(() => {
        alert("Gửi góp ý thành công!");

        // RESET THEO PHONG CÁCH REGISTER (GIỮ HỌ TÊN + EMAIL)
        setGopy(prev => ({
          ...prev,
          sodienthoai: "",
          rating: 0,
          gopythem: "",
          danhgiachitiet: {
            "Chương trình tour": 0,
            "Điểm tham quan": 0,
            "Hướng dẫn viên": 0,
            "Đánh giá tổng quát": 0,
          }
        }));

        setErrors({});
      })
      .catch(() => alert("Lỗi gửi góp ý!"));
  }

  return (
    <>
      <Navbar />

      <section className="pt-60 pb-12 bg-white text-center">
        <h1 className="text-5xl font-serif text-[#d4b872]">Góp ý dịch vụ</h1>

        <p className="text-gray-600 text-[17px] mt-5 mx-auto max-w-2xl leading-relaxed text-center animate-fadeIn">
          Ý kiến của quý khách là cơ sở quan trọng để chúng tôi nâng cao chất lượng dịch vụ
          và mang đến những trải nghiệm du lịch tốt hơn trong tương lai.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">

        {/* HỌ TÊN */}
        <label className="font-semibold">Họ tên</label>
        <input
          name="hoten"
          value={gopy.hoten}
          onChange={hasInput}
          className="w-full border px-4 py-3 rounded-lg"
        />
        {errors.hoten && <p className="text-red-500">{errors.hoten}</p>}

        {/* EMAIL */}
        <label className="font-semibold mt-4 block">Email</label>
        <input
          name="email"
          value={gopy.email}
          onChange={hasInput}
          className="w-full border px-4 py-3 rounded-lg"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        {/* SỐ ĐIỆN THOẠI */}
        <label className="font-semibold mt-4 block">Số điện thoại</label>
        <input
          name="sodienthoai"
          value={gopy.sodienthoai}
          onChange={handlePhone}
          className="w-full border px-4 py-3 rounded-lg"
          maxLength={10}
        />
        {errors.sodienthoai && <p className="text-red-500">{errors.sodienthoai}</p>}

        {/* SAO */}
        <h2 className="text-xl font-bold text-red-600 mt-12">Đánh giá dịch vụ</h2>
        <div className="flex gap-2 mt-3">
          {[1, 2, 3, 4, 5].map(s => (
            <button key={s} type="button" onClick={() => setGopy(prev => ({ ...prev, rating: s }))}>
              <Star className={`w-10 h-10 ${gopy.rating >= s ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            </button>
          ))}
        </div>
        {errors.rating && <p className="text-red-500">{errors.rating}</p>}

        {/* BẢNG CHI TIẾT */}
        <h2 className="text-xl font-bold text-red-600 mt-12">Đánh giá chi tiết</h2>

        <table className="w-full mt-6 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Nội dung</th>
              <th>Kém</th><th>TB</th><th>Khá</th><th>Tốt</th><th>XS</th>
            </tr>
          </thead>

          <tbody>
            {danhgiaItems.map((item) => (
              <tr key={item} className="border-t">
                <td className="px-6 py-4">{item}</td>
                {[1, 2, 3, 4, 5].map((num) => (
                  <td key={num} className="text-center py-3">
                    <input
                      type="radio"
                      name={item}
                      checked={gopy.danhgiachitiet[item] === num}
                      onChange={() => handleDanhGia(item, num)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>


        {/* GÓP Ý THÊM */}
        <label className="font-semibold mt-8 block">Góp ý thêm</label>
        <textarea
          name="gopythem"
          value={gopy.gopythem}
          onChange={hasInput}
          rows={5}
          className="w-full border px-4 py-3 rounded-lg"
        />

        {/* SUBMIT */}
        <div className="mt-10 text-center">
          <button className="px-12 py-4 bg-[#d4b872] rounded-full text-lg font-bold">
            Gửi góp ý
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
}
