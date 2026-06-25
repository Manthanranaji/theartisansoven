"use client";

import NavBar from "../navbar";

const menu = [
  {
    category: "Signature Cakes",
    items: [
      "Classic Chocolate Truffle",
      "Belgian Chocolate Cake",
      "Red Velvet Cream Cheese",
      "Fresh Fruit Cake",
      "Biscoff Caramel Cake",
    ],
  },
  {
    category: "Brownies",
    items: [
      "Fudge Brownie",
      "Walnut Brownie",
      "Biscoff Brownie",
      "Nutella Brownie",
    ],
  },
  {
    category: "Desserts",
    items: [
      "Classic Tiramisu",
      "Lotus Biscoff Tiramisu",
      "Cheesecake Cups",
      "Seasonal Specials",
    ],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen w-full bg-[#F7F4EF]">
      <NavBar />

      {/* Hero */}
      <section className="pt-32 px-6 pb-20 text-center">
        <span className="uppercase tracking-[0.3em] text-sm text-[#7A9E8E] font-dm">
          Artisan Selection
        </span>

        <h1 className="mt-4 text-6xl font-cormorant text-[#2C4A4E]">
          Our Menu
        </h1>

        <p className="max-w-xl mx-auto mt-6 text-[#2C4A4E]/60 font-dm tracking-wide">
          Thoughtfully crafted desserts made fresh to order using
          premium ingredients and lots of love.
        </p>
      </section>

      {/* Menu Sections */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        {menu.map((section, idx) => (
          <div
            key={idx}
            className="border-t border-[#2C4A4E]/10 py-12"
          >
            <h2 className="text-4xl font-cormorant text-[#2C4A4E] mb-8">
              {section.category}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-4 border-b border-[#2C4A4E]/10"
                >
                  <span className="font-dm text-[#2C4A4E]/80 tracking-wide">
                    {item}
                  </span>

                  <span className="font-cormorant italic text-[#7A9E8E]">
                    Made to Order
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="bg-[#2C4A4E] px-6 py-20 text-center">
        <h2 className="font-cormorant text-5xl text-[#B8C8B5]">
          Craving something special?
        </h2>

        <p className="mt-6 text-[#FAFAFA]/60 font-dm">
          DM us on Instagram to place your order.
        </p>

        <a
          href="https://instagram.com/thebakehousecode"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 border border-[#B8C8B5]/40 px-8 py-4 text-[#B8C8B5] hover:bg-[#B8C8B5] hover:text-[#2C4A4E] transition-all duration-300"
        >
          Order Now
        </a>
      </section>
    </div>
  );
}