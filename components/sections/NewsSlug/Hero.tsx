import Image from "next/image";

interface NewsSlugHeroProps {
  title: string;
  image: string;
}

export default function NewsSlugHero({ title, image }: NewsSlugHeroProps) {
  return (
    <section className="relative w-full h-[360px] md:h-[440px] lg:h-[500px] overflow-hidden bg-navy-900">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      <div className="container relative z-10 h-full flex flex-col justify-end pb-10 md:pb-14 !pl-[40px]">
        <span className="text-white/90 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          Cinqo News
        </span>
        <h1 className="text-white text-2xl md:text-4xl lg:text-[2.75rem] font-bold uppercase leading-[1.15] max-w-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
