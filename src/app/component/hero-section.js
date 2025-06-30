import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
// import Navbar from "./navbar";

export default function Herosection() {
  return (
    <>
      <div id="home"
        className="bg-cover bg-center w-full"
        style={{
          backgroundImage: 'url("/images/Home.jpg")',
        }}
      >
        <div className="  overflow-hidden">
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[88vh] px-4 text-center">
            {/* Desktop Layout */}
            <div className="hidden md:block text-center py-[70px]">
              <div className="mb-5 w-fit mx-auto">
                <img src="/images/remove black text copy 1 (2).png" alt=""/>
              </div>
              <h1 className="text-6xl lg:text-[60px] font-semibold  mb-4 leading-tight">
                <span className="text-[#FFFF00]">AI</span>{" "}
                <span className="text-white">That Works.</span>
                <br />
                <span className="text-[#FFFF00]">Innovation</span>{" "}
                <span className="text-white">That Leads.</span>
              </h1>

              <p className="text-gray-300 text-lg mb-6 max-w-[500px] mx-auto leading-relaxed">
                From legal intelligence to cultural preservation — we &lsquo; re
                building <span className="text-[#ffff00]">Bharat &lsquo;s </span> very own Gen AI ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <button onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }} className="rounded-[10px] cursor-pointer w-fit text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                  Join the Movement
                </button>

                <button onClick={() => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }} className="cursor-pointer w-fit group text-[#F6F6F6] bg-transparent hover:border-none border-[2px] border-[#F6F6F6] rounded-[10px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black    py-[15px] px-[22px] text-[16px] font-[600]  relative">
                  <span className="inline-block transition-all duration-300 group-hover:pr-5">
                    Explore Our AI Products
                  </span>
                  <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <FaArrowRightLong className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden sm:max-w-sm mx-auto">
              <div className="mb-4 w-fit mx-auto">
                <img src="/images/remove black text copy 1 (2).png" alt=""/>
              </div>
              <h1 className="text-[44px] font-bold mb-5 leading-tight">
                <span className="text-[#FFFF00]">AI</span>{" "}
                <span className="text-white">That</span>{" "}
                <span className="text-white">Works.</span>
                <br />
                <span className="text-[#FFFF00]">Innovation</span>
                <span className="text-white">That Leads.</span>
              </h1>

              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                From legal intelligence to cultural preservation — we&lsquo; re
                building <span className="text-[#ffff00]">Bharat &lsquo;s </span> very own Gen AI ecosystem.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                <button onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }} className="rounded-[10px] cursor-pointer text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                  Join the Movement
                </button> 

                <button onClick={() => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }} className="cursor-pointer group text-[#F6F6F6] bg-transparent hover:border-none border-[2px] border-[#F6F6F6] rounded-[10px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black    py-[15px] px-[22px] text-[16px] font-[600]  relative">
                  <span className="inline-block transition-all duration-300 group-hover:pr-5">
                    Explore Our AI Products
                  </span>
                  <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <FaArrowRightLong className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>

            {/* Footer Text */}
            <div className="absolute sm:bottom-8 bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="text-[#FFFF00] sm:text-sm text-[12px] font-light tracking-[5px] uppercase">
                The Future of AI, Built in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
