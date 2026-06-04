import  { useState, useEffect } from 'react'


const ContactHero = () => {
const [loaded, setLoaded] = useState(false)
 // fade in ตอนโหลด
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/*background image */}
            <img
                src="/cake/all-cake-hero.jpg"
                alt="About Bannfan"
                className="absolute inset-0 w-full h-full object-cover "
            />

              <div className="absolute inset-0 bg-gradient-to-b from-[#2d2420]/50 via-[#2d2420]/80 to-[#f2eee9]/10" />

           <div className={`
        relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 pt-32
        transition-all duration-1000
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}>
                <p className='uppercase tracking-[0.5em] text-sm text-[#e8d5b8]/80 mb-8 '>
                    Contact  ·  Bannfan
                </p>
                <h1 className="
                font-serif text-white font-light
                leading-[0.85] tracking-[0.01em]
                text-[16vw] md:text-[18vw]">
                    CONTACT
                </h1>
                 <h1 className="
                font-serif text-[#e8d5b8] font-light
                leading-[0.85] tracking-[0.01em]
                text-[16vw] md:text-[16vw]
                 ml-[8vw] md:ml-[12vw]">
                    BANNFAN
                </h1>
             {/* sub text */}
        <div className="max-w-xs md:max-w-sm ml-auto mt-12 md:mt-20">
          <div className="w-8 h-[1px] bg-[#e8d5b8]/40 mb-6" />
          <p className="text-[#e8d5b8]/70 text-sm leading-7">
            Every recipe begins with a memory.<br />
            Every cake is made to share warmth.
          </p>
        </div>

      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <div className="w-[1px] h-8 bg-[#e8d5b8]" />
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#e8d5b8]">scroll</p>
      </div>

        </section>
    )
}

export default ContactHero
