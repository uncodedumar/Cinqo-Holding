import Image from "next/image";
import { BusinessData } from "@/data/businesses.data";

export default function Sectors({ sectors }: { sectors: BusinessData["sectors"] }) {
  return (
    <section className="w-full py-20 bg-cream-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-center uppercase mb-16 text-navy-900">
          Sectors
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((item, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-auto group-hover:opacity-100">
                  <p className="text-xs text-gray-200 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
