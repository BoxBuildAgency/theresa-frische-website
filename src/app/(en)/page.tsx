import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { HomePage } from "@/components/pages/HomePage";

const c = getContent("en");
export const metadata = buildMetadata({
  locale: "en",
  routeKey: "home",
  title: c.home.metaTitle,
  description: c.home.metaDescription,
});

export default function Page() {
  return <HomePage locale="en" />;
}
