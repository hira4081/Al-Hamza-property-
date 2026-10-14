import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { photos } from "@/assets/photos";
import { Photo } from "@/components/property/photo";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-surface-dark">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-12 lg:py-16">
        <div>
          <p className="text-label font-medium uppercase tracking-[0.18em] text-primary">
            Prime Karachi Property Specialist
          </p>
          <h1 className="mt-4 font-display text-hero font-bold tracking-tight text-background">
            Finding Your
            <br />
            <span className="italic text-primary">Perfect</span>
            <br />
            Home
          </h1>
          <p className="mt-5 max-w-md text-base font-light text-background/70 sm:text-lg">
            Specialist in prime Karachi residential property — Saadi Town, Capital Society, Police
            Society, Gulshan-e-Usman, Gulshan-e-Maymar, and Rabia Enclave, Scheme 33.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link to="/listings">
                Browse listings
                <span aria-hidden>→</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Hamza
              </a>
            </Button>
          </div>
          <a
            href={SITE.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-background/80 transition-colors duration-200 hover:text-primary"
          >
            <Phone className="size-4 text-primary" />
            {SITE.phone}
          </a>
          <p className="mt-8 text-sm font-medium text-background/80">
            15 yrs experience · 4.9 Google
          </p>
        </div>
        <motion.div
          className="relative overflow-hidden rounded-2xl ring-1 ring-primary/25"
          animate={reduce ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Photo
            src={photos.hero}
            alt="A cream two-storey Karachi bungalow at dusk, warm gold light in the windows"
            className="aspect-[4/5] w-full sm:aspect-[3/4]"
            imgClassName="transition-transform duration-700 ease-out"
            eager
          />
        </motion.div>
      </div>
    </section>
  );
}