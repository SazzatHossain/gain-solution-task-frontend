import "./App.css";
import BootLoader from "./Components/Bootstrap";
import Header from "./Components/Header";
import React from "react";
import Logo from "./assets/logo/gain.png";
import {Button, TextField} from "@material-ui/core";


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
              <ul className="hidden  md:flex uppercase text-md font-[500] md:gap-10">
                <li className="p-4 hover:text-orange-500">
                  <a href="/">Home</a>
                </li>
                <li className="p-4 hover:text-orange-500">
                  <a href="#">Create Event</a>
                </li>
                <li className="p-4 hover:text-orange-500">
                  <a href="#">User Profile</a>
                </li>
                <li className="p-4 hover:text-orange-500">
                  <a href="#">Login</a>
                </li>

              </ul>
            </div>
            <div className="w-full h-auto z-10 ease-in duration-300 bg-black">
              <div className="m-auto py-2 flex justify-center items-center text-black  w-full h-auto bg-white ">
                <div className="">
                  <TextField
                    className={'search-fields'}
                    placeholder={'Search events'}
                    type={'search'}
                    name={''}
                    id={''}
                    variant="outlined"
                    required
                    fullWidth
                    size={"small"}
                    style={{width: 400, marginRight: 20}}
                  />
                  <TextField
                    className={'search-fields'}
                    type = {'date'}
                    name={''}
                    id={''}
                    variant="outlined"
                    required
                    size={"small"}
                    style={{marginRight: 20}}
                  />
                  <TextField
                    className={'search-fields'}
                    type = {'date'}
                    name={''}
                    id={''}
                    variant="outlined"
                    required
                    size={"small"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <BootLoader/>


      <footer>
        <div className="absolute  w-full h-auto z-10 ease-in duration-300 bg-black">
          <div className="m-auto flex justify-between items-center text-white lg:max-w-[75vw]">

          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
