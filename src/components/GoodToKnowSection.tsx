import { Shirt, Gift, Car, Bus, Camera, CloudSun, Phone } from "lucide-react";

const items = [
  {
    icon: Shirt,
    title: "Dresscode",
    description: "Smart & Festlich - Kein Smoking, kein Ballkleid - aber bitte ein Outfit, das zeigt: Heute ist ein besonderer Tag.\n\nDie Trauung findet auf einer Wiese statt, also bringt gutes Schuhwerk.",
  },
  {
    icon: Gift,
    title: "Geschenke",
    description: "Geschenke sind kein Muss. Wir Ihr uns etwas schenken möchtet, freuen wir uns über einen kleinen Beitrag zu unserer Hochzeitskasse.",
  },
  {
    icon: Car,
    title: "Parkieren",
    description: "Wir haben ca 3-4 Parkplätze um das Haus herum, ansonsten kann man im oberen Degermoos auch noch parkieren (5 Minuten Spaziergang)",
  },
  {
    icon: Bus,
    title: "Anreise",
    description: "Das Degermoos ist nur mit dem Auto zu erreichen. Via ÖV benützt die Bushaltestelle \"Endingen, Jüdischer Friedhof\", danach folgt ein 20 Minuten Spaziergang. Für Fahrgruppen, bitte kontaktiert Sira Frei.",
  },
  {
    icon: Camera,
    title: "Fotos",
    description: "Wir freuen uns über eure Schnappschüsse! Teilt sie gerne über unser gemeinsames Album.",
    cta: { label: "View Album", href: "#" },
  },
  {
    icon: CloudSun,
    title: "Wetter",
    description: "Wir hoffen auf gutes Wetter, aber es kann am Abend frisch werden, bitte nimmt genug Kleider mit.",
  },
  {
    icon: Phone,
    title: "Kontakte",
    description: "Kontakt 1 - +41 76 XXX XX XX\nKontakt 2 - +41 76 XXX XX XX\nKontakt 3 - +41 76 XXX XX XX",
  },
];

const GoodToKnowSection = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Praktische Infos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-wine">
            Good to Know
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card p-8 rounded-sm border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="font-display text-xl text-wine mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                {item.description}
              </p>
              {"cta" in item && item.cta && (
                <a
                  href={item.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-wine text-wine-foreground font-body text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-sm hover:bg-accent transition-colors duration-300"
                >
                  {item.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoodToKnowSection;
