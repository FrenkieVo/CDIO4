"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users, ArrowLeft } from "lucide-react";

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

type TourDetail = {
  id: number;
  tengoi: string;
  gia: number;
  giaFormat: string;
  thoiluongngay: string;
  mota?: string;
  trangthai?: string;
  sochoconlai?: number;
  hinhanh?: string;
  Diadiem?: {
    tendiadiem: string;
  };
};

export default function ServiceTravelDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [tour, setTour] = useState<TourDetail | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3000/api/goidichvu/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTour(data);

        // Parse mảng ảnh từ BE
        if (data.hinhanh) {
          try {
            const arr = JSON.parse(data.hinhanh);
            const fullUrls = arr.map(
              (p: string) => `http://localhost:3000/${p}`
            );
            setImages(fullUrls);
          } catch {
            setImages([]);
          }
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-500">Đang tải tour...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!tour) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-2xl text-gray-600">Không tìm thấy tour.</p>
          <button
            onClick={() => router.push("/serviceTravel")}
            className="px-6 py-3 rounded-full bg-[#d4b872] text-black font-semibold"
          >
            Quay lại danh sách tour
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const mainImage = images[0] || "/default.jpg";

  return (
    <>
      <Navbar />

      {/* ẢNH LỚN + INFO NGẮN */}
{/* FIX: Đẩy toàn bộ nội dung xuống né header */}
    <div className="pt-[150px]">
{/* ẢNH LỚN + INFO NGẮN */}
      <section className="w-full">
        <div className="relative w-full h-[450px] overflow-hidden">
          <img
            src={mainImage}
            alt={tour.tengoi}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl text-white">
            <button
              onClick={() => router.push("/serviceTravel")}
              className="mb-3 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại danh sách tour
            </button>

            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {tour.tengoi}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm">
              <span>⏱ {formatDuration(tour.thoiluongngay)}</span>
              <span>📍 {tour.Diadiem?.tendiadiem}</span>
              <span>👥 {tour.sochoconlai} chỗ còn lại</span>
            </div>
          </div>
        </div>
      </section>





      {/* NỘI DUNG CHI TIẾT */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Cột trái: mô tả + gallery */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Mô tả chi tiết</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {tour.mota || "Chưa có mô tả cho tour này."}
            </p>

            {images.length > 1 && (
              <>
                <h3 className="mt-8 mb-3 font-semibold text-lg">
                  Hình ảnh khác
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.slice(1).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Ảnh ${idx + 2}`}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Cột phải: giá + info nhanh */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col gap-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">Giá từ</p>
              <p className="text-3xl font-bold text-[#d4b872]">
                {tour.giaFormat}
              </p>
              <p className="text-gray-500 text-sm mt-1">/ khách</p>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span>Thời lượng</span>
                <span className="font-semibold">
                  {formatDuration(tour.thoiluongngay)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Địa điểm</span>
                <span className="font-semibold">
                  {tour.Diadiem?.tendiadiem || "Địa điểm khác"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Số chỗ còn lại</span>
                <span className="font-semibold">
                  {tour.sochoconlai ?? "Đang cập nhật"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Trạng thái</span>
                <span className="font-semibold">
                  {tour.trangthai === "active"
                    ? "Đang mở bán"
                    : tour.trangthai === "soldout"
                    ? "Hết chỗ"
                    : "Tạm ngưng"}
                </span>
              </div>
            </div>

            <button className="mt-4 w-full py-3 rounded-full bg-[#d4b872] text-black font-semibold hover:bg-[#e0c68a] transition">
              Đặt tour ngay
            </button>
          </div>
        </div>
      </section>
</div>
      <Footer />
    </>
  );
}


