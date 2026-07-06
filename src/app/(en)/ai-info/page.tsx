import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { AiInfoPage } from "@/components/pages/AiInfoPage";

const c = getContent("en");
export const metadata = buildMetadata({
  locale: "en",
  routeKey: "ai-info",
  title: c.aiInfo.metaTitle,
  description: c.aiInfo.metaDescription,
});

export default function Page() {
  return <AiInfoPage locale="en" />;
}
