import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/home/about";
import { Featured } from "@/components/home/featured";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { StatsStrip } from "@/components/home/stats-strip";
import { Testimonials } from "@/components/home/testimonials";
import { Valuation } from "@/components/home/valuation";
import { PageShell } from "@/components/layout/page-shell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Al Hamza Properties — Prime Karachi Homes" },
      {
        name: "description",
        content:
          "Prime Karachi residential specialist. Homes in Gulshan-e-Usman, Gulshan-e-Maymar, Saadi Town, Capital Society, Police Society, and Rabia Enclave, Scheme 33.",
      },
    ],
  }),
});

function Home() {
  return (
    <PageShell>
      <main>
        <Hero />
        <StatsStrip />
        <Featured />
        <About />
        <Process />
        <Testimonials />
        <Valuation />
      </main>
    </PageShell>
  );
}
