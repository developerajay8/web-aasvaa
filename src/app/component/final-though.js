"use client";
import React from "react";
import work1 from "../../../public/images/Group 200.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
export default function Finalthough() {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/images/Frame 155.png")',
        }}
        className="bg-cover bg-center w-full md:pt-[80px] md:pb-[32px] sm:pb-0 pb-[48px] pt-[48px]"
      >
        <div className="max-w-[1240px] mx-auto xl:px-0 px-[16px] md:flex justify-between ">
          <div data-aos="slide-up" data-aos-duration="8000" className="sm:hidden block  sm:pt-0 pb-[10px]">
            <Image src={work1} alt="" />
          </div>
          <div data-aos="slide-right" data-aos-duration="8000" className="sm:max-w-[542px] ">
            <div className="">
              <span className="text-[#FFFF00] text-[23px] font-[400] ">
                Let’s Build the Future, Together.
              </span>
              <h1 className="text-[#F6F6F6] sm:text-[60px] text-[40px] font-[400]">
                Final Thoughts
              </h1>
            </div>

            <div className="pt-4">
              <p className="text-[#cccccc] text-[16px] font-[400] ">
                Aasvaa Innovation Labs is not just an AI company—it’s the future
                of India’s AI revolution. With a vision to lead AI, GenAI, and
                Computer Vision, we are building the next era of intelligent
                systems for governance, defence, law, and society.
              </p>
              <button
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="cursor-pointer group sm:mt-[48px] mt-[32px]  text-[#FFFF00] bg-gray-500 rounded-[10px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow  py-[15px] px-[22px] text-[16px] font-[600]  relative"
              >
                <span className="inline-block transition-all duration-300 group-hover:pr-5">
                  Join the Movement
                </span>
                <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <FaArrowRightLong className="text-2xl" />
                </span>
              </button>
            </div>
          </div>
          <div data-aos="slide-left" data-aos-duration="8000" className="sm:block hidden md:pt-0 pt-[50px]">
            <Image src={work1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
