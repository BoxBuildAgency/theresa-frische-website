import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { AboutPage } from "@/components/pages/AboutPage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "about",
  title: c.about.metaTitle,
  description: c.about.metaDescription,
});

export default function Page() {
  return <AboutPage locale="de" />;
}
