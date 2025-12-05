"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Api from "../Api/Api";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  { title: "Dịch vụ", slug: "dich-vu", img: "/IS1.jpg" },
  { title: "Review", slug: "review", img: "/IS2.jpg" },
  { title: "Tin tức", slug: "tin-tuc", img: "/HLS2.jpg" },
  { title: "Dịch vụ lưu trú", slug: "dich-vu-luu-tru", img: "/HLS3.jpg" },
  { title: "Kinh nghiệm", slug: "kinh-nghiem", img: "/HLS4.jpg" },
];

export default function InformationTravelPage() {
  const [active, setActive] = useState("");
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  const loadByDanhMuc = async (slug: string) => {
    setActive(slug);
    const res = await Api.get(`noidung/danhmuc/${slug}`);
    setData(res.data);
  };

  return (
    <>
      <Navbar />

      {/* Cùng khám phá */}
      <section className="pt-64 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center">
            <div className="h-px bg-[#d4b872] w-1/4 md:w-1/3" />
            <h1 className="text-4xl md:text-6xl font-serif text-[#d4b872] whitespace-nowrap animate-fadeUp">
              Cùng khám phá
            </h1>
            <div className="h-px bg-[#d4b872] w-1/4 md:w-1/3" />
          </div>
        </div>
      </section>

      {/* GRID danh mục */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
            {CATEGORIES.map((item) => (
              <button
                key={item.slug}
                onClick={() => loadByDanhMuc(item.slug)}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  active === item.slug && "ring-4 ring-[#d4b872]"
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 w-full text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest">
                    {item.title.toUpperCase()}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DANH MỤC HIỂN THỊ BÀI VIẾT */}
      {active && (
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-5xl font-serif text-gray-900 text-center uppercase tracking-[6px]">
              {CATEGORIES.find((c) => c.slug === active)?.title}
            </h2>
            <div className="w-24 h-1 bg-[#d4b872] mx-auto mt-4 rounded-full"></div>

            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {data.length === 0 ? (
                <p className="text-center w-full text-gray-500">Chưa có nội dung nào.</p>
              ) : (
                data.map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer bg-white border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="h-56 overflow-hidden">
                      {(() => {
                        let url = "";
                        try {
                          const arr = JSON.parse(item.hinhanh);
                          if (Array.isArray(arr) && arr.length > 0) {
                            url = arr[0].startsWith("http")
                              ? arr[0]
                              : `http://localhost:3000${arr[0]}`;
                          }
                        } catch {}

                        return url ? (
                          <img src={url} className="w-full object-cover h-56" />
                        ) : (
                          <div className="bg-gray-200 h-56 flex items-center justify-center">Không có ảnh</div>
                        );
                      })()}
                    </div>

                    <div className="p-6 space-y-3">
                      <p className="text-sm uppercase tracking-widest text-gray-500">
                        {item.danhMuc}
                      </p>

                      <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-[#d4b872] transition">
                        {item.tieude}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.mota}
                      </p>

                      <button
                        className="mt-4 inline-block text-[#d4b872] font-semibold tracking-wide hover:tracking-widest transition-all"
                        onClick={() => router.push(`/informationTravel/${item.id}`)}
                      >
                        Xem chi tiết →
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
