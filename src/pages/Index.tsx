import HeroSection from "@/components/HeroSection";
import AgendaSection from "@/components/AgendaSection";
import LocationSection from "@/components/LocationSection";
import GoodToKnowSection from "@/components/GoodToKnowSection";
import RsvpSection from "@/components/RsvpSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AgendaSection />
      <LocationSection />
      <GoodToKnowSection />
      <RsvpSection />
      <footer className="text-center py-12 bg-sand">
        <p className="font-display text-2xl text-wine italic mb-2">Bea & Alex</p>
        <p className="font-body text-sm text-muted-foreground tracking-wide">
          Mit Liebe gefeiert 🌈
        </p>
      </footer>
    </main>
  );
};

export default Index;
