
// AboutSection.tsx (เวอร์ชันกระชับ + สีตัด)
const AboutSection = () => {
  return (
    <section className="bg-[#f2eee9] px-10 py-16 md:py-20"> {/* เปลี่ยนสีพื้นหลังที่นี่ */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5 max-w-md">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#b0a090] font-medium">our story</p>
          <h2 className="text-3xl md:text-4xl font-light leading-snug text-[#2d2420]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            พื้นที่เล็กๆ ที่เต็มไปด้วย <br/><em className="italic text-[#8a6e56]">ความใส่ใจ</em>
          </h2>
          <p className="text-sm text-[#9a8878] leading-relaxed">
            baan.fan เริ่มต้นจากความรักในการทำเค้กโฮมเมดและกาแฟคัดสรร 
            เราเชื่อว่าความสุขที่แท้จริงคือการได้ส่งต่อความทรงจำที่แสนพิเศษผ่านรสชาติที่กลมกล่อม
          </p>
          <div className="flex gap-8 pt-4 border-t border-[#d4c4b0]/40">
             {/* Stats แบบมินิมอล */}
             <div><span className="text-2xl font-light text-[#2d2420]">3+</span><p className="text-[9px] uppercase text-[#b0a090]">Years</p></div>
             <div><span className="text-2xl font-light text-[#2d2420]">100%</span><p className="text-[9px] uppercase text-[#b0a090]">Handcraft</p></div>
          </div>
        </div>
        <div className="relative order-first md:order-last">
          <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-lg"><img src="/shop/about-main.jpg" className="w-full h-full object-cover" /></div>
          <div className="absolute -bottom-4 -right-4 w-1/3 aspect-square rounded-xl overflow-hidden border-[4px] border-[#f2eee9] shadow-xl"><img src="/shop/about-accent.jpg" className="w-full h-full object-cover" /></div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection