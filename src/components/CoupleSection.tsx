import couple02 from "@/assets/couple_02.jpeg";

const CoupleSection = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl text-wine mb-4">Wir freuen uns auf Euch!</h2>
            <p className="font-body text-lg text-foreground max-w-xl mx-auto">
              Bitte meldet euch bis spätestens 30. Juni 2026 an.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-sm -rotate-2" />
            <img
              src={couple02}
              alt="Bea und Alex"
              className="relative rounded-sm w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
