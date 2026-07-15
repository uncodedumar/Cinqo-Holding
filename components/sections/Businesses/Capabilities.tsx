import Image from "next/image";
import { BusinessData } from "@/data/businesses.data";

export default function Capabilities({ capabilities }: { capabilities: BusinessData["capabilities"] }) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-center uppercase mb-16 text-navy-900">
          Capabilities
        </h2>
        
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 group"
            >
              {/* Minimal accordion-like row */}
              <div className="py-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors px-4">
                <h3 className="text-sm md:text-base font-bold text-navy-900 uppercase tracking-wider">
                  {item.title}
                </h3>
                <span className="text-2xl font-light text-gray-400 group-hover:text-navy-900 transition-colors">
                  +
                </span>
              </div>
              
              {/* Image & Description (revealed state placeholder - currently just statically showing one for demo) */}
              {index === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-8 pt-4">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
