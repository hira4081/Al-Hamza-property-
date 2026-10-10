import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, useSpring } from "motion/react";
import { Star } from "lucide-react";

function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const spring = useSpring(0, { stiffness: 50, damping: 22, mass: 0.7 });
  const [text, setText] = useState(decimals ? (0).toFixed(decimals) : "0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setText(decimals ? value.toFixed(decimals) : String(Math.round(value)));
      return;
    }
    spring.set(value);
  }, [inView, reduce, spring, value, decimals]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setText(decimals ? v.toFixed(decimals) : String(Math.round(v)));
    });
    return unsub;
  }, [spring, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {text}
      {suffix}
    </span>
  );
}

const STATS = [
  { label: "Sold", node: <CountUp value={185} prefix="PKR " suffix=" Cr+ Sold" /> },
  { label: "Homes", node: <CountUp value={320} suffix="+ Homes" /> },
  { label: "Years", node: <CountUp value={15} suffix=" Years" /> },
  {
    label: "Rating",
    node: (
      <span className="inline-flex items-center gap-1.5">
        <CountUp value={4.9} decimals={1} />
        <Star className="size-5 fill-primary text-primary" />
        <span className="text-[0.95em]">Avg Rating</span>
      </span>
    ),
  },
] as const;

export function StatsStrip() {
  return (
    <section className="bg-surface-dark">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-primary/40 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex min-h-[90px] items-center justify-center px-4 py-6 text-center"
          >
            <p className="font-display text-xl font-semibold italic text-background sm:text-2xl">
              {stat.node}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
