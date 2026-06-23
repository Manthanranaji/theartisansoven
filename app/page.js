"use client";

import Link from "next/link";
import useReveal from "./hooks/Reveal";
import NavBar from "./navbar";

export default function Home(){

  const ref = useReveal()
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()
  const ref4 = useReveal()
  const ref5 = useReveal()
  const ref6 = useReveal()
  const ref7 = useReveal()
  const ref8 = useReveal()
  const ref9 = useReveal()
  const ref10 = useReveal()


  return(
    <div className="h-full w-full bg-[#2C4A4e]">

      <NavBar/>

      <div className="w-full min-h-screen mt-24 py-8 px-4 flex flex-col overflow-x-hidden">
        <h1 className="opacity-0 animate-fade-left text-[#B8C8B5] text-xl font-cormorant">
          The <span className=" block text-7xl">Bakehouse</span> <span className="block text-4xl ml-[65%]">Code</span>
        </h1>

        <p className="font-dm opacity-0 animate-fade-up [animation-delay:0.6s] text-xs -mt-6 text-[#B8C8B5]/70 font-light ml-1 tracking-widest">Where every bite feels special</p>
      
        <img
          src="/tin.png"
          alt="tin"
          width={250}
          height={250}
          className="-mt-44 -ml-8 rotate-12"
        />

        <h2 className="opacity-0 animate-fade-left [animation-delay:0.7s] text-[10px] font-dm font-extralight font-black text-[#FAFAFA]/[0.3] -mt-32 ml-[50%] tracking-wider">
          Custom Cakes · Gurugram
        </h2>

        <span className="text-[150px] font-black font-cormorant text-[#FFFFFF]/[0.02] -mt-44 -rotate-12 ml-[55%]">B</span>


        <div className="mt-10 flex gap-6">
        <Link
          href={"/contact"}
          className="opacity-0 animate-fade-left [animation-delay:1.1s] px-4 py-2 border border-[#B8C8B5]/70 w-fit text-[#FFFFFF]/70 font-dm tracking-wide text-sm shadow-sm"
        >
          Explore our Crafts
        </Link>
        <span className="opacity-0 animate-fade-up [animation-delay:1.4s] text-[#1A1A1A]/70 font-dm mt-3 text-xs tracking-widest">Why choose us ↓</span>
        </div>

      </div>

      <section className="w-full mb-20 -mt-48 py-16 px-4 h-fit bg-[#F2EDE4]">
        <span className="font-dm text-[#1A1A1A]/40 tracking-widest">&mdash; Our Specialty</span>
        <h3 ref={ref} className="opacity-0 text-[#1A1A1A]/70 mt-4 tracking-wider font-cormorant text-5xl">
          Why Us?
        </h3>

        <h4 ref={ref1} className="opacity-0 font-cormorant uppercase italic mt-12 text-2xl text-[#1A1A1A]/60">100% Eggless
         <span className="block">∞ custom possibilities</span>
         <span className="block">1 Studio</span>
         <span className="block">Fresh bakes</span>
        </h4>

        <h5 ref={ref2} className="opacity-0 font-dm mt-12 text-[#7A9E8E] text-2xl font-light">❛ We treat every cake with respect ❜</h5>

      </section>
      
      <section className="w-full h-fit py-8 px-4 mb-12">
        <span ref={ref3} className="opacity-0 uppercase font-dm tracking-widest text-[#FAFAFA]/60">
          Our Story
        </span>
        <h5 ref={ref4} className="opacity-0 text-[#B8C8B5] font-cormorant tracking-wider mt-4 font-light text-5xl">
          Baking 
        <span className="font-bold text-[#FFFFFF]/70"> Cakes </span> 
        that carry meaning</h5>

        <p ref={ref5} className="opacity-0 mt-6 font-dm text-[#FAFAFA]/60 text-sm leading-relaxed tracking-wider">
          At The Bakehouse Code, every creation is a conversation. We believe the finest celebrations deserve desserts
          that are as thoughtful as the moments they mark &mdash; baked fresh, crafted with precision, and designed
          to leave an impression. <span ref={ref6} className="opacity-0 block mt-2">Using only the finest ingredients, our studio specialises in custom
          cakes, artisanal brownies, tiramisu, and seasonal dessert &mdash; all 100% eggless, always made to order</span> 
        </p>
      
      </section>

      <section className="w-full h-fit py-8 px-4 mb-12 bg-[#F2EDE4]">
        <span ref={ref7} className="opacity-0 text-[#1A1A1A]/50 font-dm tracking-widest">Contact</span>
        <h6 ref={ref8} className="opacity-0 font-cormorant tracking-wider text-[#1A1A1A]/80 text-4xl">Whether to Order or leave a hi:</h6>

        <p ref={ref9} className="opacity-0 font-dm font-light mt-4 text-sm text-[#1A1A1A]/60 tracking-wider leading-relaxed">
          We eagerly wait to hear from you. You can order below and reach us. All enquiries are answered within a few hours.
        </p>

        <div ref={ref10} className="opacity-0 flex gap-6 mt-6 text-[#2c4a3e] text-xl font-semibold underline decoration-1 font-cormorant">
          <Link
            href={"https://wa.me/+918448522155"}
            target={"_blank"}
            rel="noopener noreferrer"
          >WhatsApp →</Link>
          <Link
            href={"https://instagram.com/thebakehousecode"}
            target={"_blank"}
            rel="noopener noreferrer"
          >Instagram →</Link>
        </div>

      </section>

    </div>
  )
}