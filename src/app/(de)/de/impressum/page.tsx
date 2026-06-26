import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { ImpressumPage } from "@/components/pages/LegalPage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "impressum",
  title: c.impressum.metaTitle,
  description: c.impressum.metaDescription,
});

export default function Page() {
  return <ImpressumPage locale="de" />;
}
