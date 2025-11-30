"use client";
// app/login/page.tsx
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Api from "../../Api/Api"
export default function LoginPage() {
  const router = useRouter();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  //kiểm tra checkbox
  const [accept, setAccept] = useState(false);
  // Xử lý nhập input
  function hasInput(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((state) => ({ ...state, [name]: value }));
  }

  // Submit form
  function hasFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let errs: Record<string, string> = {};
    let flag = true;

    if (input.email == "") {
      errs.email = "Email không được để trống";
      flag = false;
    }

    if (input.password == "") {
      errs.password = "Mật khẩu không được để trống";
      flag = false;
    }if (!accept) {
      errs.accept = "Bạn phải đồng ý với điều khoản dịch vụ!";
      flag = false;
    }

    if (!flag) {
      setErrors(errs);
      return;
    }else{
      const data = {
        email: input.email,
        matkhau: input.password,
      }
    // Gửi API login
    Api.post("/user/login",data) 
    .then((response: any) => {
      if(response.data.errors){
      // đưa data qua bên api rồi be nó kiểm tra
      setErrors(response.data.errors);
      }else{
            console.log(response);

            // Lưu token & user vào localStorage
            localStorage.setItem("save", JSON.stringify(response.data));

            alert("Đăng nhập thành công!");

            const role = response.data.user?.Role_id;

            // Nếu role === 3 => chuyển tới trang admin
            if (role == 1) {
              router.push("/admin");
            } else if (role == 3) {
              router.push("/");
            }
            }
      })
      .catch((err: any) => {
        console.error(err);
        setErrors({ login: "Email hoặc mật khẩu không đúng" });
      });
    }
  }

  return (
    <>
      {/* Background video hoặc hình nền đẹp (tùy chọn) */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-amber-900/30" />
        <img
          src="/bc.jpg" // ← thay bằng ảnh biển/hòn đảo sang trọng của bạn
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
              Đăng nhập để tiếp tục hành trình
            </p>
          </div>

          {/* Form Login - Card sang trọng */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10">
            <h2 className="text-3xl font-light text-white text-center mb-8 tracking-wide">
              Chào mừng trở lại
            </h2>
              {errors.login && (
                <p className="text-red-400 text-sm -mt-3">{errors.login}</p>
              )}
            <form className="space-y-6" onSubmit={hasFormSubmit}>
              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 transition-all duration-300"
                  onChange={hasInput}
                  name="email"
                  value={input.email}
                />
                {errors.email && (
                    <p className="text-red-400 text-sm mt-1"> {errors.email}</p>
                  )}
              </div>

              {/* Mật khẩu */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 transition-all duration-300"
                  onChange={hasInput}
                  name="password"
                  value={input.password}
                />
                {errors.password && (
                    <p className="text-red-400 text-sm mt-1"> {errors.password}</p>
                  )}
              </div>

              {/* Nhớ mật khẩu & Quên mật khẩu */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded accent-amber-500" checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}/>
                  <span>Nhớ mật khẩu</span>
                </label>
                
                <Link
                  href="/forgot-password"
                  className="text-amber-400 hover:text-amber-300 transition"
                >
                  Quên mật khẩu?
                </Link>
                
              </div>
              {errors.accept && (
                  <p className="text-red-400 text-sm mt-1"> {errors.accept}</p>
                )}  
              {/* Nút Đăng nhập */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-bold py-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                Đăng nhập
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

            {/* Đăng ký */}
            <p className="text-center mt-8 text-gray-300">
              Chưa có tài khoản?{" "}
              <Link
                href="/account/register"
                className="text-amber-400 font-semibold hover:text-amber-300 transition"
              >
                Đăng ký ngay
              </Link>
            </p>
          </div>

          {/* Hotline hỗ trợ nhỏ ở dưới */}
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