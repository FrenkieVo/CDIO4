"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const pathname = usePathname();

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
      {/* Top Bar – Vàng đồng */}
      <div className="bg-[#d4b872] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-5xl tracking-wider italic font-thin hover:opacity-90 transition">
            SK Telecom Travel
          </Link>

          <div className="flex items-center gap-6 text-sm">
            {/* Ngôn ngữ */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <div className="w-8 h-6 border border-white/60 rounded-sm flex items-center justify-center">
                  <span className="text-xs font-bold">VN</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-2xl">
                  <button className="w-full text-left px-5 py-3 hover:bg-gray-100 font-medium">Tiếng Việt</button>
                  <button className="w-full text-left px-5 py-3 hover:bg-gray-100 font-medium">English</button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="tracking-wider opacity-90">HOTLINE</span>
              <a href="tel:0779998386" className="font-bold tracking-wider text-lg">0779 998 386</a>
            </div>

            <div className="h-5 w-px bg-white/40" />

            <div className="hidden md:flex items-center gap-6 tracking-wider">
              <Link href="/account/register" className="flex items-center gap-2 hover:text-white/80 transition">
                <User className="w-4 h-4" />
                <span className="font-medium">Đăng ký</span>
              </Link>
              <Link href="/account/login" className="flex items-center gap-2 hover:text-white/80 transition">
                <LogIn className="w-4 h-4" />
                <span className="font-medium">Đăng nhập</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black text-white border-t border-[#d4b872]/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* MENU CHÍNH – ĐẸP, ĐỀU, CHUẨN HÌNH */}
          <ul className="hidden lg:flex items-center justify-center flex-1 text-xs tracking-[0.25em] uppercase font-light">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.name} className="px-6 text-center">
                  <Link
                    href={item.path}
                    className={`relative block py-3 transition-all duration-500 ${
                      isActive ? "text-[#d4b872]" : "hover:text-[#d4b872]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 w-8 h-px bg-[#d4b872] -translate-x-1/2 transition-transform duration-500 ${
                        isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Search + CTA */}
          <div className="flex items-center gap-8 ml-8">
            <button className="hover:text-[#d4b872] transition">
              <Search className="w-6 h-6" />
            </button>

            <Link
              href="/plan"
              className="bg-[#d4b872] text-black px-10 py-4 rounded-sm font-bold tracking-widest hover:bg-[#e0c68a] transition-all duration-300 hover:scale-105 shadow-xl uppercase text-sm whitespace-nowrap"
            >
              BẮT ĐẦU LẬP KẾ HOẠCH
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;