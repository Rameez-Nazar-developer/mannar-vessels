import { Store, Gem, MessagesSquare, Hand } from "lucide-react";

const POINTS = [
  {
    icon: Store,
    title: "A physical store you can visit",
    body: "Mannar Vessels & Gifts is an established shop in Karukachal — not an online-only listing.",
  },
  {
    icon: Gem,
    title: "A curated selection",
    body: "Products are chosen, not mass-listed — traditional, handcrafted and gift-oriented pieces.",
  },
  {
    icon: Hand,
    title: "Handcrafted and traditional",
    body: "Brass, wood and traditional pieces sit alongside gifting and home décor items.",
  },
  {
    icon: MessagesSquare,
    title: "Direct, personal assistance",
    body: "Ask about availability, sizing or a piece directly over WhatsApp before you buy.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-ivory px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {POINTS.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon size={22} strokeWidth={1.5} className="text-brass" />
              <h3 className="mt-4 font-serif text-xl text-charcoal">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
