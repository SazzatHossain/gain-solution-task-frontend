import React, { useState, useEffect } from "react";


const Footer = () => {
  return (
    <>
      <footer data-testid ="footer-test" className="relative left-0 bottom-0 w-full bg-gray-700 border-gray-200 dark:bg-gray-900">
        <div  className="flex justify-around flex-wrap min-h-[30vh] w-full bg-gray-700 p-4 text-white">
            <div className='w-[300px] text-justify'>
              <p className={'text-xl pt-4'}>Gain Solution</p>
              <p className={'text-sm pt-2 text-gray-400'}>Gain Solutions is a web development company. We develop web applications for the customers all over the world.</p>
            </div>
          <div className='w-[300px] text-justify'>
              <p className={'text-xl pt-4'}>OUR OFFICE</p>
              <p className={'text-sm pt-2 text-gray-400'}>6th Floor, Hazi Kujrat Ali Mollah Super Market, Mirpur 12, Dhaka</p>
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
