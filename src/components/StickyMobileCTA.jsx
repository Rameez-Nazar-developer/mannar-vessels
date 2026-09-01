import WhatsAppButton from "./WhatsAppButton";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-ivory/95 p-3 backdrop-blur-md md:hidden">
      <WhatsAppButton className="w-full justify-center">
        WhatsApp Us
      </WhatsAppButton>
    </div>
  );
}
