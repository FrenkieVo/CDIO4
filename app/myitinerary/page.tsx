// app/my-itinerary/page.tsx
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Trash2, ArrowLeft, Plus, Minus, Users } from "lucide-react";

export default function MyItineraryPage() {
  const [myPlan, setMyPlan] = useState<any[]>([]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("myTravelPlan");
    if (saved) {
      setMyPlan(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem("myTravelPlan");
      if (saved) setMyPlan(JSON.parse(saved));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const removeFromPlan = (id: string) => {
    const updated = myPlan.filter(pkg => pkg.id !== id);
    setMyPlan(updated);
    localStorage.setItem("myTravelPlan", JSON.stringify(updated));
  };

  const totalAmount = myPlan.reduce((sum, pkg) => {
    const price = parseInt(pkg.price.replace(/\D/g, "")) || 0;
    return sum + price * (adults + children * 0.7);
  }, 0);

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN") + "đ";

  if (myPlan.length === 0) {
    return (
      <>
        <Navbar />
        <section className="pt-60 pb-32 bg-gradient-to-br from-[#d4b872]/10 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-serif text-[#d4b872] mb-6">
              Chưa có lịch trình nào
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Hãy quay lại và thêm tour bạn yêu thích nhé!
            </p>
            <Link
              href="/plan"
              className="bg-[#d4b872] text-black px-12 py-6 rounded-full text-2xl font-bold hover:bg-[#e0c68a] transition shadow-xl inline-flex items-center gap-3"
            >
              <ArrowLeft className="w-7 h-7" />
              Quay lại lập kế hoạch
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="pt-60 pb-16 bg-gradient-to-br from-[#d4b872]/10 via-white to-[#d4b872]/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-serif text-[#d4b872] tracking-widest mb-4">
            Lịch trình của bạn
          </h1>
          <p className="text-2xl text-gray-700">
            {myPlan.length} hoạt động • Sẵn sàng đặt tour!
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Chọn số lượng khách */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-[#d4b872]" />
              Số lượng khách
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-3">Người lớn</p>
                <div className="flex items-center gap-4">
                  <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-3xl font-bold w-16 text-center">{adults}</span>
                  <button onClick={() => setAdults(adults + 1)} className="w-12 h-12 rounded-full bg-[#d4b872] text-black hover:bg-[#e0c68a] flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-600 mb-3">Trẻ em (dưới 12 tuổi)</p>
                <div className="flex items-center gap-4">
                  <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-3xl font-bold w-16 text-center">{children}</span>
                  <button onClick={() => setChildren(children + 1)} className="w-12 h-12 rounded-full bg-[#d4b872] text-black hover:bg-[#e0c68a] flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">Trẻ em được giảm 30%</p>
              </div>
            </div>
          </div>

          {/* Danh sách tour */}
          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            {myPlan.map((pkg, index) => (
              <div key={pkg.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all group">
                <div className="relative h-80">
                  <Image src={pkg.image || "/fallback.jpg"} alt={pkg.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-5 py-3 rounded-full font-bold text-[#d4b872] shadow-lg">
                    Ngày {index + 1}
                  </div>
                  {pkg.hot && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      HOT
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{pkg.name}</h3>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-[#d4b872]" />
                      <span className="text-lg">{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <span className="text-4xl font-bold text-[#d4b872]">{pkg.price}</span>
                      <span className="text-gray-500 ml-2">/khách</span>
                    </div>
                    <button
                      onClick={() => removeFromPlan(pkg.id)}
                      className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition flex items-center gap-2 text-sm"
                    >
                      <Trash2 className="w-5 h-5" /> Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TỔNG TIỀN + 2 NÚT (nhỏ gọn, đẹp mắt) */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Thông tin khách */}
              <div className="text-center sm:text-left">
                <p className="text-lg text-gray-600">
                  {adults} người lớn {children > 0 && `+ ${children} trẻ em`}
                </p>
                <p className="text-4xl font-bold text-[#d4b872] mt-2">
                  {formatPrice(totalAmount)}
                </p>
              </div>

              {/* 2 nút hành động */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/plan"
                  className="bg-gray-800 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-900 transition shadow-xl flex items-center justify-center gap-3"
                >
                  <Plus className="w-6 h-6" />
                  Thêm hoạt động
                </Link>
                <Link
                  href="/payment"
                  className="bg-[#d4b872] text-black px-16 py-5 rounded-full text-xl font-bold hover:bg-[#e0c68a] transition shadow-xl text-center"
                >
                  Thanh toán ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}