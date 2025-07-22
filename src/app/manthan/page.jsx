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
                        <h1 className='  pb-4 md:text-[60px] text-[48px]  text-center text-[#ffff00] '>
                            Your Data, Finally Searchable. Instantly.
                        </h1>
                        <p className='pb-[48px] text-[16px] text-[#CCCCCC] max-w-[596px] mx-auto text-center'>Manthaan is an AI-native enterprise search engine that turns scattered, unstructured files into context-rich answers — fast, secure, and multilingual.</p>
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
                backgroundImage: 'url("/Frame 3385313.svg")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1280px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="max-w-[686px] mx-auto pb-[48px] ">
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white] pb-6 text-center">Built for Enterprises, Startups, and Public Institutions</div>
                        <p className='text-[#FFFFFF] text-[16px] max-w-[656px] text-center mx-auto'>Whether you're automating citizen services or building an internal knowledge bot — Annant adapts to your use case with speed and control.</p>


                    </div>

                    <div className="overflow-x-auto">
                        <div className="flex gap-5 w-max px-1">
                            <img src="/images/Frame 3385312.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385331.png" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385332.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385333.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385334.png" alt="" className="shrink-0" />
                        </div>
                    </div>

                </div>
            </div>


            <div style={{
                backgroundImage: 'url("/Frame 3385313.svg")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1280px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="max-w-[686px] mx-auto pb-[48px] ">
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white] pb-4 text-center"><span className='text-[#FFFF00]'>AasvaaSearch</span> <br />
                            File Management, Reimagined</div>
                        <p className='text-[#FFFFFF] text-[16px] max-w-[632px] text-center mx-auto'>Built on Manthaan, AasvaaSearch replaces outdated tools like FileNet with an intelligent, AI-native experience.</p>


                    </div>

                   <div className="max-w-[1127px] mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
    
    {/* Left Section */}
    <div className="md:col-span-3 md:border-r-[1px] md:pr-5 border-[#fff]">
      <div className="flex flex-col gap-5 h-full">
        
        {/* First Row */}
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <div><img src="/Frame 3385375.png" alt="" className="mx-auto sm:mx-0" /></div>
          <div><img src="/Frame 3385377.png" alt="" className="mx-auto sm:mx-0" /></div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <div><img src="/Frame 3385376.png" alt="" className="mx-auto sm:mx-0" /></div>
          <div><img src="/Frame 3385378.png" alt="" className="mx-auto sm:mx-0" /></div>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="md:col-span-2">
      <div className="flex flex-col-reverse gap-5 items-center md:items-start">
        <div><img src="/Frame 3385381.png" alt="" className="mx-auto md:mx-0" /></div>
        <div><img src="/Frame 3385381 (1).png" alt="" className="mx-auto md:mx-0" /></div>
        <div><img src="/Frame 3385380.png" alt="" className="mx-auto md:mx-0" /></div>
        <div><img src="/Frame 3385379.png" alt="" className="mx-auto md:mx-0" /></div>
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
                    <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white] pb-[48px]">What Manthaan Does Better</div>

                    <div className="">
                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 1 (1).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Natural Language Search</h5>
                                    <div className="text-[16px] text-[#ffffff]">Ask questions like “Find RTI circular on forest <br /> clearance, 2023</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 1 (1).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Natural Language Search</h5>
                                    <div className="text-[16px] text-[#ffffff]">Ask questions like “Find RTI circular on forest clearance, 2023</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (3).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Auto-Tagging & Clustering</h5>
                                    <div className="text-[16px] text-[#ffffff]">Automatically labels, groups, and <br /> organizes content</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (3).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Auto-Tagging & Clustering</h5>
                                    <div className="text-[16px] text-[#ffffff]">Automatically labels, groups, and organizes content</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (4).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">OCR & Vision AI</h5>
                                    <div className="text-[16px] text-[#ffffff]">
                                        Reads and interprets scanned files, <br /> images, and PDFs</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (4).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">OCR & Vision AI</h5>
                                    <div className="text-[16px] text-[#ffffff]">
                                        Reads and interprets scanned files, images, and PDFs</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (5).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Entity & Relation Extraction</h5>
                                    <div className="text-[16px] text-[#ffffff]">Identifies people, keywords, policies, and <br /> connects them</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (5).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Entity & Relation Extraction</h5>
                                    <div className="text-[16px] text-[#ffffff]">Identifies people, keywords, policies, and connects them</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (6).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Inference & Suggestion Engine</h5>
                                    <div className="text-[16px] text-[#ffffff]">Recommends related documents and <br /> next actions</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (6).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">Inference & Suggestion Engine</h5>
                                    <div className="text-[16px] text-[#ffffff]">Recommends related documents and next actions</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 border-[#9A9A9A] border-b-[1px]">
                            <div className="md:block hidden">
                                <div className="flex gap-5 items-center justify-between">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (7).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">API-First Architecture</h5>
                                    <div className="text-[16px] text-[#ffffff]">Easily embed smart search into your own <br /> tools or dashboards</div>
                                </div>
                            </div>

                            <div className="md:hidden block">
                                <div className="flex flex-col gap-5 ">
                                    <div className="">
                                        <img src="/images/ecommerce_16792451 2 (7).svg" alt="" />
                                    </div>
                                    <h5 className="font-bold text-[23px] text-[#ffffff]">API-First Architecture</h5>
                                    <div className="text-[16px] text-[#ffffff]">Easily embed smart search into your own tools or dashboards</div>
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
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white]  text-center">Under the Hood of Smart Search</div>



                    </div>

                    <div className="overflow-x-auto">
                        <div className="flex gap-5 w-max px-1">
                            <img src="/images/Frame 3385312 (1).svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385354.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385358.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385354.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385359.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385354.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385360.png" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385354.svg" alt="" className="shrink-0" />
                            <img src="/images/Frame 3385361.png" alt="" className="shrink-0" />

                        </div>
                    </div>

                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/Frame 3385313.svg")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="max-w-[1140px] mx-auto pb-[48px] ">
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white]  text-center">Built for Scale — Flexible for All</div>
                    </div>

                    <div className="w-full">
                        {/* Horizontal scroll on small screens, grid on larger */}
                        <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible px-2">
                            <img src="/image (7).svg" alt="" className="w-[180px] md:w-full shrink-0" />
                            <img src="/image (8).svg" alt="" className="w-[180px] md:w-full shrink-0" />
                            <img src="/image (9).svg" alt="" className="w-[180px] md:w-full shrink-0" />
                            <img src="/image (11).svg" alt="" className="w-[180px] md:w-full shrink-0" />
                        </div>
                    </div>

                </div>
            </div>


          <div style={{
    backgroundImage: 'url("/Frame 3385317.png")',
}} className="bg-cover bg-center w-full">
    <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">

        <div className="w-full">
            <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className='w-full md:w-[50%]'>
                    <img src="/images/4524 1.svg" alt="" class="w-full h-auto" />
                </div>
                <div className="w-full md:w-[50%] py-[24px] md:py-[94px] text-[32px] md:text-[48px] font-medium text-[#ffffff] text-center md:text-left">
                    Where Manthaan Makes the Difference
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-8">
                <div className=""><img src="/images/image (12).svg" alt="" class="w-full h-auto" /></div>
                <div className=""><img src="/images/image (13).svg" alt="" class="w-full h-auto" /></div>
                <div className=""><img src="/images/image (14).svg" alt="" class="w-full h-auto" /></div>
                <div className=""><img src="/images/image (15).svg" alt="" class="w-full h-auto" /></div>
                <div className=""><img src="/images/image (16).svg" alt="" class="w-full h-auto" /></div>
            </div>
        </div>

    </div>
</div>


            <div style={{
                backgroundImage: 'url("/Frame 3385313.svg")',
            }} className="bg-cover bg-center w-full">
                <div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="max-w-[854px] mx-auto pb-[48px] ">
                        <div className="lg:text-[48px] md:text-[40px] text-[32px] text-[white] text-center">What Makes Manthaan Better Than Traditional Search?</div>

                    </div>

                    <div className="sm:block hidden">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <div className=""><img src="/images/image (17).svg" alt="" /></div>
                                <div className=""><img src="/images/image (18).svg" alt="" /></div>
                            </div>
                            <div className="flex gap-5">
                                <div className=""><img src="/images/image (19).svg" alt="" /></div>
                                <div className=""><img src="/images/image (20).svg" alt="" /></div>
                                <div className=""><img src="/images/image (21).svg" alt="" /></div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden block w-fit mx-auto">
                        <div className="flex flex-col gap-5 justify-center">
                            <div className=""><img src="/images/image (48).png" alt="" /></div>
                            <div className=""><img src="/images/image (27).svg" alt="" /></div>
                            <div className=""><img src="/images/image (28).svg" alt="" /></div>
                            <div className=""><img src="/images/image (30).svg" alt="" /></div>
                            <div className=""><img src="/images/image (31).svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="bg-[#1B1B1B] w-full">
                <div className="max-w-[974px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
                    <div className="">
                        <div className="">
                            <img src="/images/Frame 3385394.svg" alt="" className="" />
                        </div>
                    </div>

                </div>
            </div>



            <ContactForm />
            <Footer />
        </div>
    )
}




