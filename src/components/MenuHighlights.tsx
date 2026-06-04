import React, { useState } from "react";
import Featurespoint from "./Featurespoint";

// type 3 tab
type Tab = "cake" | "drink" | "coffeeroaster"

type MenuItem = {
  title: string;
  image: string;
  hoverImage: string;
};

const cakeItems: MenuItem[] = [
  { title: "Custom Birthday & Celebration", image: "/cake/Custom-Birthday-Celebration-2.jpg", hoverImage: "/cake/Paint Cake.jpg" },
  { title: "Baby Gang", image: "/cake/Baby Gang.jpg", hoverImage: "/cake/Custom-Birthday-Celebration-2.jpg" },
  { title: "Say Cheese", image: "/cake/Say Cheese.jpg", hoverImage: "/cake/Baby Gang.jpg" },
  { title: "Mini Cake", image: "/cake/Mini Cake.jpg", hoverImage: "/cake/Say Cheese.jpg" },
  { title: "Box Cake", image: "/cake/Box Cake-orange.jpg", hoverImage: "/cake/Mini Cake.jpg" },
  { title: "Paint Cake", image: "/cake/Paint Cake.jpg", hoverImage: "/cake/Box Cake-orange.jpg" },
];


const drinkItems: MenuItem[] = [
  { title: "Latte", image: "/drink/latte.jpg", hoverImage: "/drink/latte-2.jpg" },
  { title: "Cappuccino", image: "/drink/cappuccino.jpg", hoverImage: "/drink/cappuccino-2.jpg" },
  { title: "Americano", image: "/drink/americano.jpg", hoverImage: "/drink/americano-2.jpg" },
  { title: "Matcha Latte", image: "/drink/matcha.jpg", hoverImage: "/drink/matcha-2.jpg" },
]

const coffeeroasterItems: MenuItem[] = [
  { title: "Ethiopia Yirgacheffe", image: "/bean/ethiopia.jpg", hoverImage: "/bean/ethiopia-2.jpg" },
  { title: "Colombia Huila", image: "/bean/colombia.jpg", hoverImage: "/bean/colombia-2.jpg" },
  { title: "Brazil Santos", image: "/bean/brazil.jpg", hoverImage: "/bean/brazil-2.jpg" },
]

const tabs: { key: Tab; label: string; icon: React.ReactNode; items: MenuItem[] }[] = [
  { key: "cake", label: "เค้ก", icon: "🎂", items: cakeItems },
  { key: "drink", label: "เครื่องดื่ม", icon: "☕", items: drinkItems },
  { key: "coffeeroaster", label: "เมล็ดกาแฟ", icon: "🫘", items: coffeeroasterItems },
]
const MenuHighlights = () => {
   const [activeTab, setActiveTab] = useState<Tab>("cake")
  const currentItems = tabs.find((t) => t.key === activeTab)?.items ?? []
  const activeIndex  = tabs.findIndex((t) => t.key === activeTab)
  return (
    <section className="bg-[#f8f6f1]  px-10 py-14 ">
      <div>
        <Featurespoint />
      </div>
      <div className="flex justify-between items-center  pt-12 pb-8 mb-6 px-4">
        <h2 className="text-2xl font-light tracking-[0.2em] text-stone-700">Menu Highlights</h2>

        <div className="relative flex bg-white border border-stone-200 rounded-full p-1 w-full sm:w-auto">

          {/* แถบเลื่อน — ใช้ left คำนวณจาก index */}
          <div
            className="absolute top-1 bottom-1 rounded-full bg-stone-700 transition-all duration-300 ease-in-out"
            style={{
              width:  `calc(100% / ${tabs.length} - 4px)`,
              left:   `calc(${activeIndex} * 100% / ${tabs.length} + 2px)`,
            }}
          />

          {/* ปุ่มแต่ละแท็บ */}
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                relative z-10 flex-1 flex items-center justify-center gap-1.5
                px-4 py-2 rounded-full text-xs sm:text-sm
                tracking-wide transition-colors duration-300
                whitespace-nowrap cursor-pointer
                ${activeTab === tab.key ? "text-white" : "text-stone-400 hover:text-stone-600"}
              `}
            >
              <span>{tab.icon}</span>
              
            </button>
          ))}

        </div>

      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {currentItems.map((item) => (
          <div
            key={item.title}
            className="relative rounded-xs overflow-hidden h-64 group cursor-pointer "
          >
            {/* normal image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 
              opacity-100 group-hover:opacity-0"
            />
            {/* hover image */}
            <img
              src={item.hoverImage}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 scale-100 opacity-0 group-hover:opacity-500"
            />
            {/* overlay gradient */}
            <div className="
              absolute inset-0 z-10
              bg-gradient-to-t from-black/60 via-black/10 to-transparent
              transition-opacity duration-300
              opacity-60 group-hover:opacity-90
            "/>
            {/* title */}
            <div
              className="   absolute inset-0 z-20 p-6
              flex flex-col justify-end
              translate-y-2 group-hover:translate-y-0
              transition-transform duration-300">
              <h3 className="
                text-white text-base font-light
                tracking-[0.15em] uppercase
              ">
                {item.title}
              </h3>
              {/* under line in hover */}
              <div className="
                mt-2 h-[1px] bg-white/60
                w-0 group-hover:w-12
                transition-all duration-500
              "/>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuHighlights;
