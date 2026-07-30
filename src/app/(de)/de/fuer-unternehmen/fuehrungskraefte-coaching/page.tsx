import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { ServiceChildPage } from "@/components/pages/ServiceChildPage";

const ROUTE_KEY = "org-leadership-coaching";
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
      parentEnPath="/organisations"
      parentLabel="Für Unternehmen"
    />
  );
}
