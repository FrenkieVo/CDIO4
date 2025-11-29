// app/(admin)/layout.tsx
"use client"; // BẮT BUỘC PHẢI CÓ DÒNG NÀY ĐỂ DÙNG usePathname

import Link from "next/link";
import { usePathname } from "next/navigation"; // THÊM DÒNG NÀY
import { Home, Users, MessageSquare, Package, Box, FileText } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // LẤY ĐƯỜNG DẪN HIỆN TẠI

  const menu = [
    { href: "/admin", icon: Home, label: "Trang chủ" },
    { href: "/admin/users", icon: Users, label: "Quản lý tài khoản" },
    { href: "/admin/comments", icon: MessageSquare, label: "Quản lý góp ý" },
    { href: "/admin/tours", icon: Package, label: "Quản lý tour" },
    { href: "/admin/bookings", icon: Box, label: "Quản lý gói dịch vụ du lịch" },
    { href: "/admin/contentss", icon: FileText, label: "Quản lý nội dung" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-80 bg-gray-500 text-white">
        <div className="p-8">
          <h1 className="text-4xl font-bold">Quản lý</h1>
        </div>
        <nav className="px-6 space-y-2">
          {menu.map((item) => {
            const isActive = pathname === item.href; // KIỂM TRA TRANG HIỆN TẠI

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-6 py-5 rounded-xl text-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-gray-800 shadow-lg"
                    : "hover:bg-gray-600 hover:bg-opacity-80"
                }`}
              >
                <item.icon className={`w-8 h-8 ${isActive ? "text-gray-800" : "text-white"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm px-10 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold">Bảng điều khiển</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Admin Du lịch</span>
            <div className="w-12 h-12 bg-gray-300 rounded-full border-4 border-white shadow-lg"></div>
          </div>
        </header>
        <main className="p-10 bg-gray-50 min-h-full">
          {children}
        </main>
      </div>
    </div>
  );
}