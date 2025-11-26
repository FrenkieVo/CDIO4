// app/contact/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Tiêu đề Liên hệ */}
      <section className="pt-60 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#d4b872] tracking-widest">
            Liên hệ
          </h1>
        </div>
      </section>

      {/* Nội dung liên hệ – 2 cột đẹp như hình */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Cột 1: Trung tâm dịch vụ khách hàng */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-red-600 uppercase tracking-wider">
                Trung tâm dịch vụ khách hàng
              </h2>

              <div className="space-y-5 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4b872] mt-1 flex-shrink-0" />
                  <p> Tầng 5, Tòa nhà Phi Long, 52 Nguyễn Văn Linh, Quận Hải Châu, TP. Đà Nẵng</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4b872] flex-shrink-0" />
                  <p>
                    <strong>Điện thoại:</strong> (84)388 668 999 – Ext: 1315/1825
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4b872] flex-shrink-0" />
                  <p>
                    <strong>Tổng đài:</strong> 1800 8386
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d4b872] flex-shrink-0" />
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:vietravelplus@vietravel.com" className="text-blue-600 hover:underline">
                      sktelecom@skttravel.com
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-600 font-semibold">
                    <strong>Hotline:</strong> 0779 99 8386
                  </p>
                </div>
              </div>
            </div>

            {/* Cột 2: Liên kết hợp tác*/}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-red-600 uppercase tracking-wider">
                Liên kết hợp tác Win Together
              </h2>

              <div className="space-y-5 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4b872] mt-1 flex-shrink-0" />
                  <p>90A Nguyễn Thị Minh Khai, phường Võ Thị Sáu, quận 3, Tp. Hồ Chí Minh</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4b872] flex-shrink-0" />
                  <p>
                    <strong>Điện thoại:</strong> (84)388 668 999 – Ext: 1830
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4b872] flex-shrink-0" />
                  <p>
                    <strong>Liên hệ:</strong> Mr. Frenkie - Quản lý Kinh doanh Đối tác
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d4b872] flex-shrink-0" />
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:anhnn.mar@vietravel.com" className="text-blue-600 hover:underline">
                      tfrenkie.man@vietravel.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}