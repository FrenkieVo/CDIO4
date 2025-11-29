"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { X } from "lucide-react";

// Dynamic import + loading đẹp
const Map = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 lg:h-full min-h-96 bg-gray-200 rounded-xl flex items-center justify-center animate-pulse">
      <p className="text-gray-600 font-medium">Đang tải bản đồ tương tác...</p>
    </div>
  ),
});

const destinations = [
  { name: "Bà Nà Hills", desc: "Một khu nghỉ dưỡng trên đồi mang kiến trúc Pháp cổ điển, sở hữu cây Cầu Vàng nổi tiếng cùng khí hậu mát mẻ quanh năm.", image: "/IS2.jpg" },
  { name: "Phố cổ Hội An", desc: "Một Di sản Thế giới được UNESCO công nhận, chỉ cách Đà Nẵng 30km, nổi tiếng với những con phố lung linh đèn lồng và kiến trúc cổ truyền.", image: "/IS1.jpg" },
  { name: "Ngũ Hành Sơn (Marble Mountains)", desc: "Năm ngọn núi đá cẩm thạch và đá vôi với hệ thống hang động, chùa chiền và tầm nhìn tuyệt đẹp bao quát Đà Nẵng và bờ biển.", image: "/WNHS.jpg" },
  { name: "Bán đảo Sơn Trà", desc: "Nơi có tượng Phật Bà Quan Âm, rừng xanh rậm rạp, nhiều loài khỉ quý hiếm và những bãi biển nguyên sơ như Bãi Bụt.", image: "/HLS4.jpg" },
  { name: "Thánh địa Mỹ Sơn", desc: "Quần thể đền tháp Chăm được UNESCO công nhận, thường được ví như “Angkor Wat của Việt Nam”.", image: "/IS3.jpg" },
  { name: "Đà Nẵng Downtown", desc: "Thành phố hiện đại với Cầu Rồng, sông Hàn, Cầu Tình Yêu và nhịp sống đêm sôi động.", image: "/HLS3.jpg" },
];

const WhereToGoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-gray-900 mb-16">
          Khám phá các điểm nổi bật
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative h-96 lg:h-full min-h-96 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <Map onClick={() => setIsOpen(true)} />
          </div>

          <div
            className={`space-y-6 transition-all duration-700 ease-out ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10 pointer-events-none"
            } lg:opacity-100 lg:translate-x-0 lg:pointer-events-auto`}
          >
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="group flex gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {dest.desc}
                  </p>
                  <button className="text-amber-700 font-semibold text-sm hover:text-amber-800 transition-colors flex items-center gap-1">
                    Khám phá thêm →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed top-20 right-4 z-50 bg-white/95 backdrop-blur rounded-full p-3 shadow-xl"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
    </section>
  );
};

export default WhereToGoSection;