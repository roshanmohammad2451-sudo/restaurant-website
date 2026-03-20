import { useScrollReveal } from "@/hooks/useScrollReveal";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import food5 from "@/assets/food-5.jpg";
import exterior from "@/assets/zamindari-exterior.png";
import seating from "@/assets/zamindari-seating.png";

const images = [
  { src: food1, alt: "Talwar Chicken Kebab", span: "" },
  { src: food2, alt: "Mutton Nalli Biryani", span: "md:row-span-2" },
  { src: food3, alt: "Andhra Fish Fry", span: "" },
  { src: food4, alt: "Apricot Delight dessert", span: "" },
  { src: food5, alt: "Seeti Goli Soda", span: "" },
  { src: exterior, alt: "Zamindari Restaurant entrance", span: "md:col-span-2" },
  { src: seating, alt: "Zamindari outdoor seating", span: "" },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 md:py-32" ref={ref}>
      <div className="container px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            A Feast for the Eyes
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded group ${img.span} ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "0.7s",
                transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}