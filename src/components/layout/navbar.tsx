import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, SITE } from "@/data/site";
import { LogoMark } from "@/components/layout/logo-mark";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-surface-dark/95 backdrop-blur-sm transition-[box-shadow] duration-200",
        scrolled && "shadow-nav",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 leading-none">
          <LogoMark />
          <span className="flex min-w-0 flex-col">
            <span className="font-display text-xl font-semibold tracking-tight text-background sm:text-2xl">
              {SITE.name}
            </span>
            <span className="text-label font-light uppercase tracking-[0.18em] text-background/50">
              Properties
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="text-sm font-medium text-background/80 transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="whitespace-nowrap text-sm font-medium text-primary transition-opacity duration-200 hover:opacity-80"
          >
            {SITE.phone}
          </a>
          <Button asChild>
            <Link to="/" hash="contact">
              Free valuation
              <span aria-hidden>→</span>
            </Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="border-background/20 text-background hover:bg-background/10 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-surface-dark text-background">
            <SheetTitle className="pr-8 text-background">{SITE.brand}</SheetTitle>
            <nav className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.label}>
                  <Link
                    to={link.to}
                    hash={link.hash}
                    className="rounded-md px-2 py-3 text-base text-background/85 hover:bg-background/10 hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <a
              href={SITE.phoneHref}
              className="mt-6 block text-sm font-medium text-primary"
            >
              {SITE.phone}
            </a>
            <SheetClose asChild>
              <Button asChild className="mt-4 w-full">
                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp Hamza
                </a>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild variant="ghost" className="mt-3 w-full">
                <Link to="/" hash="contact" onClick={() => setOpen(false)}>
                  Get a free valuation
                  <span aria-hidden>→</span>
                </Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}