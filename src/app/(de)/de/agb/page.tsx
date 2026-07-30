import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { TermsPage } from "@/components/pages/LegalPage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "terms",
  title: c.terms.metaTitle,
  description: c.terms.metaDescription,
});

export default function Page() {
  return <TermsPage locale="de" />;
}
