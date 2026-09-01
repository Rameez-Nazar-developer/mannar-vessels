import PlaceholderImage from "../components/PlaceholderImage";

export default function EditorialFeature() {
  return (
    <section className="bg-earth px-6 py-24 text-ivory md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6">
          <PlaceholderImage
            tone="charcoal"
            className="aspect-[4/5] w-full"
            label="Editorial product photography — to be added"
          />
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Made to be noticed.
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-ivory/75">
            Each piece is chosen for the home or occasion it belongs to —
            traditional in form, at ease in a modern room.
          </p>
        </div>
      </div>
    </section>
  );
}
