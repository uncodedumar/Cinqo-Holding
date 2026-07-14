import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-12 min-h-[600px] overflow-hidden">
      <Image
        src="/images/about/a2.jpeg"
        alt="About Cinqo Holding"
        fill
        className="object-cover brightness-100 saturate-[0.5] contrast-[0.85]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/75" />
      <div className="absolute inset-0 z-10 flex items-center pt-10">
        <div className="ml-66 text-center font-[var(--font-ibm-plex)]">
          <h2 className="text-[124px] font-normal mb-[-24px] text-black">20+</h2>
          <p className="text-[30px] tracking-normal text-black font-bold pl-2">Years Of Deilvery</p>
        </div>
        <div>
          <p className="text-3xl leading-relaxed text-gray-700">
            Since its inception, Cinqo Holding has expanded from a construction focused business into a diversified group with a growing presence across the GCC.
          </p>
        </div>
      </div>
    </section>
  );
}
