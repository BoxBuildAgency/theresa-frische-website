import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { WorkTogetherPage } from "@/components/pages/WorkTogetherPage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "work-with-me",
  title: c.workTogether.metaTitle,
  description: c.workTogether.metaDescription,
});

export default function Page() {
  return <WorkTogetherPage locale="de" />;
}
