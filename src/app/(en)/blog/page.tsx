import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { BlogIndexPage } from "@/components/pages/BlogIndexPage";

const c = getContent("en");
export const metadata = buildMetadata({
  locale: "en",
  routeKey: "blog",
  title: c.blog.metaTitle,
  description: c.blog.metaDescription,
});

export default function Page() {
  return <BlogIndexPage locale="en" />;
}
