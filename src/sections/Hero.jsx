import { motion } from "framer-motion";
import PlaceholderImage from "../components/PlaceholderImage";
import WhatsAppButton from "../components/WhatsAppButton";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-32 md:pt-0">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-0 md:px-0 md:min-h-[92vh]">
        <div className="relative z-10 md:pl-10 lg:pl-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="font-serif text-display text-charcoal"
          >
            Tradition,
            <br />
            crafted for today.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-7 max-w-md text-base leading-relaxed text-muted"
          >
            Mannar Vessels &amp; Gifts brings together traditional, handcrafted
            and gift-oriented pieces — for the home, for occasions, and for
            giving well.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#collection"
              className="focus-ring bg-charcoal px-7 py-3.5 text-sm tracking-wide text-ivory transition-colors duration-200 hover:bg-earth"
            >
              Explore Collection
            </a>
            <WhatsAppButton variant="text">Enquire on WhatsApp</WhatsAppButton>
          </motion.div>
        </div>

        <div className="relative h-[52vh] md:h-[92vh]">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease }}
            className="absolute inset-0 md:inset-y-0 md:right-0 md:left-8 lg:left-16"
          >
            <PlaceholderImage
              tone="brass"
              className="h-full w-full"
              label="Hero product photography — to be added"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
