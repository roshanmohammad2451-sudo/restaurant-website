import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Margaret Thornton",
    rating: 5,
    text: "An extraordinary evening from start to finish. The wagyu was the best I've had outside of Tokyo. The ambience made it truly magical.",
  },
  {
    name: "David Reyes",
    rating: 5,
    text: "We celebrated our anniversary here and couldn't have chosen better. Impeccable service, creative cocktails, and that chocolate fondant haunts me still.",
  },
  {
    name: "Amara Okafor",
    rating: 4,
    text: "The seafood pasta was divine. Lovely, intimate setting — feels like a hidden gem. Will definitely be coming back with friends.",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`bg-card p-8 rounded shadow-lg shadow-black/10 border border-border/50 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 120}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={j < r.rating ? "fill-gold text-gold" : "text-muted-foreground/30"}
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 text-pretty italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-display font-semibold text-foreground">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
