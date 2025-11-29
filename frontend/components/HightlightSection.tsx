// components/HighlightSection.tsx
import React from "react";

const HighlightSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Cột trái: Tiêu đề + Mô tả dài */}
          <div className="space-y-8">
            <h2 className="font-playfair text-4xl lg:text-5xl leading-snug text-gray-900">
              Ẩm thực tuyệt hảo
              <br />
              lịch sử cuốn hút và phong cảnh đẹp mê hồn
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
              <p>
                Từ những cây cầu hiện đại rực sáng bên sông Hàn đến bãi biển Mỹ Khê nên thơ và những di sản văn hoá ngay kề bên, 
                Đà Nẵng là một điểm đến đầy sức sống và đa sắc màu – nơi luôn có điều mới mẻ để khám phá.
                Chúng tôi sẽ tạo nên một hành trình hoàn toàn dành riêng cho bạn, được thiết kế tỉ mỉ đến từng chi tiết, 
                với các tour riêng do những hướng dẫn viên am hiểu địa phương dẫn dắt, cùng lựa chọn các khách sạn sang trọng và boutique tinh tế.
              </p>

              <p>
                Không chuyến đi nào đến Đà Nẵng trọn vẹn nếu bạn chưa tìm hiểu về lịch sử độc đáo của thành phố và những vùng đất xung quanh như phố cổ Hội An hay thánh địa Mỹ Sơn – 
                mỗi điểm đến đều mở ra một góc nhìn mới về văn hoá miền Trung.
              </p>

              <p>
                Và một trong những điểm đáng nhớ nhất khi tới Đà Nẵng chính là ẩm thực. Bạn có thể thưởng thức một tô mì Quảng đậm đà, 
                bánh tráng cuốn thịt heo tươi ngon hay hải sản đánh bắt trong ngày, được chế biến theo phong vị đặc trưng của người miền Trung.
              </p>

              <p>
                Đội ngũ thiết kế hành trình của chúng tôi đều đã nhiều lần trải nghiệm Đà Nẵng và luôn sẵn sàng chia sẻ niềm đam mê dành cho vùng đất này,
                mang tới những chuyến đi riêng biệt giúp bạn cảm nhận trọn vẹn vẻ đẹp và sự hiếu khách của thành phố biển tuyệt vời này.
              </p>
            </div>
          </div>

          {/* Cột phải: Highlights */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-8 relative inline-block">
              Highlights
              <span className="absolute bottom-0 left-0 w-24 h-px bg-amber-600"></span>
            </h3>

              <ul className="space-y-6 text-gray-700 text-lg font-light">
                <li className="flex items-start gap-4  ">
                  <span className="text-amber-600 mt-1.5">•</span>
                  <span>Khám phá nhịp sống hiện đại của trung tâm thành phố, dạo quanh những cây cầu biểu tượng như <strong>Cầu Rồng</strong> và thưởng thức không khí trong lành bên bờ <strong>Sông Hàn.</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 mt-1.5">•</span>
                  <span>Trải nghiệm vẻ đẹp thiên nhiên miền Trung, từ bán đảo xanh mướt của <strong>Sơn Trà</strong> đến những dãy núi đá độc đáo tại <strong>Ngũ Hành Sơn.</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 mt-1.5">•</span>
                  <span>Thưởng thức ẩm thực Đà Nẵng trứ danh, với mì Quảng, bánh tráng cuốn thịt heo và hải sản tươi ngon được chế biến theo phong vị địa phương.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 mt-1.5">•</span>
                  <span>Ngắm nhìn toàn cảnh thành phố và núi rừng từ tuyến cáp treo lên <strong>Bà Nà Hills</strong>, nơi nổi tiếng với cây cầu Vàng uốn cong mềm mại giữa mây trời.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 mt-1.5">•</span>
                  <span>Dạo bước trên các con đường cổ kính của phố Hội trong chuyến tham quan nửa ngày đến <strong>Hội An</strong> – một trong những di sản văn hoá đẹp nhất Việt Nam, chỉ cách Đà Nẵng một đoạn di chuyển ngắn.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-600 mt-1.5">•</span>
                  <span>Nếu bạn muốn thư giãn tuyệt đối, chúng tôi có thể đưa bạn đến một khu nghỉ dưỡng sang trọng ven biển, nơi bãi cát trắng và làn nước trong xanh mang đến sự yên bình tuyệt đối.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HighlightSection;