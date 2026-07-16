"use client";
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto space-y-10">
        
        {/* Sectors Header + Cards (486px combined on md+) */}
        <div className="md:h-[486px] md:flex md:flex-col md:gap-4">
          
        {/* Sectors Header */}
        <div className="text-center pt-4">
          <h1 className="font-['Inter'] text-xl font-medium tracking-widest uppercase">Sectors</h1>
        </div>

        {/* Sectors Grid */}
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-[12px] mx-4">
          {/* Card 1 */}
          <div className="group" style={{ width: '285px', height: '359px', overflow: 'hidden', position: 'relative', flexShrink: 0, borderRadius: '5px', border: '1px solid rgba(128,130,133,1)' }}>
            <img src="/images/sectors/card-1.webp" alt="Corporate Offices" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[14px] pt-4 pb-[15px] md:px-[22px] md:pt-5 md:pb-[23px] text-white">
              <h2 className="font-['Inter'] text-lg font-medium uppercase tracking-wider mb-2">Corporate Offices</h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                Interior construction aligned with functionality, acoustic performance and service integration.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group" style={{ width: '285px', height: '359px', overflow: 'hidden', position: 'relative', flexShrink: 0, borderRadius: '5px', border: '1px solid rgba(128,130,133,1)' }}>
            <img src="/images/sectors/card-2.webp" alt="Retail & F&B" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[14px] pt-4 pb-[15px] md:px-[22px] md:pt-5 md:pb-[23px] text-white">
              <h2 className="font-['Inter'] text-lg font-medium uppercase tracking-wider mb-2">Retail & F&B</h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                Fast-track fit-out delivery focused on brand requirements and operational readiness.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group" style={{ width: '285px', height: '359px', overflow: 'hidden', position: 'relative', flexShrink: 0, borderRadius: '5px', border: '1px solid rgba(128,130,133,1)' }}>
            <img src="/images/sectors/card-3.webp" alt="Residential Interiors" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[14px] pt-4 pb-[15px] md:px-[22px] md:pt-5 md:pb-[23px] text-white">
              <h2 className="font-['Inter'] text-lg font-medium uppercase tracking-wider mb-2">Residential Interiors</h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                Premium villa and apartment interior delivered with attention to detail and material quality.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group" style={{ width: '285px', height: '359px', overflow: 'hidden', position: 'relative', flexShrink: 0, borderRadius: '5px', border: '1px solid rgba(128,130,133,1)' }}>
            <img src="/images/sectors/card-4.webp" alt="Healthcare & Clinics" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[14px] pt-4 pb-[15px] md:px-[22px] md:pt-5 md:pb-[23px] text-white">
              <h2 className="font-['Inter'] text-lg font-medium uppercase tracking-wider mb-2">Healthcare & Clinics</h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                Fit-outs incorporating hygienic materials and coordinated building services.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Showcase Section */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 pt-4">
          <div className="w-full md:w-[25%] flex flex-col justify-between">
            <p className="text-sm md:text-base leading-relaxed text-gray-800 font-medium">
              A showcase of absolute accountability in execution. We measure the success of these works by the frequency of repeat client engagement and a commitment to honoring obligations long after final handover.
            </p>
            <div className="mt-12">
              <ul className="space-y-1.5 mb-6 text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
                <li>J003 FONTANA INFINITY</li>
                <li>J003 FONTANA INFINITY</li>
                <li>J003 FONTANA INFINITY</li>
              </ul>
              <button className="border border-gray-400 px-8 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
                CONTACT
              </button>
            </div>
          </div>
          <div className="w-full md:w-[75%]">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" alt="Showcase building" className="w-full h-full object-cover min-h-[300px] md:min-h-[450px]" />
          </div>
        </div>

        {/* Aerial View Section */}
        <div className="w-full">
          <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&q=80" alt="Aerial view of overwater villas" className="w-full h-auto object-cover min-h-[300px] md:min-h-[500px]" />
        </div>

        {/* Bottom Composite Section */}
        <div className="w-full flex flex-col">
          {/* Top part (Sky/Building) */}
          <div className="relative w-full h-48 md:h-64">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Skyline" className="w-full h-full object-cover" />
            <h2 className="absolute top-4 left-4 md:top-6 md:left-6 text-xs md:text-sm font-bold tracking-widest uppercase text-black">
              J003 FONTANA INFINITY
            </h2>
          </div>
          
          {/* 4 Thumbnails Strip */}
          <div className="grid grid-cols-4 gap-1 w-full bg-white py-1">
             <img src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=400&q=80" alt="Parking area 1" className="w-full h-24 md:h-36 object-cover" />
             <img src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=400&q=80" alt="Parking area 2" className="w-full h-24 md:h-36 object-cover" />
             <img src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=400&q=80" alt="Parking area 3" className="w-full h-24 md:h-36 object-cover" />
             <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=400&q=80" alt="Parking area 4" className="w-full h-24 md:h-36 object-cover" />
          </div>

          {/* Bottom part (Ground/Text) */}
          <div className="relative w-full h-48 md:h-72">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" alt="Ground plaza view" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
              <p className="text-[10px] md:text-xs font-bold text-black max-w-[90%] leading-tight bg-white/30 backdrop-blur-sm p-2 md:p-0 md:bg-transparent md:backdrop-blur-none">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}