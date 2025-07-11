import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer';
import ContactForm from '../component/contact-from';
import TeamSection from '../component/teamsection';

export default function Page() {
  return (
    <div>
      <Navbar />


<div style={{
            backgroundImage: 'url("/images/Frame 3385286 (1).png")',
          }} className="bg-cover bg-center w-full">
<div className="max-w-[1240px] mx-auto px-4 xl:px-0 md:py-[80px] py-[48px] ">
        <TeamSection/>
       <div className="mt-[20px] flex space-x-4 overflow-x-auto scrollbar-none">
  <img src="/images/Frame 164.png" alt="" className="shrink-0" />
  <img src="/images/Frame 169.png" alt="" className="shrink-0" />
  <img src="/images/Frame 170.png" alt="" className="shrink-0" />
  <img src="/images/Frame 171 (1).png" alt="" className="shrink-0" />
            <img src="/images/Frame 169 (1).png" alt="" className="shrink-0" />
  <img src="/images/Frame 172.png" alt="" className="shrink-0" />
  <img src="/images/Frame 174.png" alt="" className="shrink-0" />
  <img src="/images/Frame 173.png" alt="" className="shrink-0" />
</div>



        </div>
        </div>
      <ContactForm/>
      <Footer/>

      
    </div>
  )
}
