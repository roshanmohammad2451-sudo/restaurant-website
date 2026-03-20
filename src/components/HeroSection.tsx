import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Andhra feast at Zamindari Restaurant"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 container text-center px-4">
        <p
          className="text-gold text-sm md:text-base tracking-[0.3em] uppercase font-body font-medium mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Royal South Cuisine
        </p>
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-6 opacity-0 animate-fade-up text-balance"
          style={{ animationDelay: "0.4s" }}
        >
          Zamindari Restaurant
        </h1>
        <p
          className="font-display italic text-lg sm:text-xl md:text-2xl text-gold-light mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Experience Authentic Andhra Flavors with a Royal Touch
        </p>
        <p
          className="text-foreground/70 text-sm sm:text-base mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Famous for Talwar Chicken Kebab & Mutton Nalli Biryani
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#menu"
            className="gold-gradient text-primary-foreground px-8 py-3.5 text-sm font-semibold rounded tracking-widest uppercase transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="border border-gold/40 text-gold px-8 py-3.5 text-sm font-semibold rounded tracking-widest uppercase transition-all duration-200 hover:bg-gold/10 active:scale-[0.97]"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-5 h-8 border border-gold/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}