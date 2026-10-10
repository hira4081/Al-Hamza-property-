import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AREAS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "jhp-valuation-leads";

type Lead = {
  name: string;
  phone: string;
  email: string;
  area: string;
  message: string;
  at: string;
};

export function ValuationForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lead: Lead = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      area: String(data.get("area") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      at: new Date().toISOString(),
    };
    if (!lead.name || !lead.phone) {
      toast.error("Please add your name and phone number.");
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Lead[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([lead, ...existing].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    const lines = [
      "Assalam o Alaikum Hamza, I'd like a free property valuation.",
      "",
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      lead.email ? `Email: ${lead.email}` : "",
      `Area: ${lead.area}`,
      lead.message ? `Notes: ${lead.message}` : "",
    ].filter((line, i) => i < 2 || line !== "");
    const url = `${SITE.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
    toast.success("Opening WhatsApp — just press Send to reach Hamza.");
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-lg border p-6",
          dark ? "border-primary/40 bg-surface-dark" : "border-border bg-surface",
        )}
      >
        <p className={cn("font-display text-2xl font-semibold", dark ? "text-background" : "text-foreground")}>
          Thank you.
        </p>
        <p className={cn("mt-2 text-sm font-light", dark ? "text-background/75" : "text-muted-foreground")}>
          WhatsApp should have opened with your details ready. Press Send to reach Hamza directly. If it did not open, use
          the button below to send the request again — no obligation.
        </p>
        <Button
          type="button"
          variant={dark ? "ghost" : "outline"}
          className={dark ? "mt-5 border-primary text-primary hover:bg-primary/15" : "mt-5"}
          onClick={() => setSubmitted(false)}
        >
          Send another request
        </Button>
      </div>
    );
  }

  const fieldClass = dark
    ? "border-primary/30 bg-surface-dark text-background placeholder:text-background/40 focus-visible:border-primary"
    : "";
  const labelClass = dark ? "text-primary" : "";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name" className={labelClass}>
            Full name
          </Label>
          <Input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </Label>
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="03xx xxxxxxx"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email" className={labelClass}>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="area" className={labelClass}>
            Area
          </Label>
          <select
            id="area"
            name="area"
            defaultValue="Gulshan-e-Maymar"
            className={cn(
              "flex h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30",
              fieldClass,
            )}
          >
            {AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message" className={labelClass}>
          Property notes
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Size, beds, and anything Hamza should know."
          className={fieldClass}
        />
      </div>
      <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto">
        Book a free valuation
        <span aria-hidden>→</span>
      </Button>
    </form>
  );
}
