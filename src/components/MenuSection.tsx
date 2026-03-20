import { useState } from "react";
import { Flame } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  "South Indian",
  "Soups",
  "Starters",
  "Main Course",
  "Breads",
  "Biryani & Rice",
  "Snacks",
  "Desserts",
] as const;

type MenuItem = { name: string; desc: string; price: string; popular?: boolean };

const menuItems: Record<string, MenuItem[]> = {
  "South Indian": [
    { name: "Muddapappu Avakai Annam", desc: "Steamed rice mixed with dal and spicy avakai pickle", price: "₹199" },
    { name: "Ragi Sangati", desc: "Nutritious ragi and rice staple with earthy flavors", price: "₹149" },
    { name: "Sambhar Rice", desc: "Comforting rice cooked with flavorful sambar and spices", price: "₹179" },
    { name: "Sambhar Rice With Kodi Vepudu", desc: "Sambar rice served with spicy crispy chicken fry", price: "₹249", popular: true },
  ],
  Soups: [
    { name: "Kodi Rasam", desc: "Spicy chicken rasam with traditional South Indian spices", price: "₹149" },
    { name: "Miriyala Rasam", desc: "Aromatic pepper rasam with tamarind and spices", price: "₹99" },
    { name: "Mulakkada Mamsam Rasam", desc: "Mutton rasam with drumstick and South Indian spices", price: "₹179" },
    { name: "Mulakkada Rasam", desc: "Tangy drumstick rasam with traditional spices", price: "₹99" },
    { name: "Paya Shorba", desc: "Rich mutton trotters soup, slow-cooked with aromatic spices", price: "₹199", popular: true },
  ],
  Starters: [
    { name: "Zamindari Talwar Kebab", desc: "Royal-style chicken kebabs grilled on a sword", price: "₹399", popular: true },
    { name: "Aritaku Kothimeera Chepa Fry", desc: "Banana leaf-wrapped, coriander marinated fish fry", price: "₹379", popular: true },
    { name: "Bhimavaram Prawns Fry", desc: "Andhra-style spicy prawn fry", price: "₹399" },
    { name: "Godavari Royyala Vepudu", desc: "Spicy prawn fry in the Godavari region style", price: "₹419" },
    { name: "Tandoori Kodi", desc: "Andhra-style spicy grilled chicken pieces", price: "₹329" },
    { name: "Kodi Joints Kebab", desc: "Chicken drumettes marinated and grilled as kebabs", price: "₹349" },
    { name: "Konaseema Kodi Guddu Fry", desc: "Spicy coastal-style egg fry from Konaseema", price: "₹199" },
    { name: "Konaseema Mamsam Vepudu", desc: "Spicy dry fried boneless mutton", price: "₹429" },
    { name: "Telangana Spicy Chicken", desc: "Spicy chicken preparation in Telangana style", price: "₹349" },
    { name: "Peethala Talimpu", desc: "Crab sautéed with spices and aromatics", price: "₹449" },
    { name: "Achari Fish Tikka", desc: "Fish marinated in tangy pickling spices, grilled", price: "₹359" },
    { name: "Ajwaini Fish Tikka", desc: "Fish marinated in carom seed spice blend, grilled", price: "₹359" },
    { name: "Banjara Murgh Kebab", desc: "Spicy, rustic grilled chicken kebabs", price: "₹329" },
    { name: "Saffron Murgh Tikka", desc: "Boneless chicken marinated with saffron spices, grilled", price: "₹349" },
    { name: "Tandoori Avakaya Royyalu", desc: "Prawns marinated with mango pickle spices, grilled", price: "₹429" },
    { name: "Pandu Mirchi Kodi Kebab", desc: "Chicken kebabs with ripe chili marinade", price: "₹329" },
    { name: "Kalmi Kebab", desc: "Marinated chicken drumsticks, grilled to perfection", price: "₹349" },
    { name: "Hariyali Fish Tikka", desc: "Fish marinated with coriander, mint and spices", price: "₹369" },
    { name: "Koramenu Chepa Fry", desc: "Fresh water murrel fish fried with local spices", price: "₹399" },
    { name: "Natukodi Fry", desc: "Country chicken marinated and tossed with Indian spices", price: "₹379" },
    { name: "Puttagodugulu Miriyala Vepudu", desc: "Button mushrooms tossed with black pepper", price: "₹249" },
    { name: "Bangaladumpa Gunpodi Vepudu", desc: "Potatoes fried with spicy gunpowder podi", price: "₹179" },
    { name: "Achari Paneer Tikka", desc: "Paneer marinated with pickling spices, grilled", price: "₹279" },
    { name: "Bharwan Paneer Tikka", desc: "Paneer stuffed with spiced filling, grilled", price: "₹289" },
    { name: "Malai Paneer Tikka", desc: "Soft paneer in creamy mildly spiced sauce, grilled", price: "₹269" },
    { name: "Pudina Paneer Tikka", desc: "Paneer in a minty marinade, grilled", price: "₹269" },
    { name: "Tandoori Malai Broccoli", desc: "Broccoli marinated in cream, cooked in tandoor", price: "₹249" },
    { name: "Tandoori Mushroom", desc: "Marinated mushrooms roasted in a tandoor", price: "₹229" },
  ],
  "Main Course": [
    { name: "Andhra Kodi Kura", desc: "Classic Andhra-style spicy chicken curry", price: "₹329" },
    { name: "Gongura Kodi Thalimpu", desc: "Spicy tangy chicken stew with gongura leaves", price: "₹349", popular: true },
    { name: "Natu Kodi Kura", desc: "Rustic country-style free-range chicken curry", price: "₹399" },
    { name: "Zamindari Kodi Kura Boneless", desc: "Rich boneless chicken curry with traditional spices", price: "₹379", popular: true },
    { name: "Konaseema Kodi Kura", desc: "Mild flavorful chicken curry in Konaseema style", price: "₹349" },
    { name: "Kodi Majjiga Pulusu", desc: "Chicken simmered in tangy buttermilk gravy", price: "₹329" },
    { name: "Chicken Chettinad", desc: "Aromatic Chettinad-style chicken with coconut", price: "₹349" },
    { name: "Malabar Chicken Curry", desc: "Creamy Kerala-style chicken curry with coconut", price: "₹349" },
    { name: "Kodi Guddu Kodi Vepudu", desc: "Spicy Andhra-style chicken and egg fry", price: "₹299" },
    { name: "Kodi Guddu Kura", desc: "Spicy egg curry with rich masala", price: "₹199" },
    { name: "Kodi Guddu Pulusu", desc: "Tangy egg stew in Andhra tamarind gravy", price: "₹199" },
    { name: "Zamindari Mamsam", desc: "Signature mutton curry with royal aromatic spices", price: "₹449", popular: true },
    { name: "Mutton Curry Boneless", desc: "Tender boneless mutton in rich masala gravy", price: "₹429" },
    { name: "Royyala Pulusu", desc: "Tangy prawn curry with Andhra spices", price: "₹379" },
    { name: "Royyala Iguru", desc: "Dry-style spicy prawn fry", price: "₹399" },
    { name: "Zamindari Chepala Pulusu", desc: "Traditional tangy fish curry with spices", price: "₹359", popular: true },
    { name: "Peethala Iguru", desc: "Dry-fried crab with bold spices", price: "₹449" },
    { name: "Peethala Pulusu", desc: "Mild tangy crab curry", price: "₹449" },
    { name: "Crab Ghee Roast", desc: "Spicy aromatic crab roast cooked in ghee", price: "₹479" },
    { name: "Gutti Vankaya Kura", desc: "Stuffed baby brinjal curry with peanut-sesame filling", price: "₹229" },
    { name: "Gongura Pappu", desc: "Tangy dal with sorrel leaves", price: "₹199" },
    { name: "Tomato Pappu", desc: "Andhra-style dal with tomato", price: "₹179" },
    { name: "Zamindari Pappu Talimpu", desc: "Royal style dal tadka", price: "₹199" },
    { name: "Jeedipappu Batani Korma", desc: "Rich cashew and peas curry", price: "₹249" },
    { name: "Paneer Tikka Masala", desc: "Grilled paneer in spicy creamy tomato gravy", price: "₹269" },
    { name: "Paneer Jeedipappu Masala", desc: "Paneer cooked in cashew-based masala", price: "₹269" },
    { name: "Kothmir Paneer", desc: "Paneer cooked in a coriander sauce", price: "₹259" },
    { name: "Tomato Paneer", desc: "Paneer cooked with tangy tomato sauce", price: "₹249" },
    { name: "Aritaku Kothimeera Paneer", desc: "Banana leaf-wrapped coriander marinated paneer", price: "₹279" },
    { name: "Aloo Gadda Tomato Korma", desc: "Potatoes cooked in rich tomato gravy", price: "₹199" },
    { name: "Kayaguralu Korma", desc: "Mixed vegetables cooked in creamy gravy", price: "₹219" },
    { name: "Jeedipappu Puttagodugulu", desc: "Mushrooms marinated in spices and cashew", price: "₹249" },
    { name: "Puttagodugula Batani Masala", desc: "Mushroom and peas curry", price: "₹229" },
  ],
  Breads: [
    { name: "Plain Naan", desc: "Soft, oven-baked Indian bread", price: "₹49" },
    { name: "Butter Naan", desc: "Warm naan with melted butter", price: "₹59" },
    { name: "Garlic Naan", desc: "Naan infused with garlic flavor", price: "₹69" },
    { name: "Cheese Chilli Naan", desc: "Naan stuffed with cheese and mild chillies", price: "₹89" },
    { name: "Roti", desc: "Soft whole wheat flatbread", price: "₹39" },
    { name: "Butter Roti", desc: "Soft roti brushed with butter", price: "₹49" },
    { name: "Laccha Paratha", desc: "Layered, crispy, and flaky flatbread", price: "₹59" },
    { name: "Mirchi Ka Paratha", desc: "Spicy paratha stuffed with green chillies", price: "₹69" },
    { name: "Kulcha", desc: "Fluffy, slightly leavened bread", price: "₹49" },
    { name: "Butter Kulcha", desc: "Soft kulcha with a buttery touch", price: "₹59" },
  ],
  "Biryani & Rice": [
    { name: "Zamindari Kodi Pulao", desc: "Spiced chicken pulao with aromatic flavors", price: "₹329", popular: true },
    { name: "Shahi Gosht Biryani", desc: "Royal-style rich mutton biryani", price: "₹499", popular: true },
    { name: "Ulavacharu Chicken Biryani", desc: "Chicken biryani with Andhra ulava charu flavors", price: "₹349", popular: true },
    { name: "Ulavacharu Egg Biryani", desc: "Egg biryani in rich ulavacharu gravy", price: "₹279" },
    { name: "Ulavacharu Boneless Chicken Biryani", desc: "Boneless chicken biryani in ulava charu", price: "₹379" },
    { name: "Chicken Tikka Biryani", desc: "Fragrant rice with chargrilled chicken tikka", price: "₹349" },
    { name: "Fish Biryani", desc: "Coastal-style biryani with fresh fish", price: "₹379" },
    { name: "Egg Biryani (3 Eggs)", desc: "Classic egg biryani with aromatic spices", price: "₹249" },
    { name: "Bhimavaram Mutton Pulao", desc: "Rich spicy mutton pulao", price: "₹429" },
    { name: "Yeta Mamsam Pulao", desc: "Traditional goat meat pulao with fragrant basmati", price: "₹449" },
    { name: "Ramu Gari Kodi Pulao", desc: "Zamindari special chicken pulao", price: "₹349", popular: true },
    { name: "Natukodi Pulao", desc: "Country chicken pulao with traditional spices", price: "₹379" },
    { name: "Gongura Kodi Pulao", desc: "Tangy gongura chicken pulao", price: "₹329" },
    { name: "Gongura Mutton Pulao", desc: "Tangy gongura-flavored mutton pulao", price: "₹449" },
    { name: "Pachi Mirchi Kodi Pulao", desc: "Chicken pulao with fresh green chillies", price: "₹329" },
    { name: "Gutti Vankaya Pulao", desc: "Pulao with stuffed brinjals and spices", price: "₹249" },
    { name: "Andhra Veg Pulao", desc: "Spiced vegetable pulao, Andhra-style", price: "₹219" },
    { name: "Jeedipappu Batani Pulao", desc: "Lentil and green peas pulao with cumin", price: "₹229" },
    { name: "Jeedipappu Kothmeera Pulao", desc: "Cumin-coriander lentil and rice pulao", price: "₹229" },
    { name: "Kothimeera Kaju Paneer Pulao", desc: "Coriander, cashew and paneer pulao", price: "₹259" },
    { name: "Zamindari Paneer Pulao", desc: "Rich paneer pulao with aromatic spices", price: "₹259" },
    { name: "Kayagurala Mandi", desc: "Mixed veg mandi", price: "₹229" },
    { name: "Bagara Rice", desc: "Mildly spiced aromatic rice", price: "₹149" },
    { name: "Steamed Rice", desc: "Simple fluffy steamed rice", price: "₹99" },
    { name: "Perugannam", desc: "Tangy curd rice with mild seasoning", price: "₹129" },
  ],
  Snacks: [
    { name: "Chicken Kothu Paratha", desc: "Chopped paratha mixed with spiced chicken", price: "₹249" },
    { name: "Egg Kothu Paratha", desc: "Chopped paratha with scrambled eggs and spices", price: "₹199" },
    { name: "Veg Kothu Paratha", desc: "Chopped paratha mixed with spiced vegetables", price: "₹179" },
    { name: "Masala Kulcha", desc: "Fluffy kulcha stuffed with spicy masala", price: "₹79" },
    { name: "Paneer Kobbari Pakoda", desc: "Paneer and coconut spiced fritters", price: "₹229" },
    { name: "Veg Keema Balls", desc: "Spiced vegetarian keema balls, deep-fried", price: "₹199" },
    { name: "Boiled Egg (2 Eggs)", desc: "Simply boiled fresh eggs", price: "₹49" },
  ],
  Desserts: [
    { name: "Apricot Delight", desc: "Sweet fruity apricot treat with cream", price: "₹199", popular: true },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState<string>("South Indian");
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
              className={`bg-card p-6 rounded shadow-lg shadow-black/10 border border-border/50 hover:border-gold/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 group relative ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 60}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {item.popular && (
                <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 bg-accent text-accent-foreground text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-sm">
                  <Flame size={11} /> Popular
                </span>
              )}
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
