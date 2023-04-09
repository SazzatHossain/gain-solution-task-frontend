import React, {useState, useEffect} from "react";
import Logo from "../../assets/logo/Gain-Solutions-Logo.png";
import {Link} from 'react-router-dom';
import {TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../redux/slices/fliterSlice";

const Header = () => {
  const [eventFromDate, setEventFromDate] = useState('');
  const [eventToDate, setEventToDate] = useState('');
  const filter = useSelector((state) => state.eventsFilter.filterText);
  const dispatch = useDispatch();
  console.log(filter);

  const checkIfLoggedIn = () => {
    return !(localStorage.getItem("token") === null || typeof localStorage.getItem("token") === 'undefined');
  };
  const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());
  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <header className="bg-gray-700 border-gray-200 dark:bg-gray-900">
        <div className=" flex flex-wrap items-center justify-between w-full bg-gray-700 p-4 mx-[10%]">
          <a href="/" className="">
            <img
              src={Logo}
              alt=""
              className=" "
              width="150px"
              height="auto"
            />
          </a>
        </div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between md:justify-center mx-auto p-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul
                className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/"
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page">Home</Link>
                </li>
                <li>
                  <Link to="/create-event"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create
                    Event</Link>
                </li>
                {!isLoggedIn && (
                  <li>
                    <Link to="/login"
                          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
                  </li>
                )}
                {isLoggedIn && (
                  <li>
                    <Link to="/user-profile"
                          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">User
                      Profile</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-white flex flex-wrap items-center justify-center w-full pb-4">
          <div className="">
            <TextField
              onChange={(e)=>
                dispatch(setFilter(e.target.value))
            }
              value={filter}
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
              type={'date'}
              name={''}
              id={''}
              variant="outlined"
              required
              size={"small"}
              style={{marginRight: 20}}
              value={eventFromDate}
              onChange={(event) => {
                setEventFromDate(event.target.value);
              }}
            />
            <TextField
              className={'search-fields'}
              type={'date'}
              name={''}
              id={''}
              variant="outlined"
              required
              size={"small"}
              value={eventToDate}
              onChange={(event) => {
                setEventToDate(event.target.value);
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
