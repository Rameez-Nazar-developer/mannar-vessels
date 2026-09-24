import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "../components/WhatsAppButton";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.5,
  });

  // Main product: moves like a camera is passing through the scene.
  const productY = useTransform(progress, [0, 0.5, 1], [0, -35, -110]);
  const productX = useTransform(progress, [0, 0.5, 1], [0, 35, -80]);
  const productScale = useTransform(progress, [0, 0.5, 1], [1, 1.16, 0.82]);
  const productRotate = useTransform(progress, [0, 0.5, 1], [0, -5, 8]);
  const productRotateY = useTransform(progress, [0, 0.5, 1], [0, -8, 14]);

  // Opening title moves away as the scene advances.
  const titleY = useTransform(progress, [0, 0.25], [0, -100]);
  const titleOpacity = useTransform(progress, [0, 0.2, 0.32], [1, 1, 0]);

  // Later story copy appears within the same pinned scene.
  const craftOpacity = useTransform(progress, [0.25, 0.4, 0.58], [0, 1, 0]);
  const craftY = useTransform(progress, [0.25, 0.4, 0.58], [70, 0, -60]);

  const giftOpacity = useTransform(progress, [0.58, 0.74, 0.92], [0, 1, 0]);
  const giftY = useTransform(progress, [0.58, 0.74, 0.92], [70, 0, -60]);

  // Floating elements move at different speeds to suggest depth.
  const floatOneX = useTransform(progress, [0, 1], [-20, 110]);
  const floatOneY = useTransform(progress, [0, 1], [10, -150]);
  const floatOneRotate = useTransform(progress, [0, 1], [-12, 18]);

  const floatTwoX = useTransform(progress, [0, 1], [20, -110]);
  const floatTwoY = useTransform(progress, [0, 1], [-10, 130]);
  const floatTwoRotate = useTransform(progress, [0, 1], [10, -16]);

  const floatThreeY = useTransform(progress, [0, 1], [80, -100]);
  const floatThreeX = useTransform(progress, [0, 1], [-10, 70]);

  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[320vh] bg-ivory"
    >
      {/* The scene remains pinned while scrolling through this section. */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#C9A15E]/10 blur-3xl" />
          <div className="absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#8A6142]/10 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-charcoal/[0.06]" />
          <div className="absolute left-1/2 top-1/2 h-[52vh] w-[52vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-charcoal/[0.06]" />
        </div>

        {/* Top brand line */}
        <div className="absolute left-6 right-6 top-7 z-40 flex items-center justify-between sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brass" />
            <span className="text-[9px] uppercase tracking-[0.28em] text-muted">
              Mannar Vessels &amp; Gifts
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.25em] text-muted">
            Kochi
          </span>
        </div>

        {/* Subtle floating media-inspired panel — left */}
        <motion.div
          style={{
            x: floatOneX,
            y: floatOneY,
            rotate: floatOneRotate,
          }}
          className="pointer-events-none absolute left-[4%] top-[20%] z-[1] hidden h-44 w-32 border border-charcoal/10 bg-white/30 p-2 sm:block lg:left-[10%]"
        >
          <div className="flex h-full flex-col justify-between border border-charcoal/[0.08] p-3">
            <span className="text-[8px] uppercase tracking-[0.2em] text-muted">
              Form / 01
            </span>
            <span className="font-serif text-4xl italic text-earth/50">
              M.
            </span>
            <span className="h-px w-8 bg-brass/60" />
          </div>
        </motion.div>

        {/* Floating media-inspired panel — right */}
        <motion.div
          style={{
            x: floatTwoX,
            y: floatTwoY,
            rotate: floatTwoRotate,
          }}
          className="pointer-events-none absolute bottom-[15%] right-[4%] z-[1] hidden h-48 w-36 border border-charcoal/10 bg-[#EDE4D5]/50 p-2 sm:block lg:right-[9%]"
        >
          <div className="flex h-full flex-col justify-between border border-charcoal/[0.08] p-3">
            <span className="text-[8px] uppercase tracking-[0.2em] text-muted">
              Craft / 02
            </span>
            <span className="font-serif text-5xl italic text-earth/50">
              02
            </span>
            <span className="text-[8px] uppercase tracking-[0.18em] text-muted">
              Made to last
            </span>
          </div>
        </motion.div>

        {/* Small drifting detail */}
        <motion.div
          style={{
            x: floatThreeX,
            y: floatThreeY,
          }}
          className="pointer-events-none absolute right-[20%] top-[16%] z-[2] hidden h-2 w-2 rounded-full bg-brass/50 sm:block"
        />

        {/* Main product image */}
        <motion.div
          style={{
            x: productX,
            y: productY,
            scale: productScale,
            rotate: productRotate,
            rotateY: productRotateY,
            transformPerspective: 1200,
          }}
          initial={{ opacity: 0, scale: 0.9, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.25, ease }}
          className="absolute left-[16%] top-[17%] z-10 h-[48vh] w-[68%] overflow-hidden shadow-2xl sm:left-[25%] sm:top-[14%] sm:h-[66vh] sm:w-[48%] lg:left-[35%] lg:top-[12%] lg:h-[72vh] lg:w-[42%]"
        >
          <img
            src="/mannar-vessels/media/images/Frame%20259.png"
            alt="Mannar Vessels handcrafted collection"
            className="h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-white/10" />
        </motion.div>

        {/* Opening title */}
        <motion.div
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
          className="absolute left-6 top-[24%] z-20 max-w-[85%] sm:left-10 sm:top-[27%] lg:left-[10%] lg:top-[28%]"
        >
          <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-muted sm:text-[10px]">
            A collection of tradition
          </p>

          <h1 className="font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.84] tracking-[-0.045em] text-charcoal">
            Objects
            <br />
            <span className="ml-[8%] italic text-earth">with</span>
            <br />
            meaning.
          </h1>

          <p className="mt-7 max-w-xs text-xs leading-6 text-muted sm:text-sm sm:leading-7">
            Traditional vessels, handcrafted pieces and meaningful gifts.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href="#collection"
              className="focus-ring bg-charcoal px-6 py-3.5 text-[10px] uppercase tracking-[0.16em] text-ivory transition-colors duration-300 hover:bg-earth sm:px-7 sm:text-xs"
            >
              Explore collection
            </a>

            <WhatsAppButton variant="text">
              Enquire on WhatsApp
            </WhatsAppButton>
          </div>
        </motion.div>

        {/* Story moment 02 */}
        <motion.div
          style={{
            opacity: craftOpacity,
            y: craftY,
          }}
          className="absolute right-[7%] top-[32%] z-20 w-[min(360px,78vw)] sm:right-[9%] lg:right-[12%]"
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-brass">
            02 / Craft
          </p>

          <h2 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.86] tracking-[-0.035em] text-charcoal">
            Made to
            <br />
            <span className="italic text-earth">be remembered.</span>
          </h2>

          <p className="mt-6 max-w-xs text-xs leading-6 text-muted sm:text-sm sm:leading-7">
            Details, materials and forms that bring the character of
            traditional craftsmanship into contemporary spaces.
          </p>
        </motion.div>

        {/* Story moment 03 */}
        <motion.div
          style={{
            opacity: giftOpacity,
            y: giftY,
          }}
          className="absolute left-[8%] top-[33%] z-20 w-[min(400px,82vw)] lg:left-[12%]"
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-brass">
            03 / Giving
          </p>

          <h2 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.86] tracking-[-0.035em] text-charcoal">
            Give
            <br />
            <span className="italic text-earth">something lasting.</span>
          </h2>

          <p className="mt-6 max-w-xs text-xs leading-6 text-muted sm:text-sm sm:leading-7">
            Thoughtful pieces chosen to carry meaning beyond the moment
            they are given.
          </p>
        </motion.div>

        {/* Scroll instruction */}
        <motion.div
          style={{
            opacity: useTransform(progress, [0, 0.12], [1, 0]),
          }}
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-muted">
            Scroll to move through the scene
          </span>

          <motion.span
            animate={{ y: [0, 7, 0], scaleY: [0.7, 1, 0.7] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px origin-top bg-brass"
          />
        </motion.div>

        {/* Scene progress line */}
        <motion.div
          style={{ width: progressWidth }}
          className="absolute bottom-0 left-0 z-40 h-[2px] bg-brass"
        />

        <div className="absolute bottom-8 right-8 z-30 hidden text-[9px] uppercase tracking-[0.25em] text-muted sm:block">
          Mannar / 01
        </div>
      </div>
    </section>
  );
}