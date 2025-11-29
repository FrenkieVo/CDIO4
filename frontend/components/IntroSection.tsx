"use client";

import React from "react";
import { Search } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background – Tự động phát, lặp, tắt tiếng */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Thay link này bằng video */}
        <source src="VideoBanner.mp4" type="video/mp4" />
        {/* Fallback image nếu video không load được */}
        <img
          src="VideoBanner.mp4"
          alt="Exceptional journeys"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Dark overlay để chữ nổi bật hơn */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Nội dung chính – đè lên video */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        {/* Tiêu đề lớn */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-thin tracking-wider mb-6 animate-fade-in">
          Những hành trình
          <br />
          <span className="block mt-2">đặc biệt</span>
        </h1>

        {/* Mô tả nhỏ */}
        <p className="text-sm md:text-lg lg:text-xl font-light tracking-widest opacity-90 max-w-3xl mx-auto mb-20">
          Bắt đầu những chuyến đi phi thường, đầy tính cá nhân, được lên kế hoạch bởi các chuyên gia đoạt giải
        </p>

        {/* 2 cột CTA – giống hệt hình */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-6 md:px-0">
          {/* Cột trái: "Take me to..." + Search box */}
          <div className="flex flex-col items-center md:items-start text-left space-y-6">
            <h3 className="text-3xl md:text-4xl font-handwriting text-white/90">
              Hãy đưa tôi đến
            </h3>

            {/* Search box sang trọng */}
            <div className="relative w-full max-w-md group">
              <input
                type="text"
                placeholder="Bạn muốn đi đâu?"
                className="w-full px-6 py-5 pr-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-sm text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-all duration-300 text-lg"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#d4b872] hover:bg-[#e0c68a] text-black p-4 rounded-sm transition-all duration-300 group-hover:scale-110">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Cột phải + Nút CTA */}
          <div className="flex flex-col items-center md:items-start text-left space-y-6">
            <h3 className="text-3xl md:text-4xl font-handwriting text-white/90">
              Không chắc nên đến đâu?
            </h3>
            <h3 className="text-3xl md:text-4xl font-handwriting text-white/90">
              Hãy để chúng tôi giúp bạn nhé!
            </h3>
            
          </div>
        </div>
      </div>

      {/* Scroll down indicator (tùy chọn) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;