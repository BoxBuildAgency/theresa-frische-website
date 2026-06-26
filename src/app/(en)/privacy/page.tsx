import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { PrivacyPage } from "@/components/pages/LegalPage";

const c = getContent("en");
export const metadata = buildMetadata({
  locale: "en",
  routeKey: "privacy",
  title: c.privacy.metaTitle,
  description: c.privacy.metaDescription,
});

export default function Page() {
  return <PrivacyPage locale="en" />;
}
