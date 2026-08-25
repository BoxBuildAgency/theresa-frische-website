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
          {/* Heaviest under the start of the text, lightest at the right edge
              where the photograph is left to read.

              Measured against the real pixels, compositing each image under the
              actual scrim alpha at that x position, worst case over the area the
              text occupies at 375, 768, 1024 and 1440. The inherited 85/60/30
              failed at every one of those widths (as low as 2.71:1) because the
              ramp keeps lightening past its midpoint, and the heading is still
              over it. 88/78/62 is the lightest ramp that clears AA everywhere,
              so it gives up the least of the photograph. Do not lighten it
              without re-running that measurement. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-pine/88 via-pine/78 to-pine/62"
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
