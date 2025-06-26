import React from 'react'

export default function Ourjourney() {
  return (
    <div style={{
            backgroundImage: 'url("/images/Desktop - 8 (2).png")',
          }} className='bg-cover bg-center  w-full '>
        <div className="max-w-[1240px] mx-auto xl:px-0 md:py-[80px] py-[48px] px-4">
            <div className='sm:pb-[70px]'>
                <p className='text-[#ffff00] text-[16px] pb-2 text-center'>From Startup to AI Powerhouse</p>
                <h1 className='text-[#F6F6F6] text-[48px] text-center '>Our Journey</h1>
            </div>

            <img src="/images/Group 207.png" alt="" className='sm:block hidden' />
            <img src="/images/Group 212.png" alt="" className='sm:hidden block' />
        </div>
    </div>
  )
}
