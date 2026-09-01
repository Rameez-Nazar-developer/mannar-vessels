import { categories } from "../data/products";
import { toneForCategory } from "../data/products";
import PlaceholderImage from "../components/PlaceholderImage";

export default function Categories() {
  return (
    <section className="bg-beige px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
          Shop by category
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#collection"
              className="group focus-ring relative block aspect-[4/3] overflow-hidden"
            >
              <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
                <PlaceholderImage tone={toneForCategory(cat.name)} className="h-full w-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
              <span className="absolute bottom-5 left-5 font-serif text-2xl text-ivory drop-shadow-sm">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
