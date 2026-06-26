import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { WorkTogetherPage } from "@/components/pages/WorkTogetherPage";

const c = getContent("en");
export const metadata = buildMetadata({
  locale: "en",
  routeKey: "work-together",
  title: c.workTogether.metaTitle,
  description: c.workTogether.metaDescription,
});

export default function Page() {
  return <WorkTogetherPage locale="en" />;
}
