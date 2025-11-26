// app/comment/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Navbar />

      {/* Tiêu đề chính */}
      <section className="pt-60 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#d4b872] tracking-widest">
            Thư góp ý
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Kính gửi Quý Khách<br />
            Với mong muốn phục vụ khách hàng ngày càng tốt hơn. SK Telecom Travel rất mong nhận được những đóng góp quý báu của Quý khách về chất lượng dịch vụ trong chương trình du lịch vừa qua.
          </p>
        </div>
      </section>

      {/* Form chính */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* THU GÓP Ý VỀ CHẤT LƯỢNG CỦA CHUYẾN DU LỊCH */}
          <h2 className="text-2xl font-bold text-red-600 uppercase mb-8">
            Thu góp ý về chất lượng của chuyến du lịch
          </h2>

          <div className="space-y-8">

            {/* Chương trình du lịch */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Chương trình du lịch <span className="text-red-600">(*)</span>
              </label>
              <input
                type="text"
                placeholder="Nhập chương trình du lịch mà Quý khách đã đi"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#d4b872] focus:outline-none text-gray-600"
              />
            </div>

            {/* Dòng 3 ô: Mã tour - Nơi khởi hành - Ngày khởi hành */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                  Mã tour <span className="text-red-600">(*)</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập mã tour"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#d4b872] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Nơi khởi hành</label>
                <input
                  type="text"
                  placeholder="Nơi khởi hành"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#d4b872] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Ngày khởi hành</label>
                <input
                  type="date"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#d4b872] focus:outline-none text-gray-500"
                />
              </div>
            </div>

            {/* 2 CỘT: Thông tin khách hàng + Thông tin du lịch */}
            <div className="grid md:grid-cols-2 gap-12 mt-12">

              {/* Cột trái: Thông tin khách hàng */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-red-600">THÔNG TIN KHÁCH HÀNG</h3>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">
                      Họ và tên <span className="text-red-600">(*)</span>
                    </label>
                    <input type="text" placeholder="Nhập họ tên" className="w-full px-4 py-3 rounded-lg border" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">
                      Email <span className="text-red-600">(*)</span>
                    </label>
                    <input type="email" placeholder="Nhập email" className="w-full px-4 py-3 rounded-lg border" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">
                      Điện thoại <span className="text-red-600">(*)</span>
                    </label>
                    <input type="tel" placeholder="Nhập điện thoại" className="w-full px-4 py-3 rounded-lg border" />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Địa chỉ</label>
                  <input type="text" placeholder="Nhập địa chỉ" className="w-full px-5 py-4 rounded-xl border" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-semibold mb-3">Độ tuổi</label>
                    <div className="space-y-3">
                      {["18 - 26 tuổi", "27 - 42 tuổi", "43 - 58 tuổi", "Trên 58"].map((age) => (
                        <label key={age} className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="age" className="w-5 h-5 text-[#d4b872]" />
                          <span>{age}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold mb-3">Giới tính</label>
                    <div className="space-y-3">
                      {["Nam", "Nữ"].map((gender) => (
                        <label key={gender} className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="gender" className="w-5 h-5 text-[#d4b872]" />
                          <span>{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cột phải: ĐÁNH GIÁ VÀ GÓP Ý */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-red-600">THÔNG TIN DU LỊCH</h3>

                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <p className="font-semibold mb-5">
                    Yếu tố nào ảnh hưởng đến quyết định chọn chương trình du lịch của Quý khách trong chuyến đi này?
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {["Chất lượng", "Khuyến mại", "Thái độ phục vụ", "Giá cả", "Quảng cáo", "Thương hiệu"].map((item) => (
                      <label key={item} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-[#d4b872] rounded" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="font-semibold mb-5">
                      Quý khách dự định thực hiện chuyến du lịch sắp tới vào thời điểm nào?
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                        <label key={month} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="w-5 h-5 text-[#d4b872] rounded" />
                          <span>Tháng {month}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BẢNG ĐÁNH GIÁ CHI TIẾT */}
            <div className="mt-16">
              <h3 className="text-xl font-bold text-red-600 mb-6">ĐÁNH GIÁ VÀ GÓP Ý</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Nội dung</th>
                      <th className="px-6 py-4 text-center">Kém</th>
                      <th className="px-6 py-4 text-center">Trung bình</th>
                      <th className="px-6 py-4 text-center">Khá</th>
                      <th className="px-6 py-4 text-center">Tốt</th>
                      <th className="px-6 py-4 text-center">Xuất sắc</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "Nhân viên giao dịch",
                      "Chương trình du lịch",
                      "Điểm tham quan",
                      "Hướng dẫn viên Vietravel",
                      "Hướng dẫn viên địa phương",
                      "Nhà hàng",
                      "Khách sạn",
                      "Phương tiện vận chuyển",
                      "Đánh giá chung",
                    ].map((item) => (
                      <tr key={item} className="border-t">
                        <td className="px-6 py-5 font-medium">{item}</td>
                        {[1, 2, 3, 4, 5].map((val) => (
                          <td key={val} className="text-center">
                            <input type="radio" name={`rating-${item}`} className="w-5 h-5 text-[#d4b872]" />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ô Góp ý thêm */}
            <div className="mt-12">
              <label className="block text-lg font-semibold mb-4">
                Góp ý thêm của Quý khách (nếu có)
              </label>
              <textarea
                rows={6}
                placeholder="Quý khách vui lòng chia sẻ thêm ý kiến để chúng tôi cải thiện dịch vụ tốt hơn..."
                className="w-full px-6 py-5 rounded-xl border border-gray-300 focus:border-[#d4b872] focus:outline-none resize-none"
              />
            </div>

            {/* Đánh giá sao */}
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-gray-800 mb-6">
                Bạn đánh giá chuyến đi của bạn bao nhiêu sao?
              </p>
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="focus:outline-none transition"
                  >
                    <Star
                      className={`w-16 h-16 ${rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} hover:fill-yellow-400 hover:text-yellow-400 transition`}
                    />
                  </button>
                ))}
              </div>
              <p className="mt-4 text-3xl font-bold text-[#d4b872]">
                {rating > 0 ? `${rating}/5 Sao` : "Chưa chọn"}
              </p>
            </div>

            {/* Nút gửi */}
            <div className="text-center mt-16">
              <button className="bg-[#d4b872] text-black px-16 py-5 rounded-full text-xl font-bold hover:bg-[#e0c68a] transition shadow-lg hover:shadow-xl">
                GỬI ĐÁNH GIÁ
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}