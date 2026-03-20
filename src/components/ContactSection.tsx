import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Visit Us Today
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info + Map */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", transitionDelay: "200ms" }}
          >
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, text: "Near Nowroji Rd, Port Officers Quarters, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002" },
                { icon: Phone, text: "099515 22111" },
                
                { icon: Clock, text: "12:00 PM – 4:00 PM & 7:00 PM – 11:00 PM" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <p className="text-foreground/80 pt-2 text-sm">{text}</p>
                </div>
              ))}
            </div>

            <div className="rounded overflow-hidden shadow-lg shadow-black/20 border border-border/50">
              <iframe
                title="Zamindari Restaurant location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.3!3d17.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzEyLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", transitionDelay: "300ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Name", type: "text", key: "name" as const },
                { label: "Email", type: "email", key: "email" as const },
              ].map(({ label, type, key }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{label}</label>
                  <input
                    type={type}
                    required
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-shadow duration-200"
                    placeholder={`Your ${label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-shadow duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-primary-foreground py-3.5 text-sm font-semibold rounded tracking-widest uppercase transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}