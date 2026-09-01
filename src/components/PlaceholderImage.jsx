// REPLACE WITH ACTUAL PRODUCT / BRAND PHOTOGRAPHY.
// Until real photography is supplied, this renders a quiet
// generative swatch (never a literal stock photo) so the layout
// can be reviewed honestly. Swap for a real <img> once images
// exist — no surrounding markup needs to change.

const TONES = {
  brass: ["#C9A15E", "#8C6A38"],
  wood: ["#8A6142", "#4B382A"],
  earth: ["#6E5138", "#3A2A1D"],
  ivory: ["#EDE4D5", "#C9BBA0"],
  charcoal: ["#3A3530", "#171513"],
};

export default function PlaceholderImage({ tone = "brass", className = "", label }) {
  const [from, to] = TONES[tone] || TONES.brass;
  return (
    <div
      className={`relative overflow-hidden bg-beige ${className}`}
      style={{
        backgroundImage: `radial-gradient(120% 140% at 20% 15%, ${from}55, transparent 60%), linear-gradient(155deg, ${from}33, ${to}22)`,
      }}
      role="img"
      aria-label={label || "Placeholder — product photography to be added"}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="0" y1="200" x2="200" y2="0" stroke={to} strokeWidth="0.5" />
        <line x1="0" y1="0" x2="200" y2="200" stroke={to} strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" fill="none" stroke={to} strokeWidth="0.6" />
      </svg>
    </div>
  );
}
