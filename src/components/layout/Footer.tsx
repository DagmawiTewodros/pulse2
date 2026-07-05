import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--surface)]">
      <div className="container-page py-12 sm:py-16 grid gap-8 sm:gap-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight text-sm sm:text-lg">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--color-primary)" }}
            />
            Pulse Digital
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[color:var(--ink-soft)] max-w-xs leading-relaxed">
            A hands-on marketing partner for businesses that want a serious online presence
            without hiring a full in-house team.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] hover:border-[color:var(--ink)] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          heading="Services"
          items={[
            { to: "/services", label: "Website Building" },
            { to: "/services", label: "Social Media" },
            { to: "/services", label: "Content Marketing" },
            { to: "/packages", label: "Packages" },
          ]}
        />
        <FooterCol
          heading="Company"
          items={[
            { to: "/process", label: "Our Process" },
            { to: "/contact", label: "Contact" },
            { to: "/contact", label: "Request a Quote" },
          ]}
        />
        <FooterCol
          heading="Legal"
          items={[
            { to: "/", label: "Privacy Policy" },
            { to: "/", label: "Terms of Service" },
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="container-page py-4 sm:py-6 flex flex-col sm:flex-row gap-2 text-center sm:text-left items-center justify-center sm:justify-between text-xs text-[color:var(--ink-soft)]">
          <p>© {new Date().getFullYear()} Pulse Digital. All rights reserved.</p>
          <p>Built with care for growing businesses.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  items,
}: {
  heading: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-[color:var(--ink)]">{heading}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-[color:var(--ink-soft)]">
        {items.map((it, i) => (
          <li key={i}>
            <Link to={it.to} className="hover:text-[color:var(--ink)] transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
