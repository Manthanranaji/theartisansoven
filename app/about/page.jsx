import NavBar from "../navbar";

export default function About(){
    return(
<div className="w-full min-h-screen bg-[#2C4A4e]">
    <NavBar/>
      <section className="w-full h-fit py-8 px-4 mb-12 mt-28">
        <span className="uppercase font-dm tracking-widest text-[#FAFAFA]/60">
          Our Story
        </span>
        <h5 className="text-[#B8C8B5] font-cormorant tracking-wider mt-4 font-light text-5xl">
          Baking 
        <span className="font-bold text-[#FFFFFF]/70"> Cakes </span> 
        that carry meaning</h5>

        <p className="mt-6 font-dm text-[#FAFAFA]/60 text-sm leading-relaxed tracking-wider">
          At The Bakehouse Code, every creation is a conversation. We believe the finest celebrations deserve desserts
          that are as thoughtful as the moments they mark &mdash; baked fresh, crafted with precision, and designed
          to leave an impression. <span className="block mt-2">Using only the finest ingredients, our studio specialises in custom
          cakes, artisanal brownies, tiramisu, and seasonal dessert &mdash; all 100% eggless, always made to order</span> 
        </p>
      
      </section>
      </div>
    )
}