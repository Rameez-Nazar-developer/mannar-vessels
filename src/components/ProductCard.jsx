import PlaceholderImage from "./PlaceholderImage";
import WhatsAppButton from "./WhatsAppButton";
import { toneForCategory } from "../data/products";

export default function ProductCard({ product, large = false }) {
  return (
    <article className="group">
      <div
        className={`relative overflow-hidden ${large ? "aspect-[4/5]" : "aspect-square"}`}
      >
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.035]">
          <PlaceholderImage
            tone={toneForCategory(product.category)}
            className="h-full w-full"
            label={`${product.name} — photography to be added`}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <WhatsAppButton
            message={`Hello, I am interested in ${product.name}. Please share availability and details.`}
            variant="solid"
            className="pointer-events-auto py-2.5 text-xs"
          >
            Enquire
          </WhatsAppButton>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted">{product.category}</p>
          <h3 className="mt-1 font-serif text-xl text-charcoal">{product.name}</h3>
        </div>
        <span className="mt-0.5 whitespace-nowrap text-sm text-charcoal/70">
          {product.price}
        </span>
      </div>
    </article>
  );
}
