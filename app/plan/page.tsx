// app/plan/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Trash2, X } from "lucide-react";

export default function PlanPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [myPlan, setMyPlan] = useState<string[]>([]);

  // Danh sách địa điểm + ảnh thật
  const locations = [
    { id: "bana-hills", name: "Bà Nà Hills", image: "/IS2.jpg" },
    { id: "hoi-an", name: "Phố cổ Hội An", image: "/IS1.jpg" },
    { id: "son-tra", name: "Bán đảo Sơn Trà", image: "/HLS4.jpg" },
    { id: "ngu-hanh-son", name: "Ngũ Hành Sơn", image: "/HLS6.jpg" },
    { id: "my-son", name: "Thánh địa Mỹ Sơn", image: "/HLS7.jpg" },
    { id: "bien-my-khe", name: "Biển Mỹ Khê", image: "/Mykhe.jpg" },
  ];

  // TẤT CẢ các gói dịch vụ (hiển thị hết ngay từ đầu)
    const allPackages = [
    { 
        id: "bana-hills", 
        name: "Bà Nà Hills – Cầu Vàng 1 Ngày", 
        price: "1.290.000đ", 
        duration: "1 ngày", 
        spots: "Cầu Vàng, Fantasy Park", 
        hot: true,
        image: "/IS2.jpg",
        location: "bana-hills"
    },
    { 
        id: "hoian-dem", 
        name: "Hội An về đêm – Thả đèn hoa đăng", 
        price: "790.000đ", 
        duration: "1/2 ngày", 
        spots: "Phố cổ, Chùa Cầu", 
        hot: true,
        image: "/IS1.jpg",
        location: "hoi-an"
    },
    { 
        id: "danang-city", 
        name: "City Tour Đà Nẵng – Ngũ Hành Sơn", 
        price: "890.000đ", 
        duration: "1 ngày", 
        spots: "Biển Mỹ Khê, Chùa Linh Ứng", 
        hot: false,
        image: "/HLS4.jpg",
        location: "ngu-hanh-son"
    },
    { 
        id: "hue-1ngay", 
        name: "Đại Nội Huế – Đà Nẵng 1 Ngày", 
        price: "1.490.000đ", 
        duration: "1 ngày", 
        spots: "Kinh thành Huế, Sông Hương", 
        hot: true,
        image: "/HLS3.jpg",
        location: "hue"
    },
    { 
        id: "hoian-bana", 
        name: "Hội An + Bà Nà Hills 2N1Đ", 
        price: "3.990.000đ", 
        duration: "2 ngày 1 đêm", 
        spots: "Combo hoàn hảo", 
        hot: false,
        image: "/HLS5.jpg",
        location: "bana-hills"
    },
    { 
        id: "my-son", 
        name: "Thánh địa Mỹ Sơn – Hội An", 
        price: "1.150.000đ", 
        duration: "1 ngày", 
        spots: "Di sản UNESCO", 
        hot: false,
        image: "/IS3.jpg",
        location: "my-son"
    },
    ];

  // Lọc theo địa điểm được chọn
  const displayedPackages = selectedLocation
    ? allPackages.filter(pkg => pkg.location === selectedLocation)
    : allPackages;

  // Load lịch trình từ localStorage
  useEffect(() => {
    const saved = localStorage.getItem("myTravelPlan");
    if (saved) {
      const planIds = JSON.parse(saved).map((p: any) => p.id);
      setMyPlan(planIds);
    }
  }, []);

  const togglePlan = (pkg: any) => {
    let updatedPlan: any[] = [];
    const saved = localStorage.getItem("myTravelPlan");
    const currentPlan = saved ? JSON.parse(saved) : [];

    if (myPlan.includes(pkg.id)) {
      // Xóa
      updatedPlan = currentPlan.filter((p: any) => p.id !== pkg.id);
    } else {
      // Thêm
      updatedPlan = [...currentPlan, pkg];
    }

    // Cập nhật state + localStorage
    setMyPlan(updatedPlan.map(p => p.id));
    localStorage.setItem("myTravelPlan", JSON.stringify(updatedPlan));
  };

  const isInPlan = (id: string) => myPlan.includes(id);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-60 pb-20 bg-gradient-to-br from-[#d4b872]/10 via-white to-[#d4b872]/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#d4b872] tracking-widest mb-6">
            Chào mừng bạn đến với hành trình mới!
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
            Hãy tạo một lịch trình hoàn hảo cho riêng bạn nào!
          </p>
        </div>
      </section>

      {/* Chọn địa điểm bằng ảnh thật */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
            Chọn địa điểm bạn muốn khám phá
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(selectedLocation === loc.id ? null : loc.id)}
                className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  selectedLocation === loc.id ? "ring-4 ring-[#d4b872] ring-offset-4 scale-105" : ""
                }`}
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <p className="text-xl font-bold drop-shadow-lg">{loc.name}</p>
                </div>
              </button>
            ))}
          </div>

          {selectedLocation && (
            <div className="text-center mt-10">
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-[#d4b872] font-semibold flex items-center gap-2 mx-auto hover:underline"
              >
                <X className="w-5 h-5 mr-2" />
                Hiển thị tất cả tour
              </button>
            </div>
          )}
        </div>
      </section>

      {/* HIỂN THỊ TẤT CẢ HOẶC THEO LỌC */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
            {selectedLocation
              ? `Tour tại: ${locations.find(l => l.id === selectedLocation)?.name}`
              : "Tất cả gói dịch vụ du lịch Đà Nẵng"}
            <span className="block text-xl font-normal text-gray-600 mt-3">
              {displayedPackages.length} tour đang chờ bạn khám phá
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedPackages.map((pkg) => {
              const inPlan = isInPlan(pkg.id);
              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-64">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition"
                    />
                    {pkg.hot && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        HOT
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      <span className="inline-block bg-[#d4b872]/10 text-[#d4b872] px-3 py-1 rounded-full text-sm">
                        {pkg.duration}
                      </span>
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#d4b872]">{pkg.price}</span>

                      <button
                        onClick={() => togglePlan(pkg)}
                        className={`px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg ${
                          inPlan
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-[#d4b872] text-black hover:bg-[#e0c68a]"
                        }`}
                      >
                        {inPlan ? (
                          <>
                            <Trash2 className="w-5 h-5" /> Xóa
                          </>
                        ) : (
                          <>
                            <Plus className="w-5 h-5" /> Thêm
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GIỎ LỊCH TRÌNH NỔI */}
      {myPlan.length > 0 && (
        <div className="fixed right-6 bottom-6 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-[#d4b872]/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Lịch trình ({myPlan.length})</h3>
              <button onClick={() => setMyPlan([])} className="text-gray-400 hover:text-red-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {myPlan.map(id => {
                const pkg = allPackages.find(p => p.id === id);
                return pkg ? (
                  <div key={id} className="flex items-center justify-between text-sm bg-gray-50 p-3 rounded-lg">
                    <span className="truncate pr-3">{pkg.name}</span>
                    <button
                      onClick={() => togglePlan(pkg)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : null;
              })}
            </div>
            <Link
              href="/myitinerary"
              className="mt-6 w-full bg-[#d4b872] text-black py-4 rounded-full font-bold text-center block hover:bg-[#e0c68a] transition"
            >
              Xem chi tiết lịch trình
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}