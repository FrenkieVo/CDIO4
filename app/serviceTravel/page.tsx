// app/serviceTravel/page.tsx
// Thêm các trang chi tiết vô nữa.
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Clock } from "lucide-react";

export default function ServiceTravelPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mỗi tour có ảnh riêng – bạn chỉ cần đặt đúng tên file trong thư mục public/services/danang/
  const tours = [
    { 
      id: "bana-hills", 
      name: "Bà Nà Hills – Cầu Vàng 1 Ngày", 
      price: "1.290.000đ", 
      duration: "1 ngày", 
      spots: "Cầu Vàng, Fantasy Park", 
      hot: true,
      image: "/IS2.jpg" 
    },
    { 
      id: "hoian-dem", 
      name: "Hội An về đêm – Thả đèn hoa đăng", 
      price: "790.000đ", 
      duration: "1/2 ngày", 
      spots: "Phố cổ, Chùa Cầu", 
      hot: true,
      image: "/IS1.jpg" 
    },
    { 
      id: "danang-city", 
      name: "City Tour Đà Nẵng – Ngũ Hành Sơn", 
      price: "890.000đ", 
      duration: "1 ngày", 
      spots: "Biển Mỹ Khê, Chùa Linh Ứng", 
      hot: false,
      image: "/HLS4.jpg" 
    },
    { 
      id: "hue-1ngay", 
      name: "Đại Nội Huế – Đà Nẵng 1 Ngày", 
      price: "1.490.000đ", 
      duration: "1 ngày", 
      spots: "Kinh thành Huế, Sông Hương", 
      hot: true,
      image: "/HLS3.jpg" 
    },
    { 
      id: "hoian-bana", 
      name: "Hội An + Bà Nà Hills 2N1Đ", 
      price: "3.990.000đ", 
      duration: "2 ngày 1 đêm", 
      spots: "Combo hoàn hảo", 
      hot: false,
      image: "/HLS5.jpg" 
    },
    { 
      id: "my-son", 
      name: "Thánh địa Mỹ Sơn – Hội An", 
      price: "1.150.000đ", 
      duration: "1 ngày", 
      spots: "Di sản UNESCO", 
      hot: false,
      image: "/IS3.jpg" 
    },
  ];

  const filteredTours = tours.filter(tour =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.spots.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* Hero + Tìm kiếm */}
      <section className="pt-60 pb-20 bg-gradient-to-br from-[#d4b872]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#d4b872] tracking-widest mb-4">
            Dịch vụ du lịch Đà Nẵng
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            Khám phá thành phố đáng sống nhất Việt Nam với những hành trình tuyệt vời
          </p>

          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm tour: Bà Nà, Hội An, Cầu Vàng, Huế..."
              className="w-full px-16 py-6 rounded-full border-2 border-[#d4b872]/30 focus:border-[#d4b872] focus:outline-none text-lg shadow-lg"
            />
            <Search className="absolute left-6 top-7 w-7 h-7 text-[#d4b872]" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-6 top-7 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Danh sách tour */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800">
              {searchTerm ? `Kết quả: "${searchTerm}"` : "Tất cả tour Đà Nẵng"}
              <span className="block text-xl font-normal text-gray-600 mt-2">
                {filteredTours.length} tour đang có sẵn
              </span>
            </h2>

            <Link
              href="/plan"
              className="bg-[#d4b872] text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-[#e0c68a] transition shadow-xl flex items-center gap-3"
            >
              Bắt đầu lập kế hoạch
            </Link>
          </div>

          {filteredTours.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">Không tìm thấy tour nào phù hợp</p>
              <button onClick={() => setSearchTerm("")} className="mt-6 text-[#d4b872] underline text-lg">
                Xem tất cả tour
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredTours.map((tour) => (
                <Link
                  key={tour.id}
                  href={`/serviceTravel/${tour.id}`}
                  className="block bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                >
                  {/* Ảnh riêng cho từng tour */}
                  <div className="relative h-64">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      priority={tour.hot} // Ưu tiên load ảnh tour HOT
                    />
                    {tour.hot && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        HOT
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                      {tour.name}
                    </h3>

                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#d4b872]" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#d4b872]" />
                        <span className="text-sm">{tour.spots}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-[#d4b872]">{tour.price}</span>
                        <span className="text-sm text-gray-500 ml-2">/khách</span>
                      </div>
                      <span className="bg-[#d4b872]/10 text-[#d4b872] px-5 py-2 rounded-full font-bold text-sm">
                        Xem chi tiết →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}