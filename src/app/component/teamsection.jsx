"use client";

import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Run on mount and on resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Card = ({ isFlipped, onClick, imgSrc, name, role, backItems }) => (
    <div
      className={`w-full sm:w-1/2 h-[400px] relative flex items-center justify-center [perspective:1000px] ${
        isMobile ? "" : "group"
      }`}
      onClick={() => {
        if (isMobile) onClick();
      }}
    >
      <div
        className={`relative w-full h-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] 
        ${
          isMobile
            ? isFlipped
              ? "[transform:rotateY(180deg)]"
              : ""
            : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden]">
          <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[23px] text-[#FFFF00] font-bold">{name}</h3>
                <p className="text-[#F6F6F6] text-[16px]">{role}</p>
              </div>
              <div className="bg-[#ffff00] rounded-full flex items-center justify-center w-8 h-8 mt-2">
                <FaArrowRightLong className="text-black text-[20px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rounded-xl bg-[#2c2c2c] text-white flex flex-col justify-center p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h1 className="text-left text-[28px] sm:text-[32px] font-bold text-[#ffffff] mb-4">Profile</h1>
          <ul className="list-disc pl-5 space-y-2 text-[14px] leading-relaxed">
            {backItems.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full  py-10 sm:py-16 ">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6">
        <Card
          isFlipped={isFlipped1}
          onClick={() => setIsFlipped1(!isFlipped1)}
          imgSrc="/images/WhatsApp Image 2025-04-07 at 10.41.03_4a5a6ef9.png"
          name="Saksham Sharma"
          role="Founder & CEO"
          backItems={[
            "MBA in Marketing, FMS, Rajasthan University (Post Graduation completed in 2017)",
            "Former Chief Business Officer at Freshokartz (Oct 2019 – Jan 2024)",
            "Founding Team Member at Ideal International Industry (Jan 2018 – Sept 2019)",
            "Visionary entrepreneur with a proven track record in tech-led ventures and government collaborations",
            "Driving Aasvaa Innovation Labs to build India’s own sovereign GenAI ecosystem and cutting-edge AI solutions for diverse sectors",
          ]}
        />
        <Card
          isFlipped={isFlipped2}
          onClick={() => setIsFlipped2(!isFlipped2)}
          imgSrc="/images/CEO Card.png"
          name="Sanjay Madan"
          role="Co-Founder & CTO"
          backItems={[
            "MBA from Shivaji University (1995 Batch), Maharashtra",
            "Former Practice Head - Data Analytics, AI/ML at Uneecops Business Solutions Pvt Ltd (2021-2024)",
            "Former Delivery and Business Head - Data Analytics, AI/ML, Big Data, Mobility and Automation at Team Computers Pvt Ltd (2005 – 2021)",
          ]}
        />
      </div>
    </section>
  );
}
