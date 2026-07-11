"use client";

export default function ThePrinciple() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden w-full bg-black">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-130 origin-center"
        src="/videos/principle/Principle_Drone_Shot.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="relative z-20 flex flex-col items-center text-center w-full px-4 max-w-[1290px] mx-auto mt-0 sm:mt-[-50px]">
        <span 
          className="uppercase text-white mb-2 sm:mb-[16px]"
          style={{ 
            fontFamily: "'IBM Plex Sans', sans-serif", 
            fontWeight: 500, 
            fontSize: "20px", 
            lineHeight: "1.2"
          }}
        >
          The Principle
        </span>
        
        <h2 
          className="uppercase text-white mb-6 sm:mb-[47px]"
          style={{ 
            fontFamily: "'IBM Plex Sans', sans-serif", 
            fontWeight: 500, 
            fontSize: "clamp(32px, 5vw, 64px)", 
            lineHeight: "1.1",
            textShadow: "0px 11px 19px rgba(255, 0, 0, 0.5)"
          }}
        >
          Clarity Before Commitment
        </h2>
        
        <h3 
          className="uppercase text-white mb-4 sm:mb-[16px]"
          style={{ 
            fontFamily: "'IBM Plex Sans', sans-serif", 
            fontWeight: 700, 
            fontSize: "clamp(18px, 3vw, 24px)", 
            lineHeight: "1.2",
            textShadow: "0px 9px 51px #F5333F"
          }}
        >
          Accountability at every level.
        </h3>
        
        <p 
          className="text-white max-w-[650px] mx-auto"
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontWeight: 500, 
            fontSize: "clamp(16px, 2vw, 20px)", 
            lineHeight: "1.5",
            textShadow: "0px 5px 51px #F5333F"
          }}
        >
          Every engagement begins with a clear understanding of scope,
          objectives and responsibilities. Strong outcomes are built on
          strong foundations.
        </p>
      </div>
    </section>
  );
}
