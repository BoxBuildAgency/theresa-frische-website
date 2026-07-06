import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-sand">
      <Container className="py-20 sm:py-24">
        <div className="max-w-3xl">
          {crumbs && crumbs.length > 0 && <Breadcrumbs items={crumbs} className="mb-6" />}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
            {title}
          </h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{lead}</p>}
        </div>
      </Container>
    </section>
  );
}
