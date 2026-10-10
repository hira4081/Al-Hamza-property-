import { Star } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <FadeUp
              key={item.name}
              delay={index * 0.1}
              className="flex flex-col rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex gap-1" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-xl font-normal italic leading-snug text-foreground">
                “{item.quote}”
              </blockquote>
              <p className="mt-5 text-label font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {item.name}
              </p>
              <p className="mt-1 text-label font-light uppercase tracking-[0.12em] text-muted-foreground">
                {item.area}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
