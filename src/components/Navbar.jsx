import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import InstagramGlyph from "./InstagramGlyph";
import business from "../config/business";
import WhatsAppButton from "./WhatsAppButton";

const LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(23,21,19,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-xl italic text-charcoal focus-ring">
          {business.name}
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="focus-ring text-sm text-charcoal/80 transition-colors hover:text-charcoal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="focus-ring text-charcoal/80 transition-colors hover:text-charcoal"
          >
            <InstagramGlyph size={19} />
          </a>
          <WhatsAppButton variant="ghost" className="py-2.5 text-xs">
            WhatsApp
          </WhatsAppButton>
        </div>

        <button
          className="focus-ring text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-ivory px-6 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="focus-ring font-serif text-2xl text-charcoal"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-6">
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-charcoal/80"
            >
              <InstagramGlyph size={18} /> Instagram
            </a>
          </div>
          <WhatsAppButton className="mt-5 w-full justify-center" />
        </div>
      )}
    </header>
  );
}
