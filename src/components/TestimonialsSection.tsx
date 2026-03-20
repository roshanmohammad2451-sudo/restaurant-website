import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Suxant",
    rating: 4,
    text: "This restaurant is not very far from RK Beach. It looks like an old colonial property converted into a restaurant. The ambiance was great. The service was quick. Had ordered a Biryani and Allam Vellulli Chepa Fry. Both were outstanding. Overall a great eating experience, would surely recommend.",
    source: "Zomato",
  },
  {
    name: "Vani Sharma",
    rating: 5,
    text: "We ordered coriander pulao and baby potato in gunpowder. The food was amazing and the portion size was huge. Service was very fast and the staff was courteous. Would recommend 10/10!",
    source: "Google",
  },
  {
    name: "Kishore A",
    rating: 5,
    text: "Went first time with friends. Taste was very good and I liked the Kodi Pulusu — one of my favourites. Something different from regular restaurants as the menu here is unique. Old style cooking that made the difference. Cost is affordable too.",
    source: "Google",
  },
  {
    name: "Manish Verma",
    rating: 5,
    text: "It's an old bungalow converted into a restaurant. Mutton Biryani is good. The whole vibe feels royal and authentic.",
    source: "Zomato",
  },
  {
    name: "Praneesh Kumar Yadav K",
    rating: 5,
    text: "I totally loved the place, food and service. Everything was perfect — a must-visit when you're in Vizag!",
    source: "Zomato",
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
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className={j < r.rating ? "fill-gold text-gold" : "text-muted-foreground/30"}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium tracking-wide">{r.source}</span>
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