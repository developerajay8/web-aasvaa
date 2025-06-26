import React from 'react'

export default function Wesolve() {
  return (
    <div style={{
            backgroundImage: 'url("/images/Frame 122.png")',
          }} className='bg-cover bg-center w-full  '>
        <div className="max-w-[1240px] mx-auto xl:px-0 md:py-[80px] py-[48px] px-4">
            <div className='sm:pb-[70px] pb-[40px]'>
                <p className='text-[#ffff00] text-[16px] pb-2 text-center'>From Startup to AI Powerhouse</p>
                <h1 className='text-[#F6F6F6] md:text-[48px] text-[40px] text-center '>Problems We Solve</h1>
            </div>

            <div className="sm:block hidden">
            <div className=" flex flex-col gap-5 ">
              <div className="flex gap-5">
                <div className="">
                  <img src="/images/image (36).png" alt="" />
                </div>
                <div className="">
                  <img src="/images/Frame 118.png" alt="" />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="">
                  <img src="/images/Frame 120.png" alt="" />
                </div>
                <div className="">
                  <img src="/images/Frame 121.png" alt="" />
                </div>
              </div>
            </div>
            </div>

            <div className="sm:hidden block">
            <div className=" flex w-fit mx-auto flex-col gap-5 ">
                <div className="">
                  <img src="/images/image (37).png" alt="" />
                </div>
                <div className="">
                  <img src="/images/Frame 118 (1).png" alt="" />
                </div>
                <div className="">
                  <img src="/images/Frame 120 (1).png" alt="" />
                </div>
                <div className="">
                  <img src="/images/Frame 121 (1).png" alt="" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
