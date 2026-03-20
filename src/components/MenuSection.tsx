import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = ["Starters", "Main Course", "Desserts", "Beverages"] as const;

const menuItems: Record<string, { name: string; desc: string; price: string }[]> = {
  Starters: [
    { name: "Truffle Bruschetta", desc: "Grilled sourdough, heirloom tomatoes, black truffle oil, aged parmesan", price: "$16" },
    { name: "Seared Scallops", desc: "Pan-seared diver scallops, cauliflower purée, crispy pancetta", price: "$22" },
    { name: "Burrata Salad", desc: "Creamy burrata, roasted figs, prosciutto, honey-walnut drizzle", price: "$18" },
    { name: "Lobster Bisque", desc: "Slow-simmered with brandy, crème fraîche, and chive oil", price: "$19" },
  ],
  "Main Course": [
    { name: "Wagyu Ribeye", desc: "12oz A5 wagyu, bone marrow butter, truffle jus, seasonal vegetables", price: "$68" },
    { name: "Pan-Roasted Salmon", desc: "Norwegian salmon, saffron risotto, charred broccolini, lemon beurre blanc", price: "$42" },
    { name: "Duck Confit", desc: "Slow-braised duck leg, cherry compote, roasted root vegetables", price: "$38" },
    { name: "Wild Mushroom Ravioli", desc: "Handmade pasta, porcini cream, shaved black truffle, sage butter", price: "$34" },
  ],
  Desserts: [
    { name: "Chocolate Fondant", desc: "Valrhona dark chocolate, molten center, vanilla bean ice cream", price: "$16" },
    { name: "Crème Brûlée", desc: "Tahitian vanilla custard, caramelized sugar, fresh berries", price: "$14" },
    { name: "Tiramisu Royale", desc: "Espresso-soaked savoiardi, mascarpone mousse, cocoa dust", price: "$15" },
    { name: "Seasonal Fruit Tart", desc: "Almond frangipane, pastry cream, glazed seasonal fruits", price: "$14" },
  ],
  Beverages: [
    { name: "Royal Old Fashioned", desc: "Woodford Reserve bourbon, Demerara, Angostura, orange peel", price: "$18" },
    { name: "Espresso Martini", desc: "Belvedere vodka, fresh espresso, Kahlúa, vanilla", price: "$17" },
    { name: "Sommelier's Wine Pick", desc: "Ask about our rotating selection of fine wines by the glass", price: "$16" },
    { name: "Artisanal Mocktail", desc: "Seasonal fruit shrub, botanical tonic, fresh herbs", price: "$12" },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState<string>("Starters");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-4">Our Menu</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Curated for Every Palate
          </h2>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 text-sm font-medium rounded tracking-wide transition-all duration-200 active:scale-[0.96] ${
                active === cat
                  ? "gold-gradient text-primary-foreground shadow-md shadow-gold/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {menuItems[active]?.map((item, i) => (
            <div
              key={item.name}
              className={`bg-card p-6 rounded shadow-lg shadow-black/10 border border-border/50 hover:border-gold/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-200">
                  {item.name}
                </h3>
                <span className="font-display text-lg font-bold text-gold tabular-nums whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
