import React, { useState, useEffect } from "react";


const Footer = () => {
  return (
    <>
      <footer data-testid ="footer-test" className="relative left-0 bottom-0 w-full bg-gray-700 border-gray-200 dark:bg-gray-900">
        <div  className="flex justify-around flex-wrap min-h-[30vh] w-full bg-gray-700 p-4 text-white">
            <div className='w-[300px] text-justify'>
              <p className={'text-xl pt-4'}>Sazzat Hossain</p>
              <p className={'text-sm pt-2 text-gray-400'}>I am a full-stack developer having 3 years experience in Ruby on Rails and
                2 years experience in React JS. I am currently working in for almost 2 years and involve in two
                major projects of the company.</p>
            </div>
          <div className='w-[300px] text-justify'>
              <p className={'text-xl pt-4'}>My Contacts</p>
              <p className={'text-sm pt-2 text-gray-400'}>331/11, TV link road, East Rampura, Dhaka</p>
              <p className={'text-sm pt-2 text-gray-400'}>Email: sazzathossaindipto@gmail.com</p>
              <p className={'text-sm pt-2 text-gray-400'}>Phone No: 01712595391</p>
            </div>
        </div>
        <div  className="flex justify-around items-center flex-wrap w-full bg-gray-700  text-white">
              <p className={'text-sm mb-4'}>Copyrights © 2023 SazzatHossain</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
