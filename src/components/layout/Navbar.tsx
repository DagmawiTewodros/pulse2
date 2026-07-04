import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PillLink } from "@/components/ui-brand/PillButton";

const links = [
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

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
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--background)]/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--color-primary)" }}
          />
          Pulse Digital
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[color:var(--ink-soft)]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-[color:var(--ink)] transition-colors"
              activeProps={{ className: "text-[color:var(--ink)] font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <PillLink to="/contact">Get a Free Consultation</PillLink>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-[color:var(--background)]">
          <div className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2 text-[color:var(--ink)]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <PillLink to="/contact" className="mt-2 self-start" onClick={() => setOpen(false)}>
              Get a Free Consultation
            </PillLink>
          </div>
        </div>
      )}
    </header>
  );
}
