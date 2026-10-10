import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { photos } from "@/assets/photos";
import { FadeUp } from "@/components/motion/fade-up";
import { Photo } from "@/components/property/photo";
import { AREAS } from "@/data/site";

export function About() {
  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <FadeUp>
          <p className="text-label font-medium uppercase tracking-[0.18em] text-primary">About Hamza</p>
          <h2 className="mt-3 font-display text-display font-bold text-foreground">
            15 Years of Placing People in Exceptional Homes
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            Hamza works one family at a time. He walks every house before it is shortlisted, reads the
            lease papers himself, and will tell you when a demand is ahead of the market — even when
            that means walking away from a fee.
          </p>
          <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
            His beat is Scheme 33: Saadi Town, Capital Society, Police Society, Gulshan-e-Usman,
            Gulshan-e-Maymar, and Rabia Enclave. Families trust him for a first home; investors trust
            him for a clean yield. Both get the same thing — a straight view of what the property is
            actually worth.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-primary/40 bg-background px-3 py-1.5 text-label font-medium uppercase tracking-[0.12em] text-primary"
              >
                {area}
              </span>
            ))}
          </div>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity duration-200 hover:opacity-80"
          >
            Book a discovery call
            <ArrowRight className="size-4" />
          </Link>
        </FadeUp>
        <FadeUp delay={0.12}>
          <Photo
            src={photos.portrait}
            alt="Hamza, residential property specialist for Al Hamza Properties, in his Karachi office"
            className="aspect-[3/4] w-full rounded-xl lg:aspect-[4/5]"
            imgClassName="object-top"
          />
        </FadeUp>
      </div>
    </section>
  );
}
