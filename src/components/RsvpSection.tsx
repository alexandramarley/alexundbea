import { useState } from "react";
import { toast } from "sonner";

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    plusOne: "",
    plusOneName: "",
    dietary: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby7aF0OjaAmBnZTELLMBGpwQxQaJ5iWkfsmfK4_p1QBh1M6Rg1EY1a4fb0pMCC_FihBtg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      toast.success("Danke für deine Rückmeldung! Wir freuen uns auf dich! 🥂");
      setFormData({ name: "", email: "", attendance: "", plusOne: "", plusOneName: "", dietary: "", message: "" });
    } catch {
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  const labelClasses = "block font-body text-sm tracking-wide text-foreground mb-2";

  return (
    <section id="rsvp" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Wir freuen uns auf euch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-wine">
            Zu- und Absage
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. Name */}
          <div>
            <label htmlFor="name" className={labelClasses}>
              Dein vollständiger Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Vor- und Nachname"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* 2. Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="deine@email.de"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* 3. Attendance */}
          <div>
            <label className={labelClasses}>Kommst du? *</label>
            <div className="flex gap-4">
              {["Ja, ich bin dabei!", "Leider nicht"].map((option) => (
                <label
                  key={option}
                  className={`flex-1 text-center cursor-pointer border rounded-sm px-4 py-3 font-body text-sm transition-colors ${
                    formData.attendance === option
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border text-foreground hover:border-primary/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* 4. Plus One */}
          <div>
            <label className={labelClasses}>Bringst du eine Begleitung mit?</label>
            <div className="flex gap-4">
              {["Ja", "Nein"].map((option) => (
                <label
                  key={option}
                  className={`flex-1 text-center cursor-pointer border rounded-sm px-4 py-3 font-body text-sm transition-colors ${
                    formData.plusOne === option
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border text-foreground hover:border-primary/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="plusOne"
                    value={option}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* 5. Plus One Name */}
          {formData.plusOne === "Ja" && (
            <div>
              <label htmlFor="plusOneName" className={labelClasses}>
                Name deiner Begleitung
              </label>
              <input
                type="text"
                id="plusOneName"
                name="plusOneName"
                placeholder="Vor- und Nachname"
                value={formData.plusOneName}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
          )}

          {/* 6. Dietary */}
          <div>
            <label htmlFor="dietary" className={labelClasses}>
              Unverträglichkeiten / Ernährung
            </label>
            <select
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Bitte wählen</option>
              <option value="Keine">Keine Einschränkungen</option>
              <option value="Vegetarisch">Vegetarisch</option>
              <option value="Vegan">Vegan</option>
              <option value="Glutenfrei">Glutenfrei</option>
              <option value="Sonstiges">Sonstiges (bitte in Nachricht angeben)</option>
            </select>
            <p className="mt-3 font-body text-sm text-muted-foreground italic leading-relaxed">
              Für das Abendessen freuen wir uns, wenn jeder sein eigenes Geschirr und Besteck mitbringt (Teller, Suppenteller, Besteck sowie ein Wasser- und Weinglas oder etwas zum Anstossen) – gerne euer schönstes Set oder etwas, das für euch eine besondere Bedeutung hat.
            </p>
          </div>

          {/* 7. Message */}
          <div>
            <label htmlFor="message" className={labelClasses}>
              Nachricht an Bea & Alex
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Wir freuen uns über eine persönliche Nachricht..."
              value={formData.message}
              onChange={handleChange}
              className={inputClasses + " resize-none"}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-sm hover:bg-accent transition-colors duration-300 mt-4"
          >
            Einladung bestätigen
          </button>
        </form>
      </div>
    </section>
  );
};

export default RsvpSection;
