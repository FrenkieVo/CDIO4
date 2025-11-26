// app/payment/page.tsx
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Copy, CheckCircle, QrCode, Wallet } from "lucide-react";

export default function PaymentPage() {
  const [plan, setPlan] = useState<any[]>([]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "wallet">("bank");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("myTravelPlan");
    if (saved) {
      const data = JSON.parse(saved);
      setPlan(data);
    }
    // Có thể lưu thêm số lượng khách vào localStorage ở trang trước nếu cần
  }, []);

  const totalAmount = plan.reduce((sum, pkg) => {
    const price = parseInt(pkg.price.replace(/\D/g, "")) || 0;
    return sum + price * (adults + children * 0.7);
  }, 0);

  const formatPrice = (num: number) => num.toLocaleString("vi-VN") + "đ";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (plan.length === 0) {
    return (
      <>
        <Navbar />
        <div className="pt-44 text-center">
          <p className="text-3xl text-gray-600">Không tìm thấy lịch trình!</p>
          <Link href="/plan" className="text-[#d4b872] underline mt-6 inline-block">Quay lại lập kế hoạch</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="pt-44 pb-20 bg-gradient-to-br from-[#d4b872]/10 via-white to-[#d4b872]/5">
        <div className="max-w-5xl mx-auto px-6">

          {/* Nút quay lại */}
          <Link
            href="/my-itinerary"
            className="inline-flex items-center gap-2 text-[#d4b872] hover:underline mb-8 text-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Quay lại lịch trình
          </Link>

          <h1 className="text-5xl md:text-6xl font-serif text-[#d4b872] text-center mb-4">
            Thanh toán tour
          </h1>
          <p className="text-2xl text-center text-gray-700 mb-12">
            Vui lòng chọn phương thức thanh toán
          </p>

          {/* Chọn phương thức thanh toán */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* QR Ngân hàng */}
            <button
              onClick={() => setPaymentMethod("bank")}
              className={`rounded-3xl p-8 transition-all border-4 ${
                paymentMethod === "bank"
                  ? "border-[#d4b872] bg-[#d4b872]/5 shadow-2xl"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <QrCode className="w-12 h-12 text-[#d4b872]" />
                <div className="text-left">
                  <p className="text-2xl font-bold">Chuyển khoản QR</p>
                  <p className="text-gray-600">Vietcombank • Techcombank • MB Bank</p>
                </div>
              </div>
            </button>

            {/* Ví điện tử */}
            <button
              onClick={() => setPaymentMethod("wallet")}
              className={`rounded-3xl p-8 transition-all border-4 ${
                paymentMethod === "wallet"
                  ? "border-[#d4b872] bg-[#d4b872]/5 shadow-2xl"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <Wallet className="w-12 h-12 text-[#d4b872]" />
                <div className="text-left">
                  <p className="text-2xl font-bold">Ví điện tử</p>
                  <p className="text-gray-600">Momo • ZaloPay • ShopeePay</p>
                </div>
              </div>
            </button>
          </div>

          {/* Nội dung thanh toán */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">

            {paymentMethod === "bank" ? (
              <>
                <h2 className="text-3xl font-bold text-center mb-10">Quét mã QR để thanh toán</h2>

                {/* QR Code */}
                <div className="flex justify-center mb-10">
                  <div className="bg-gray-100 p-8 rounded-3xl shadow-inner">
                    <Image
                      src="/qrbank.jpg" 
                      alt="QR Thanh toán"
                      width={300}
                      height={300}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Thông tin chuyển khoản */}
                <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600">Ngân hàng</p>
                      <p className="text-xl font-bold">MB BANK - CN Đà Nẵng</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Chủ tài khoản</p>
                      <p className="text-xl font-bold">CÔNG TY TNHH SK TELECOM TRAVEL</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Số tài khoản</p>
                      <div className="flex items-center gap-3">
                        <p className="text-2xl font-bold">0905 876 693</p>
                        <button
                          onClick={() => copyToClipboard("0123456789")}
                          className="text-[#d4b872] hover:text-[#b89b5e]"
                        >
                          {copied ? <CheckCircle className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600">Nội dung chuyển khoản</p>
                      <div className="flex items-center gap-3">
                        <p className="text-xl font-bold text-[#d4b872]">TOUR{Date.now().toString().slice(-6)}</p>
                        <button
                          onClick={() => copyToClipboard(`TOUR${Date.now().toString().slice(-6)}`)}
                          className="text-[#d4b872] hover:text-[#b89b5e]"
                        >
                          <Copy className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-center mb-10">Thanh toán qua ví điện tử</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Momo */}
                  <div className="text-center">
                    <div className="bg-pink-50 rounded-2xl p-8 mb-6">
                      <Image src="/qrmomo.jpg" alt="Momo" width={120} height={120} className="mx-auto" />
                    </div>
                    <p className="text-xl font-bold mb-4">Momo</p>
                    <p className="text-3xl font-bold text-pink-600">{formatPrice(totalAmount)}</p>
                    <button className="mt-6 bg-pink-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition">
                      Mở Momo thanh toán
                    </button>
                  </div>

                  {/* ZaloPay */}
                  <div className="text-center">
                    <div className="bg-blue-50 rounded-2xl p-8 mb-6">
                      <Image src="/qrzalopay.jpg" alt="ZaloPay" width={120} height={120} className="mx-auto" />
                    </div>
                    <p className="text-xl font-bold mb-4">ZaloPay</p>
                    <p className="text-3xl font-bold text-blue-600">{formatPrice(totalAmount)}</p>
                    <button className="mt-6 bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition">
                      Mở ZaloPay thanh toán
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Tổng tiền cuối cùng */}
            <div className="mt-12 bg-gradient-to-r from-[#d4b872]/10 to-[#d4b872]/5 rounded-3xl p-8 text-center">
              <p className="text-2xl text-gray-700 mb-3">Số tiền cần thanh toán</p>
              <p className="text-5xl md:text-6xl font-bold text-[#d4b872]">
                {formatPrice(totalAmount)}
              </p>
              <p className="text-lg text-gray-600 mt-4">
                {plan.length} tour • {adults + children} khách
              </p>
            </div>

            <div className="mt-10 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Sau khi thanh toán thành công, chúng tôi sẽ liên hệ xác nhận trong vòng <strong>5 phút</strong>
              </p>
              <div className="bg-green-100 text-green-800 px-8 py-4 rounded-full inline-flex items-center gap-3 font-bold">
                <CheckCircle className="w-8 h-8" />
                Thanh toán an toàn – Bạn sẽ mất 100% nếu hủy tour sau khi thanh toán
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}