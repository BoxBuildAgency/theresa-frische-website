import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { ServiceChildPage } from "@/components/pages/ServiceChildPage";

const ROUTE_KEY = "wwm-somatic-experiencing";
const page = getContent("en").serviceChildren[ROUTE_KEY];

export const metadata = buildMetadata({
  locale: "en",
  routeKey: ROUTE_KEY,
  title: page.metaTitle,
  description: page.metaDescription,
});

export default function Page() {
  return (
    <ServiceChildPage
      locale="en"
      routeKey={ROUTE_KEY}
      parentEnPath="/work-with-me"
      parentLabel="Work With Me"
    />
  );
}
