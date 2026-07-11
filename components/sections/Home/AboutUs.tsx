import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full pb-20 pt-8 md:pt-12 px-4 bg-white flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-black font-semibold text-[24px] mb-4 tracking-wide font-[var(--font-ibm-plex)]">
          About Us
        </h2>

        {/* Hero Typography with Inline Image Pill */}
        <div className="text-center text-[32px] leading-[1.6] font-light text-[#737373] mb-16 w-full tracking-tight font-['Inter',_sans-serif]">
          With a team of over{" "}
          <span className="text-black font-normal">600 employees</span>{" "}
          and a portfolio of specialized<br className="hidden md:block" />
          industries,{" "}
          <span className="text-black font-normal">
            Cinqo is recognized for delivering industry
          </span>
          
          {/* Inline Pill Image */}
          <span className="inline-block align-middle mx-3 w-[140px] h-[52px] relative rounded-[40px] overflow-hidden shadow-sm -mt-2">
            <Image
              src="/images/about/image_7a5798.png"
              alt="Cinqo Facility"
              fill
              className="object-cover"
              priority
            />
          </span>
          
          leading<br className="hidden md:block" />
          solutions, exceptional service and sustained value across{" "}
          <span className="text-black font-normal">
            public and private sectors<br className="hidden md:block" />
          </span>
        </div>

        {/* Vision & Mission Card */}
        <div className="relative w-full bg-gradient-to-br from-[#FCF5F6] via-[#FCF5F6] to-[#fbf0f2] border border-[#FAD8DB] rounded-[6px] p-8 md:p-10 text-left shadow-[0_4px_24px_rgba(250,216,219,0.2)] overflow-hidden">
          
          <div className="relative pl-5 border-l-2 border-[#e2432b]/20 mb-5">
            <h3 className="font-semibold text-black text-[20px] mb-2 tracking-[0.08em] uppercase font-[var(--font-ibm-plex)]">
              Vision
            </h3>
            <p className="text-black/85 text-[20px] leading-[1.7] font-[var(--font-ibm-plex)]">
              To build a group of enduring businesses recognized for performance, trust and sustainable growth.
            </p>
          </div>

          <div className="relative pl-5 border-l-2 border-[#e2432b]/20">
            <h3 className="font-semibold text-black text-[18px] mb-2 tracking-[0.08em] uppercase font-['Inter',_sans-serif]">
              Mission
            </h3>
            <p className="text-black/85 text-[18px] leading-[1.7] font-['Inter',_sans-serif]">
              To build and operate each business within the Group to a standard that retains clients, protects capital and delivers consistent results across market conditions — while fostering an environment where our teams are developed, empowered and held to the same standard of excellence.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}