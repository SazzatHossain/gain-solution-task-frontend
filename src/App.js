import "./App.css";
import BootLoader from "./Components/Bootstrap";
import Header from "./Components/Header";
import React from "react";
import Logo from "./assets/logo/gain.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="absolute left-0 top-0 w-full h-auto z-10 ease-in duration-300 bg-black">
          <div className="m-auto flex justify-between items-center text-white lg:max-w-[75vw]">
            <a href="# " className="mx-2 py-4">
              <img
                src={Logo}
                alt=""
                className=" "
                width="150px"
                height="auto"
              />
            </a>
          </div>
          <div className="absolute w-full h-auto z-10 ease-in duration-300 bg-black">
            <div className="m-auto flex justify-center items-center text-white  w-full h-auto bg-gray-500">
              <ul className="hidden md:flex uppercase text-md font-[500] md:gap-10">
                <li className="p-4 hover:text-orange-500">
                  <a href="/#home">Home</a>
                </li>
                <li className="p-4 hover:text-orange-500">
                  <a href="/#about-me">About Me</a>
                </li>
                <li className="p-4 hover:text-orange-500">
                  <a href="/#skills">Skills</a>
                </li>
                <li className="p-4 hover:text-orange-500">
                  <a href="/#projects">Projects</a>
                </li>
                <li className="p-4 hover:text-orange-500">
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <BootLoader />
    </div>
  );
}

export default App;
