import React from 'react';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-[1000] h-20 w-full bg-[#F7F7F7] p-6'>
      <div className='flex justify-between items-center'>
        <div>
          <Image
            src='https://d7rrqxjo6rxl7.cloudfront.net/wordlogo.png'
            alt='Logo'
            width={100}
            height={100}
          />
        </div>
        <div id='twodiv'>
          <button className='bg-[#0373FF] p-2 font-med text-sm text-[#F7F7F7] mp:text-[1.125rem] rounded-md'>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
