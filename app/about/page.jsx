"use client";

import Link from "next/link";
import NavBar from "../navbar";
import useReveal from "../hooks/Reveal";

export default function About() {
  const ref = useReveal();
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();
  const ref4 = useReveal();
  const ref5 = useReveal();
  const ref6 = useReveal();

  return (
    <div className="w-full min-h-screen bg-[#2C4A4e]">
      <NavBar />

      {/* HERO / OUR STORY */}
      <section className="w-full h-fit py-8 px-4 mb-12 mt-28">
        <span className="uppercase font-dm tracking-widest text-[#FAFAFA]/60">
          Our Story
        </span>

        <div
          ref={ref}
          className="opacity-0 text-[#B8C8B5] font-cormorant tracking-wider mt-4 font-light text-5xl"
        >
          Baking
          <span className="font-bold text-[#FFFFFF]/70"> Cakes </span>
          that carry meaning
        </div>

        <div
          ref={ref1}
          className="opacity-0 mt-6 font-dm text-[#FAFAFA]/60 text-sm leading-relaxed tracking-wider"
        >
          At The Bakehouse Code, every creation is a conversation. We believe
          the finest celebrations deserve desserts that are as thoughtful as the
          moments they mark — baked fresh, crafted with precision, and designed
          to leave an impression.
          <span className="block mt-2">
            Using only the finest ingredients, our studio specialises in custom
            cakes, artisanal brownies, tiramisu, and seasonal desserts — all
            100% eggless, always made to order.
          </span>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="w-full py-16 px-4 h-fit bg-[#F2EDE4]">
        <span className="font-dm text-[#1A1A1A]/40 tracking-widest">
          &mdash; What We Stand For
        </span>

        <div
          ref={ref2}
          className="opacity-0 text-[#1A1A1A]/70 mt-4 tracking-wider font-cormorant text-5xl"
        >
          Our Promise
        </div>

        <div
          ref={ref3}
          className="opacity-0 font-cormorant uppercase italic mt-12 text-2xl text-[#1A1A1A]/60"
        >
          Made fresh, never frozen
          <span className="block">∞ Crafted to your vision</span>
          <span className="block">100% Eggless</span>
          <span className="block">Always made to order</span>
        </div>

        <div
          ref={ref4}
          className="opacity-0 mt-10 font-dm text-[#1A1A1A]/50 text-sm leading-relaxed tracking-wider max-w-sm"
        >
          Every order we take is personal. From flavour to finish, nothing
          leaves our studio unless it feels exactly right.
        </div>

        <div
          ref={ref5}
          className="opacity-0 font-dm mt-10 text-[#7A9E8E] text-2xl font-light"
        >
          ❛ We treat every cake with respect ❜
        </div>
      </section>

      {/* CONTACT */}
      <section className="w-full py-16 px-4 pb-24 bg-[#2C4A4E]">
        <span className="uppercase font-dm tracking-widest text-[#FAFAFA]/40">
          &mdash; Get In Touch
        </span>

        <div
          ref={ref6}
          className="opacity-0 text-[#B8C8B5] font-cormorant tracking-wider mt-4 font-light text-5xl"
        >
          Let's create
          <span className="font-bold text-[#FFFFFF]/70"> something </span>
          together
        </div>

        <p className="mt-6 font-dm text-[#FAFAFA]/60 text-sm leading-relaxed tracking-wider">
          Have a celebration coming up? We'd love to hear about it.
        </p>

        <div className="mt-12 flex flex-col gap-8">
          <Link
            href="https://instagram.com/manthan.webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-end gap-4 w-fit"
          >
            <span className="font-dm text-[10px] tracking-widest text-[#FAFAFA]/30 uppercase mb-1">
              Instagram
            </span>
            <span className="font-cormorant text-3xl text-[#B8C8B5] group-hover:text-[#FFFFFF]/80 transition-colors duration-300 border-b border-[#B8C8B5]/30 group-hover:border-[#FFFFFF]/50 pb-0.5">
              @manthan.webdev
            </span>
          </Link>

          <Link
            href="tel:+919876634626"
            className="group flex items-end gap-4 w-fit"
          >
            <span className="font-dm text-[10px] tracking-widest text-[#FAFAFA]/30 uppercase mb-1">
              Call Us
            </span>
            <span className="font-cormorant text-3xl text-[#B8C8B5] group-hover:text-[#FFFFFF]/80 transition-colors duration-300 border-b border-[#B8C8B5]/30 group-hover:border-[#FFFFFF]/50 pb-0.5">
              +91 98766 34626
            </span>
          </Link>
        </div>

        <p className="mt-20 font-dm text-[#FAFAFA]/20 text-[10px] tracking-widest uppercase">
          Artisan Bakery · 100% Eggless · Made to Order
        </p>
      </section>
    </div>
  );
}