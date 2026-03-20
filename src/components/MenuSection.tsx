import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = ["Starters", "Non-Veg Curries", "Veg", "Biryani & Rice", "Desserts & Drinks"] as const;

const menuItems: Record<string, { name: string; desc: string; price: string }[]> = {
  Starters: [
    { name: "Talwar Chicken Kebab", desc: "Juicy chicken kebabs marinated in royal spices, grilled on a sword", price: "₹349" },
    { name: "Andhra Kodi Roast", desc: "Fiery Andhra-style chicken roast with bold chili and curry leaf masala", price: "₹299" },
    { name: "Vanjaram Fish Fry", desc: "Fresh seer fish marinated in turmeric and red chili, shallow fried crispy", price: "₹379" },
    { name: "Bhimavaram Prawns Fry", desc: "Succulent prawns from Bhimavaram, fried with a spicy coastal masala", price: "₹399" },
    { name: "Puttagodugulu Miriyala Vepudu", desc: "Mushrooms tossed in a peppery masala with aromatic spices", price: "₹249" },
  ],
  "Non-Veg Curries": [
    { name: "Andhra Kodi Kura", desc: "Classic Andhra chicken curry cooked in a rich onion-tomato gravy", price: "₹329" },
    { name: "Gongura Kodi Kura", desc: "Chicken simmered in tangy sorrel leaves — a true Andhra delicacy", price: "₹349" },
    { name: "Natu Kodi Kura", desc: "Country chicken slow-cooked with traditional village-style spices", price: "₹399" },
    { name: "Zamindari Mamsam", desc: "Signature mutton curry with a royal blend of aromatic spices", price: "₹449" },
    { name: "Mutton Curry Boneless", desc: "Tender boneless mutton in a rich, deeply spiced gravy", price: "₹429" },
    { name: "Royyala Pulusu", desc: "Prawns cooked in tangy tamarind gravy with Andhra spices", price: "₹379" },
    { name: "Chepala Pulusu", desc: "Fish simmered in a sour and spicy tamarind-based curry", price: "₹359" },
  ],
  Veg: [
    { name: "Gutti Vankaya Kura", desc: "Stuffed brinjal curry with peanut and sesame filling", price: "₹229" },
    { name: "Paneer Tikka Masala", desc: "Grilled paneer cubes in a creamy tomato-based tikka sauce", price: "₹269" },
    { name: "Gongura Pappu", desc: "Lentils cooked with tangy gongura leaves — Andhra comfort food", price: "₹199" },
    { name: "Jeedipappu Batani Korma", desc: "Cashew and green peas cooked in a rich, mild korma gravy", price: "₹249" },
    { name: "Tomato Pappu", desc: "Dal tempered with tomatoes, garlic, and Andhra-style seasoning", price: "₹179" },
  ],
  "Biryani & Rice": [
    { name: "Chicken Tikka Biryani", desc: "Fragrant basmati rice layered with chargrilled chicken tikka pieces", price: "₹349" },
    { name: "Fish Biryani", desc: "Coastal-style biryani with fresh fish and aromatic spices", price: "₹379" },
    { name: "Egg Biryani", desc: "Flavorful biryani with boiled eggs in a masala-rich rice preparation", price: "₹249" },
    { name: "Kodi Pulav Rice", desc: "Spicy Andhra-style chicken pulao with whole spices", price: "₹299" },
    { name: "Ulav Charu Egg Biryani", desc: "Unique biryani infused with horse gram broth and eggs", price: "₹279" },
    { name: "Bhimavaram Mutton Pulao", desc: "Aromatic mutton pulao inspired by Bhimavaram's coastal flavors", price: "₹429" },
    { name: "Mutton Nalli Biryani", desc: "Signature biryani with tender bone marrow pieces and saffron rice", price: "₹499" },
    { name: "Bagara Rice", desc: "Fragrant rice tempered with whole spices, nuts, and herbs", price: "₹179" },
  ],
  "Desserts & Drinks": [
    { name: "Apricot Delight", desc: "Signature dessert with apricot compote, cream, and crushed nuts", price: "₹199" },
    { name: "Seeti Goli Soda", desc: "Classic Indian marble soda — fizzy, refreshing, and nostalgic", price: "₹49" },
    { name: "Paya Shorba", desc: "Rich mutton trotters soup, slow-simmered with warming spices", price: "₹199" },
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
            Authentic Andhra Flavors
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