
import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const whatsappNumber = '+14809968408';
  const message = 'Hello, I got this number from DreamWise web site...'; 

  return (
    <div className='lg:max-w-screen-378 max-w-full max-sm:px-5 max-sm:py-7 px-20 w-full h-full mx-auto py-7 max-lg:px-12a xl:px-20 2xl:px-40 min-[1700px]:px-[20rem]  sticky top-0 z-50'>
    <nav className="flex justify-between">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center flex-grow">
          <Link href="/" className="flex items-center">
            <h1 className="text-text1 font-montserrat font-light ml-2 text-xl sm:text-2xl">
              Beyond <span className="font-bold font-montserrat text-2xl">Limits.</span>
            </h1>
          </Link>
        </div>

        <ul className="hidden lg:flex space-x-8 ml-auto">
          <li>
            <button className="text-dream-black font-montserrat hover:text-gray-600 text-sm md:text-base">
              About Us
            </button>
          </li>
          <li>
            <button className="text-dream-black font-montserrat hover:text-gray-600 text-sm md:text-base">
              What we do
            </button>
          </li>          <li>
            <button className="text-dream-black font-montserrat hover:text-gray-600 text-sm md:text-base">
              News
            </button>
          </li>          <li>
            <button className="text-dream-black font-montserrat hover:text-gray-600 text-sm md:text-base">
              Succes stories
            </button>
          </li>          <li>
            <button className="text-dream-black font-montserrat hover:text-gray-600 text-sm md:text-base">
              Gallery
            </button>
          </li>          <li>
            <button className="text-dream-black font-montserrat hover:text-gray-600 text-sm md:text-base">
              Cointact us
            </button>
          </li>
        </ul>

        <button className="hidden lg:block px-4 ml-10 py-2 bg-bg-custom-gradient border-dream-btn-bg bg-gradient-to-b from-custom-gradient-top to-custom-gradient-bottom border-2 text-dream-black font-Figtree hover:bg-green-200 rounded-custom-sm">
          Donate
        </button>

        <div className="block lg:hidden">
          <button onClick={handleToggle} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 w-full h-full bg-white z-50 flex flex-col py-8 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={handleToggle} className="self-end px-4 py-2 text-black hover:text-gray-600">
          <HiOutlineX className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-start space-y-4 px-4">
          <li>
            <button
              onClick={() => {
                setIsOpen(false); 
              }}
              className="text-black font-montserrat font-normal hover:text-gray-600 text-base"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(false); 
              }}
              className="text-black font-montserrat font-normal hover:text-gray-600 text-base"
            >
              What we do
            </button>
          </li>
          <li>
            <button onClick={() => {
                setIsOpen(false); 
              }} className="text-black font-montserrat font-normal hover:text-gray-600 text-base">
              News
            </button>
          </li>
          <li>
            <button onClick={() => {
                setIsOpen(false); 
              }} className="text-black font-montserrat font-normal hover:text-gray-600 text-base">
              Succes stories
            </button>
          </li>
          <li>
            <button onClick={() => {
                setIsOpen(false); 
              }} className="text-black font-montserrat font-normal hover:text-gray-600 text-base">
              Gallery
            </button>
          </li>
          <li>
            <button onClick={() => {
                setIsOpen(false); 
              }} className="text-black font-montserrat font-normal hover:text-gray-600 text-base">
              Contact us
            </button>
          </li>
          <li>
          <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                >
            <button className="px-4 py-2 bg-bg-custom-gradient border-dream-btn-bg bg-gradient-to-b from-custom-gradient-top to-custom-gradient-bottom border-2 text-dream-black font-montserrat hover:bg-green-200 rounded-custom-sm">
              Donate
            </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
