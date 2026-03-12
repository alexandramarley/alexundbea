const HeroSection = () => {
  const scrollToRsvp = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sand-light via-background to-sand opacity-50" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="font-body text-sm tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-in-up">
          Ihr seid eingeladen
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-medium text-wine italic leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          You're invited
        </h1>
        <div className="w-24 h-px bg-primary mx-auto my-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }} />
        <h2 className="font-display text-3xl md:text-5xl text-foreground font-normal mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Bea & Alex
        </h2>
        <button
          onClick={scrollToRsvp}
          className="animate-fade-in-up bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-sm hover:bg-accent transition-colors duration-300"
          style={{ animationDelay: "0.55s" }}
        >
          Einladung bestätigen
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
