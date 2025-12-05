"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, LogIn, LogOut, User } from "lucide-react";
import Api from "@/app/Api/Api";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Load session an toàn
  useEffect(() => {
    if (typeof window !== "undefined") {
      const u = sessionStorage.getItem("user");
      if (u) setCurrentUser(JSON.parse(u));
    }
  }, []);

  const handleLogout = async () => {
    try {
      await Api.post("user/logout", { id: currentUser.id });
    } catch {}

    sessionStorage.clear();
    setCurrentUser(null);
    router.push("/");
  };

  const menuItems = [
    { name: "TRANG CHỦ", path: "/" },
    { name: "THÔNG TIN DU LỊCH", path: "/informationTravel" },
    { name: "QUÀ TẶNG", path: "/present" },
    { name: "DỊCH VỤ DU LỊCH", path: "/serviceTravel" },
    { name: "GÓP Ý", path: "/comment" },
    { name: "LIÊN HỆ", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-light">
      <div className="bg-[#d4b872] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link href="/" className="text-5xl tracking-wider italic font-thin">
            SK Telecom Travel
          </Link>

          <div className="flex items-center gap-6 text-sm">
            {currentUser ? (
              <div className="flex items-center gap-4">
                <span className="text-black font-semibold">
                  Xin chào, {currentUser.hoten}
                </span>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg text-white"
                >
                  <LogOut size={18} /> Đăng xuất
                </button>

                {/* Thêm nút quản lý tài khoản */}
                <button
                  onClick={() => router.push("/account/profile")}
                  className="flex items-center gap-2 bg-[#d4b872] hover:bg-[#e3c989] px-4 py-2 rounded-lg text-black font-medium transition"
                >
                  <User size={18} /> Quản lý tài khoản
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-6">
                <Link href="/account/register" className="flex items-center gap-2">
                  <User size={16} /> Đăng ký
                </Link>

                <Link href="/account/login" className="flex items-center gap-2">
                  <LogIn size={16} /> Đăng nhập
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="bg-black text-white border-t border-[#d4b872]/20">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <ul className="hidden lg:flex items-center flex-1 uppercase tracking-widest">
            {menuItems.map((item) => (
              <li key={item.path} className="px-6">
                <Link
                  href={item.path}
                  className={`py-3 block ${
                    pathname === item.path ? "text-[#d4b872]" : "hover:text-[#d4b872]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="hover:text-[#d4b872] transition">
            <Search size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
