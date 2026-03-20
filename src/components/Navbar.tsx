import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/zamindari-logo.png";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Zamindari Restaurant" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-gold transition-colors duration-200 tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-gradient text-primary-foreground px-5 py-2 text-sm font-semibold rounded tracking-wide uppercase transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Reserve
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-gold py-2 tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="gold-gradient text-primary-foreground px-5 py-3 text-sm font-semibold rounded text-center tracking-wide uppercase mt-2"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}