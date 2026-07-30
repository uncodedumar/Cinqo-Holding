import Image from "next/image";
import Link from "next/link";
import type { ContentLink, NewsItem } from "@/types";
import type { ReactNode } from "react";

function renderParagraph(text: string, links?: ContentLink[]): ReactNode {
  let parts: ReactNode[] = text.split(/(\*\*[^*]+\*\*)/).filter(Boolean);

  parts = parts.map((part, i) => {
    if (typeof part !== "string") return part;
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) return <strong key={`b-${i}`}>{boldMatch[1]}</strong>;
    return part;
  });

  if (links && links.length > 0) {
    links.forEach((link, i) => {
      parts = parts.flatMap<ReactNode>((part) => {
        if (typeof part !== "string") return [part];
        const idx = part.indexOf(link.text);
        if (idx === -1) return [part];
        return [
          part.slice(0, idx),
          <Link
            key={`${link.url}-${i}`}
            href={link.url}
            className="text-coral-600 font-medium hover:underline"
          >
            {link.text}
          </Link>,
          part.slice(idx + link.text.length),
        ];
      });
    });
  }

  return parts;
}

interface NewsSlugProps {
  currentNews: NewsItem;
  sidebarNews: NewsItem[];
}

export default function NewsSlug({ currentNews, sidebarNews }: NewsSlugProps) {
  return (
    <section className="section !pt-12 md:!pt-16">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-12">
        {/* Main Article Column */}
        <article className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-navy-900 text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-pill">
              {currentNews.tag}
            </span>
            <span className="text-small text-muted">{currentNews.date}</span>
          </div>

          <p className="text-2xl text-ink mb-4 font-medium">
            {currentNews.excerpt}
          </p>

          <div className="max-w-none space-y-3 text-body leading-relaxed text-ink">
            {currentNews.content.map((block, idx) => {
              if (block.type === "heading") {
                return (
                  <h2 key={idx} className="text-h3 font-bold text-navy-900 !mt-10 first:!mt-0">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p key={idx} className="text-[15px] md:text-base text-ink/80">
                    {renderParagraph(block.text ?? "", block.links)}
                  </p>
                );
              }
              if (block.type === "image") {
                return (
                  <figure key={idx} className="!my-8">
                    <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden bg-navy-900">
                      {block.src && (
                        <Image src={block.src} alt={block.alt ?? ""} fill className="object-cover" />
                      )}
                    </div>
                    {block.caption && (
                      <figcaption className="text-small text-muted italic mt-3">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              return null;
            })}
          </div>
        </article>

        {/* Sticky Sidebar */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-28">
            <h3 className="font-[var(--font-ibm-plex)] font-semibold text-lg mb-6 pb-4 border-b border-line">
              More From Cinqo News
            </h3>
            <div className="flex flex-col divide-y divide-line">
              {sidebarNews.map((news) => (
                <Link
                  key={news.id}
                  href={news.href}
                  className="flex gap-4 py-4 first:pt-0 group"
                >
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden bg-navy-900">
                    <Image
                      src={news.featuredImage}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-coral-600 mb-1">
                      {news.tag}
                    </span>
                    <h4 className="font-semibold text-sm leading-snug line-clamp-2 text-ink group-hover:text-coral-600 transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-[11px] text-muted mt-1">{news.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
