"use client";

import React from "react";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";

const trips = [
  {
    days: "Hành trình 2 ngày 1 đêm",
    title: "Khám phá Hội An",
    desc: "Một hành trình cao cấp đưa bạn đến với vẻ đẹp cổ kính của Hội An, nơi văn hoá, lịch sử và kiến trúc giao thoa tạo nên một di sản đầy mê hoặc.",
    price: "Từ 799.000 VND/người",
    image: "/IS1.jpg", 
  },
  {
    days: "Hành trình 2 ngày 1 đêm",
    title: "Trải nghiệm Bà Nà Hills",
    desc: "Một hành trình cao cấp đưa bạn lên xứ sở sương mây Bà Nà Hills, nơi vẻ đẹp châu Âu cổ điển hòa quyện cùng thiên nhiên hùng vĩ giữa đại ngàn Trường Sơn.",
    price: "Từ 799.000 VND/người",
    image: "/IS2.jpg",
  },
  {
    days: "Hành trình 2 ngày 1 đêm",
    title: "Khám phá Thánh địa Mỹ Sơn",
    desc: "Một hành trình cao cấp đưa bạn về với không gian linh thiêng của Thánh địa Mỹ Sơn, nơi lưu giữ những giá trị văn hoá Chăm Pa độc đáo giữa núi rừng huyền bí.",
    price: "Từ 799.000 VND/người",
    image: "/IS3.jpg",
  },
];

const InspirationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Tiêu đề */}
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
          Gợi ý hành trình
        </h2>
        <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-8" />

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Hãy khám phá những hành trình mẫu tại Đà Nẵng để lấy cảm hứng — và sau đó liên hệ với chúng tôi để bắt đầu lên kế hoạch cho chuyến phiêu lưu dành riêng cho bạn.
        </p>

        {/* 3 Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Ảnh + Hover Effect */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient khi hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Nút "View trip" hiện khi hover */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="bg-amber-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-amber-700 transition-colors text-sm font-medium shadow-lg">
                    View trip <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Nội dung bên dưới */}
              <div className="p-8 text-center">
                {/* Số ngày + icon đồng hồ */}
                <div className="flex items-center justify-center gap-2 text-amber-700 text-sm font-medium mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{trip.days}</span>
                </div>

                <h3 className="text-2xl font-serif text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {trip.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {trip.desc}
                </p>

                {/* Giá */}
                <p className="text-amber-700 font-semibold text-lg">
                  {trip.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;