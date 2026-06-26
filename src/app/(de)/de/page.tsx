import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { HomePage } from "@/components/pages/HomePage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "home",
  title: c.home.metaTitle,
  description: c.home.metaDescription,
});

export default function Page() {
  return <HomePage locale="de" />;
}
