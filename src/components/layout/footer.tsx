import { LogoMark } from "@/components/layout/logo-mark";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <div>
              <p className="font-display text-2xl font-semibold leading-none">{SITE.name}</p>
              <p className="mt-1 text-label font-light uppercase tracking-[0.18em] text-background/55">
                Properties
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm font-light text-background/65">{SITE.tagline}</p>
        </div>
        <div>
          <p className="text-label font-medium uppercase tracking-[0.16em] text-primary">Links</p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  hash={link.hash}
                  className="text-sm text-background/80 transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/listings"
                className="text-sm text-background/80 transition-colors duration-200 hover:text-primary"
              >
                Featured properties
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-label font-medium uppercase tracking-[0.16em] text-primary">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-background/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                <a href={SITE.phoneHref} className="font-medium hover:text-primary">
                  {SITE.phone}
                </a>
                <span className="block text-background/55">
                  Call or{" "}
                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    WhatsApp Hamza
                  </a>
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-label font-light tracking-wide text-background/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{SITE.ombudsman}</p>
          <p>{SITE.copyright}</p>
        </div>
      </div>
    </footer>
  );
}