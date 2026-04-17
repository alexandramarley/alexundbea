import { Shirt, Gift, Car, Camera, CloudSun, Phone } from "lucide-react";

const items = [
  {
    icon: Shirt,
    title: "Dresscode",
    description:
      "Smart Casual: Ein Outfit das für dich zeigt: Heute ist ein besonderer Tag. Komm so, dass du dich schön und wohl fühlst!\n\nHinweis: Wir sind meist draussen und während der Trauung auf einer Wiese.",
  },
  {
    icon: Gift,
    title: "Geschenke",
    description:
      "Geschenke sind kein Muss!\n\nWenn du uns etwas schenken möchtest, freuen wir uns über einen kleinen Betrag in unsere Hochzeitskasse - dafür wird ein Kässeli und Twint-Code vorhanden sein.",
  },
  {
    icon: Car,
    title: "Anreise",
    description:
      "Das Degermoos ist am besten mit dem Auto erreichbar; mit ÖV fahrt ihr bis „Endingen, Jüdischer Friedhof“ und erreicht den Ort nach einem ca. 20-minütigen Spaziergang\n\nFür Fahrgemeinschaften gerne bei Alex melden, bis 16 September.\n\nAuf dem Hof wird nicht parkiert. Parkplätze sind beschildert.",
  },
  {
    icon: Camera,
    title: "Fotos",
    description: "Wir freuen uns über eure Schnappschüsse! Teilt sie gerne über unser gemeinsames Album.",
    cta: {
      label: "View Album",
      href: "https://drive.google.com/drive/folders/1B9o8JIvATMNXZHmDvfo4wH8jy0Rgak6A",
    },
  },
  {
    icon: CloudSun,
    title: "Mitnehmen",
    description:
      "Für das Abendessen braucht ihr Euer eigenes Geschirr und Besteck! 😊\n\nTeller, Suppenteller, Besteck sowie Wasserglas und ein Glas zum Anstossen wird gebraucht. Gerne Euer schönstes Set oder etwas, das für Euch eine besondere Bedeutung hat (Trinkhorn, Tasse der Oma, etc.)\n\nWir freuen uns auf Geschichten, die Euch mit dem Geschirr verbindet!",
  },
  {
    icon: Phone,
    title: "Kontakte",
    description: (
      <>
        Sophie <span className="italic">(für Fragen bzgl. Essen)</span>
        <br />
        <a href="tel:+41788141664" className="text-primary underline">
          +41 (0)78 814 16 64
        </a>
        <br />
        <br />
        Alex & Bea <span className="italic">(für Fragen bzgl. Anreise)</span>
        <br />
        <a href="tel:+41762082554" className="text-primary underline">
          +41 (0)76 208 25 54
        </a>
        <br />
        <br />
        Sira <span className="italic">(für alle restlichen Fragen)</span>
        <br />
        <a href="tel:+41764032510" className="text-primary underline">
          +41 (0)76 4032510
        </a>
      </>
    ),
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
                  className="inline-block mt-8 bg-wine text-wine-foreground font-body text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-sm hover:bg-accent transition-colors duration-300"
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
