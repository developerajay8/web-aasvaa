import React from 'react'

export default function Ourjourney() {
  return (
    <div id='journey' style={{
            backgroundImage: 'url("/images/Desktop - 8 (4).png")',  
          }}  className=' bg-center w-full bg-cover'>
        <div className="max-w-[1240px] mx-auto xl:px-0 md:py-[80px] py-[48px] px-4">
            <div className='sm:pb-[70px]'>
                <p data-aos="fade-left" data-aos-duration="8000"   className='text-[#ffff00] text-[16px] pb-2 text-center' > From Startup to AI Powerhouse</p>
                <h1 className='text-[#F6F6F6] md:text-[48px] text-[40px] text-center '>Our Journey</h1>
            </div>

            <img src="/images/Group 225.png" alt="" data-aos="slide-up" data-aos-duration="8000" className='sm:block hidden' />
            <img src="/images/Group 226.png" alt="" data-aos="slide-up" data-aos-duration="8000" className='sm:hidden block' />
        </div>
    </div>
  )
}
