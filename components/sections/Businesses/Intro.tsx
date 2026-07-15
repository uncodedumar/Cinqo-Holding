import Image from "next/image";
import { BusinessData } from "@/data/businesses.data";

export default function Intro({ business }: { business: BusinessData }) {
  return (
    <section className="w-full flex flex-col">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] min-h-[450px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image 
            src={business.heroImage} 
            alt={business.name} 
            fill 
            className="object-cover object-center" 
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider drop-shadow-md">
            {business.name}
          </h1>
        </div>
      </div>

      {/* Intro Text Section */}
      <div className="w-full bg-cream-50 py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Placeholder */}
          <div className="col-span-1 flex items-center justify-center md:justify-start">
            <div className="w-32 h-32 relative opacity-20">
               {/* This can be replaced by the actual logo later */}
               <svg viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M24.096 24.2551L45.0002 24.2551L24.096 45.3189L24.096 24.2551Z" fill="#231F20"/>
                <path d="M24.096 21.1562L45.0002 21.1562L24.096 0.09238L24.096 21.1562Z" fill="#808285"/>
                <path d="M20.904 24.3351L-0.000227384 24.3352L20.904 45.399L20.904 24.3351Z" fill="#808285"/>
                <path d="M20.904 21.0761L-0.000227384 21.0761L20.904 0.0123018L20.904 21.0761Z" fill="#231F20"/>
              </svg>
            </div>
          </div>
          
          {/* Text */}
          <div className="col-span-1 md:col-span-2 flex items-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              {business.introText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
