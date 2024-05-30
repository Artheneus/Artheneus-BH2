import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/edit-logo.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1240px] mx-auto pt-7 grid lg:grid-cols-3 gap-4 text-gray-300">
        <div className="flex w-[100%] lg:justify-start justify-center pb-2">
          <div className="w-[150px] lg:ml-8">
            <img src={logo} alt="" />
          </div>
        </div>
        <div></div>
        <div className="flex lg:justify-end justify-center items-center mb-5">
          <div className="px-5">
            <button>
              <FaSquareWhatsapp size={40} />
            </button>
          </div>
          <div className="px-5">
            <button>
              <a href="mailto:wisnua470@gmail.com">
                <IoMdMail size={40} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex text-white justify-center items-end pb-2">
        <p className="w-full text-wrap text-center px-4">
          Flesh and Blood® is a trademark of Legend Story Studios®.
        </p>
      </div>
    </div>
  );
};

export default Footer;
