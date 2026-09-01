import InstagramGlyph from "./InstagramGlyph";
import business from "../config/business";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-16 text-ivory md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-2xl italic">{business.name}</p>
          <p className="mt-2 max-w-xs text-sm text-ivory/60">
            {business.address.line1}, {business.address.line2}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ivory/75">
          <a href="#top" className="focus-ring hover:text-ivory">Home</a>
          <a href="#collection" className="focus-ring hover:text-ivory">Collection</a>
          <a href="#about" className="focus-ring hover:text-ivory">About</a>
          <a href="#visit" className="focus-ring hover:text-ivory">Visit Us</a>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="focus-ring text-ivory/75 hover:text-ivory"
          >
            <InstagramGlyph size={19} />
          </a>
          <WhatsAppButton
            variant="ghost"
            className="border-ivory/25 py-2.5 text-xs text-ivory hover:border-ivory"
          >
            WhatsApp
          </WhatsAppButton>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl text-xs text-ivory/40">
        © 2026 {business.name}
      </p>
    </footer>
  );
}
