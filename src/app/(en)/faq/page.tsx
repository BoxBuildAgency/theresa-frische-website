import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { FaqPage } from "@/components/pages/FaqPage";

const c = getContent("en");
export const metadata = buildMetadata({
  locale: "en",
  routeKey: "faq",
  title: c.faq.metaTitle,
  description: c.faq.metaDescription,
});

export default function Page() {
  return <FaqPage locale="en" />;
}
