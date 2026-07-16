"use client";
import React from 'react';
import { SectorShowcaseItem, SectorsPageData } from '@/data/businesses.data';

const cardStyle: React.CSSProperties = {
  width: '285px',
  height: '359px',
  overflow: 'hidden',
  position: 'relative',
  flexShrink: 0,
  borderRadius: '5px'
};

export default function Sectors({ 
  sectorShowcase,
  sectorsPageData
}: { 
  sectorShowcase: SectorShowcaseItem[];
  sectorsPageData: SectorsPageData;
}) {
  return (
    <div className="min-h-screen bg-white text-ink font-sans p-4 md:p-8 pb-0 md:pb-0">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Sectors Header + Cards (486px combined on md+) */}
        <div className="md:h-[486px] md:flex md:flex-col md:gap-4">
          
        {/* Sectors Header */}
        <div className="text-center pt-4">
          <h1 className="font-['Inter'] text-xl font-medium tracking-widest uppercase">Sectors</h1>
        </div>

        {/* Sectors Grid */}
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-[12px] mx-4">
          {sectorShowcase.map((s: SectorShowcaseItem, idx: number) => (
          <div key={s.title} className="group border border-muted" style={cardStyle}>
             <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.014)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" style={{ transform: 'scale(1.014)' }}></div>
            <div className="absolute bottom-0 left-0 px-[8px] pt-2 pb-[8px] md:px-[12px] md:pt-3 md:pb-[12px] text-white">
              <h2 className="font-['Inter'] text-[17px] font-medium uppercase tracking-wider mb-1">
                {s.title}
              </h2>
              <p className="font-['Inter'] text-sm font-normal leading-snug opacity-90">
                {s.description}
              </p>
            </div>
          </div>
          ))}
        </div>
        </div>
      </div>

      {/* Showcase Section - full width */}
      <div className="-mr-4 md:-mr-8 md:flex md:justify-end mb-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 -mt-3 md:w-[1264px] md:flex-shrink-0">
          <div className="w-full md:max-w-[308px] flex flex-col justify-between">
            <p className="font-['Inter'] font-light text-[20px] leading-relaxed text-ink ml-3">
              {sectorsPageData.showcaseText}
            </p>
            <div className="ml-3">
              <ul className="space-y-1.5 mb-3 font-[var(--font-ibm-plex)] font-medium text-[15px] tracking-widest uppercase">
                {sectorsPageData.projects.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <button className="border border-muted font-[var(--font-ibm-plex)] font-normal text-[16px] tracking-widest uppercase hover:bg-coral-100 transition-colors h-[34px] w-[170px] flex items-center justify-center py-0">
                CONTACT
              </button>
            </div>
          </div>
          <div style={{ width: '972px', height: '693px', flexShrink: 0 }}>
            <img src={sectorsPageData.showcaseImage} alt="Showcase building" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Aerial View Section - full width */}
      <div className="-mr-4 md:-mr-8 flex justify-end mb-4">
        <div style={{ width: '972px', height: '693px' }}>
          <img src={sectorsPageData.aerialImage} alt="Aerial view" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Composite Section - full width */}
      <div className="-mr-4 md:-mr-8 flex justify-end">
        <div className="relative overflow-visible" style={{ width: '1006px', height: '705px' }}>
          <img src={sectorsPageData.compositeImage} alt="Composite" className="w-full h-full object-cover" />
          <h2 className="absolute top-[18px] left-[18px] font-[var(--font-ibm-plex)] font-normal text-[20px] tracking-widest uppercase text-white">
            {sectorsPageData.compositeTitle}
          </h2>
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <div className="flex gap-3 animate-scroll-right" style={{ flexShrink: 0 }}>
              {Array.from({ length: sectorsPageData.pipCount * 2 }, (_, idx) => {
                const i = (idx % sectorsPageData.pipCount) + 1;
                return (
                  <img key={idx} src={`/images/sectors/pip-${i}.jpg`} alt="" className="flex-shrink-0" width="227" height="157" />
                );
              })}
            </div>
          </div>
          <div className="absolute bottom-[18px] left-[18px]">
            <p className="font-[var(--font-ibm-plex)] font-medium text-[18px] text-white">
              {sectorsPageData.compositeDescription}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}