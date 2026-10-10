import { cn } from "@/lib/utils";

/** Home + construction-crane mark for Al Hamza Properties. Uses the brand gold via currentColor. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-10 w-10 shrink-0 text-primary sm:h-11 sm:w-11", className)}
    >
      {/* house */}
      <path d="M4 25 L20 10 L36 25" />
      <path d="M8 23 V42 H32 V23" />
      <rect x="16" y="31" width="8" height="11" rx="1" />
      {/* crane */}
      <path d="M43 44 V6" />
      <path d="M27 6 H47" />
      <path d="M43 6 L37 6" />
      <path d="M31 6 V14" />
      <path d="M29 14 H33" />
      <path d="M43 6 L47 6" />
    </svg>
  );
}
