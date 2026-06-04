import  { useEffect, useState } from 'react'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* ── รูป full bleed ── */}
      <img
        src="/cake/all-cake-hero-2.jpg"
        alt="baan.fan"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[zoomOut_8s_ease_forwards]"
      />

      {/* ── Overlay gradient ── */}
      {/* gradient จากล่างขึ้นบน ทำให้ text อ่านได้ชัด */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* overlay อีกชั้น ซ้ายไปขวา ทำให้ดู depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-16 md:pb-24">

        {/* text block */}
        <div className={`
          flex flex-col gap-4 max-w-2xl
          transition-all duration-1000
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>

          {/* eyebrow */}
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/60">
            ✦ cake and roster · Prachinburi
          </p>

          {/* title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Welcome to

<br />
            <em className="italic text-[#e8d5b8]">BAANFAN</em>
          </h1>

          {/* sub */}
          <p className="text-sm tracking-[0.2em] uppercase text-white/50 mt-1">
            Don't forget your dreams :)
          </p>

          {/* divider */}
          <div className="w-10 h-[1px] bg-white/30 my-2" />

          {/* ปุ่ม */}
          <div className="flex items-center gap-6">
            <a
              href="#menu"
              className="
                text-[11px] tracking-[0.15em] uppercase
                bg-white text-[#2d2420]
                px-8 py-3.5 rounded-full
                hover:bg-[#e8d5b8]
                transition-colors duration-300
              "
            >
              ดูเมนู
            </a>
            <a
              href="#about"
              className="
                text-[11px] tracking-[0.15em] uppercase
                text-white/70 pb-0.5
                border-b border-white/30
                hover:text-white hover:border-white
                transition-all duration-300
              "
            >
              เกี่ยวกับเรา →
            </a>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className={`
          flex items-center justify-between mt-12
          border-t border-white/10 pt-6
          transition-all duration-1000 delay-300
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}>

          {/* stats 
          <div className="flex gap-8 md:gap-12">
            {[
              { num: "500+", label: "Orders"    },
              { num: "4.9★", label: "Rating"    },
              { num: "100%", label: "Handcraft" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-xl md:text-2xl font-light text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.num}
                </p>
                <p className="text-[9px] tracking-[0.15em] uppercase text-white/40 mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          */}

          {/* scroll indicator */}
          <div className="hidden md:flex flex-col items-center gap-2 opacity-40 animate-bounce">
            <div className="w-[1px] h-8 bg-white" />
            <p className="text-[9px] tracking-[0.2em] uppercase text-white">scroll</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero;