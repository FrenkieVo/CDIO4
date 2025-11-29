import React from "react";
import { Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12"> {/* Giảm từ py-16 → py-12 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10"> {/* Giảm gap-12 → gap-10 */}
          {/* Cột trái + giữa */}
          <div className="lg:col-span-2 space-y-8"> {/* Giảm space-y-10 → space-y-8 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              {/* Cột 1 */}
              <div>
                <h4 className="text-white font-serif text-lg mb-4">Về SK Telecom Travel.com</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-amber-500 transition">Chúng tôi</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition">SK Telecom Travel</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition">Quy chế hoạt động</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-serif text-lg mb-4">Thông Tin Cần Biết</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-amber-500 transition">Điều kiện & Điều khoản</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition">Chính sách bảo mật</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition">Câu hỏi thường gặp</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-serif text-lg mb-4">Đối Tác & Liên kết</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-amber-500 transition">Vietnam Airlines</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition">VNExpress</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-serif text-lg mb-4">Được chứng nhận</h4>
                <ul className="space-y-3 text-sm">
                  <li>Đã đăng ký với Bộ Công Thương</li>
                  <li>Chứng nhận TIDS - IATA</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-sm space-y-4"> {/* pt-8 → pt-6 */}
              <div className="flex flex-wrap gap-6 items-center text-amber-600 text-sm">
                <span>Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam</span>
                <span>•</span>
                <span>Best Companies to Work for in Asia</span>
                <span>•</span>
                <span>APEA Inspirational Brand Award</span>
              </div>

              <div className="space-y-2 text-gray-500 text-xs leading-relaxed">
                <p>ĐKKD: 0312788481, ngày cấp: 21/10/2025, sở KHĐT Thành Phố Hồ Chí Minh</p>
                <p>Đà Nẵng: Tầng 5, Tòa nhà Phi Long, 52 Nguyễn Văn Linh, Quận Hải Châu, TP. Đà Nẵng</p>
                <p>Chi nhánh 2 – Đà Nẵng: Tầng 3, 297 Phan Châu Trinh, Quận Hải Châu, TP. Đà Nẵng</p>
                <p>Chi nhánh 3 – Đà Nẵng: Số 2 An Thượng 32, Phường Mỹ An, Quận Ngũ Hành Sơn, TP. Đà Nẵng</p>
              </div>

              <div className="flex items-center gap-6 pt-3 text-sm">
                <span>Like để cập nhật cẩm nang du lịch</span>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-xl">f</a>
                <span>tour@sktelecomtravel.com</span>
              </div>
            </div>
          </div>

          {/* Hotline */}
          <div className="text-center lg:text-right space-y-6">
            <div>
              <p className="text-white text-lg mb-2">Cần trợ giúp? Hãy gọi ngay</p>
              <a
                href="tel:0779998386"
                className="inline-flex items-center gap-3 text-4xl font-bold text-amber-500 hover:text-amber-400 transition group"
              >
                <Phone className="w-10 h-10 group-hover:scale-110 transition" />
                0779 998 386
              </a>
              <p className="flex items-center justify-center lg:justify-end gap-2 mt-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5" />
                7h30 – 21h00 (Tất cả các ngày trong tuần)
                <br/>
                Trừ Thứ 7 và Chủ Nhật
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © 2025 Luxury Vietnam Travel. All rights reserved. Crafted with passion in Vietnam.
        </div>
      </div>
    </footer>
  );
};

export default Footer;