
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
    <div style={{
      backgroundImage: 'url("/images/Desktop - 23.png")',
    }} id="products" className=" bg-cover bg-center w-full text-white py-[48px] md:py-[80px] font-sans">
      <h1 className="text-[40px] md:text-5xl xl:px-0 px-4 mb-8 text-center">
        Our Product Suite
      </h1>
      <div className="flex flex-col xl:px-0 px-4 md:flex-row gap-6 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-full md:w-[200px] space-y-5">
            
            <h5
              onClick={() => {
                setActive("aasvaa");
                setImgIndex(0);
              }}
              className={`block w-full mb-3 text-left px-2 cursor-pointer md:text-[21px] text-[16px] py-1 rounded ${active === "aasvaa"
                ? "bg-gradient-to-r from-[#43430D] to-[#464646] origin-left text-[#FFFF00] "
                : ""
                }`}
            >
              AasvaaEra
            </h5>
            <h5
              onClick={() => {
                setActive("manthaan");
                setImgIndex(0);
              }}
              className={`block w-full text-left px-2 cursor-pointer md:text-[21px] text-[16px] py-1 rounded ${active === "manthaan"
                ? "bg-gradient-to-r from-[#43430D] to-[#464646] origin-left text-[#FFFF00] "
                : ""
                }`}
            >
              Manthaan
            </h5>

            <h5
              onClick={() => {
                setActive("Annant");
                setImgIndex(0);
              }}
              className={`block w-full text-left cursor-pointer px-2 md:text-[21px] text-[16px] py-1 rounded ${active === "Annant"
                ? "bg-gradient-to-r from-[#43430D] to-[#464646] origin-left text-[#FFFF00] "
                : ""
                }`}
            >
              Annant
            </h5>

            <h5
              onClick={() => {
                setActive("gojuris");
                setImgIndex(0);
              }}
              className={`block w-full mb-3 cursor-pointer text-left px-2 py-1 md:text-[21px] text-[#E6E6E6] text-[16px] rounded ${active === "gojuris"
                ? "bg-gradient-to-r from-[#43430D] to-[#464646] origin-left text-[#FFFF00] "
                : ""
                }`}
            >
              Profession AI- 
Legal (GoJuris)
            </h5>

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
                    <div className="flex gap-5 flex-col">
                      <img src="/images/image (42).svg" alt="Aasvaa Main" />
                      <img src="/images/Frame 3385011.svg" alt="Aasvaa Main" />
                    </div>
                    <div className="flex gap-5 flex-col">
                      <img src="/images/Frame 3385011 (1).svg" alt="Aasvaa Main" />
                      <img src="/images/Frame 3385012.svg" alt="Aasvaa Main" />
                    </div>
                  </div>
                </div>

                <div className="sm:hidden block">
                  <div className="flex w-fit mx-auto flex-col gap-5">
                    <div className="">
                      <img src="/images/image (42).svg" alt="Gojuris 1" />
                    </div>
                    <div className="">
                      <img src="/images/Frame 3385011.svg" alt="Gojuris 3" />
                    </div>
                    <div className="">
                      <img src="/images/Frame 3385011 (1).svg" alt="Gojuris 2" />
                    </div>

                    <div className="">
                      <img src="/images/Frame 3385012.svg" alt="Gojuris 4" />
                    </div>
                  </div>
                </div>
              </>
            )}
            {active === "manthaan" && (
              <>
                <div className="sm:block hidden">
                  <div className="flex gap-5">
                    <div className="flex gap-5 flex-col">
                      <img src="/images/image (43).svg" alt="Aasvaa Main" />
                      <img src="/images/Frame 3385011 (2).svg" alt="Aasvaa Main" />
                    </div>
                    <div className="flex gap-5 flex-col">
                      <img src="/images/Frame 3385011 (3).svg" alt="Aasvaa Main" />
                      <img src="/images/Frame 3385012 (1).svg" alt="Aasvaa Main" />
                    </div>
                  </div>
                </div>

                <div className="sm:hidden block">
                  <div className="flex w-fit mx-auto flex-col gap-5">
                    <div className="">
                      <img src="/images/Frame 3385011 (3).png" alt="Gojuris 1" />
                    </div>
                    <div className="">
                      <img src="/images/Frame 3385011 (4).png" alt="Gojuris 3" />
                    </div>
                    <div className="">
                      <img src="/images/Frame 3385011 (4).svg" alt="Gojuris 2" />
                    </div>

                    <div className="">
                      <img src="/images/Frame 3385012 (2).svg" alt="Gojuris 4" />
                    </div>
                  </div>
                </div>
              </>
            )}
            {active === "Annant" && (
              <>
                <div className="sm:block hidden">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                      <div><img src="/images/image (44).svg" alt="" /></div>
                      <div><img src="/images/Frame 3385122.svg" alt="" /></div>
                    </div>
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

                    <div><img src="/image (45).svg" alt="" /></div>
                    <div><img src="/Frame 3385122 (1).svg" alt="" /></div>

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
