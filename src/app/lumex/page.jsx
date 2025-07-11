"use client";
import React from 'react'
import Navbar from '../component/navbar'
import Image from 'next/image'
import ContactForm from '../component/contact-from'
import Footer from '../component/footer'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'

const features = [
    {
        icon: "/images/Frame 206.png", // Replace with your actual image path
        text: "0.5s Face Match",
    },
    {
        icon: "/images/viral-marketing_15888297_svgrepo.com.png",
        text: "AI-Driven Video Segmentation",
    },
    {
        icon: "/images/connection_16514714 1.png",
        text: "Private & Secure Storage",
    },
    {
        icon: "/images/dashboard_12177174 1.png",
        text: "Business Dashboard",
    },

];
export default function Page() {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <section style={{
                backgroundImage: 'url("/images/Frame 3384776 (2).png")',
            }} className="md:h-[88vh] w-full bg-cover bg-center overflow-hidden md:py-0 py-[80px] flex items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#1c1c1c] text-white">
                <div className="max-w-[1240px] mx-auto my-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0 lg:block hidden relative">
                        <img
                            src="/images/image.png"
                            alt="LUMDX Logo"
                            className="relative z-10 "
                        />
                        <div className="absolute inset-0 z-0 rounded-full blur-3xl opacity-46 mx-auto bg-[#FFFF00] scale-150" />
                    </div>

                    {/* Right: Text + Buttons */}
                    <div className="text-center lg:text-left max-w-[752px]">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#F6F6F6]">
                            Turn Moments into Business <br className='sm:block hidden' />
                            with the <span className="text-[#FFFF00]">Fastest AI SaaS</span> <br className='sm:block hidden' />
                            <span className="text-[#FFFF00]">Solution</span>
                        </h1>

                        <div className="mt-9 flex flex-wrap gap-4 justify-center lg:justify-start">
                            {/* <button className="bg-[#d6ff00] text-black px-5 py-2 rounded-md font-semibold hover:bg-[#f3ff4b] transition">
              Join the Movement
            </button> */}
                            <button className="cursor-pointer rounded-[10px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                                <Link href="https://www.aasvaalabs.com/" target="_blank" rel="noopener noreferrer">
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

                    <div className="flex-shrink-0 lg:hidden block
                     relative">
                        <img
                            src="/images/image.png"
                            alt="LUMDX Logo"
                            className="relative z-10 "
                        />
                        <div className="absolute inset-0 z-0 rounded-full blur-3xl opacity-46 mx-auto bg-[#FFFF00] scale-150" />
                    </div>

                </div>
            </section>

            <section style={{
                backgroundImage: 'url("/images/Frame 3385296.png")',
            }} className="w-full bg-cover bg-center text-white px-4 xl:px-0 md:py-[80px] py-[48px] relative overflow-hidden">
                <div className="lg:block hidden">
                    <div className="max-w-[1240px]  mx-auto grid lg:grid-cols-6  gap-8 ">

                        {/* Left Side */}
                        <div className="col-span-4 md:flex gap-5 w-fit mx-auto">
                            <div className="md:flex flex-col md:space-y-0 space-y-4 gap-11">
                                <img
                                    src="/images/image 44.png"
                                    alt="GoJuris AI Chat"
                                />
                                <img
                                    src="/images/Group 34.svg"
                                    alt="GoJuris AI Chat"
                                />
                            </div>
                            <div className="flex w-fit mx-auto  md:flex-col  gap-5">
                                <img
                                    src="/images/image 46.png"
                                    alt="GoJuris AI Chat"
                                />
                                <img
                                    src="/images/image 47.png"
                                    alt="GoJuris AI Chat"
                                />
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className='col-span-2'>
                            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-[white]">About</h2>
                            <h4 className="text-[#BCBBC0] text-[16px] mb-8">
                                We offer AI-powered face recognition technology with a swift processing time of 0.05 seconds, enabling businesses to efficiently manage photos and videos. Our platform provides customizable solutions designed to meet the unique needs and budgets of our clients. With features like seamless image and video retrieval, advanced editing options, and tools to create collages and reels, we streamline workflows and enhance user experience.
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


                    </div>
                </div>
                <div className="lg:hidden block">
                    <div className="max-w-[1240px]  mx-auto grid lg:grid-cols-2  gap-8 ">

                        {/* Left Side */}
                        <div className="col-span-1 md:flex gap-5 w-fit mx-auto">
                            <div className="flex flex-col md:space-y-0 space-y-2 gap-11">
                                <img
                                    src="/images/image 44.png"
                                    alt="GoJuris AI Chat"
                                />
                                <img
                                    src="/images/Group 34.svg"
                                    alt="GoJuris AI Chat"
                                />
                                <div className="flex gap-3 ">
                                    <div className="">
                                        <img
                                            src="/images/image 46.png"
                                            alt="GoJuris AI Chat"
                                        />
                                    </div>
                                    <div className="">
                                        <img
                                            src="/images/image 47.png"
                                            alt="GoJuris AI Chat"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className='col-span-1'>
                            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-[white]">About</h2>
                            <h4 className="text-[#BCBBC0] text-[16px] mb-8">
                                We offer AI-powered face recognition technology with a swift processing time of 0.05 seconds, enabling businesses to efficiently manage photos and videos. Our platform provides customizable solutions designed to meet the unique needs and budgets of our clients. With features like seamless image and video retrieval, advanced editing options, and tools to create collages and reels, we streamline workflows and enhance user experience.
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


                    </div>
                </div>
            </section>


            <div style={{
                backgroundImage: 'url("/images/Frame 3384983.png")',
            }} className="bg-cover bg-center w-full">
                <div className="md:py-[80px] py-[48px] max-w-[1085px] mx-auto xl:px-0 px-[16px] ">
                    <div className="">
                        <h4
                            id="features"
                            data-aos="slide-up" data-aos-duration="8000"
                            className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pt-[10px]"
                        >
                            What Makes Lumex Powerful
                        </h4>
                    </div>

                    {/* desktop */}
                    <div className="sm:block hidden">
                        <div className="flex pt-[40px] gap-5">
                            <div>
                                <img
                                    data-aos="slide-up" data-aos-duration="8000"
                                    src="/images/Frame 3384642 (1).png"
                                    className=""
                                    alt="Feature 1"
                                />
                                <img
                                    data-aos="slide-up" data-aos-duration="8000"
                                    src="/images/Frame 3384645.png"
                                    alt="Feature 3"
                                    className=" pt-[20px]"
                                />
                            </div>
                            <div className="">
                                <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384644.png" alt="Feature 2" />
                                <img
                                    data-aos="slide-up" data-aos-duration="8000"
                                    src="/images/Frame 3385271.png"
                                    alt="Feature 4"
                                    className="pt-[20px]"
                                />
                            </div>
                        </div>
                        <div className="pt-[22px] ">
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384688.png" alt="Feature 5" />
                        </div>
                    </div>

                    {/* mobile */}
                    <div className="sm:hidden block  ">
                        <div className=" gap-5 pt-[40px] ">
                            <img
                                data-aos="slide-up" data-aos-duration="8000"
                                src="/images/image 55.png"
                                className="mx-auto pb-[20px]"
                                alt=""
                            />
                            <img
                                data-aos="slide-up" data-aos-duration="8000"
                                src="/images/image 56.png"
                                className="mx-auto pb-[20px]"
                                alt=""
                            />
                            <img
                                data-aos="slide-up" data-aos-duration="8000"
                                src="/images/image 57.png"
                                className="mx-auto pb-[20px]"
                                alt=""
                            />
                            <img
                                data-aos="slide-up" data-aos-duration="8000"
                                src="/images/image 60.png"
                                className="mx-auto pb-[20px]"
                                alt=""
                            />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384688 (1).png" className="mx-auto" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/images/Frame 3384984.png")',
            }} className="pb-[55px] bg-cover bg-center w-full ">
                <div className=" py-12 relative">


                    <div className="pt-[55px] xl:px-0 px-[20px]">
                        <h4
                            data-aos="slide-up" data-aos-duration="8000"
                            className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pb-[20px]"
                        >
                            AI-Enhanced Video Recognition
                        </h4>

                        <div className="sm:block hidden">
                            <div className="sm:flex max-w-[1084px] mx-auto relative gap-10 pt-[32px]">
                                <div data-aos="slide-right" data-aos-duration="8000" className="z-10">
                                    <img src="/images/image 45.png" alt="" />
                                </div>
                                <div data-aos="slide-left" data-aos-duration="8000" className="pt-[30px]">
                                    <h4 className="text-[#FFFF00] font-merriweather sm:text-[36px] text-[28px]  py-[10px] ">
                                        Video Feature
                                    </h4>
                                    <p className="max-w-[600px] text-[#BCBBC0] sm:text-[18px] text-[14px] leading-[21px] font-[400] ">
                                        Empowering users with AI-driven face recognition to
                                        effortlessly scan, identify, and{" "}
                                        access video clips featuring their faces.{" "}
                                        Our technology enables precise editing, seamless adjustments,
                                        and efficient downloading of video segments, ensuring a
                                        tailored and streamlined experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="sm:hidden block ">
                            <div className="sm:flex max-w-[1084px] mx-auto relative gap-10 pt-[32px]">
                                <div data-aos="slide-up" data-aos-duration="8000" className="pt-[20px]">
                                    <h4 className="text-[#ffffff] font-merriweather font-bold sm:text-[36px] text-[28px]  py-[10px] ">
                                        Video Feature
                                    </h4>
                                    <p className="max-w-[439px] text-[#BCBBC0] sm:text-[18px] text-[14px] leading-[21px] font-[400] ">
                                        Empowering users with AI-driven face recognition to
                                        effortlessly scan, identify, and{" "}
                                        <span className="text-[#F3CF00] ">
                                            {" "}
                                            access video clips featuring their faces.{" "}
                                        </span>{" "}
                                        Our technology enables precise editing, seamless adjustments,
                                        and efficient downloading of video segments, ensuring a
                                        tailored and streamlined experience
                                    </p>
                                </div>
                                <div data-aos="slide-up" data-aos-duration="8000" className="z-10 pt-[10px]  ">
                                    <img src="/images/image 45.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="slide-up" data-aos-duration="8000" className="absolute sm:bottom-0 bottom-[50px]">
                        <img src="/images/Frame 1.png" alt="" className="" />
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/images/Frame 3384985.png")',
            }} className="bg-cover bg-center w-full xl:px-0 px-[20px]">
                <div className="max-w-[1088px] mx-auto sm:py-[80px] py-[20px]">
                    <h4
                    data-aos="slide-up" data-aos-duration="8000"
                        className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pb-[20px]"
                    >
                        How Lumex Works
                    </h4>
                    <div data-aos="slide-up" data-aos-duration="8000" className="sm:block hidden">
                        <div
                            className="flex gap-5  mt-[60px] "
                        >
                            <div className="w-[20%] ">
                                <img
                                    src="/images/Group 2 (1).png"
                                    width={98}
                                    height={98}
                                    className="mx-auto"
                                    alt=""
                                />
                                <h5 className='text-[#ffff00] text-[23px] pt-[16px] text-center'>Create an Event</h5>
                                <p className="text-center text-white text-[14px] my-[8px]">
                                    Upload media and enable face recognition
                                </p>
                            </div>
                            <div className="w-[20%]">
                                <img
                                    src="/images/Group 2.png"
                                    width={98}
                                    height={98}
                                    className="mx-auto"
                                    alt=""
                                />
                                <h5 className='text-[#ffff00] text-[23px] pt-[16px] text-center'>Send Access Link</h5>
                                <p className="text-center text-white text-[14px] my-[8px]">
                                    Share via email, WhatsApp, or QR
                                </p>
                            </div>


                            <div className="w-[20%]">
                                <img
                                    src="/images/Group 3.png"
                                    width={98}
                                    height={98}
                                    className="mx-auto"
                                    alt=""
                                />
                                <h5 className='text-[#ffff00] text-[23px] pt-[16px] text-center'>User Interaction</h5>
                                <p className="text-center text-white text-[14px] my-[8px]">
                                    Attendees click the link to access content
                                </p>
                            </div>

                            <div className="w-[20%]">
                                <img
                                    src="/images/Group.png"
                                    width={98}
                                    height={98}
                                    className="mx-auto"
                                    alt=""
                                />
                                <h5 className='text-[#ffff00] text-[23px] pt-[16px] text-center'>Face Detection</h5>
                                <p className="text-center text-white text-[14px] my-[8px]">
                                    AI maps and identifies individuals instantly
                                </p>
                            </div>
                            <div className="w-[20%]">
                                <img
                                    src="/images/Group 1.png"
                                    width={98}
                                    height={98}
                                    className="mx-auto"
                                    alt=""
                                />
                                <h5 className='text-[#ffff00] text-[23px] pt-[16px] text-center'>Download or Edit</h5>
                                <p className="text-center text-white text-[14px] my-[8px]">
                                    Users can download media or generate custom reels
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[390px] mx-auto pt-[40px] sm:hidden block xl:px-0 px-[12px]">
                        <div className="flex flex-wrap gap-2  ">
                            <div className="flex gap-5">
                                <div className="w-[50%] ">
                                    <img
                                        src="/images/Group 2 (1).png"
                                        width={98}
                                        height={98}
                                        className="mx-auto"
                                        alt=""
                                    />
                                    <h5 className='text-[#ffff00] text-[20px] pt-[16px] text-center'>Send Access Link</h5>
                                    <p className="text-center text-white text-[14px] my-[8px]">
                                        Share via email, WhatsApp, or QR
                                    </p>
                                </div>
                                <div className="w-[50%]">
                                    <img
                                        src="/images/Group 2.png"
                                        width={98}
                                        height={98}
                                        className="mx-auto"
                                        alt=""
                                    />
                                    <h5 className='text-[#ffff00] text-[20px] pt-[16px] text-center'>User Interaction</h5>
                                    <p className="text-center text-white text-[14px] my-[8px]">
                                        Attendees click the link to access content
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-[50%]">
                                    <img
                                        src="/images/Group.png"
                                        width={98}
                                        height={98}
                                        className="mx-auto"
                                        alt=""
                                    />
                                    <h5 className='text-[#ffff00] text-[20px] pt-[16px] text-center'>Face Detection</h5>
                                    <p className="text-center text-white text-[14px] my-[8px]">
                                        Attendees click the link to access content
                                    </p>
                                </div>

                                <div className="w-[50%]">
                                    <img
                                        src="/images/Group 3.png"
                                        width={98}
                                        height={98}
                                        className="mx-auto"
                                        alt=""
                                    />
                                    <h5 className='text-[#ffff00] text-[20px] pt-[16px] text-center'>Download or Edit</h5>
                                    <p className="text-center text-white text-[14px] my-[8px]">
                                        Users can download media or generate custom reels
                                    </p>
                                </div>
                            </div>

                            <div className="w-[50%] mx-auto">
                                <img
                                    src="/images/Group 1.png"
                                    width={98}
                                    height={98}
                                    className="mx-auto"
                                    alt=""
                                />
                                <h5 className='text-[#ffff00] text-[20px] pt-[16px] text-center'>Create an Event</h5>
                                <p className="text-center text-white text-[14px] my-[8px]">
                                    Upload media and enable face recognition
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <button className="rounded-[10px] cursor-pointer w-fit mx-auto mt-[48px] flex justify-center items-center text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                        Try Lumex in Action
                    </button> */}
                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/images/Frame 3384986.png")',
            }} className="bg-cover bg-center w-full">
                <div className="md:py-[80px] py-[48px] max-w-[1084px] mx-auto xl:px-0 px-[16px]">
                    <div className="pb-[48px]">
                        <h4
                            data-aos="slide-right" data-aos-duration="8000"
                            className="sm:text-[48px] font-merriweather text-[28px] text-[#FFFFFF] text-center sm:leading-[52px] leading-[35px] pb-[20px]"
                        >
                            Enrich Your Experiences with Lumex
                        </h4>
                    </div>

                    <div className="sm:block hidden">

                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384670.png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384669.png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384669 (1).png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384670 (1).png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384669 (2).png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384670 (2).png" alt="" />
                        </div>
                    </div>


                    <div className="sm:hidden block">
                        <div className="flex flex-col items-center justify-center gap-5 w-full">
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384670.png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384669.png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384669 (1).png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384670 (1).png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384669 (2).png" alt="" />
                            <img data-aos="slide-up" data-aos-duration="8000" src="/images/Frame 3384670 (2).png" alt="" />
                        </div>
                    </div>


                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/images/Frame 3384987.png")',
            }} className="bg-cover bg-center w-full">
                <div className="md:py-[80px] py-[48px] text-center max-w-[746px] mx-auto xl:px-0 px-[16px]">


                    {/* Main Heading */}
                    <h1 data-aos="slide-up" data-aos-duration="8000" className="text-5xl md:font-bold text-[#ffff00] mb-6 leading-tight">
                        Explore the Possibilities of AI, from Moments to Memories
                    </h1>

                    {/* Description */}
                    <p data-aos="slide-up" data-aos-duration="8000" className="text-[#F6F6F6] text-sm max-w-2xl mx-auto mb-8 leading-relaxed px-4">
                        Discover how Lumax can transform your event or business operation with smart media automation.
                        Empower your team and delight your customers with AI that understands moments.
                    </p>






                </div>
            </div>


            <ContactForm />
            <Footer />
        </div>
    )
}
