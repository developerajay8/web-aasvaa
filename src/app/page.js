"use client";
import { motion, useScroll, useSpring } from "framer-motion"
import Herosection from "./component/hero-section";
import Navbar from "./component/navbar";
import Joinus from "./component/join-us";
import Finalthough from "./component/final-though";
import ContactForm from "./component/contact-from";
import Footer from "./component/footer";
import ProductSuiteCarousel from "./component/ProductSuiteCarousel";
import Ourjourney from "./component/ourjourney";
import Wesolve from "./component/we-solve";

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return <main className="">
     <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8E8E00] to-[#8E8E00] origin-left z-60"
        style={{ scaleX }}
      />
    <Navbar/>
    <Herosection/>
    <Ourjourney/>
    <Wesolve/>
    <ProductSuiteCarousel/>
    <Finalthough/>
    <Joinus/>
    <ContactForm/>
    <Footer/>
  </main>;
}
