"use client";
import React, { useState } from "react";

const cards = [
  {
    title: "Innovate",
    description: "We create proprietary AI & ML models, not just adopt them.",
    defaultImage: "/images/innovate_svgrepo.com.png",
    hoverImage: "/images/innovate_svgrepo.com.png",
    // hoverImage: "/images/innovate_svgrepo.com (2).png",
  },
  {
    title: "Accelerate",
    description: "Speed and agility in development, scaling, and deployment.",
    defaultImage: "/images/Group (3).png",
    hoverImage: "/images/Group (3).png",
    // hoverImage: "/images/Group (6).png",
  },
  {
    title: "Lead",
    description: "Setting benchmarks for AI excellence in India and beyond.",
    defaultImage: "/images/build--leadership--and--culture_1_ (1).png",
    hoverImage: "/images/build--leadership--and--culture_1_ (1).png",
    // hoverImage: "/images/build-leadership-and-culture_svgrepo.com.png",
  },
  {
    title: "Transform",
    description: "AI-driven impact across industries and society at large.",
    defaultImage: "/images/transform-bezier_svgrepo.com (1).png",
    hoverImage: "/images/transform-bezier_svgrepo.com (1).png",
    // hoverImage: "/images/transform-bezier_svgrepo.com (2).png",
  },
];

export default function AICards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          // data-aos="zoom-in" data-aos-duration="4000"
          className={`transition-all duration-500 p-6 border-[1px] border-[#8E8E00] rounded-[10px] bg-gradient-to-r from-[#272700] to-[#1b1b1b] origin-left text-white
            ${hovered === index ? "shadow-[0_0_25px_4px_rgba(255,255,0,0.3)]" : ""}
          `}
        >
          <img
            src={hovered === index ? card.hoverImage : card.defaultImage}
            alt={card.title}
            className=" mb-4 transition-all duration-300"
          />
          <h3 className="text-[33px] text-[#E6E6E6] font-bold py-4">{card.title}</h3>
          <p className="text-[16px] text-[#E6E6E6] ">{card.description}</p>
        </div>
      ))}
     

    </div>
  );
}
