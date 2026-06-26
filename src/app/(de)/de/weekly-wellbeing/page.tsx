import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { WeeklyWellbeingPage } from "@/components/pages/WeeklyWellbeingPage";

const c = getContent("de");
export const metadata = buildMetadata({
  locale: "de",
  routeKey: "weekly-wellbeing",
  title: c.weeklyWellbeing.metaTitle,
  description: c.weeklyWellbeing.metaDescription,
});

export default function Page() {
  return <WeeklyWellbeingPage locale="de" />;
}
