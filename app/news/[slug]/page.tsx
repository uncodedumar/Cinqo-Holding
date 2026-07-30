import { notFound } from "next/navigation";
import { newsData } from "@/data/news.data";
import NewsSlugHero from "@/components/sections/NewsSlug/Hero";
import NewsSlug from "@/components/sections/NewsSlug/Slug";
import NewsFollow from "@/components/sections/News/NewsFollow";

const TAG_PRIORITY: Record<string, number> = { Top: 0, Latest: 1, News: 2 };

export function generateStaticParams() {
  return newsData.map((item) => ({ slug: item.slug }));
}

export default async function NewsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentNews = newsData.find((item) => item.slug === slug);

  if (!currentNews) notFound();

  // Last 10 news items (excluding the current one), newest first, with
  // "Top" and "Latest" tagged articles bubbled to the front of that recent set.
  const sidebarNews = [...newsData]
    .filter((item) => item.slug !== slug)
    .reverse()
    .slice(0, 4)
    .sort((a, b) => TAG_PRIORITY[a.tag] - TAG_PRIORITY[b.tag]);

  return (
    <main>
      <NewsSlugHero title={currentNews.title} image={currentNews.featuredImage} />
      <NewsSlug currentNews={currentNews} sidebarNews={sidebarNews} />
      <NewsFollow />
    </main>
  );
}
