"use client";
import React from "react";

import { FaArrowRightLong } from 'react-icons/fa6'
import Navbar from '../component/navbar'
import Image from 'next/image'
import ContactForm from '../component/contact-from'
import Footer from '../component/footer'
import { Heading5 } from "lucide-react";
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
                            <span className="text-[#FFFF00]">Not Just Intelligence, Indigenous Intelligence.</span>
                        </h1>
                        <p className='text-[#E6E6E6] text-[16px] pt-[16px]'>AasvaaEra is the brain behind Bharat’s GenAI revolution — a secure, no-code platform to build domain-specific AI agents using your own knowledge.</p>

                        <div className="mt-9 flex flex-wrap gap-4 justify-center lg:justify-start">

                            <button onClick={() => {
                                const section = document.getElementById("contact");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }} className="cursor-pointer rounded-[10px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 md:hover:bg-[#FFFF00]  hover:text-black hover:shadow-yellow-glow custom-glow">
                                Contact Us
                            </button>


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


            <div
                style={{
                    backgroundImage: 'url("/Frame 3384787 (1).png")',
                }}
                className="bg-cover bg-center w-full text-white overflow-hidden"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-14 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-6rem)]">

                        {/* Left Content */}
                        <div className="space-y-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                                A Unified GenAI Framework for Bharat
                            </h1>

                            <p className="text-[#CCCCCC] text-base sm:text-lg leading-relaxed max-w-xl">
                                AasvaaEra is the foundational AI layer powering Aasvaa Innovation Labs' ecosystem. It is composed of two advanced AI engines – Manthaan and Annant – that function as independent products but are also capable of integration to create powerful, real-world applications.
                            </p>

                            <div>
                                <h5 className="text-lg sm:text-xl font-bold text-[#ffff00] mb-2">
                                    At its foundation are two powerful systems:
                                </h5>
                                <ul className="list-disc space-y-2 pl-5 text-gray-300 text-sm sm:text-base">
                                    <li>
                                        <strong className="text-white">Annant</strong> - our India-trained LLM (the Brain)
                                    </li>
                                    <li>
                                        <strong className="text-white">Manthaan</strong> - our semantic AI retriever (the Seeker)
                                    </li>
                                </ul>
                            </div>

                            {/* Buttons Grid */}
                            <div className="flex flex-wrap gap-4 my-6">
                                {['Built in India', 'On-prem Ready', 'Vision Capable', 'No Code'].map((label) => (
                                    <button
                                        key={label}
                                        className="border border-[#9F9F00] px-4 py-2 rounded-md text-sm text-[#CCCCCC]"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* Contact Button */}
                            <button onClick={() => {
                                const section = document.getElementById("contact");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }} className="cursor-pointer rounded-[10px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 md:hover:bg-[#FFFF00]  hover:text-black hover:shadow-yellow-glow custom-glow">
                                Contact Us
                            </button>
                        </div>

                        {/* Right Side Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                                <Image
                                    src="/AI Image.png"
                                    alt="AI Framework Visualization"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover rounded-xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section style={{
                backgroundImage: 'url("/Frame 3384983 (1).png")',
            }} className="xl:px-0 px-[16px] md:py-[80px] py-[48px] bg-cover bg-center w-full  ">
                <div className="max-w-[1022px] mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[173px]">
                    {/* Annant Card */}
                    <div className="p-[24px] relative w-full max-w-[426px] border-[1px] border-[#9F9F00] rounded-[10px] bg-gradient-to-r from-[#464646] to-[#43430D] origin-left mx-auto md:mb-0 mb-[40px]">
                        <span className="pb-[8px] text-[#FFFF00] text-[14px] uppercase tracking-[4px]">The Brain</span>
                        <h1 className="text-[48px] text-[#ffff00] pb-2">Annant</h1>
                        <span className="italic text-[16px] text-white">The Brain Behind GenAI Conversations</span>
                        <h5 className="py-4 text-[16px] text-white">
                            Annant is a development engine for building AI Chatbots, Virtual Assistants, and Autonomous Agents. It seamlessly integrates with Vision AI (Lumex) to enable object and face recognition, image understanding, and visual search.
                        </h5>
                        <div className="border mb-[16px] border-[#ffff00] rounded-xl p-4 bg-gradient-to-r from-[#464646] to-[#43430D] origin-left">
                            <ul className="space-y-2 text-gray-200 text-[14px]">
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Custom-trained on Indian legal + governance knowledge</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Modular and scalable LLM architecture</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Seamless integration with Vision AI (e.g., Lumex)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Works online or on-premise</span>
                                </li>
                            </ul>
                        </div>
                        <div className="border border-[#ffff00] rounded-xl p-4 bg-gradient-to-r from-[#464646] to-[#43430D] origin-left">
                            <h3 className="text-[#FFFF00] font-bold text-lg mb-3">Annant Powers:</h3>
                            <ul className="space-y-2 text-gray-200 text-[14px]">
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Custom Legal Bots, Chat Assistants, HR Copilots</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Vision + Text Hybrid Applications like Lumex</span>
                                </li>
                            </ul>
                        </div>
                        <div className="absolute top-[-40px] lg:right-[-40px] right-[-0px]">
                            <img src="/Frame 221.png" alt="" />
                        </div>
                    </div>

                    {/* Manthaan Card */}
                    <div className="p-[24px] relative w-full max-w-[426px] border-[1px] border-[#9F9F00] rounded-[10px] bg-gradient-to-r from-[#464646] to-[#43430D] origin-left mx-auto">
                        <span className="pb-[8px] text-[#FFFF00] text-[14px] uppercase tracking-[4px]">The Memory</span>
                        <h1 className="text-[48px] text-[#ffff00] pb-2">Manthaan</h1>
                        <span className="italic text-[16px] text-white">The Seeker Behind Smart Discovery</span>
                        <h5 className="py-4 text-[16px] text-white">
                            Manthaan is an enterprise-ready AI search engine and file intelligence tool. It enables high-speed, context-aware document and data retrieval, making it ideal for legal, government, research, and enterprise file systems.
                        </h5>
                        <div className="border mb-[16px] border-[#ffff00] rounded-xl p-4 bg-gradient-to-r from-[#464646] to-[#43430D] origin-left">
                            <ul className="space-y-2 text-gray-200 text-[14px]">
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Neural + keyword hybrid search</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Hindi + English NLP understanding</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Connects with Annant for smart responses</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Deployable in private or air-gapped environments</span>
                                </li>
                            </ul>
                        </div>
                        <div className="border border-[#ffff00] rounded-xl p-4 bg-gradient-to-r from-[#464646] to-[#43430D] origin-left">
                            <h3 className="text-[#FFFF00] font-bold text-lg mb-3">Manthaan Powers:</h3>
                            <ul className="space-y-2 text-gray-200 text-[14px]">
                                <li className="flex items-start">
                                    <span className="text-white mr-3">•</span>
                                    <span>Aasvaa Search – AI-enabled file <br /> management for government, legal, and enterprise archives</span>
                                </li>
                            </ul>
                        </div>
                        <div className="absolute top-[-40px] lg:right-[-40px] right-[-0px]">
                            <img src="/Frame 3385313 (4).png" alt="" />
                        </div>
                    </div>
                </div>


                <div className="w-fit mx-auto max-w-[1022px] md:mt-[126px] mt-[90px]">
                    <img src="/Frame 3385318.png" alt="" />
                </div>
            </section>

            <section
                style={{
                    backgroundImage: 'url("/Frame 3385315 (1).png")',
                }}
                className="bg-cover bg-center w-full text-white px-4 md:px-16 py-12 md:py-20 relative overflow-hidden"
            >
                <div>
                    {/* Heading */}
                    <div className="pb-[32px] text-center max-w-[638px] mx-auto">
                        <div
                            id="features"
                            className="text-[28px] sm:text-[36px] md:text-[44px] font-merriweather text-white leading-tight"
                        >
                            When Manthaan Meets Annant
                            Applications Are Born
                        </div>
                        <p className="text-[16px] text-[#E6E6E6] pt-[16px]">Manthaan and Annant can function as individual products. But when combined, they create complete question-to-answer pipelines — turning enterprise data into real-time knowledge agents.</p>
                    </div>
                    <div className="max-w-[1240px] mx-auto">
                        <div className="tracking-[4px] text-center text-[#ffff00] text-[22px] ">Alone they perform, together they transform industries.</div>
                    </div>

                    
                </div>
            </section>


            <section
                style={{
                    backgroundImage: 'url("/Frame 3385313 (5).png")',
                }}
                className="bg-cover bg-center w-full text-white px-4 md:px-16 py-12 md:py-20 relative overflow-hidden"
            >
                <div>
                    {/* Heading */}
                    <div className="pb-12 text-center">
                        <h4
                            id="features"
                            className="text-[28px] sm:text-[36px] md:text-[48px] font-merriweather text-white leading-tight"
                        >
                            What You Can Build
                        </h4>
                    </div>

                    {/* Horizontally Scrollable Images */}
                    <div className="max-w-[1295px] mx-auto overflow-x-auto">
                        <div className="flex gap-4 md:gap-6 w-max">
                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385312.png" alt="Build Option 1" className="w-full h-auto" />
                            </div>
                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385313.png" alt="Build Option 2" className="w-full h-auto" />
                            </div>
                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385315.png" alt="Build Option 3" className="w-full h-auto" />
                            </div>
                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385314.png" alt="Build Option 4" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section style={{
                backgroundImage: 'url("/Frame 3385313 (5).png")',
            }} className="bg-cover bg-center w-full text-white  md:py-[80px] py-[48px] relative overflow-hidden">
                <div className="max-w-[1240px] mx-auto">
                    <div className=" px-4 md:px-16 pb-[48px] text-center">
                        <h4
                            id="features"
                            className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pt-[10px]"
                        >
                            What You Can Build
                        </h4>


                    </div>

                    <div className="overflow-x-auto whitespace-nowrap ">
                        <div className="flex items-center gap-5 w-max">
                            <div className="inline-block">
                                <img src="/Frame 3385312 (3).png" alt="" className="" />
                            </div>
                            <div className="inline-block">
                                <img src="/Frame 3385354.png" alt="" className="" />
                            </div>
                            <div className="inline-block">
                                <img src="/Frame 3385313 (3).png" alt="" className="" />
                            </div>
                            <div className="inline-block">
                                <img src="/Frame 3385354.png" alt="" className="" />
                            </div>
                            <div className="inline-block">
                                <img src="/Frame 3385314 (4).png" alt="" className="" />
                            </div>
                            <div className="inline-block">
                                <img src="/Frame 3385354.png" alt="" className="" />
                            </div>
                            <div className="inline-block">
                                <img src="/Frame 3385312 (3).png" alt="" className="" />
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section style={{
                backgroundImage: 'url("/Frame 3385312 (4).png")',
            }} className="bg-cover bg-center w-full text-white px-4 md:px-16 md:py-[80px] py-[48px] relative overflow-hidden">
                <div className="">
                    <div className=" pb-[48px] text-center">
                        <h4
                            id="features"
                            className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pt-[10px]"
                        >
                            Why AasvaaEra?
                        </h4>


                    </div>

                    <div className="lg:block hidden">
                        <div className="max-w-[1295px] mx-auto flex flex-col gap-5">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <img src="/images/Frame 3385312 (2).png" alt="" />
                                </div>
                                <div className="">
                                    <img src="/images/Frame 3385313 (1).png" alt="" />
                                </div>
                                <div className="">
                                    <img src="/images/Frame 3385314 (3).png" alt="" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mx-[150px]">
                                <div className="">
                                    <img src="/images/Frame 3385312 (1).png" alt="" />
                                </div>
                                <div className="">
                                    <img src="/images/Frame 3385313 (2).png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto lg:hidden block">
                        <div className="flex gap-4 w-max px-4 pb-4">

                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385312 (2).png" alt="Image 1" className="w-full h-auto object-contain rounded-lg" />
                            </div>

                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385313 (1).png" alt="Image 2" className="w-full h-auto object-contain rounded-lg" />
                            </div>

                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385314 (3).png" alt="Image 3" className="w-full h-auto object-contain rounded-lg" />
                            </div>

                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385312 (1).png" alt="Image 4" className="w-full h-auto object-contain rounded-lg" />
                            </div>

                            <div className="flex-shrink-0 ">
                                <img src="/images/Frame 3385313 (2).png" alt="Image 5" className="w-full h-auto object-contain rounded-lg" />
                            </div>

                        </div>
                    </div>


                </div>
            </section>




            <ContactForm />
            <Footer />
        </div>
    )
}
