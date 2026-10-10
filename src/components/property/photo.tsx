import { useState } from "react";
import { cn } from "@/lib/utils";

export function Photo({
  src,
  alt,
  className,
  imgClassName,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={cn("relative block overflow-hidden bg-surface-dark", className)}>
      {failed ? (
        <span
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(160deg,#1a1c2e_0%,#2c3048_55%,#1a1c2e_100%)]"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          onError={() => setFailed(true)}
          className={cn("size-full object-cover", imgClassName)}
        />
      )}
    </span>
  );
}
