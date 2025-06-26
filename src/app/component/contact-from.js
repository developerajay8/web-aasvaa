"use client";

import { FaArrowRightLong } from "react-icons/fa6";

export default function ContactForm() {
  return (
    <div
      className="bg-cover bg-center bg-gradient-to-r from-[#272700] to-[#1B1B1B] origin-left w-full"
      // style={{
      //   backgroundImage: 'url("/images/Frame 3384747.png")',
      // }}
    >
      <section className=" py-[48px] md:py-[80px] max-w-[1240px] xl:px-0 px-[16px] mx-auto">
        <h1 className="text-[#FFFFFF] sm:text-[60px] text-[40px] font-[400]">
          Contact us
        </h1>
        <p className="text-[#F6F6F6] text-[16px] sm:max-w-[400px] font-[400] ">
          <a href="#" className="underline">
            Book a call
          </a>{" "}
          or fill out the form below and we’ll get back{" "}
          <br className="ms:block hidden" /> to you once we’ve processed your
          request.
        </p>

        <form className="space-y-6 mt-[48px] ">
          {/* 2-column layout */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[14px] text-[#9A9A9A] font-[400] mb-1">
                Name*
              </label>
              <input
                type="text"
                name="name"
                required
                className="sm:h-6 h-0 w-full text-white border-b border-gray-400 focus:outline-none  py-1"
              />
            </div>

            <div>
              <label className="block text-[14px] text-[#9A9A9A] font-[400] mb-1">
                Company*
              </label>
              <input
                type="text"
                name="company"
                required
                className="sm:h-6 text-white h-0 w-full border-b border-gray-400 focus:outline-none  py-1"
              />
            </div>

            <div>
              <label className="block text-[14px] text-[#9A9A9A] font-[400] mb-1">
                Email*
              </label>
              <input
                type="email"
                name="email"
                required
                className="sm:h-6 text-white h-0 w-full border-b border-gray-400 focus:outline-none  py-1"
              />
            </div>

            <div>
              <label className="block text-[14px] text-[#9A9A9A] font-[400] mb-1">
                Phone*
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="sm:h-6 text-white h-0 w-full border-b border-gray-400 focus:outline-none  py-1"
              />
            </div>

            <div>
              <label className="block text-[14px] text-[#9A9A9A] font-[400] mb-1">
                Reason*
              </label>
              <select
                name="reason"
                required
                className="w-full border-b border-gray-400 text-[#9A9A9A] focus:outline-none  py-1 bg-transparent"
              >
                <option value="" disabled>
                  Select a reason
                </option>
                <option value="consultation">Consultation</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
                <option value="career">Career Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[14px] text-[#9A9A9A] font-[400]">
              Describe your needs in details
            </label>
            <textarea
              name="message"
              className="sm:h-10 h-0 text-white  w-full border-b border-gray-400 focus:outline-none  py-1 resize-none"
            ></textarea>
            <p className="text-[#9A9A9A] text-[10px] font-[400]">
              Please include project details, duration, tech stack, IT
              professionals needed, and other relevant info
            </p>
          </div>

          <div className="flex justify-between gap-4">
            {/* Privacy Agreement */}
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <input type="checkbox" name="agree" required className="h-6  " />
              <p className="max-w-[409px] text-[#9A9A9A] text-[10px] font-[400]">
                Please be informed that when you click the Send button Innovlex
                will process your personal data in accordance with our{" "}
                <a href="#" className="underline ">
                  Privacy Policy
                </a>{" "}
                for the purpose of providing you with appropriate information.
              </p>
            </div>
           

            {/* Submit Button */}
            <div className="flex justify-end">
              <button className="group bg-gray-500 rounded-[10px] w-fit h-fit text-[#FFFF00] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] relative ">
                <span className="inline-block transition-all duration-300 group-hover:pr-5">
                  Send
                </span>
                <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <FaArrowRightLong className="text-2xl" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
