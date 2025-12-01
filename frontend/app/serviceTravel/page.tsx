"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Clock } from "lucide-react";

// Hàm chuyển đổi thời lượng
function formatDuration(str: string): string {
  if (!str) return "";

  let normalized = str;

  if (/^\d+n\d+$/.test(str)) normalized = str + "d";
  if (/^\d+n$/.test(str)) return str.replace("n", "") + " ngày";
  if (/^\d+$/.test(str)) return str + " ngày";

  const match = normalized.match(/(\d+)n(\d+)d/);
  if (match) {
    const days = match[1];
    const nights = match[2];
    return `${days} ngày ${nights} đêm`;
  }

  return str;
}

export default function ServiceTravelPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Gọi API lấy gói dịch vụ từ backend
  useEffect(() => {
    fetch("http://localhost:3000/api/goidichvu")
      .then((res) => res.json())
      .then((data) => {
        const convert = data.map((g: any) => ({
          id: g.id,
          name: g.tengoi,
          price: g.giaFormat,
          duration: formatDuration(g.thoiluongngay),
          spots: g.Diadiem?.tendiadiem || "Không có địa điểm khác",
          image: g.hinhanh ? `http://localhost:3000/${JSON.parse(g.hinhanh)[0]}` : "/default.jpg",
          hot: g.trangthai === "active", // active -> HOT
        }));

        setTours(convert);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredTours = tours.filter(
    (tour) =>
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.spots.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-60 pb-20 bg-gradient-to-br from-[#d4b872]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-serif text-[#d4b872] tracking-widest mb-4">
            Dịch vụ du lịch Đà Nẵng
          </h1>

          <p className="text-xl text-gray-700 mb-10">
            Khám phá thành phố đáng sống nhất Việt Nam với những hành trình tuyệt vời
          </p>

          {/* Ô tìm kiếm */}
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm tour: Bà Nà, Hội An, Cầu Vàng, Huế..."
              className="w-full px-16 py-6 rounded-full border-2 border-[#d4b872]/30 focus:border-[#d4b872] text-lg shadow-lg"
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
              <span className="block text-xl text-gray-600 mt-2">
                {filteredTours.length} tour đang có sẵn
              </span>
            </h2>

            <Link
              href="/plan"
              className="bg-[#d4b872] text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-[#e0c68a] transition shadow-xl"
            >
              Bắt đầu lập kế hoạch
            </Link>
          </div>

          {/* Không có dữ liệu */}
          {loading ? (
            <p className="text-center text-xl text-gray-500">Đang tải...</p>
          ) : filteredTours.length === 0 ? (
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
                  className="block bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 group"
                >
                  {/* Ảnh */}
                  <div className="relative h-64">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    {tour.hot && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        HOT
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  {/* Nội dung */}
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
