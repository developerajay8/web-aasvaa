import React from "react";

export default function Joinus() {
  return (
    <div className="w-full bg-cover bg-center"  style={{
            backgroundImage: 'url("/images/Frame 143.png")',
          }} >
      <div className="max-w-[1240px] mx-auto py-[48px] md:py-[80px] xl:px-0 px-[16px]">
        <div className="">
          <h5 className="text-[#FFFF00] pb-2 text-[23px]">
            Be Part of India’s AI Future
          </h5>
          <h1 className="text-[40px] md:text-[60px] text-[#fff]">Join Us</h1>
        </div>
        <div className="pt-[48px] ">
          <div className="p-6 lg:flex cursor-pointer items-center justify-between bg-gradient-to-r from-[#43430D] to-[#464646] origin-left border-[#9F9F00] border-[1px] rounded-[10px]">
            <h5 className="lg:text-[23px] text-[25px] text-[#F6F6F6]">
              Investors & Partners
            </h5>
            <p className="lg:text-[16px] text-[18px] text-[#F6F6F6] lg:max-w-[420px] lg:pt-0 pt-[16px] lg:pb-0 pb-[32px]">
              We’re open for funding, partnerships, and collaborators. Join us
              as we scale innovation rooted in India.
            </p>
            <div>
              <button onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }} className="rounded-[10px] cursor-pointer text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                Contact Us
              </button>
            </div>
          </div>

          <div className=" my-[20px] cursor-pointer p-6 lg:flex  items-center justify-between bg-gradient-to-r from-[#43430D] to-[#464646] origin-left border-[#9F9F00] border-[1px] rounded-[10px]">
            <h5 className="lg:text-[23px] text-[25px] text-[#F6F6F6]">
             Enterprises & Governments
            </h5>
            <p className="lg:text-[16px] text-[18px] text-[#F6F6F6] lg:max-w-[420px] lg:pt-0 pt-[16px] lg:pb-0 pb-[32px]">
             AI-powered solutions tailored for your needs.
            </p>
            <div>
              <button className="rounded-[10px] cursor-pointer text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
               Explore AI Solutions
              </button>
            </div>
          </div>

          <div className="p-6 lg:flex  items-center justify-between bg-gradient-to-r from-[#43430D] to-[#464646] origin-left border-[#9F9F00] border-[1px] rounded-[10px]">
            <h5 className="lg:text-[23px] text-[25px] text-[#F6F6F6]">
              AI Researchers & Developers
            </h5>
            <p className="lg:text-[16px] text-[18px] text-[#F6F6F6] lg:max-w-[420px] lg:pt-0 pt-[16px] lg:pb-0 pb-[32px]">
            Join our cutting-edge AI R&D team.
            </p>
            <div>
              <button  onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }} className="cursor-pointer rounded-[10px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
              Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
