import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
function Footer() {
  return (
    <div>
      <footer className="bg-white shadow-md rounded-xl w-full p-3 md:p-4 relative">
        <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
          

          <p className="text-[0.9rem] text-center sm:text-start text-gray-600">
            A short news platform 
          </p>

          <a href="https://www.linkedin.com/in/sakib-fakir-183923295/" target="_blank" className="py-3 px-6 rounded-full bg-[#3B9DF8] text-white">
            Contact Us
          </a>

          <div className="flex gap-[15px] text-black mt-4">
            <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
              <CgFacebook />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
              <BsTwitter />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
              <BsInstagram />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
              <BsLinkedin />
            </a>
          </div>
        </div>

        <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
          <p className="text-[0.9rem] text-gray-300">
            © 2025 All Rights Reserved
          </p>

          <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
        </div>

        <img
          src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
          alt="background/image"
          className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl"
        />
        <img
          src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
          alt="background/image"
          className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl"
        />
      </footer>
    </div>
  );
}

export default Footer;
