"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  // 🟢 Load dữ liệu chi tiết
  useEffect(() => {
    fetch(`http://localhost:3000/api/noidung/${id}`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Lỗi load chi tiết:", err));
  }, [id]);

  // 🟢 Xử lý ảnh lỗi trong nội dung HTML
  useEffect(() => {
    if (!data) return;

    setTimeout(() => {
      const imgs = document.querySelectorAll(".detail-content img");

      imgs.forEach((img: any) => {
        img.onerror = () => {
          console.warn("Ảnh lỗi:", img.src);
          img.style.display = "none"; // ẩn ảnh bị hỏng
          // hoặc hiện ảnh fallback:
          // img.src = "/no-image.jpg"
        };
      });
    }, 100);
  }, [data]);

  if (!data) return <p className="p-10 text-center">Đang tải...</p>;

  // ---- Xử lý ảnh đại diện ----
  let avatarUrl: string | null = null;
  try {
    if (data.hinhanh) {
      const arr = JSON.parse(data.hinhanh);
      if (Array.isArray(arr) && arr.length > 0) {
        avatarUrl = arr[0].startsWith("http")
          ? arr[0]
          : `http://localhost:3000${arr[0]}`;
      }
    }
  } catch {}

  return (
    <>
      <Navbar />

      <div className="mt-60 max-w-6xl mx-auto mb-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Nội dung chi tiết */}
        <div className="md:col-span-2 space-y-6 detail-content">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
            {data.tieude}
          </h1>

          <p className="text-gray-500 text-sm">{data.createdAt?.slice(0, 10)}</p>

          {/* Ảnh đại diện */}
          {avatarUrl && (
            <img
              src={avatarUrl}
              className="w-full rounded-xl shadow-lg object-cover max-h-[450px]"
            />
          )}

          {/* Nội dung HTML */}
          <div
            className="prose lg:prose-xl max-w-none detail-content"
            dangerouslySetInnerHTML={{ __html: data.noidung }}
          />
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 sticky top-32">
          <h3 className="font-bold text-xl border-b pb-2">Tin liên quan</h3>
          <p className="text-gray-500 text-sm">Đang phát triển...</p>
        </aside>
      </div>

      <Footer />
    </>
  );
}
