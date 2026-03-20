export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-16">
      <div className="container px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold gold-text mb-4">Royal Bites</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Crafting unforgettable dining experiences in the heart of London since 2018.
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
              <div className="flex justify-between"><span>Monday – Friday</span><span className="text-foreground/80">12:00 – 23:00</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="text-foreground/80">11:00 – 00:00</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="text-foreground/80">11:00 – 22:00</span></div>
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
            © {new Date().getFullYear()} Royal Bites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
