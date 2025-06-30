"use client";
import React from "react";

import { FaArrowRightLong } from 'react-icons/fa6'
import Navbar from '../component/navbar'
import Image from 'next/image'
import ContactForm from '../component/contact-from'
import Footer from '../component/footer'
// import { Shield, Book, FileText, Search, Lock } from "lucide-react";

const features = [
    {
        icon: "/images/Frame 206 (1).png", // Replace with your actual image path
        text: "No-code Setup",
    },
    {
        icon: "/images/viral-marketing_15888297_svgrepo.com (1).png",
        text: "Multi-format Data Support",
    },
    {
        icon: "/images/connection_16514714 1 (1).png",
        text: "Open Source LLMs",
    },
    {
        icon: "/images/dashboard_12177174 1 (2).png",
        text: "Secure API Access",
    },
    {
        icon: "/images/dashboard_12177174 1 (3).png",
        text: "Ultra-fast Retrieval Engine",
    },
];

const features2 = [
    {
        icon: "/images/Frame 206 (2).png", // Replace with your actual image path
        text: "End-to-end data encryption (at rest + in transit)",
    },
    {
        icon: "/images/viral-marketing_15888297_svgrepo.com (2).png",
        text: "Role-based access management",
    },
    {
        icon: "/images/connection_16514714 1 (2).png",
        text: "Isolated runtime environments for each bot instance",
    },
    {
        icon: "/images/dashboard_12177174 1 (4).png",
        text: "API-key based security for integrations",
    },

];

const features3 = [
    {
        icon: "/images/Frame 206 (3).png", // Replace with your actual image path
        text: "Websites",
    },
    {
        icon: "/images/viral-marketing_15888297_svgrepo.com (3).png",
        text: "Mobile apps",
    },
    {
        icon: "/images/connection_16514714 1 (3).png",
        text: "CRMs & support portals",
    },
    {
        icon: "/images/dashboard_12177174 1 (5).png",
        text: "Internal dashboards",
    },

];





export default function Page() {

   

    return (
        <div>
            <Navbar />
            <section style={{
                backgroundImage: 'url("/images/Frame 3384776 (2).png")',
            }} className="md:h-[88vh] w-full bg-cover bg-center overflow-hidden md:py-0 py-[80px] flex items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#1c1c1c] text-white">
                <div className="max-w-[1240px] mx-auto my-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0 lg:block hidden relative">
                        <img
                            src="/images/Frame 3385273.png"
                            alt="aasvaaera Logo"
                            className="relative z-10 "
                        />
                        <div className="absolute inset-0 z-0 rounded-full blur-3xl opacity-46 mx-auto bg-[#FFFF00] scale-150" />
                    </div>

                    {/* Right: Text + Buttons */}
                    <div className="text-center lg:text-left max-w-[752px]">
                        <h1 className="text-[40px] lg:text-5xl font-semibold leading-tight text-[#F6F6F6]">
                            <span className="text-[#FFFF00]">One Platform. All Your Intelligence.</span>
                        </h1>
                        <p className='text-[#E6E6E6] text-[16px] pt-[16px]'>AasvaaEra is a plug-and-play, no-code AI assistant framework that helps businesses deploy intelligent, context-aware chatbots.</p>

                        <div className="mt-9 flex flex-wrap gap-4 justify-center lg:justify-start">

                            <button onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}   className="cursor-pointer rounded-[10px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 md:hover:bg-[#FFFF00]  hover:text-black hover:shadow-yellow-glow custom-glow">
                                Contact Us
                            </button>
                            {/* <button className="cursor-pointer group text-[#F6F6F6] bg-transparent hover:border-none border-[2px] border-[#F6F6F6] rounded-[10px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black    py-[15px] px-[22px] text-[16px] font-[600]  relative">
                                <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                    View Developer Docs
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <FaArrowRightLong className='text-2xl' />
                                </span>
                            </button> */}

                        </div>
                    </div>

                    <div className="flex-shrink-0 lg:hidden block relative">
                        <img
                            src="/images/Frame 3385273.png"
                            alt="aasvaaera Logo"
                            className="relative z-10 "
                        />
                        <div className="absolute inset-0 z-0 rounded-full blur-3xl opacity-46 mx-auto bg-[#FFFF00] scale-150" />
                    </div>
                </div>
            </section>



            <section style={{
                backgroundImage: 'url("/images/Frame 3385290.png")',
            }} className="bg-cover bg-center w-full text-white px-4 md:px-16 md:py-[80px] py-[48px] relative overflow-hidden">
                <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8 ">
                    {/* Left Side */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-[white]">About</h2>
                        <h4 className="text-[#ffff00] text-[28px] font-semibold mb-8">
                            Powered by your own data.
                        </h4>

                        <ul className="space-y-4 text-sm md:text-base text-white/90">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                    <img
                                        src={feature.icon}
                                        alt="Feature icon"
                                        className="mr-6"
                                    />
                                    <span className='text-[#FFFF00] tracking-[6px] text-[16px] uppercase'>{feature.text}</span>
                                </li>
                            ))}
                        </ul>



                        {/* <button className="rounded-[10px] cursor-pointer mt-[48px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                            Explore GoJuris Features
                        </button> */}

                    </div>

                    {/* Right Side */}
                    <div className=" my-auto">
                        <img
                            src="/images/Frame 3385235 (1).png"
                            alt="GoJuris AI Chat"

                            className=""
                        />
                    </div>
                </div>
            </section>


            <div style={{
                backgroundImage: 'url("/images/Frame 3384983.png")',
            }} className="bg-cover bg-center w-full">
                <div className="md:py-[80px] py-[48px] max-w-[1085px] mx-auto xl:px-0 px-[16px] ">
                    <div className="max-w-[746px] pb-[48px] text-center mx-auto">
                        <h4
                            id="features"
                            className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pt-[10px]"
                        >
                            Conversational AI
                        </h4>
                        <p className='text-[#BCBBC0] text-[16px] pt-[16px] text-center'>AasvaaEra enables you to build intelligent chatbots that reason, respond, and adapt based on your private datasets. From customer support to internal knowledge agents — deploy
                            your AI in minutes without writing a single line of code.</p>

                    </div>

                    <div className="">
                        <img src="/images/Group 214 (1).png" alt="" />
                    </div>



                </div>
            </div>


            <div style={{
                backgroundImage: 'url("/images/Frame 3384983.png")',
            }} className="bg-cover bg-center w-full">
                <div className="md:py-[80px] py-[48px] max-w-[1180px] mx-auto xl:px-0 px-[16px] ">
                    <div className=" pb-[48px] text-center">
                        <h4
                            id="features"
                            className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pt-[10px]"
                        >
                            Why Teams Love AasvaaEra
                        </h4>


                    </div>

                    <div className="max-w-[1180px] md:block hidden mx-auto">
                        <div className="flex  items-center gap-5 mb-5">
                            <div>
                                <img src="/images/Frame 3384670 (3).png" className='' alt="" />
                            </div>
                            <div>

                                <img src="/images/Frame 3385238.png" className='' alt="" />
                            </div>

                        </div>
                        <div className="flex  items-center gap-5 ">
                            <div>
                                <img src="/images/Frame 3385239.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/Frame 3385236.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/Frame 3385240.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden block">
                        <div className="max-w-[1180px]  mx-auto flex flex-col md:flex-row md:flex-wrap md:justify-start items-center gap-5">

                            <img src="/images/Frame 3384670 (4).png" alt="" className="md:flex-none" />
                            <img src="/images/Frame 3385238 (1).png" alt="" className="md:flex-none" />
                            <img src="/images/Frame 3385239 (1).png" alt="" className="md:flex-none" />
                            <img src="/images/Frame 3385236 (1).png" alt="" className="md:flex-none" />
                            <img src="/images/Frame 3385240 (1).png" alt="" className="md:flex-none" />
                        </div>
                    </div>






                </div>
            </div>


            <div style={{
                backgroundImage: 'url("/images/Frame 3384983.png")',
            }} className="bg-cover bg-center w-full md:py-[80px] py-[48px]">
                <div className="max-w-[1240px] mx-auto xl:p-0 p-4 flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2   md:my-auto  md:block hidden">
                        <img src="/images/Frame 3385280.png" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-[white]">Built for Privacy, Designed for Control</h2>
                            <h4 className="text-[#E6E6E6] text-[16px] font-semibold mb-8">
                                Your data stays safe with containerized runtimes, full encryption, and access-level security.
                            </h4>

                            <ul className="space-y-4 text-sm md:text-base text-white/90">
                                {features2.map((features, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <img
                                            src={features.icon}
                                            alt="Feature icon"
                                            className="mr-6"
                                        />
                                        <span className='text-[#FFFF00] tracking-[6px] text-[16px] uppercase'>{features.text}</span>
                                    </li>
                                ))}
                            </ul>




                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:my-auto  md:hidden block">
                        <img src="/images/Frame 3385280.png" alt="" />
                    </div>
                </div>
            </div>


            <div style={{
                backgroundImage: 'url("/images/Frame 3384983.png")',
            }} className="bg-cover bg-center w-full md:py-[80px] py-[48px]">
                <div className="max-w-[1240px] mx-auto xl:p-0 p-4 flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-[white]">Plug It into Any System, Instantly</h2>
                            <h4 className="text-[#E6E6E6] text-[16px] font-semibold mb-8">
                                AasvaaEra integrates with your tech stack using secure APIs. Add it to
                            </h4>

                            <ul className="space-y-4 text-sm md:text-base text-white/90">
                                {features3.map((featuret, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <img
                                            src={featuret.icon}
                                            alt="Feature icon"
                                            className="mr-6"
                                        />
                                        <span className='text-[#FFFF00] tracking-[6px] text-[16px] uppercase'>{featuret.text}</span>
                                    </li>
                                ))}
                            </ul>




                        </div>
                    </div>
                    <div className="w-full md:w-1/2   md:my-auto">
                        <img src="/images/Frame 3385280 (1).png" alt="" />
                    </div>
                </div>
            </div>

            <ContactForm />
            <Footer />
        </div>
    )
}
