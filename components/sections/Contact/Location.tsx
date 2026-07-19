import Image from 'next/image'; // 1. Import Next.js Image

export default function Location() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Map */}
      <iframe
        src="https://www.google.com/maps?q=Yusuf+Bin+Ahmed+Kanoo+Tower+Manama+Bahrain&output=embed"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cinqo Holding Location"
      />

      {/* Floating Card Overlay */}
      <div className="absolute top-1/2 right-4 md:right-12 lg:right-24 transform -translate-y-1/2 w-[90%] max-w-[420px] bg-white shadow-2xl z-10">
        
        {/* Card content restricted to an image as requested */}
        <Image
          src="/images/contactus/map.jpg" /* Replace with your actual image path */
          alt="Location Details" 
          className="w-full h-auto block"
        />

      </div>
    </section>
  );
}