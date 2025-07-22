"use client";
import React from 'react'
import Navbar from '../component/navbar'
import ContactForm from '../component/contact-from';
import Footer from '../component/footer';

export default function Page() {
    return (
        <div>
            <Navbar />

            <div style={{
                backgroundImage: 'url("/images/Frame 3385286 (1).png")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className='max-w-[930px] mx-auto'>
                        <h1 className='  pb-4 md:text-[60px] text-[48px] text-center text-[#ffff00] '>
                            Bharat’s Own GenAI Platform
                            Fast, Private, and Domain-Smart
                        </h1>
                        <p className='pb-[48px] text-[16px] text-[#CCCCCC] max-w-[596px] mx-auto text-center'>Build intelligent AI agents trained on your own data with multilingual, vision-ready capabilities and zero ML complexity.</p>
                        <div className='w-fit mx-auto'>
                            <button onClick={() => {
                                const section = document.getElementById("contact");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }} className="rounded-[10px] cursor-pointer text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                                Contact us
                            </button>
                        </div>
                    </div>

                    <div className="md:pt-[80px] pt-[48px] max-w-[1024px] mx-auto">
                        <img src="/images/Group 227.svg" alt="" />
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/images/Frame 3384787 (2).png")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <img onClick={() => {
                        const section = document.getElementById("contact");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }} src="/images/Frame 3385243.svg" className='cursor-pointer sm:block hidden' alt="" />

                    <div className=" sm:hidden block">
                        <img onClick={() => {
                            const section = document.getElementById("contact");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }} src="/images/Frame 3385368.svg" className='cursor-pointer w-fit mx-auto' alt="" />
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/Frame 3385313.svg")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="max-w-[1140px] mx-auto pb-[48px] ">
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white] pb-6 text-center">Built for Enterprises, Startups, and Public Institutions</div>
                        <p className='text-[#FFFFFF] text-[16px] max-w-[656px] text-center mx-auto'>Whether you're automating citizen services or building an internal knowledge bot — Annant adapts to your use case with speed and control.</p>


                    </div>

                    <div className="overflow-x-auto">
                        <div className="flex gap-5 w-max px-1">
                            <img src="/images/Frame 3385324.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385325.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385326.svg" alt="" className="shrink-0" />
                            <img src="/images/4 (1).png" alt="" className="shrink-0" />
                        </div>
                    </div>

                </div>
            </div>





            <div style={{
                backgroundImage: 'url("/Frame 3385313.svg")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white] pb-[48px]">What You Can Build</div>

                    <div className="">
                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 1.svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Custom Chatbots & Assistants</h5>
                                    <div className="text-[16px] text-[#ffffff]">Deploy multilingual bots for law, HR, <br /> education & governance.</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 1.svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Custom Chatbots & Assistants</h5>
                                    <div className="text-[16px] text-[#ffffff]">Deploy multilingual bots for law, HR, education & governance.</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2.svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Smart Document Agents</h5>
                                    <div className="text-[16px] text-[#ffffff]">Upload docs and create auto- <br /> summarizing, question-ready bots.</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2.svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Smart Document Agents</h5>
                                    <div className="text-[16px] text-[#ffffff]">Upload docs and create auto-summarizing, question-ready bots.</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (1).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">LLM-Powered Content Tools</h5>
                                    <div className="text-[16px] text-[#ffffff]">Enable legal draft writing, compliance <br /> answers, and content gen.</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (1).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">LLM-Powered Content Tools</h5>
                                    <div className="text-[16px] text-[#ffffff]">Enable legal draft writing, compliance answers, and content gen.</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (2).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Vision-AI Enhanced Agents</h5>
                                    <div className="text-[16px] text-[#ffffff]">Connect to Lumex for image, face, and <br /> document understanding.</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (2).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Vision-AI Enhanced Agents</h5>
                                    <div className="text-[16px] text-[#ffffff]">Connect to Lumex for image, face, and document understanding.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/Frame 3385313.svg")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="max-w-[1140px] mx-auto pb-[48px] ">
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white] pb-6 text-center">From Data to Deployment — in Minutes</div>
                        


                    </div>

                    <div className="overflow-x-auto">
                        <div className="flex gap-5 w-max px-1">
                            <img src="/images/1.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385354.svg" alt="" className="shrink-0" />
                            <img src="/images/2.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385354.svg" alt="" className="shrink-0" />
                            <img src="/images/3.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385354.svg" alt="" className="shrink-0" />
                            <img src="/images/4 (1).svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385354.svg" alt="" className="shrink-0" />
                            <img src="/images/5 (1).svg" alt="" className="shrink-0" />
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
                                
                                <div data-aos="slide-right" data-aos-duration="8000" className="pt-[30px]">
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

                                <div data-aos="slide-left" data-aos-duration="8000" className="z-10">
                                    <img src="/images/image 45.png" alt="" />
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
                backgroundImage: 'url("/Frame 3385313.svg")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="max-w-[854px] mx-auto pb-[48px] ">
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white] pb-6 text-center">On the Path to Becoming Bharat’s First Domain-Specific LLM</div>
                        <p className='text-[#FFFFFF] text-[16px] max-w-[656px] text-center mx-auto'>Annant is evolving into a foundation model built for Indian governance, law, vernacular public services, and multilingual GenAI applications.</p>
                    </div>

                    <div className="sm:block hidden">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <div className=""><img src="/images/image (47).png" alt="" /></div>
                                <div className=""><img src="/images/Frame 118 (2).png" alt="" /></div>
                            </div>
                            <div className="flex gap-5">
                                <div className=""><img src="/images/Frame 120 (2).png" alt="" /></div>
                                <div className=""><img src="/images/Frame 121 (2).png" alt="" /></div>
                                <div className=""><img src="/images/Frame 122 (1).png" alt="" /></div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden block w-fit mx-auto">
                        <div className="flex flex-col gap-5 justify-center">
                            <div className=""><img src="/images/image.svg" alt="" /></div>
                            <div className=""><img src="/images/Frame 118.svg" alt="" /></div>
                            <div className=""><img src="/images/Frame 120.svg" alt="" /></div>
                            <div className=""><img src="/images/Frame 121.svg" alt="" /></div>
                            <div className=""><img src="/images/Frame 122.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    backgroundImage: 'url("/Frame 3385313.svg")',
                }}
                className="bg-cover bg-center w-full"
            >
                <div className="max-w-[1260px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px]">
                    <div className="max-w-[854px] mx-auto pb-[48px]">
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-white pb-6 text-center">
                            Annant is Already Powering…
                        </div>
                    </div>

                    {/* Horizontal scroll container */}
                    <div className="overflow-x-auto">
                        <div className="flex gap-5 w-max px-1">
                            {/* Add as many images as needed */}
                            <img src="/images/Frame 3385320.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385328.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385329.svg" alt="" className="shrink-0" />
                            <img src="/images/4.svg" alt="" className="shrink-0" />
                            <img src="/images/5.svg" alt="" className="shrink-0" />
                            {/* Add more images as needed */}
                        </div>
                    </div>
                </div>
            </div>


            <ContactForm />
            <Footer />
        </div>
    )
}
