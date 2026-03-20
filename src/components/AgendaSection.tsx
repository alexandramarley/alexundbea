import coupleImg from "@/assets/couple.jpg";

const timeline = [
  { time: "13:30", event: "Empfang" },
  { time: "14:00", event: "Trauung" },
  { time: "15:00", event: "Apéro & Fotos" },
  { time: "18:00", event: "Abendessen (für geladene Gäste)" },
];

const AgendaSection = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Der Tag im Überblick
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-wine mb-12">
              19. September 2026
            </h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.time} className="flex items-baseline gap-6 group">
                  <span className="font-display text-2xl text-primary min-w-[5rem] text-right">
                    {item.time}
                  </span>
                  <div className="h-px w-6 bg-border group-hover:bg-primary transition-colors mt-1 flex-shrink-0" />
                  <span className="font-body text-lg text-foreground">
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
              Ablauf
            </h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.time} className="flex items-baseline gap-6 group">
                  <span className="font-display text-2xl text-primary min-w-[5rem] text-right">
                    {item.time}
                  </span>
                  <div className="h-px w-6 bg-border group-hover:bg-primary transition-colors mt-1 flex-shrink-0" />
                  <span className="font-body text-lg text-foreground">
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-sm -rotate-2" />
            <img
              src={coupleImg}
              alt="Bea und Alex"
              className="relative rounded-sm w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
