"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stays = [
  {
    location: "Hội An",
    name: "The Nam Hai",
    desc: "Trong khuôn viên 35 hecta vườn nhiệt đới nằm dọc bờ biển Hà My nguyên sơ, khu nghỉ dưỡng sở hữu sáu mươi biệt thự một phòng ngủ…",
    image: "/SS1.jpg", 
  },
  {
    location: "Bà Nà Hills",
    name: "Bà Nà Hotel",
    desc: "Bà Nà Hills Hotel – nơi lạc vào không gian nghỉ dưỡng trên mây, hòa quyện vẻ đẹp châu Âu cổ điển giữa đại ngàn Trường Sơn.",
    image: "/SS2.jpg",
  },
  {
    location: "Sơn Trà",
    name: "Khách sạn Le Sands Oceanfront",
    desc: "“Le Sands Oceanfront – khách sạn hướng biển đẳng cấp, nơi bạn tận hưởng vẻ đẹp đại dương Đà Nẵng trong không gian tinh tế và hiện đại.",
    image: "/SS3.jpg",
  },
  {
    location: "Mỹ Sơn",
    name: "My Son Heritage Resort And Spa",
    desc: "“My Son Heritage Resort & Spa – khu nghỉ dưỡng mang hơi thở di sản, nơi bạn đắm mình trong sự tĩnh lặng của thiên nhiên và nét văn hoá độc đáo của thánh địa Mỹ Sơn.",
    image: "/SS4.jpg",
  },
  {
    location: "Ngũ Hành Sơn",
    name: "1986 Homestay Đà Nẵng",
    desc: "1986 Homestay Đà Nẵng – không gian hoài niệm mang phong cách vintage, nơi bạn cảm nhận sự bình yên và thân thiện như ở chính ngôi nhà của mình.",
    image: "/SS5.jpg",
  },
  {
    location: "Sơn Trà",
    name: "Minh House Đà Nẵng",
    desc: "“Minh House Đà Nẵng – khu lưu trú xanh mát giữa lòng thành phố, nơi mỗi góc nhỏ đều mang đến sự bình yên và cảm giác gần gũi với thiên nhiên.",
    image: "/SS6.jpg",
  }
];

const StaySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Tiêu đề */}
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
          Chỗ ở sang trọng tại Đà Nẵng
        </h2>
        <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-8" />

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Việt Nam có rất nhiều địa điểm lưu trú tuyệt vời. Dưới đây là một số lựa chọn mà chúng tôi yêu thích nhất, 
          được tuyển chọn kỹ lưỡng bởi các chuyên gia thiết kế hành trình của chúng tôi:
        </p>

        {/* Grid 3 card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stays.map((stay, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-500 hover:shadow-2xl"
            >
              {/* Ảnh */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay khi hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Nút "Explore" chỉ hiện khi hover */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="bg-amber-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-amber-700 transition-colors text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Nội dung bên dưới */}
              <div className="p-8 text-left bg-white border-t-4 border-amber-50">
                <p className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                  {stay.location}
                </p>
                <h3 className="text-2xl font-serif text-gray-900 mt-2 mb-3">
                  {stay.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {stay.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaySection;