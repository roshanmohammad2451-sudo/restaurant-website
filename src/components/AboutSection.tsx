import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutBg from "@/assets/about-bg.jpg";

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
              <img src={aboutBg} alt="Royal Bites interior" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" />
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
              Where Culinary Art Meets Elegance
            </h2>
            <div className="space-y-4 text-muted-foreground text-pretty leading-relaxed">
              <p>
                Born from a passion for exceptional cuisine, Royal Bites has been crafting unforgettable dining
                experiences since 2018. Every dish tells a story — of carefully sourced ingredients, time-honoured
                techniques, and creative innovation.
              </p>
              <p>
                Our space blends warmth with sophistication: think candlelit tables, curated wine selections, and
                a team that treats every guest like royalty. Whether it's an intimate dinner or a celebration,
                we set the stage for moments worth savoring.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { num: "7+", label: "Years" },
                { num: "12K", label: "Guests Served" },
                { num: "4.8", label: "Rating" },
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
