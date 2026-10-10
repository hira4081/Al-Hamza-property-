import { FadeUp } from "@/components/motion/fade-up";
import { GoldRule } from "@/components/motion/gold-rule";
import { PROCESS_STEPS } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 className="font-display text-display font-bold text-foreground">How It Works</h2>
      <GoldRule />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((step, index) => (
          <FadeUp key={step.number} delay={index * 0.08} className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 left-0 font-display text-step font-bold text-primary/10"
            >
              {step.number}
            </span>
            <h3 className="relative pt-8 font-display text-2xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{step.body}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
