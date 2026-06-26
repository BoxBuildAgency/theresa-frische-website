import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { ContactPage } from "@/components/pages/ContactPage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "contact",
  title: c.contact.metaTitle,
  description: c.contact.metaDescription,
});

export default function Page() {
  return <ContactPage locale="de" />;
}
