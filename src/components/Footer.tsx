import logo from "@/assets/zamindari-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-16">
      <div className="container px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Zamindari Restaurant" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Serving authentic Andhra cuisine with bold spices and royal hospitality in the heart of Visakhapatnam.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-secondary/80 transition-colors duration-200 text-xs font-semibold"
                >
                  {s[0] + s[1]}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between"><span>Lunch</span><span className="text-foreground/80">12:00 PM – 4:00 PM</span></div>
              <div className="flex justify-between"><span>Dinner</span><span className="text-foreground/80">7:00 PM – 11:00 PM</span></div>
              <div className="flex justify-between"><span>All Days</span><span className="text-foreground/80">Open Daily</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Menu", "Gallery", "Reviews", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase() === "reviews" ? "testimonials" : l.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Zamindari Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}