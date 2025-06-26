// "use client";
// import React from 'react';
// import { ChevronLeft, ChevronRight } from "lucide-react";
// const ProductSuiteCarousel = () => {
//   return (
//     <div className="md:py-[80px] py-[48px] bg-black ">
//       <div className="xl:px-0 px-[16px] max-w-[1240px] mx-auto pb-[48px] ">
//         <h1 className='text-[#F6F6F6] text-[48px] font-medium text-center'>
//           Our Product Suite
//         </h1>
//       </div>
//       <div className="xl:px-0 px-[16px]  max-w-[1240px] relative flex gap-[41px] mx-auto  ">
//         <div className="w-[15%] ">

//           <div className="absolute left-[-6%] top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-7xl tracking-widest font-bold text-gray-400">
//             GEN AI
//           </div>
//           <div className="flex absolute bottom-0 items-center gap-6 justify-center py-8">
//             {/* Left Arrow */}
//             <div className="w-[60px] h-[60px] rounded-full border-[2px] cursor-pointer border-[#FFFF00] flex items-center justify-center hover:scale-110 transition">
//               <ChevronLeft size={32} className="text-[#FFFF00]" />
//             </div>

//             {/* Right Arrow */}
//             <div className="w-[60px] h-[60px] rounded-full border-[2px] cursor-pointer border-[#FFFF00] flex items-center justify-center hover:scale-110 transition">
//               <ChevronRight size={32} className="text-[#FFFF00]" />
//             </div>
//           </div>

//         </div>
//         <div className="w-[85%] md:flex flex-wrap gap-4">
//           <div className="w-[48%] relative">
//             <img src="/images/image (34).png" alt="" className='relative' />
//             <div className='absolute top-40 left-6'>
//               <button className="rounded-[10px] text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
//                 Read More
//               </button>
//             </div>
//           </div>
//           <div className="w-[48%]">
//             <img src="/images/image (34).png" alt="" />
//           </div>
//           <div className="w-[48%]">
//             <img src="/images/image (34).png" alt="" />
//           </div>
//           <div className="w-[48%]">
//             <img src="/images/image (34).png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSuiteCarousel;


// Custom-coded Product Suite Carousel without .map()
import { useState } from "react";

export default function ProductSuiteCarousel() {
  const [active, setActive] = useState("gojuris");
  const [imgIndex, setImgIndex] = useState(0);

  const handlePrev = () => {
    const max =
      active === "gojuris"
        ? 4
        : active === "aasvaa"
          ? 2
          : 5;
    setImgIndex((prev) => (prev - 1 + max) % max);
  };

  const handleNext = () => {
    const max =
      active === "gojuris"
        ? 4
        : active === "aasvaa"
          ? 2
          : 5;
    setImgIndex((prev) => (prev + 1) % max);
  };

  return (
    <div   style={{
            backgroundImage: 'url("/images/Desktop - 23.png")',
          }}  className=" bg-cover bg-center w-full text-white py-[48px] md:py-[80px] font-sans">
      <h1 className="text-[40px] md:text-5xl xl:px-0 px-4 mb-8 text-center">
        Our Product Suite
      </h1>
      <div className="flex flex-col xl:px-0 px-4 md:flex-row gap-6 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-full md:w-[200px] space-y-4">
          <div>
            <h4 className="text-[28px] font-semibold mb-2 text-[#E6E6E6] ">Gen AI</h4>
            <button
              onClick={() => {
                setActive("gojuris");
                setImgIndex(0);
              }}
              className={`block w-full text-left px-2 py-1 md:text-[23px] text-[16px] rounded ${active === "gojuris"
                ? "bg-gradient-to-r from-[#43430D] to-[#464646] origin-left text-[#FFFF00] font-bold"
                : ""
                }`}
            >
              Gojuris
            </button>
            <button
              onClick={() => {
                setActive("aasvaa");
                setImgIndex(0);
              }}
              className={`block w-full text-left px-2 md:text-[23px] text-[16px] py-1 rounded ${active === "aasvaa"
                ? "bg-gradient-to-r from-[#43430D] to-[#464646] origin-left text-[#FFFF00] font-bold"
                : ""
                }`}
            >
              Aasvaa Aera
            </button>
          </div>
          <div>
            <h3 className="text-[28px] font-semibold mb-2 text-[#E6E6E6]">Vision AI</h3>
            <button
              onClick={() => {
                setActive("lumex");
                setImgIndex(0);
              }}
              className={`block w-full text-left px-2 md:text-[23px] text-[16px] py-1 rounded ${active === "lumex"
                ? "bg-gradient-to-r from-[#43430D] to-[#464646] origin-left text-[#FFFF00] font-bold"
                : ""
                }`}
            >
              Lumex
            </button>
          </div>

          {/* Arrows */}
          {/* <div className="flex gap-2 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-yellow-400 rounded-full text-black flex items-center justify-center text-xl"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-yellow-400 rounded-full text-black flex items-center justify-center text-xl"
            >
              ›
            </button>
          </div> */}
        </div>

        {/* Right Content Images */}
        <div className="flex-1  md:px-6 rounded-lg shadow-lg">
          {/* Desktop View */}
          <div className="flex gap-4 flex-wrap">
            {active === "gojuris" && (
              <>
              <div className="sm:block hidden">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-5 ">
                    <div className="">
                      <img src="/images/image (38).png" alt="Gojuris 1" />
                    </div>
                    <div className="">
                      <img src="/images/Frame 3385124 (2).png" alt="Gojuris 3" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 ">
                    <div className="">
                      <img src="/images/Frame 3385011 (2).png" alt="Gojuris 2" />
                    </div>

                    <div className="">
                      <img src="/images/Frame 3385010 (1).png" alt="Gojuris 4" />
                    </div>
                  </div>
                </div>
              </div>


                <div className="sm:hidden block">
                 <div className="flex w-fit mx-auto flex-col gap-5">
                    <div className="">
                      <img src="/images/image (38).png" alt="Gojuris 1" />
                    </div>
                    <div className="">
                      <img src="/images/Frame 3385124 (2).png" alt="Gojuris 3" />
                    </div>
                    <div className="">
                      <img src="/images/Frame 3385011 (2).png" alt="Gojuris 2" />
                    </div>

                    <div className="">
                      <img src="/images/Frame 3385010 (1).png" alt="Gojuris 4" />
                    </div>
                </div>
                </div>
              </>
            )}
            {active === "aasvaa" && (
              <>
              <div className="sm:block hidden">
                <div className="flex gap-5">
                  <div className="">
                    <img src="/images/Frame 3385214.png" alt="Aasvaa Main" />
                  </div>
                  <div className="">
                    <img src="/images/Frame 3385235.png" alt="Aasvaa Side" />
                  </div>
                </div>
                </div>

              <div className="sm:hidden block">
                <div className="flex w-fit mx-auto flex-col gap-5 ">
                  <div className="">
                    <img src="/images/Frame 3385214.png" alt="Aasvaa Main" />
                  </div>
                  <div className="">
                    <img src="/images/Frame 3385235.png" alt="Aasvaa Side" />
                  </div>
                </div>
                </div>
              </>
            )}
            {active === "lumex" && (
              <>
                <div className="sm:block hidden">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                      <div className="flex flex-col gap-5 ">
                        <div className="">
                          <img src="/images/image (39).png" alt="Lumex 1" />
                        </div>
                        <div className="">
                          <img src="/images/image (40).png" alt="Lumex 2" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="">
                          <img src="/images/Frame 3385192.png" alt="Lumex 3" />
                        </div>
                        <div className="">
                          <img src="/images/Frame 3385141.png" alt="Lumex 4" />
                        </div>
                        <div className="">
                          <img src="/images/image (41).png" alt="Lumex 5" />
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <img src="/images/image (42).png" alt="" />
                    </div>

                  </div>
                </div>
                <div className="sm:hidden block">
                  <div className="flex flex-col gap-5">

                    <div className="">
                      <img src="/images/image (39).png" alt="Lumex 1" />
                    </div>
                    <div className="">
                      <img src="/images/image (40).png" alt="Lumex 2" />
                    </div>

                    <div className="">
                      <img src="/images/Frame 3385192.png" alt="Lumex 3" />
                    </div>
                    <div className="">
                      <img src="/images/Frame 3385141.png" alt="Lumex 4" />
                    </div>
                    <div className="">
                      <img src="/images/image (41).png" alt="Lumex 5" />
                    </div>


                    <div className="">
                      <img src="/images/image (42).png" alt="" />
                    </div>

                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile View */}
          {/* <div className="">
            {active === "gojuris" && (
              <img
                src={`/images/gojuris-mobile-${imgIndex + 1}.png`}
                alt={`Gojuris Mobile ${imgIndex + 1}`}
                className="w-full rounded"
              />
            )}
            {active === "aasvaa" && (
              <img
                src={`/images/aasvaa-mobile-${imgIndex + 1}.png`}
                alt={`Aasvaa Mobile ${imgIndex + 1}`}
                className="w-full rounded"
              />
            )}
            {active === "lumex" && (
              <img
                src={`/images/lumex-mobile-${imgIndex + 1}.png`}
                alt={`Lumex Mobile ${imgIndex + 1}`}
                className="w-full rounded"
              />
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
