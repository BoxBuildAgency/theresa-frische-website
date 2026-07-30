import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { OrganisationsPage } from "@/components/pages/OrganisationsPage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "organisations",
  title: c.organisations.metaTitle,
  description: c.organisations.metaDescription,
});

export default function Page() {
  return <OrganisationsPage locale="de" />;
}
