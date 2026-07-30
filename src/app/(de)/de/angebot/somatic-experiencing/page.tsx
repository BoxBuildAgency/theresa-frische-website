import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { ServiceChildPage } from "@/components/pages/ServiceChildPage";

const ROUTE_KEY = "wwm-somatic-experiencing";
const page = getContent("de").serviceChildren[ROUTE_KEY];

export const metadata = buildMetadata({
  locale: "de",
  routeKey: ROUTE_KEY,
  title: page.metaTitle,
  description: page.metaDescription,
});

export default function Page() {
  return (
    <ServiceChildPage
      locale="de"
      routeKey={ROUTE_KEY}
      parentEnPath="/work-with-me"
      parentLabel="Angebot"
    />
  );
}
