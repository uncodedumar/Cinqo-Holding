import Image from "next/image";
import Link from "next/link";
import { companiesData } from "@/data/companies.data";

/**
 * Our Companies — 6-card grid. On hover, the card's bgImage is
 * revealed underneath a frosted-glass blur (see .glass-frost-hover
 * in globals.css combined with the local .card styles below).
 */
export default function OurCompanies() {
  return (
    <section className="section bg-cream-100" id="companies">
      <div className="container">
        <h2>Our Companies</h2>
        <p className="text-muted">
          Five operating Companies. Governed by one unified structure.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companiesData.map((company) => (
            <Link
              href={company.href}
              key={company.id}
              className="group relative block overflow-hidden rounded-md border border-line bg-cream-50 p-6 md:p-8 min-h-[360px] isolate glass-frost-hover transition-all duration-300 hover:shadow-md"
            >
              {/* Background Image on Hover */}
              <Image
                src={company.bgImage}
                alt=""
                fill
                className="object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 -z-20"
              />
              
              {/* Frosted Glass Overlay */}
              <div className="absolute inset-0 -z-10 bg-white/55 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100" />

              {/* Card Content (Logo top, Text bottom) */}
              <div className="flex flex-col justify-between h-full gap-6">
                <div className="relative flex items-start">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={140}
                    height={80}
                    className="w-auto h-16 md:h-20 object-contain object-left"
                  />
                </div>
                
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  {company.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}