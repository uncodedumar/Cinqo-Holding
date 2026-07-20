import Image from 'next/image'; // 1. Import Next.js Image

export default function Location() {
  return (
    <section className="relative w-full h-[350px] md:h-[350px] lg:h-[500px]">
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

    
    </section>
  );
}