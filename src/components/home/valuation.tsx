import { Phone } from "lucide-react";
import { ValuationForm } from "@/components/property/valuation-form";
import { SITE } from "@/data/site";

export function Valuation() {
  return (
    <section id="contact" className="bg-surface-dark">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
        <div>
          <h2 className="font-display text-display font-bold italic text-background">
            What Is Your Property Worth?
          </h2>
          <p className="mt-4 max-w-md text-base font-light text-background/75">
            Get a free, no-obligation market appraisal from Hamza — priced against recent closes in
            Saadi Town, Capital Society, Police Society, and the rest of Scheme 33.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-base font-medium text-background transition-colors duration-200 hover:text-primary"
            >
              <Phone className="size-4 text-primary" />
              {SITE.phone}
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-primary transition-opacity duration-200 hover:opacity-80"
            >
              WhatsApp Hamza →
            </a>
          </div>
          <p className="mt-8 text-label font-light uppercase tracking-[0.14em] text-background/50">
            No obligation · Honest market insight · Usually within 48 hours
          </p>
        </div>
        <ValuationForm dark />
      </div>
    </section>
  );
}