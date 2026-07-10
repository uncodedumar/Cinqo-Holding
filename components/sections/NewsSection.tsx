import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/news.data";

/**
 * CINQO News — static grid, sourced entirely from data/news.data.ts.
 * Layout kept "as is" per design spec (no special hover/scroll effects).
 */
export default function NewsSection() {
  return (
    <section className="section bg-cream-100" id="news">
      <div className="container">
        <h2>CINQO News</h2>

        <div className="mt-12 grid gap-6 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {newsData.map((item) => (
            <Link href={item.href} key={item.id} className="flex flex-col gap-2">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-navy-900">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <span className="absolute top-4 left-4 bg-cream-50 text-ink text-small py-1 px-3 rounded-pill">{item.tag}</span>
              </div>
              <h4 className="text-body leading-[1.5]">{item.title}</h4>
              <span className="text-small text-muted">{item.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
