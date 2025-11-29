// app/informationTravel/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function InformationTravelPage() {
  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />

      {/* CÙNG KHÁM PHÁ */}
      <section className="pt-64 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center">
            <div className="h-px bg-[#d4b872] w-full" />
            <h1 className="mx-10 text-5xl md:text-7xl font-serif text-[#d4b872] tracking-widest whitespace-nowrap">
              Cùng khám phá
            </h1>
            <div className="h-px bg-[#d4b872] w-full" />
          </div>
        </div>
      </section>

      {/* 6 Ô LỚN – TIÊU ĐỀ ĐÃ CHÍNH GIỮA */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Dịch vụ", slug: "dich-vu", img: "/IS1.jpg" },
              { title: "Review", slug: "review", img: "/IS2.jpg" },
              { title: "Việc làm", slug: "viec-lam", img: "/IS3.jpg" },
              { title: "Tin tức", slug: "tin-tuc", img: "/HLS2.jpg" },
              { title: "Dịch vụ lưu trú", slug: "dich-vu-luu-tru", img: "/HLS3.jpg" },
              { title: "Kinh nghiệm", slug: "kinh-nghiem", img: "/HLS4.jpg" },
            ].map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.slug)}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-center pb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wider drop-shadow-2xl text-center">
                      {item.title.toUpperCase()}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6 PHẦN – ĐẦY ĐỦ NỘI DUNG, TIÊU ĐỀ + NÚT ĐỀU CHÍNH GIỮA */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">

          {/* 1. DỊCH VỤ */}
          <div id="dich-vu" className="scroll-mt-32 text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 relative inline-block">
              Dịch vụ
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-px bg-[#d4b872]" />
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Tour Đà Nẵng 5N4Đ – Giảm ngay 300.000đ", date: "24/11/2025", views: "892", desc: "Khuyến mãi đặc biệt chỉ áp dụng đến hết tháng 12/2025" },
                { title: "Tour Phú Quốc 4N3Đ bay thẳng Vietnam Airlines", date: "23/11/2025", views: "756", desc: "Bao gồm vé máy bay khứ hồi + resort 4 sao" },
                { title: "Tour Hà Nội – Hạ Long – Sapa 6N5Đ", date: "22/11/2025", views: "689", desc: "Trải nghiệm du thuyền 5 sao vịnh Hạ Long" },
                { title: "Tour miền Tây 3N2Đ – Cần Thơ, Châu Đốc", date: "21/11/2025", views: "543", desc: "Khám phá chợ nổi Cái Răng & rừng tràm Trà Sư" },
                { title: "Tour Nha Trang – Vinpearl Land 4N3Đ", date: "20/11/2025", views: "498", desc: "Vé VinWonders + buffet 5 sao miễn phí" },
                { title: "Tour Hồ Chí Minh – Vũng Tàu 3N2Đ", date: "19/11/2025", views: "412", desc: "Kết hợp tham quan thành phố & tắm biển" },
              ].map((item, i) => (
                <article key={i} className="flex gap-6 group cursor-pointer hover:bg-gray-50 p-4 rounded-2xl transition">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <Image src="/KN1.jpg" alt={item.title} width={128} height={128} className="object-cover group-hover:scale-110 transition" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#d4b872] transition line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">{item.date} • {item.views} lượt xem</p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <Link
                href="https://vnexpress.net/du-lich"
                className="inline-flex items-center gap-3 bg-[#d4b872] text-black px-10 py-4 rounded-full font-bold tracking-wider hover:bg-[#e0c68a] transition shadow-lg hover:shadow-xl"
              >
                XEM THÊM <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 2. REVIEW */}
          <div id="review" className="scroll-mt-32 text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 relative inline-block">
              Review
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-px bg-[#d4b872]" />
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Sapa - Kinh nghiệm du lịch bụi tự túc, tiết kiệm 2025", date: "20/11/2025", views: "3.2k", desc: "Chỉ 4-6 triệu cho 4 ngày 3 đêm, săn mây & chinh phục Fansipan" },
                { title: "Đà Lạt 3N2Đ: Ở đâu đẹp, ăn gì ngon, chơi gì mới nhất?", date: "19/11/2025", views: "2.8k", desc: "Homestay view đồi thông, cà phê mới mở & đường hoa đẹp nhất" },
                { title: "Hội An – Làng rau Trà Quế & những điều chưa kể", date: "18/11/2025", views: "2.1k", desc: "Trải nghiệm làm nông dân, chèo thuyền thúng & học nấu ăn" },
                { title: "Phú Quốc 2025: Cập nhật giá vé cáp treo Hòn Thơm mới nhất", date: "17/11/2025", views: "1.9k", desc: "So sánh giá combo, review Sun World & mẹo săn vé rẻ" },
                { title: "Hà Giang mùa tam giác mạch – Chụp ảnh đẹp ở đâu?", date: "16/11/2025", views: "1.7k", desc: "Cung đường đèo Mã Pí Lèng, cột cờ Lũng Cú & bản Lô Lô" },
                { title: "Nha Trang đêm: Chơi gì, ăn gì khi thành phố lên đèn?", date: "15/11/2025", views: "1.5k", desc: "Chợ đêm, VinWonders về đêm & quán hải sản ngon nhất" },
              ].map((item, i) => (
                <article key={i} className="flex gap-6 group cursor-pointer hover:bg-gray-50 p-4 rounded-2xl transition">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <Image src="/KN1.jpg" alt={item.title} width={128} height={128} className="object-cover group-hover:scale-110 transition" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#d4b872] transition line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.date} • {item.views} lượt xem</p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <Link href="https://vnexpress.net/du-lich" className="inline-flex items-center gap-3 bg-[#d4b872] text-black px-10 py-4 rounded-full font-bold tracking-wider hover:bg-[#e0c68a] transition shadow-lg hover:shadow-xl">
                XEM THÊM <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 3. VIỆC LÀM */}
          <div id="viec-lam" className="scroll-mt-32 text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 relative inline-block">
              Việc làm
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-px bg-[#d4b872]" />
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Sapa - Kinh nghiệm du lịch bụi tự túc, tiết kiệm 2025", date: "20/11/2025", views: "3.2k", desc: "Chỉ 4-6 triệu cho 4 ngày 3 đêm, săn mây & chinh phục Fansipan" },
                { title: "Đà Lạt 3N2Đ: Ở đâu đẹp, ăn gì ngon, chơi gì mới nhất?", date: "19/11/2025", views: "2.8k", desc: "Homestay view đồi thông, cà phê mới mở & đường hoa đẹp nhất" },
                { title: "Hội An – Làng rau Trà Quế & những điều chưa kể", date: "18/11/2025", views: "2.1k", desc: "Trải nghiệm làm nông dân, chèo thuyền thúng & học nấu ăn" },
                { title: "Phú Quốc 2025: Cập nhật giá vé cáp treo Hòn Thơm mới nhất", date: "17/11/2025", views: "1.9k", desc: "So sánh giá combo, review Sun World & mẹo săn vé rẻ" },
                { title: "Hà Giang mùa tam giác mạch – Chụp ảnh đẹp ở đâu?", date: "16/11/2025", views: "1.7k", desc: "Cung đường đèo Mã Pí Lèng, cột cờ Lũng Cú & bản Lô Lô" },
                { title: "Nha Trang đêm: Chơi gì, ăn gì khi thành phố lên đèn?", date: "15/11/2025", views: "1.5k", desc: "Chợ đêm, VinWonders về đêm & quán hải sản ngon nhất" },
              ].map((item, i) => (
                <article key={i} className="flex gap-6 group cursor-pointer hover:bg-gray-50 p-4 rounded-2xl transition">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <Image src="/KN1.jpg" alt={item.title} width={128} height={128} className="object-cover group-hover:scale-110 transition" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#d4b872] transition line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.date} • {item.views} lượt xem</p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <Link href="https://vnexpress.net/du-lich" className="inline-flex items-center gap-3 bg-[#d4b872] text-black px-10 py-4 rounded-full font-bold tracking-wider hover:bg-[#e0c68a] transition shadow-lg hover:shadow-xl">
                XEM THÊM <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 4. TIN TỨC */}
          <div id="tin-tuc" className="scroll-mt-32 text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 relative inline-block">
              Tin tức
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-px bg-[#d4b872]" />
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Chính thức mở lại đường bay quốc tế từ 01/01/2026", date: "24/11/2025", views: "5.1k", desc: "Việt Nam đón khách quốc tế không cần cách ly, miễn visa 45 ngày" },
                { title: "Visa Việt Nam điện tử 2025: Điều kiện & thủ tục mới nhất", date: "23/11/2025", views: "4.8k", desc: "Hỗ trợ 90 quốc gia, thời hạn lên đến 3 tháng, làm online 24/7" },
                { title: "Top 10 điểm đến hot nhất Đông Nam Á 2026 theo CNN", date: "22/11/2025", views: "3.9k", desc: "Việt Nam có 3 đại diện: Phú Quốc, Hội An và Hà Nội" },
                { title: "Hàng không Việt tăng tần suất bay Tết Nguyên Đán 2026", date: "21/11/2025", views: "3.2k", desc: "Thêm 500 chuyến bay nội địa, giá vé vẫn giữ nguyên" },
                { title: "Cảnh báo lừa đảo tour giá rẻ dịp cuối năm", date: "20/11/2025", views: "2.9k", desc: "Nhiều website giả mạo, nhận đặt cọc rồi biến mất" },
                { title: "Du lịch bền vững 2026: Xu hướng toàn cầu", date: "19/11/2025", views: "2.5k", desc: "Không xả rác, ưu tiên phương tiện công cộng, bảo vệ môi trường" },
              ].map((item, i) => (
                <article key={i} className="flex gap-6 group cursor-pointer hover:bg-gray-50 p-4 rounded-2xl transition">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <Image src="/KN1.jpg" alt={item.title} width={128} height={128} className="object-cover group-hover:scale-110 transition" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#d4b872] transition line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.date} • {item.views} lượt xem</p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <Link href="https://vnexpress.net/du-lich" className="inline-flex items-center gap-3 bg-[#d4b872] text-black px-10 py-4 rounded-full font-bold tracking-wider hover:bg-[#e0c68a] transition shadow-lg hover:shadow-xl">
                XEM THÊM <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 5. DỊCH VỤ LƯU TRÚ */}
          <div id="dich-vu-luu-tru" className="scroll-mt-32 text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 relative inline-block">
              Dịch vụ lưu trú
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-px bg-[#d4b872]" />
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Top 15 resort 5 sao đẹp nhất Phú Quốc 2025", date: "24/11/2025", views: "2.9k", desc: "Bể bơi vô cực, villa riêng, view biển 360 độ" },
                { title: "Review InterContinental Đà Nẵng – Có đáng tiền?", date: "23/11/2025", views: "2.4k", desc: "Trải nghiệm thực tế từ khách hàng VIP, buffet sáng đẳng cấp" },
                { title: "10 homestay view biển đẹp nhất Nha Trang", date: "22/11/2025", views: "2.1k", desc: "Giá chỉ từ 500k/đêm, có hồ bơi riêng & bếp nấu" },
                { title: "Vinpearl Resort & Spa Hạ Long – Combo trọn gói", date: "21/11/2025", views: "1.8k", desc: "Vé cáp treo + buffet 4 bữa + xe đưa đón miễn phí" },
                { title: "Biệt thự biển riêng tư tại Quy Nhơn giá tốt", date: "20/11/2025", views: "1.6k", desc: "Hồ bơi riêng, quản gia 24/7, cách biển 50m" },
                { title: "Khách sạn 5 sao Sapa view thung lũng Mường Hoa", date: "19/11/2025", views: "1.4k", desc: "Phòng kính trong suốt, ngắm mây trôi từ giường ngủ" },
              ].map((item, i) => (
                <article key={i} className="flex gap-6 group cursor-pointer hover:bg-gray-50 p-4 rounded-2xl transition">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <Image src="/KN1.jpg" alt={item.title} width={128} height={128} className="object-cover group-hover:scale-110 transition" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#d4b872] transition line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.date} • {item.views} lượt xem</p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <Link href="https://vnexpress.net/du-lich" className="inline-flex items-center gap-3 bg-[#d4b872] text-black px-10 py-4 rounded-full font-bold tracking-wider hover:bg-[#e0c68a] transition shadow-lg hover:shadow-xl">
                XEM THÊM <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 6. KINH NGHIỆM */}
          <div id="kinh-nghiem" className="scroll-mt-32 text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 relative inline-block">
              Kinh nghiệm
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-px bg-[#d4b872]" />
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Cách săn vé máy bay giá rẻ 2026 – Mẹo từ A-Z", date: "24/11/2025", views: "4.8k", desc: "Tiết kiệm đến 70% chỉ với 5 bí kíp này" },
                { title: "Hướng dẫn xin visa Schengen tự túc chi tiết nhất", date: "23/11/2025", views: "4.2k", desc: "Tỷ lệ đậu 98%, hồ sơ chuẩn không cần phỏng vấn" },
                { title: "Bí kíp du lịch 1 mình an toàn cho nữ", date: "22/11/2025", views: "3.7k", desc: "Ứng phó khẩn cấp, chọn chỗ ở an toàn & mẹo tiết kiệm" },
                { title: "Làm sao để đi du lịch mà vẫn tiết kiệm được tiền?", date: "21/11/2025", views: "3.4k", desc: "Ngân sách 10 triệu đi được 15 ngày châu Âu" },
                { title: "Check-list đồ đi du lịch 4 mùa đầy đủ nhất", date: "20/11/2025", views: "3.1k", desc: "Không quên đồ, không thừa đồ, vali luôn nhẹ" },
                { title: "Cách chụp ảnh đẹp khi đi du lịch bằng điện thoại", date: "19/11/2025", views: "2.9k", desc: "Không cần máy ảnh xịn, vẫn có ảnh triệu like" },
              ].map((item, i) => (
                <article key={i} className="flex gap-6 group cursor-pointer hover:bg-gray-50 p-4 rounded-2xl transition">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <Image src="/KN1.jpg" alt={item.title} width={128} height={128} className="object-cover group-hover:scale-110 transition" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#d4b872] transition line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.date} • {item.views} lượt xem</p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <Link href="https://vnexpress.net/du-lich" className="inline-flex items-center gap-3 bg-[#d4b872] text-black px-10 py-4 rounded-full font-bold tracking-wider hover:bg-[#e0c68a] transition shadow-lg hover:shadow-xl">
                XEM THÊM <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}