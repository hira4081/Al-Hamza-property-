import { Link } from "@tanstack/react-router";
import { GoldRule } from "@/components/motion/gold-rule";
import { PropertyCard } from "@/components/property/property-card";
import { Button } from "@/components/ui/button";
import { featuredProperties } from "@/data/properties";

export function Featured() {
  const items = featuredProperties();
  return (
    <section id="listings" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div>
        <h2 className="font-display text-display font-bold text-foreground">Featured Properties</h2>
        <GoldRule />
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((property, index) => (
          <PropertyCard key={property.slug} property={property} index={index} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link to="/listings">
            See all listings
            <span aria-hidden>→</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
