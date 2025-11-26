// app/register/page.tsx
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Phone, Check } from "lucide-react";

export default function RegisterPage() {
  return (
    <>
      {/* Background giống hệt trang Login */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-amber-900/30" />
        <img
          src="/bc.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-thin tracking-widest italic text-white mb-2">
              SK Telecom Travel
            </h1>
            <p className="text-amber-400 text-sm tracking-wider">
              Tạo tài khoản để bắt đầu hành trình
            </p>
          </div>

          {/* Form Register - Card sang trọng */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10">
            <h2 className="text-3xl font-light text-white text-center mb-8 tracking-wide">
              Đăng ký tài khoản mới
            </h2>

            <form className="space-y-6">
              {/* Họ và tên */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-amber-400" />
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Mật khẩu */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Xác nhận mật khẩu */}
              <div className="relative">
                <Check className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                <input
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Checkbox điều khoản */}
              <label className="flex items-start gap-3 text-sm text-gray-300 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded accent-amber-500"
                  required
                />
                <span>
                  Tôi đồng ý với{" "}
                  <Link href="/terms" className="text-amber-400 hover:text-amber-300 underline">
                    Điều khoản dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link href="/privacy" className="text-amber-400 hover:text-amber-300 underline">
                    Chính sách bảo mật
                  </Link>
                </span>
              </label>

              {/* Nút Đăng ký */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-bold py-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                Tạo tài khoản
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-400">Hoặc</span>
              </div>
            </div>

            {/* Đăng nhập bằng Google / Phone */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 border border-white/30 rounded-xl text-white hover:bg-white/10 transition">
                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 border border-white/30 rounded-xl text-white hover:bg-white/10 transition">
                <Phone className="w-5 h-5" />
                Số điện thoại
              </button>
            </div>

            {/* Đã có tài khoản? */}
            <p className="text-center mt-8 text-gray-300">
              Đã có tài khoản?{" "}
              <Link
                href="/account/login"
                className="text-amber-400 font-semibold hover:text-amber-300 transition"
              >
                Đăng nhập ngay
              </Link>
            </p>
          </div>

          {/* Hotline hỗ trợ */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Cần hỗ trợ? Gọi ngay{" "}
              <a href="tel:0779998386" className="text-amber-400 font-bold">
                0779 998 386
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}