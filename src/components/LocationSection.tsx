import venueImg from "@/assets/venue.jpg";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-sm rotate-1" />
            <img
              src={venueImg}
              alt="Hochzeitslocation"
              className="relative rounded-sm w-full h-[500px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Wo wir feiern
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-wine mb-8">
              Location
            </h2>
            <p className="font-body text-lg text-foreground leading-relaxed mb-4">
              Wir feiern unsere Liebe an einem wunderschönen Ort, der uns beiden am Herzen liegt. Umgeben von Natur und warmem Licht freuen wir uns darauf, diesen besonderen Tag mit euch zu teilen.
            </p>
            <p className="font-body text-muted-foreground mb-8">
              Musterstraße 42, 12345 Musterstadt
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-wine text-wine-foreground font-body text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-sm hover:bg-accent transition-colors duration-300"
            >
              <MapPin className="w-4 h-4" />
              Google Maps öffnen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
