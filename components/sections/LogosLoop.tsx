import Image from "next/image";
import { logosData } from "@/data/logos.data";

/**
 * Represented brands — infinite horizontal marquee.
 * The list is duplicated once so the CSS keyframe loop is seamless.
 */
export default function LogosLoop() {
  const loopLogos = [...logosData, ...logosData];

  return (
    <section className="section bg-cream-50 py-12">
      <div className="container">
        <p className="max-w-[700px] mx-auto mb-12 text-center text-muted text-small">
          Exclusive and authorized representation of leading global
          manufacturers, delivering world-class technical solutions across
          coatings, chemicals, and infrastructure.
        </p>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
        <div className="flex items-center w-max gap-16 animate-[scroll_30s_linear_infinite]">
          {loopLogos.map((logo, i) => (
            <div className="flex-none opacity-70 grayscale transition-all duration-300 ease-out hover:opacity-100 hover:grayscale-0" key={`${logo.id}-${i}`}>
              <Image src={logo.logo} alt={logo.name} width={110} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
