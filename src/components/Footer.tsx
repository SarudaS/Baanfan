

const Footer = () => {
  return (
    <footer className="bg-[#2d2420] text-[#f8f6f1]/80 py-12 px-10 text-center text-xs tracking-wider">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h2 className="text-lg font-light tracking-[0.3em] text-white">BAAN.FAN</h2>
        <div className="flex justify-center gap-8 text-[11px] uppercase text-[#d4c4b0]">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Menu</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="h-[1px] bg-white/10 w-full my-2"></div>
        <p className="text-[10px] text-stone-400">
          &copy; {new Date().getFullYear()} BAAN.FAN. All dreams reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;