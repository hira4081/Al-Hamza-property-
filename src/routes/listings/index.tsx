import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { GoldRule } from "@/components/motion/gold-rule";
import { PropertyCard } from "@/components/property/property-card";
import { Button } from "@/components/ui/button";
import { PROPERTIES, type PropertyArea } from "@/data/properties";
import { cn } from "@/lib/utils";

const FILTERS: Array<"All" | PropertyArea> = [
  "All",
  "Gulshan-e-Usman",
  "Gulshan-e-Maymar",
  "Saadi Town",
  "Capital Society",
  "Police Society",
  "Rabia Enclave",
];

export const Route = createFileRoute("/listings/")({
  component: ListingsPage,
  head: () => ({
    meta: [
      { title: "Listings — Al Hamza Properties" },
      {
        name: "description",
        content:
          "Houses and apartments for sale in Saadi Town, Capital Society, Police Society, Gulshan-e-Usman, Gulshan-e-Maymar, and Rabia Enclave, Scheme 33, Karachi.",
      },
    ],
  }),
});

function ListingsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const items = useMemo(
    () => (filter === "All" ? PROPERTIES : PROPERTIES.filter((p) => p.area === filter)),
    [filter],
  );

  return (
    <PageShell>
      <section className="bg-surface-dark">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-label font-medium uppercase tracking-[0.18em] text-primary">
            Karachi · Scheme 33
          </p>
          <h1 className="mt-3 font-display text-display font-bold text-background">All listings</h1>
          <GoldRule />
          <p className="mt-4 max-w-xl text-base font-light text-background/70">
            Current asking prices in PKR. Every home below has been walked by Hamza before it is
            listed.
          </p>
        </div>
      </section>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <Button
              key={item}
              type="button"
              size="sm"
              variant={filter === item ? "default" : "ghost"}
              className={cn(filter !== item && "border-border text-foreground")}
              onClick={() => setFilter(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((property, index) => (
            <PropertyCard key={property.slug} property={property} index={index % 3} />
          ))}
        </div>
      </main>
    </PageShell>
  );
}
