import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PropertyCard } from "@/components/property/property-card";
import { ValuationForm } from "@/components/property/valuation-form";
import { Button } from "@/components/ui/button";
import { getProperty, similarProperties } from "@/data/properties";
import { SITE } from "@/data/site";
import { formatPrice } from "@/lib/utils";

export const Route = createFileRoute("/listings/$slug")({
  loader: ({ params }) => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  component: PropertyPage,
  notFoundComponent: PropertyNotFound,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.property.name} — Al Hamza Properties`
          : "Listing — Al Hamza Properties",
      },
    ],
  }),
});

function PropertyNotFound() {
  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-display font-bold">Listing not found</h1>
        <p className="mt-3 text-muted-foreground">That home is no longer on the books.</p>
        <Button asChild className="mt-8">
          <Link to="/listings">Back to listings</Link>
        </Button>
      </main>
    </PageShell>
  );
}

function PropertyPage() {
  const { property } = Route.useLoaderData();
  const [active, setActive] = useState(property.gallery[0] ?? property.image);
  const similar = similarProperties(property.slug);

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/listings"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          All listings
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <div className="overflow-hidden rounded-xl bg-surface">
              <img
                src={active}
                alt={property.name}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {property.gallery.length > 1 ? (
              <div className="mt-3 grid grid-cols-3 gap-2">
                {property.gallery.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(src)}
                    className={`overflow-hidden rounded-md border transition-[border-color] duration-200 ${
                      active === src ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <p className="text-label font-medium uppercase tracking-[0.16em] text-primary">
              {property.area} · {property.scheme}
            </p>
            <h1 className="mt-2 font-display text-display font-bold text-foreground">
              {property.name}
            </h1>
            <p className="mt-3 font-sans text-2xl font-semibold text-primary">
              {formatPrice(property.price)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{property.status}</p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="size-4 text-primary" />
                {property.beds} bed
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Bath className="size-4 text-primary" />
                {property.baths} bath
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Maximize className="size-4 text-primary" />
                {property.areaLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" />
                {property.type}
              </span>
            </div>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
              {property.description}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="border-l-2 border-primary pl-3 text-sm text-foreground"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8" size="lg">
              <a href="#viewing">
                Book a viewing
                <span aria-hidden>→</span>
              </a>
            </Button>
          </div>
        </div>

        <section id="viewing" className="mt-16 grid gap-8 border-t border-border pt-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Book a viewing</h2>
            <p className="mt-3 text-sm font-light text-muted-foreground">
              Leave your WhatsApp number and Hamza will confirm a time — usually within 48 hours.
              Or call him now on{" "}
              <a href={SITE.phoneHref} className="font-medium text-primary hover:underline">
                {SITE.phone}
              </a>
              .
            </p>
          </div>
          <ValuationForm />
        </section>

        {similar.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold">Similar homes</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {similar.map((item, index) => (
                <PropertyCard key={item.slug} property={item} index={index} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </PageShell>
  );
}
