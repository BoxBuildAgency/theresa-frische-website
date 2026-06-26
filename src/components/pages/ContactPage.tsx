import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { CrisisResources } from "@/components/site/CrisisResources";
import { Disclaimer } from "@/components/site/Disclaimer";

export function ContactPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const ct = c.contact;
  const privacyHref = locale === "de" ? "/de/datenschutz" : "/privacy";

  return (
    <div className="bg-sand">
      <Container className="py-20 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>{ct.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
            {ct.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{ct.lead}</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          {/* Form */}
          <div className="rounded-3xl border border-line bg-cream p-7 sm:p-9">
            <ContactForm form={ct.form} privacyHref={privacyHref} locale={locale} />
          </div>

          {/* Side column: direct contact, crisis, disclaimer */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-line bg-cream p-6 sm:p-8">
              <h2 className="font-serif text-xl text-ink">{ct.directHeading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ct.directBody}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink-muted">{ct.emailLabel}</dt>
                  <dd>
                    <a href="mailto:theresafrische@gmail.com" className="font-medium text-forest underline underline-offset-4">
                      theresafrische@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink-muted">{ct.phoneLabel}</dt>
                  <dd>
                    <a href="tel:+4915738920374" className="font-medium text-forest underline underline-offset-4">
                      +49 157 38920374
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <CrisisResources crisis={c.crisis} />

            <Disclaimer disclaimer={c.disclaimer} variant="card" />
          </div>
        </div>
      </Container>
    </div>
  );
}
