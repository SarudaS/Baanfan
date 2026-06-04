import React from "react";
import { Coffee, Cake, ChefHat } from "lucide-react";

type Feature = {
    icon: React.ReactNode;
    title: string;
    translate: string;
    desc: string;
};

const features: Feature[] = [
    {
        icon: <Coffee size={50} strokeWidth={1.5} className="text-stone-600" />,
        title: "Homey Cafe & Signature Chiffon",
        translate: "คาเฟ่สไตล์โฮมมี่ และชิฟฟ่อนเค้ก",
        desc: "คาเฟ่เค้กโฮมเมดเล็กๆ สไตล์โฮมมี่ เค้กญี่ปุ่น เกาหลี มินิมอลเค้กและเนื้อเค้กชิฟฟ่อน",
    },
    {
        icon: <Cake size={50} strokeWidth={1.5} className="text-stone-600" />,
        title: "Custom Cakes & Catering",
        translate: "รับทำเค้กวันเกิด และบริการจัดเลี้ยง",
        desc: "รับทำเค้กวันเกิด เค้กตามสั่ง คัพเค้ก ขนมจัดเบรค ทำบุญ เค้กงานแต่ง ออกบูธขนมพร้อมตู้เค้ก",
    },
    {
        icon: <ChefHat size={50} strokeWidth={1.5} className="text-stone-600" />,
        title: "Baking Classes & Workshops",
        translate: "เวิร์กช็อปทำขนม ทั้งเด็กและผู้ใหญ่",
        desc: "เปิดสอนทำและแต่งหน้าเค้กสไตล์มินิมอล กิจกรรมสนุกๆ ที่รองรับผู้เรียนทั้งเด็กและผู้ใหญ่",
    },
    
];

const Featurespoint = () => {
    return (
        <section className=" px-16 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12  ">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className=" flex flex-col gap-2 items-center text-center group"
                    >
                        <div className=" h-12 w-12 flex items-center justify-center  ">
                            {f.icon}
                        </div>
                        <div className="text-lg text-stone-800 font-light tracking-wide  ">
                            {f.title}
                        </div>
                        <div className="text-sm text-stone-400   ">
                            {f.translate}
                        </div>
                        <div className="w-10 h-2px bg-stone-200 my-4"></div>
                        <div className=" text-sm text-stone-500 leading-relaxed px-4 ">
                            {f.desc}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Featurespoint;
