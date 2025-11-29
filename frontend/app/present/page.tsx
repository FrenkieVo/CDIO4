// app/present/page.tsx
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PresentPage() {
  return (
    <>
      <Navbar />

      {/* Hero Title */}
      <section className="pt-60 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#d4b872] tracking-wider">
            Quà tặng hội viên
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Danh sách các loại quà tặng hấp dẫn như sau:
          </p>
        </div>
      </section>

      {/* Danh sách quà tặng */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* 1. Túi vải Canvas */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64">
                <Image
                  src="/G1.jpg"
                  alt="Túi vải Canvas Vietravel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">01 Túi vải Canvas</h3>
              </div>
            </div>

            {/* 2. Rượu vang */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64">
                <Image
                  src="/G2.jpg"
                  alt="Rượu vang Chile MontGras"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  01 Rượu vang Chile MontGras Cabernet Sauvignon
                </h3>
              </div>
            </div>

            {/* 3. Voucher 100k */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64">
                <Image
                  src="/G3.jpg"
                  alt="Voucher du lịch 100.000đ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 text-3xl">100.000<small className="text-lg">VNĐ</small></h3>
                <p className="text-gray-700 mt-2">Voucher Du lịch</p>
              </div>
            </div>

            {/* 4. Voucher 200k */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64">
                <Image
                  src="/G3.jpg"
                  alt="Voucher du lịch 200.000đ"
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 text-3xl">200.000<small className="text-lg">VNĐ</small></h3>
                <p className="text-gray-700 mt-2">Voucher Du lịch</p>
              </div>
            </div>

            {/* 5. Voucher 300k */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64">
                <Image
                  src="/G3.jpg"
                  alt="Voucher du lịch 300.000đ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 text-3xl">300.000<small className="text-lg">VNĐ</small></h3>
                <p className="text-gray-700 mt-2">Voucher Du lịch</p>
              </div>
            </div>

            {/* 6. Voucher 400k */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64">
                <Image
                  src="/G3.jpg"
                  alt="Voucher du lịch 400.000đ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 text-3xl">400.000<small className="text-lg">VNĐ</small></h3>
                <p className="text-gray-700 mt-2">Voucher Du lịch</p>
              </div>
            </div>

            {/* 7. Voucher 500k */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64">
                <Image
                  src="/G3.jpg"
                  alt="Voucher du lịch 500.000đ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 text-3xl">500.000<small className="text-lg">VNĐ</small></h3>
                <p className="text-gray-700 mt-2">Voucher Du lịch</p>
              </div>
            </div>

            {/* 8. Voucher 600k */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-64">
                <Image
                  src="/G3.jpg"
                  alt="Voucher du lịch 600.000đ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 text-3xl">600.000<small className="text-lg">VNĐ</small></h3>
                <p className="text-gray-700 mt-2">Voucher Du lịch</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}