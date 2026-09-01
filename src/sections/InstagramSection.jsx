import InstagramGlyph from "../components/InstagramGlyph";
import PlaceholderImage from "../components/PlaceholderImage";
import business from "../config/business";

const TONES = ["brass", "wood", "earth", "ivory", "charcoal", "brass"];

export default function InstagramSection() {
  return (
    <section className="bg-beige px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              Follow the collection.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Discover new arrivals, products and updates on Instagram.
            </p>
          </div>
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-sm text-charcoal transition-colors hover:text-brass"
          >
            <InstagramGlyph size={17} />
            Follow on Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {TONES.map((tone, i) => (
            <a
              key={i}
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring block aspect-square overflow-hidden"
            >
              <PlaceholderImage
                tone={tone}
                className="h-full w-full transition-transform duration-500 hover:scale-105"
                label="Instagram post placeholder"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
