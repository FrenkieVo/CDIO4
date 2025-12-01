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
  const [allPackages, setAllPackages] = useState<any[]>([]);

  // Map button ID → Tên địa điểm trong DB
  const locationMap: any = {
    "bana-hills": "Bà Nà Hills",
    "hoi-an": "Phố cổ Hội An",
    "son-tra": "Bán đảo Sơn Trà",
    "ngu-hanh-son": "Ngũ Hành Sơn",
    "my-son": "Thánh địa Mỹ Sơn",
    "bien-my-khe": "Biển Mỹ Khê",
  };

  // Danh sách địa điểm FE
  const locations = [
    { id: "bana-hills", name: "Bà Nà Hills", image: "/IS2.jpg" },
    { id: "hoi-an", name: "Phố cổ Hội An", image: "/IS1.jpg" },
    { id: "son-tra", name: "Bán đảo Sơn Trà", image: "/HLS4.jpg" },
    { id: "ngu-hanh-son", name: "Ngũ Hành Sơn", image: "/HLS6.jpg" },
    { id: "my-son", name: "Thánh địa Mỹ Sơn", image: "/HLS7.jpg" },
    { id: "bien-my-khe", name: "Biển Mỹ Khê", image: "/Mykhe.jpg" },
  ];

  // Hàm convert thời lượng, dùng lại như trang list
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
  // LẤY GÓI DỊCH VỤ từ backend
  useEffect(() => {
    fetch("http://localhost:3000/api/goidichvu")
      .then((res) => res.json())
      .then((data) => setAllPackages(data))
      .catch((err) => console.error("Lỗi tải gói dịch vụ:", err));
  }, []);

  
  // Lọc theo địa điểm
  const displayedPackages = selectedLocation
    ? allPackages.filter(
        (pkg) =>
          pkg.Diadiem &&
          pkg.Diadiem.tendiadiem === locationMap[selectedLocation]
      )
    : allPackages;

  // Load plan
  useEffect(() => {
    const saved = localStorage.getItem("myTravelPlan");
    if (saved) {
      setMyPlan(JSON.parse(saved).map((p: any) => p.id));
    }
  }, []);

  const togglePlan = (pkg: any) => {
    const saved = JSON.parse(localStorage.getItem("myTravelPlan") || "[]");
    const updatedPlan = myPlan.includes(pkg.id)
      ? saved.filter((p: any) => p.id !== pkg.id)
      : [...saved, pkg];

    setMyPlan(updatedPlan.map((p: any) => p.id));
    localStorage.setItem("myTravelPlan", JSON.stringify(updatedPlan));
  };

  const isInPlan = (id: string) => myPlan.includes(id);

  return (
    <>
      <Navbar />

      {/* HERO */}
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

      {/* LIST ĐỊA ĐIỂM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
            Chọn địa điểm bạn muốn khám phá
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() =>
                  setSelectedLocation(selectedLocation === loc.id ? null : loc.id)
                }
                className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  selectedLocation === loc.id
                    ? "ring-4 ring-[#d4b872] ring-offset-4 scale-105"
                    : ""
                }`}
              >
                <img
                  src={loc.image}  // <- ảnh địa điểm FE, KHÔNG liên quan backend
                  alt={loc.name}
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

      {/* LIST TOUR */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
            {selectedLocation
              ? `Tour tại: ${
                  locations.find((l) => l.id === selectedLocation)?.name
                }`
              : "Tất cả gói dịch vụ du lịch Đà Nẵng"}
            <span className="block text-xl font-normal text-gray-600 mt-3">
              {displayedPackages.length} tour đang chờ bạn khám phá
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedPackages.map((pkg: any) => {
              const imgSrc =
                JSON.parse(pkg.hinhanh || "[]")[0]
                  ? `http://localhost:3000/${JSON.parse(pkg.hinhanh)[0]}`
                  : "/default.jpg";

              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-64">
                    <img
                      src={imgSrc}
                      alt={pkg.tengoi}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {pkg.tengoi}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      <span className="inline-block bg-[#d4b872]/10 text-[#d4b872] px-3 py-1 rounded-full text-sm">
                        ⏱ {formatDuration(pkg.thoiluongngay)}
                      </span>
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#d4b872]">
                        {pkg.giaFormat}
                      </span>

                      <button
                        onClick={() => togglePlan(pkg)}
                        className={`px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg ${
                          isInPlan(pkg.id)
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-[#d4b872] text-black hover:bg-[#e0c68a]"
                        }`}
                      >
                        {isInPlan(pkg.id) ? (
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

      <Footer />
    </>
  );
}
