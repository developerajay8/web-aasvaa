"use client";
import React from 'react'
import Navbar from '../component/navbar'
import Image from 'next/image'
import ContactForm from '../component/contact-from'
import Footer from '../component/footer'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'
// import { Shield, Book, FileText, Search, Lock } from "lucide-react";

const features = [
    {
        icon: "/images/Frame 206.png", // Replace with your actual image path
        text: "1 Crore+ Indian Cases",
    },
    {
        icon: "/images/viral-marketing_15888297_svgrepo.com.png",
        text: "Smart Summaries",
    },
    {
        icon: "/images/connection_16514714 1.png",
        text: "Document Upload & Analysis",
    },
    {
        icon: "/images/connection_16514714 1 (4).png",
        text: "Citation-Based Case Search",
    },
    {
        icon: "/images/connection_16514714 1 (5).png",
        text: "Privacy-first AI",
    },
];

export default function Page() {
    return (
        <div>
            <Navbar />
            <section style={{
                backgroundImage: 'url("/images/Frame 3384776 (2).png")',
            }} className="md:h-[88vh] w-full bg-cover bg-center overflow-hidden md:py-0 py-[80px] flex items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#1c1c1c] text-white">
                <div className="max-w-[1240px] mx-auto my-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between w-full sm:gap-20 gap-10">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0 lg:block hidden relative">
                        <img
                            src="/images/image 22650.png"
                            alt="LUMDX Logo"
                            className="relative z-10 "
                        />
                        <div className="absolute inset-0 z-0 rounded-full blur-3xl opacity-46 mx-auto bg-[#FFFF00] scale-150" />
                    </div>

                    {/* Right: Text + Buttons */}
                    <div className="text-center lg:text-left max-w-[752px]">
                        <h1 className="text-[40px] lg:text-5xl font-semibold leading-tight text-[#F6F6F6]">
                            Your <span className="text-[#FFFF00]">AI-Powered Legal Assistant.</span> Research Made Effortless.
                        </h1>

                        <div className="mt-9 flex flex-wrap gap-4 justify-center lg:justify-start">
                            {/* <button className="bg-[#d6ff00] text-black px-5 py-2 rounded-md font-semibold hover:bg-[#f3ff4b] transition">
              Join the Movement
            </button> */}
                            <button className="cursor-pointer rounded-[10px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                                <Link href="https://www.aasvaa.in/" target="_blank" rel="noopener noreferrer">
                                    Explore
                                </Link>
                            </button>
                            <button onClick={() => {
                                const section = document.getElementById("contact");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }} className="cursor-pointer group text-[#F6F6F6] bg-transparent hover:border-none border-[2px] border-[#F6F6F6] rounded-[10px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black    py-[15px] px-[22px] text-[16px] font-[600]  relative">
                                <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                    Contact Us
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <FaArrowRightLong className='text-2xl' />
                                </span>
                            </button>

                        </div>
                    </div>

                    <div className="flex-shrink-0 relative lg:hidden block">
                        <img
                            src="/images/image 62.png"
                            alt="LUMDX Logo"
                            className="relative z-10 "
                        />
                        <div className="absolute inset-0 z-0 rounded-full blur-3xl opacity-46 mx-auto bg-[#FFFF00] scale-150" />
                    </div>
                </div>
            </section>

            <section style={{
                backgroundImage: 'url("/images/Frame 3385290.png")',
            }} className=" text-white bg-cover bg-center w-full px-4 md:px-16 md:py-[80px] py-[48px] relative overflow-hidden">
                <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8 ">
                    {/* Left Side */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-[white]">About</h2>
                        <h4 className="text-[#ffff00] text-[28px] font-semibold mb-8">
                            Built for the Indian Legal System.<br />Powered by AI.
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
                            src="/images/About (1).png"
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
                            Gojuris Chatbot
                        </h4>
                        <p className='text-[#BCBBC0] text-[16px] pt-[16px] text-center'>GoJuris is India's first Gen AI legal assistant trained on millions of Indian judgments and statutes. Whether you're drafting contracts, researching case laws, or preparing legal arguments,
                            GoJuris helps you do it all — faster, smarter, and with confidence.</p>

                    </div>

                    <div className="pb-[48px]">
                        <img src="/images/Chatbot card (1).png" alt="" />
                    </div>

                    <div className="pb-[48px] ">
                        <p className='text-[#BCBBC0] text-[16px] text-center'>Get statute-specific answers, relevant case laws, and legal interpretations without needing to open 20 tabs.</p>
                    </div>

                    {/* <button className="rounded-[10px] cursor-pointer w-fit mx-auto text-[16px] flex justify-center items-center font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                        Try the Chatbot
                    </button> */}

                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/images/Frame 3384984.png")',
            }} className=" bg-cover bg-center w-full ">
                {/* <div className=" md:py-[80px] py-[48px] max-w-[1240px] mx-auto xl:px-0 px-[16px]">
                    <div className="grid grid-cols-5 gap-7 ">
                    <div className="col-span-3">
                    <img src="/images/Frame 3385262.png" className='' alt="" />
                    </div>
                    <div className="col-span-2 my-auto">
                        <span className='text-[48px] leading-[60px] text-[#FFFFFF] '>AI-Powered Case Search Engine</span>
                        <p className='text-[#F6F6F6] text-[16px] pb-[48px] pt-[32px] '>Search by keywords, parties involved, citations, or legal statutes. Filter your results by court, year, judge, or section with an intelligent search system that understands legal intent — not just keywords.</p>

                         <button className="rounded-[10px] cursor-pointer text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                                Explore
                            </button>

                    </div>
                    </div>
                </div> */}

                <div className="md:py-[80px] py-[48px] max-w-[1240px] mx-auto xl:px-0 px-[16px]">
                    <div className="flex flex-col md:flex-row items-center gap-[32px]">

                        {/* Left Side: Image */}
                        <div className="w-full md:w-1/2">
                            <img src="/images/MacBook Pro.png" className="w-full md:block hidden h-auto" alt="AI Case Search" />
                            <img src="/images/Frame 3385262 (1).png" alt="" className='md:hidden block' />
                        </div>

                        {/* Right Side: Text and Button */}
                        <div className="w-full md:w-1/2 text-left">
                            <h2 className="text-[32px] md:text-[48px] text-white pb-[24px] md:pb-[32px] leading-tight">
                                AI-Powered Case Search Engine
                            </h2>
                            <p className="text-[#F6F6F6] text-[16px] pb-[32px] md:pb-[48px]">
                                Search by keywords, parties involved, citations, or legal statutes. Filter your results by court, year, judge, or section with an intelligent search system that understands legal intent — not just keywords.
                            </p>
                            {/* <button className="rounded-[10px] cursor-pointer text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                                Explore
                            </button> */}
                        </div>

                    </div>
                </div>

            </div>

            <div style={{
                backgroundImage: 'url("/images/Frame 3384985.png")',
            }} className="bg-cover bg-center w-full xl:px-0 px-[16px]">
                <div className="max-w-[1100px] mx-auto sm:py-[80px] py-[48px]">
                    <h4
                        className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pb-[48px]"
                    >
                        Explore Core Modules of GoJuris
                    </h4>

                    <div className="md:block hidden">
                        <div className="flex gap-5 items-center ">
                            <div className="flex flex-col gap-5 ">
                                <div className="">
                                    <img src="/images/image 65.png" alt="" />
                                </div>
                                <div className="flex gap-5">
                                    <div className="">
                                        <img src="/images/Frame 3385265.png" alt="" />
                                    </div>
                                    <div className="">
                                        <img src="/images/Frame 3385264.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <img src="/images/Frame 3385263.png" alt="" />
                                <img src="/images/Frame 3385266.png" alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="md:hidden block">
                        <div className="flex gap-5 flex-col ">
                            <img src="/images/image 65.png" alt="" />

                            <img src="/images/Frame 3385265.png" alt="" />

                            <img src="/images/Frame 3385264.png" alt="" />

                            <img src="/images/Frame 3385263.png" alt="" />
                            <img src="/images/Frame 3385266.png" alt="" />

                        </div>
                    </div>




                </div>
            </div>








            <ContactForm />
            <Footer />
        </div>
    )
}
