import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutBg from "@/assets/zamindari-exterior.png";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="relative rounded overflow-hidden shadow-2xl shadow-black/40">
              <img src={aboutBg} alt="Zamindari Restaurant exterior" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded" />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1] text-balance">
              Where Bold Spices Meet Royal Tradition
            </h2>
            <div className="space-y-4 text-muted-foreground text-pretty leading-relaxed">
              <p>
                Zamindari Restaurant brings the rich culinary heritage of Andhra Pradesh to Visakhapatnam. 
                Every dish is crafted with bold spices, fresh ingredients, and recipes passed down through 
                generations — delivering an authentic taste of royal south cuisine.
              </p>
              <p>
                Step into an ambience inspired by the grandeur of the Zamindari era — ornate interiors, 
                warm hospitality, and a family-friendly atmosphere that makes every meal a celebration. 
                Whether it's our legendary Talwar Chicken Kebab or the soul-warming Mutton Nalli Biryani, 
                every bite tells a story of tradition and passion.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { num: "50+", label: "Dishes" },
                { num: "15K+", label: "Happy Guests" },
                { num: "4.6", label: "Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl md:text-3xl font-bold text-gold tabular-nums">{s.num}</p>
                  <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}