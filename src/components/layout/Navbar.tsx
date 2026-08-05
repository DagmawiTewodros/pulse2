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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full transition-all duration-300 border ${
        scrolled
          ? "backdrop-blur-xl bg-[color:var(--surface)]/80 border-border shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex h-14 items-center justify-between px-4 sm:px-6">
        <Link to="/" className={`flex items-center gap-2 font-semibold tracking-tight text-base sm:text-lg transition-colors ${scrolled ? "text-[color:var(--ink)]" : "text-white"}`}>
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--color-primary)", boxShadow: "0 0 10px 1px var(--color-primary)" }}
          />
          Pulse
        </Link>

        <nav className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${scrolled ? "text-[color:var(--ink-soft)]" : "text-white/80"}`}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-colors relative py-1 ${scrolled ? "hover:text-[color:var(--ink)]" : "hover:text-white"}`}
              activeProps={{ className: scrolled ? "text-[color:var(--ink)]" : "text-white" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <PillLink to="/contact" className={scrolled ? "" : "!border-white/20 !text-white hover:!bg-white/10"}>Book a Call</PillLink>
        </div>

        <button
          className={`md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${scrolled ? "border-border text-[color:var(--ink)]" : "border-white/20 text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-[color:var(--background)] shadow-lg">
          <div className="container-page py-4 sm:py-6 flex flex-col gap-1 sm:gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 sm:py-4 px-2 text-base sm:text-lg text-[color:var(--ink)] font-medium hover:bg-[color:var(--surface)] rounded-lg transition-colors"
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-[color:var(--primary)]" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
              <PillLink to="/contact" className="w-full justify-center text-sm sm:text-base" onClick={() => setOpen(false)}>
                Get a Free Consultation
              </PillLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
