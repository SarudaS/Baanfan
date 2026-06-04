import  { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "MENU", href: "/menu" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT", href: "/contact" },
]

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // cleanup — เอา event ออกตอน component หายไป
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (

    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between px-12 py-3
        transition-all duration-500 
        ${Scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-1"  // เลื่อนลงแล้ว
          : "bg-transparent py-5"                           // อยู่บนสุด
        }
      `}
    >

      <div className=" grid grid-cols-2 ">

        {/* logo  */}
        <img
          src="/logo-baanfan.jpg"
          alt="Baanfan Logo"
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full" />

        <div className={`
          flex-1 font-light tracking-[0.2em] text-lg transition-colors duration-500 items-center justify-center flex
          ${Scrolled ? "text-stone-700" : "text-stone-300"}
        `}>Baanfan</div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center gap-16 mr-8 tracking-[0.2em]">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
              relative text-sm transition-colors duration-300
              ${Scrolled ? "text-stone-400" : "text-stone-300"}
               hover:text-stone-600
              after:content-[''] after:absolute after:bottom-[-4px] after:left-0
              after:w-0 after:h-[1px] after:bg-stone-700
              after:transition-all after:duration-300
              hover:after:w-full
            `}
          >{link.name}</a>
        ))}
      </div>

      {/*Hamburger */}
      <div className="md:hidden flex items-center ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=""
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/*Mobile Menu*/}
      <div className={`
        absolute top-full left-0 right-0 bg-white shadow-xl border-t transition-all duration-300 md:hidden
        ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
      `}>
        <div className="flex flex-col py-4 px-8 ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className=" py-2 text-sm tracking-[0.2em] text-stone-600 hover:bg-stone-100 border-b border-stone-50 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >{link.name}</a>
          ))}
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
