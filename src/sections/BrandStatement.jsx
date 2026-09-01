import { motion } from "framer-motion";
import PlaceholderImage from "../components/PlaceholderImage";

export default function BrandStatement() {
  return (
    <section id="about" className="bg-ivory px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 lg:col-span-6"
        >
          <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Rooted in tradition.
            <br />
            Chosen for today.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            A curated range of traditional and handcrafted pieces, gathered
            for people who want objects with substance in their home or
            their gifting — brass, wood, and pieces made to be kept.
          </p>
        </motion.div>

        <div className="md:col-span-5 md:col-start-8 lg:col-span-5 lg:col-start-8">
          <PlaceholderImage
            tone="wood"
            className="aspect-[4/5] w-full md:mt-10"
            label="Brand imagery — to be added"
          />
        </div>
      </div>
    </section>
  );
}
