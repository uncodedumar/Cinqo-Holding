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

        <div className="mt-12 grid gap-6 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {companiesData.map((company) => (
            <Link
              href={company.href}
              key={company.id}
              className="group relative block overflow-hidden rounded-md border border-line bg-cream-50 p-8 min-h-[260px] isolate glass-frost-hover"
            >
              <Image
                src={company.bgImage}
                alt=""
                fill
                className="object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 -z-20"
              />
              <div className="absolute inset-0 -z-10 bg-white/55 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100" />

              <div className="flex flex-col gap-6 h-full justify-between">
                <div className="h-[40px]">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={40}
                  />
                </div>
                <p>{company.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
