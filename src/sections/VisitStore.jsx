import { MapPin, Clock, Phone } from "lucide-react";
import business, { isConfirmed } from "../config/business";
import PlaceholderImage from "../components/PlaceholderImage";

function Row({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brass" />
      <div>
        <p className="text-xs uppercase tracking-wide text-muted/70">{label}</p>
        <p className="mt-1 text-charcoal">
          {isConfirmed(value) ? value : "Details to be confirmed"}
        </p>
      </div>
    </div>
  );
}

export default function VisitStore() {
  const address = `${business.address.line1}, ${business.address.line2}, ${business.address.postcode}`;

  return (
    <section id="visit" className="bg-ivory px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6">
          <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Come see the
            <br />
            collection in person.
          </h2>

          <div className="mt-10 flex flex-col gap-7">
            <Row icon={MapPin} label="Location" value={address} />
            <Row icon={Clock} label="Opening hours" value={business.openingHours} />
            <Row icon={Phone} label="Phone" value={business.phone} />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {isConfirmed(business.address.mapsUrl) ? (
              <a
                href={business.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring bg-charcoal px-7 py-3.5 text-sm tracking-wide text-ivory transition-colors hover:bg-earth"
              >
                Get Directions
              </a>
            ) : (
              <span className="border border-charcoal/20 px-7 py-3.5 text-sm text-muted">
                Map link pending confirmation
              </span>
            )}
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <PlaceholderImage
            tone="earth"
            className="aspect-[4/5] w-full"
            label="Storefront photography — to be added"
          />
        </div>
      </div>
    </section>
  );
}
