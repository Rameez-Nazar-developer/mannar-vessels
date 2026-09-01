import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../config/business";

export default function WhatsAppButton({
  message = "Hello, I would like to know more about your products.",
  variant = "solid",
  className = "",
  children = "Enquire on WhatsApp",
}) {
  const href = whatsappLink(message);

  const base =
    "focus-ring inline-flex items-center gap-2 rounded-none px-6 py-3 text-sm tracking-wide transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-charcoal text-ivory hover:bg-earth"
      : variant === "ghost"
      ? "border border-charcoal/25 text-charcoal hover:border-charcoal"
      : "text-charcoal underline underline-offset-4 decoration-brass/60 hover:decoration-charcoal";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle size={16} strokeWidth={1.75} />
      {children}
    </a>
  );
}
