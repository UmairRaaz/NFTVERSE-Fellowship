'use client'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div
    >
      <nav className="w-full bg-black backdrop-blur-xl shadow-md  z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-28">
          <div >
            <div className="flex items-center justify-between py-3 md:py-1 md:block">
              {/* LOGO */}
              <a href="/">
              <h1 className='text-yellow-300 border-b border-yellow-200 font-extrabold text-3xl'>NFTVERSE</h1>
              </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-100 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoMdClose size={30}/>
                  ) : (
                    <MdOutlineMenu size={30}  className='focus:border-none active:border-none'/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-1 md:pt-6 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex text-gray-100 ">
                <li className="pb-6 text-base font-semibold  py-4 md:px-6 text-center border-b-2 md:border-b-0   md:hover:text-yellow-300 md:hover:bg-transparent">
                  <Link href="#home"  onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li className="pb-6 text-base font-semibold py-4 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-yellow-300 md:hover:bg-transparent">
                  <Link href="#explore" onClick={() => setNavbar(!navbar)}>
                    EXPLORE
                  </Link>
                </li>
                <li className="pb-6 text-base font-semibold py-4 px-6 text-center  border-b-2 md:border-b-0 uppercase  md:hover:text-yellow-300  ">
                  <Link href="#createandsell" onClick={() => setNavbar(!navbar)}>
                    CREATE & SELL
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;