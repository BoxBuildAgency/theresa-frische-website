import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";
import { clsx } from "@/lib/clsx";

export interface PageHeroImage {
  src: string;
  /**
   * `object-position`, as a Tailwind class. A page banner is much wider than it
   * is tall, so every source is cropped; this is where each page says which
   * part of its photograph survives the crop.
   */
  position?: string;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  image?: PageHeroImage;
}) {
  // With a photograph behind it the type has to invert to cream over a pine
  // scrim, which is the treatment Weekly Wellbeing already uses. Without one the
  // hero stays as it was: ink on sand. Both live here rather than in each page
  // so the two banner pages cannot drift apart.
  const onImage = Boolean(image);

  return (
    <section
      className={clsx(
        "relative isolate overflow-hidden",
        onImage ? undefined : "border-b border-line bg-sand",
      )}
    >
      {image && (
        <>
          {/* The pine fallback has to be its own layer, not `bg-pine` on the
              section. `isolate` creates a stacking context in which the
              section's own background sits above every negative-z child, so a
              background colour here would paint straight over the photograph.
              Learned the hard way: the banner rendered as a flat green block. */}
          <div aria-hidden="true" className="absolute inset-0 -z-30 bg-pine" />
          <Image
            src={image.src}
            /* Decorative here: the heading beside it already says what the page
               is, so announcing the photograph would only repeat it. */
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className={clsx("-z-20 object-cover", image.position ?? "object-center")}
          />
          {/* Same gradient as Weekly Wellbeing: heaviest under the text on the
              left, lightest on the right where the photograph is left to read.
              Measured against the actual pixels — see the contrast note in the
              commit. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-pine/85 via-pine/60 to-pine/30"
          />
        </>
      )}
      <Container className={onImage ? "py-24 sm:py-32" : "py-20 sm:py-24"}>
        <div className={clsx("max-w-3xl", onImage && "text-cream")}>
          {crumbs && crumbs.length > 0 && (
            <Breadcrumbs items={crumbs} className="mb-6" tone={onImage ? "onImage" : "default"} />
          )}
          <Eyebrow className={onImage ? "!text-cream/80" : undefined}>{eyebrow}</Eyebrow>
          <h1
            className={clsx(
              "mt-5 font-serif text-4xl font-light leading-[1.1] sm:text-5xl",
              onImage ? "text-cream" : "text-ink",
            )}
          >
            {title}
          </h1>
          {lead && (
            <p
              className={clsx(
                "mt-6 max-w-2xl text-lg leading-relaxed",
                onImage ? "text-cream/90" : "text-ink-soft",
              )}
            >
              {lead}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
