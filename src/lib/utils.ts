import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(pkr: number): string {
  if (pkr >= 10_000_000) {
    const cr = pkr / 10_000_000;
    const shown = Number.isInteger(cr) ? String(cr) : cr.toFixed(2).replace(/\.?0+$/, "");
    return `PKR ${shown} Crore`;
  }
  const lakh = pkr / 100_000;
  const shown = Number.isInteger(lakh) ? String(lakh) : lakh.toFixed(1).replace(/\.0$/, "");
  return `PKR ${shown} Lakh`;
}
