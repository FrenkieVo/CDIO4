"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const feedbacks = [
  {
    quote: "Hành Trình Đà Nẵng Hoàn Hảo",
    text: "Từ lúc đặt chân xuống sân bay Đà Nẵng cho đến khi rời đi, mọi trải nghiệm đều được sắp xếp trơn tru và chu đáo. Chúng tôi khám phá biển Mỹ Khê, Ngũ Hành Sơn và phố cổ Hội An với những hướng dẫn viên tận tâm, hiểu sâu văn hoá địa phương. Một chuyến đi trọn vẹn vượt xa mong đợi...",
    author: "Lê Thanh Hà",
    rating: 5,
    date: "Đăng ngày 12 tháng 8 năm 2025",
    },
    {
    quote: "Một Kỳ Nghỉ Sang Trọng Khó Quên Tại Đà Nẵng",
    text: "Lịch trình được thiết kế tuyệt mỹ: nghỉ dưỡng bên bờ biển tại resort cao cấp, cáp treo đến Bà Nà Hills, và trải nghiệm ẩm thực tinh tế. Mỗi hướng dẫn viên đều chu đáo và giàu nhiệt huyết. Một kỳ nghỉ xứng tầm đẳng cấp!",
    author: "Dũng Serif",
    rating: 5,
    date: "Đăng ngày 5 tháng 11 năm 2025",
    },
    {
    quote: "Đỉnh Cao Hoàn Mỹ Trong Từng Khoảnh Khắc",
    text: "Chuyến đi tại Đà Nẵng được chăm chút đến từng chi tiết — từ lịch trình tham quan, chọn điểm ngắm hoàng hôn đẹp nhất, cho đến những gợi ý ẩm thực địa phương độc đáo. Một trải nghiệm khiến chúng tôi nhớ mãi và chắc chắn sẽ quay lại.",
    author: "Trung Frenkie",
    rating: 5,
    date: "Đăng ngày 18 tháng 10 năm 2025",
    },
];

const FeedbackSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % feedbacks.length);
  const prev = () => setCurrent((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Trích dẫn lớn */}
        <h3 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-12">
          <Quote className="inline-block w-10 h-10 text-amber-700 mb-4 -translate-x-4" />
          <br />
          “{feedbacks[current].quote}”
        </h3>

        {/* Nội dung review */}
        <div className="mb-10">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            {feedbacks[current].text}
          </p>

          {/* Rating + tác giả */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-amber-700 font-medium">{feedbacks[current].author}</p>
          <p className="text-sm text-gray-500 mt-2">{feedbacks[current].date}</p>
        </div>

        {/* Dots nhỏ gọn + nút trái/phải – hover mượt */}
        <div className="flex items-center justify-center gap-8">
          {/* Nút trái */}
          <button
            onClick={prev}
            className="group p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all duration-300 ease-out"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-amber-700 group-hover:text-amber-900 transition-colors" />
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {feedbacks.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2 bg-amber-700 rounded-full"
                    : "w-2 h-2 bg-amber-300 rounded-full hover:bg-amber-600"
                }`}
              />
            ))}
          </div>

          {/* Nút phải */}
          <button
            onClick={next}
            className="group p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all duration-300 ease-out"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-amber-700 group-hover:text-amber-900 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;