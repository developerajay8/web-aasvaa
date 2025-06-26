"use client";
import React from 'react';
import Navbar from '../component/navbar'
import AICards from '../component/aicards'
import Footer from '../component/footer';
import ContactForm from '../component/contact-from';
import GenAIRoadmap from '../component/genairoadmap';
import TeamSection from '../component/teamsection';

export default function Page() {
  const goals = [
    "Build India’s own AI & GenAI models for the next technological revolution.",
    "Develop AI-powered solutions for Governance, Defence, LegalTech, Media & Education.",
    "Create a self-sustaining AI ecosystem that scales globally.",
  ];

  


  return (
    <div>
      <Navbar />

      <section style={{
        backgroundImage: 'url("/images/Frame 3384776 (1).png")',
      }} className=" w-full bg-cover bg-center md:h-[88vh] relative overflow-hidden">
        {/* Background Pattern */}


        <div className="max-w-[1240px] mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[#FFFF00] text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  About us
                </h2>
                <div className="w-60  border-b-[2px] border-[#FFFF00] mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-[#F6F6F6] text-[16px] leading-relaxed">
                  <span className="relative font-semibold text-white after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                    Aasvaa Innovation Labs
                  </span>
                  is at the forefront of AI, Computer Vision, and GenAI, creating real-world solutions while researching next-gen AI models. We don’t just build AI-powered tools—we design future-proof AI ecosystems that revolutionize industries.
                </p>


              </div>


            </div>

            {/* Right Side - 3D Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* 3D "A" Logo */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                  {/* Main "A" */}
                  <div className="relative z-10">
                    <img src="/images/remove black text copy 1.png" alt="" />
                  </div>


                </div>


              </div>
            </div>
          </div>
          <div className="md:block hidden uppercase absolute right-0 bottom-[-40px] text-right tracking-[4px] text-[#ffff00]">AI That Works, <br /> Innovation That Leads
          </div>
          <div className="md:hidden block uppercase text-center tracking-[4px] text-[#ffff00]">AI That Works, <br /> Innovation That Leads
          </div>
        </div>

      </section>





      <div className="w-full bg-cover bg-center md:py-[80px] py-[48px] " style={{
        backgroundImage: 'url("/images/Frame 3384786.png")',
      }} >
        <div className="max-w-[1240px] mx-auto xl:px-0 px-4 pb-[48px]">
          <h5 className='text-[23px] text-[#ffff00] '>Innovate. Accelerate. Lead. Transform.</h5>
          <h1 className='md:text-[60px] text-[48px] text-[#FFFFFF]'>Our Core Belief</h1>
        </div>


        <div className="max-w-[1240px] mx-auto xl:px-0 px-4 ">
          <AICards />

        </div>
      </div>

      <div className="w-full bg-cover bg-center md:py-[80px] py-[48px] " style={{
        backgroundImage: 'url("/images/Frame 3384779.png")',
      }} >

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-0 px-4 ">
          <div className="col-span-1">
            <h3 className='text-[#FFFF00] font-bold text-[33px] pb-[32px]'>Our Mission</h3>
            <div className="   rounded-md">
              <ul className="list-decimal list-inside space-y-[4px] text-[16px] text-[#E6E6E6] leading-relaxed">
                {goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className="col-span-1">
            <h3 className='text-[#FFFF00] text-[33px] pb-[32px] font-bold'>Our Vision</h3>
            <div className="   rounded-md">
              <ul className=" space-y-[4px] text-[16px] text-[#E6E6E6] leading-relaxed">

                <li>To establish Aasvaa as India’s most advanced AI research and product company, building AI on par with global leaders while developing sovereign AI models for India and the world.</li>

              </ul>
            </div>

          </div>
        </div>
      </div>

      <div style={{
        backgroundImage: 'url("/images/Frame 3384776 (1).png")',
      }} className="bg-cover bg-center px-4 xl:px-0 w-full md:py-[80px] py-[48px] ">
        <div className="max-w-[1240px] mx-auto  ">
          <TeamSection />
        </div>
        <div className=" max-w-[1240px] mx-auto ">
          <div className="mt-[20px] flex space-x-4 overflow-x-auto scrollbar-none">
            <img src="/images/Frame 164.png" alt="" className="shrink-0" />
            <img src="/images/Frame 169.png" alt="" className="shrink-0" />
            <img src="/images/Frame 170.png" alt="" className="shrink-0" />
            <img src="/images/Frame 171 (1).png" alt="" className="shrink-0" />
            <img src="/images/Frame 169 (1).png" alt="" className="shrink-0" />
            <img src="/images/Frame 172.png" alt="" className="shrink-0" />
            <img src="/images/Frame 173.png" alt="" className="shrink-0" />
            <img src="/images/Frame 174.png" alt="" className="shrink-0" />
          </div>



        </div>
      </div>
      <GenAIRoadmap />
      <ContactForm />
      <Footer />


    </div>
  )
}
