import { Link } from "@tanstack/react-router";
import { ArrowRight, Bath, BedDouble, Maximize } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { Photo } from "@/components/property/photo";
import type { Property } from "@/data/properties";
import { cn, formatPrice } from "@/lib/utils";

export function PropertyCard({
  property,
  index = 0,
}: {
  property: Property;
  index?: number;
}) {
  return (
    <FadeUp delay={index * 0.08}>
      <Link
        to="/listings/$slug"
        params={{ slug: property.slug }}
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background",
          "transition-[transform,box-shadow,border-color] duration-200 ease-out",
          "hover:-translate-y-1 hover:border-primary hover:shadow-lift",
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Photo
            src={property.image}
            alt={property.name}
            className="size-full"
            imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            eager={index < 2}
          />
          <span className="absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-label font-medium uppercase tracking-[0.14em] text-foreground">
            {property.area}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold leading-snug text-foreground">
              {property.name}
            </h3>
          </div>
          <p className="text-sm font-light text-muted-foreground">{property.scheme}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
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
          </div>
          <p className="font-sans text-lg font-semibold text-primary">{formatPrice(property.price)}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            View details
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </FadeUp>
  );
}
