import { clsx } from "@/lib/clsx";
import { Container } from "./Container";

type Tone = "cream" | "sand" | "forest";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-ink",
  sand: "bg-sand text-ink",
  forest: "bg-pine text-cream",
};

export function Section({
  children,
  tone = "cream",
  className,
  containerSize = "default",
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
}) {
  return (
    <section id={id} className={clsx("py-20 sm:py-28", tones[tone], className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={clsx("eyebrow", className)}>{children}</p>;
}
