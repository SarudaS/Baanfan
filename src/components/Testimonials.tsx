
const Testimonials = () => {
  const reviews = [
    { name: "คุณมินท์", text: "เค้กวันเกิดน่ารักมากค่ะ หวานกำลังดี เนื้อเค้กนุ่มละมุนมาก สั่งซ้ำแน่นอน" },
    { name: "คุณพีท", text: "กาแฟ Single Origin รสชาติดีมาก คลีน ดื่มง่าย บรรยากาศร้านก็อบอุ่นครับ" },
  ];

  return (
    <section className="bg-[#f8f6f1] py-16 px-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#b0a090] mb-3">customer voices</p>
        <h2 className="text-2xl font-light mb-10 text-[#2d2420]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          ความประทับใจจาก <em className="italic text-[#8a6e56]">ลูกค้าของเรา</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between">
              <p className="text-sm text-stone-600 italic leading-relaxed">"{r.text}"</p>
              <p className="text-[11px] tracking-wider text-[#b0a090] uppercase mt-4 font-medium">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;