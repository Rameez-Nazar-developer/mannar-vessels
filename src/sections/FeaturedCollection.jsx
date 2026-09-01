import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function FeaturedCollection() {
  const items = products.filter((p) => p.featured);

  return (
    <section id="collection" className="bg-ivory px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
            The collection
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            A first selection — placeholders until real products and
            photography are confirmed.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-6 md:gap-x-8 md:gap-y-16">
          {items.map((product, i) => {
            // Editorial rhythm: every third card runs larger and
            // spans more of the grid, so it doesn't read as a
            // uniform e-commerce grid.
            const large = i % 3 === 0;
            return (
              <div
                key={product.id}
                className={large ? "col-span-2 md:col-span-3" : "col-span-1 md:col-span-3 lg:col-span-2"}
              >
                <ProductCard product={product} large={large} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
