
const InstagramFeed = () => {
  // จำลองรูปภาพจาก IG/ร้านค้า
  const dummyImages = [1, 2, 3, 4];

  return (
    <section className="bg-[#ffffff] py-16 px-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#b0a090] mb-2">follow us on instagram</p>
        <h3 className="text-xl font-light tracking-wide text-stone-700 mb-8">@baan.fan</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dummyImages.map((img) => (
            <div key={img} className="aspect-square bg-stone-100 rounded-xl overflow-hidden relative group cursor-pointer">
              {/* เปลี่ยนเป็น src รูปจริงของคุณได้เลย */}
              <div className="w-full h-full bg-[#e8ddd2] flex items-center justify-center text-stone-400 text-xs">Baanfan Moment</div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs tracking-widest">VIEW POST</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;