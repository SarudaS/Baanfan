

const ContactSection = () => {
  return (
    <section className="bg-[#f2eee9] py-16 px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ฝั่งข้อมูล */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#b0a090]">visit us</p>
          <h2 className="text-2xl font-light text-[#2d2420]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            แวะมาสัมผัส <em className="italic text-[#8a6e56]">ความอบอุ่น</em>
          </h2>
          
          <div className="text-sm text-stone-600 flex flex-col gap-2 mt-2">
            <p><strong>เปิดบริการ:</strong> วันอังคาร - วันอาทิตย์ (หยุดวันจันทร์)</p>
            <p><strong>เวลา:</strong> 09:00 น. - 18:00 น.</p>
            <p><strong>ที่ตั้ง:</strong> 123 ซอยแสนฝัน ถนนมินิมอล กรุงเทพฯ</p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#" className="px-5 py-2 bg-[#2d2420] text-white text-xs tracking-widest rounded-full hover:bg-[#4a3b35] transition-colors">
              LINE OFFICIAL
            </a>
            <a href="#" className="px-5 py-2 border border-[#2d2420] text-[#2d2420] text-xs tracking-widest rounded-full hover:bg-[#2d2420] hover:text-white transition-all">
              GOOGLE MAPS
            </a>
          </div>
        </div>

        {/* ฝั่ง Map จำลอง */}
        <div className="w-full aspect-[4/3] bg-stone-300/40 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center text-stone-500 text-xs border border-stone-200">
          {/* สามารถเอาฝังโค้ด <iframe> ของ Google Maps จริงมาใส่ตรงนี้ได้เลยครับ */}
          [ แผนที่ Google Maps หรือรูปแผนที่ร้าน ]
        </div>
      </div>
    </section>
  );
};

export default ContactSection;