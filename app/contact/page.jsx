import NavBar from "../navbar";
import Link from "next/link";

export default function Contact(){
    return(
<div className="w-full min-h-screen bg-[#2C4A4e]">
    <NavBar/>
      <section className="w-full h-fit py-8 px-4 mb-12 mt-32">
        <span className=" text-[#FAFAFA]/30 font-dm tracking-widest">Contact</span>
        <h6 className="font-cormorant tracking-wider text-[#FAFAFA]/80 text-4xl">Whether to Order or leave a hi:</h6>

        <p className="font-dm font-light mt-4 text-sm text-[#FFFFFF]/40 tracking-wider leading-relaxed">
          We eagerly wait to hear from you. You can order below and reach us. All enquiries are answered within a few hours.
        </p>

        <div className="flex gap-6 mt-6 text-[#FFFFFF]/60 text-xl font-semibold font-cormorant">
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