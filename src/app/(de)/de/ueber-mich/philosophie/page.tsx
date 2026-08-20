import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { PhilosophyPage } from "@/components/pages/PhilosophyPage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "about-philosophy",
  title: c.philosophyPage.metaTitle,
  description: c.philosophyPage.metaDescription,
});

export default function Page() {
  return <PhilosophyPage locale="de" />;
}
