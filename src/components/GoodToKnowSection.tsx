import { Shirt, Gift, Car, Bus, Camera, CloudSun } from "lucide-react";

const items = [
  {
    icon: Shirt,
    title: "Dresscode",
    description: "Festlich elegant — tragt, worin ihr euch schön fühlt. Farben sind willkommen!",
  },
  {
    icon: Gift,
    title: "Geschenke",
    description: "Eure Anwesenheit ist das schönste Geschenk. Wer uns dennoch etwas schenken möchte: Ein Beitrag zur Hochzeitsreise freut uns sehr.",
  },
  {
    icon: Car,
    title: "Parken",
    description: "Kostenlose Parkplätze stehen direkt vor der Location zur Verfügung.",
  },
  {
    icon: Bus,
    title: "Anreise",
    description: "Ein Shuttle-Service vom Bahnhof zur Location wird um 13:30 Uhr bereitstehen.",
  },
  {
    icon: Camera,
    title: "Fotos",
    description: "Wir freuen uns über eure Schnappschüsse! Teilt sie gerne über unser gemeinsames Album.",
  },
  {
    icon: CloudSun,
    title: "Wetter",
    description: "Die Trauung findet bei gutem Wetter draußen statt. Bei Regen haben wir einen Plan B!",
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
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoodToKnowSection;
