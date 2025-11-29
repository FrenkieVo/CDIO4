import React from "react";
import Image from "next/image";

const TravelTimeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Tiêu đề */}
        <h2 className="text-center text-4xl md:text-5xl font-serif text-gray-900 mb-4">
          Thời điểm nên du lịch
        </h2>
        <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cột trái – Nội dung + 3 mục */}
          <div className="space-y-10">
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Đà Nẵng có khí hậu ấm áp quanh năm. Thành phố chịu ảnh hưởng của hai mùa gió mùa, với thời điểm mưa và khô khác nhau so với các vùng khác của Việt Nam. 
              Nhìn chung, thời gian lý tưởng nhất để ghé thăm Đà Nẵng là vào đầu năm, khi thời tiết mát mẻ và dễ chịu.
            </p>

            {/* 3 mục với border vàng */}
            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-amber-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
                      <circle cx="12" cy="12" r="2" fill="white" />
                    </svg>
                  ),
                  title: "Lễ hội đèn lồng Hội An",
                  time: "Diễn ra hàng tháng vào đêm trăng rằm",
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-amber-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
                      <path d="M8 15l4-4 4 4" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  ),
                  title: "Thời gian lý tưởng khám phá Đà Nẵng",
                  time: "Tháng 2 – Tháng 8",
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-amber-700" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M6.34 17.66l-1.42 1.42m12.72-12.72l-1.42 1.42" />
                    </svg>
                  ),
                  title: "Mùa đẹp nhất trong năm",
                  time: "Tháng 3 - Tháng 5",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="flex-1 border-l-4 border-amber-100 pl-6 py-2">
                    <h3 className="text-xl font-serif text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-amber-700 font-medium text-sm">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải – Ảnh + chữ đè lên */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/IS2.jpg"
              alt="Best time to visit Vietnam"
              fill
              className="object-cover"
            />
            {/* Overlay + chữ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-10 text-white">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4">
                  Khi nào là thời điểm lý tưởng
                  <br />
                 để du lịch Đà Nẵng?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTimeSection;