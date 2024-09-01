'use client'
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [message, setMessage] = useState("")
  const handleMessage = () => {
    toast.success("Message Sent Successfully")
    setMessage("")
  }
  return (
    <div className="bg-black md:pt-20  w-[90%] mb-10 md:w-[80%] lg:max-w-7xl mx-auto ">
      <div className="bg-black text-white py-4 ">
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-10">
          <div>
            <h1 className="text-yellow-300 md:border-b border-yellow-200 font-extrabold text-3xl">
              NFTVERSE
            </h1>
          </div>
          <div>
            <div className="flex flex-col gap-y-6 md:justify-center my-6 md:my-0 md:items-center mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-lg">
                <p className="cursor-pointer">Marketplace</p>
                <p className="cursor-pointer">My Account</p>
                <p className="cursor-pointer">Resorces</p>
                <p className="cursor-pointer">Company</p>
              </div>
              <div className="flex space-x-8">
                <div className="p-3 border border-gray-100 rounded-full">
                  <FaFacebookF className="text-white" />
                </div>
                <div className="p-3 border border-gray-100 rounded-full">
                  <FaTwitter className="text-white" />
                </div>
                <div className="p-3 border border-gray-100 rounded-full">
                  <FaInstagram className="text-white" />
                </div>
                <div className="p-3 border border-gray-100 rounded-full">
                  <FaLinkedinIn className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-lg">Stay Updated, Join Our mailing</h1>
            <div className="flex items-center mt-2 h-12">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 border text-gray-700 border-gray-300 rounded-l-md focus:outline-none h-full"
              />
              <button
                type="submit"
                onClick={()=> handleMessage()}
                className="px-4 py-2 bg-yellow-300 text-gray-600 rounded-r-md hover:bg-yellow-400 focus:outline-none h-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
