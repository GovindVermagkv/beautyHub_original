import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import "../css/navbar.css";
import "../css/Logo.css";
import { Search } from "./Search";
import { Location } from "./Location";
 const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navLink, setnavLink] = useState(false);
  const toggleMenu = () => {
    let hero = document.getElementById("hero");
    setToggle(!toggle);
    setnavLink(!navLink);
    if (toggle == false) {
      hero.style.zIndex = -1;
    } else {
      setTimeout(() => {
        hero.style.zIndex = 0;
      }, 500);
    }
  };

  return (
    <>
      <div id="logo" className="animate_animated animate_fadeInDown">
        <img
          src="https://i.pinimg.com/originals/c6/5e/64/c65e6462967bbeba86a6ed9d59554310.png"
          alt=" "
        />
        <h1>
          Beauty<span>Hub</span>
        </h1>
        <b>.Com</b>
      </div>
      <header className="header bg-[#252525] text-white w-full">
        <nav className="nav max-w-[1536px] bg-[#252525] 2xl:mx-auto relative top-0 md:py-5 md:px-10 py-4 sm:px-8 pl-4 pr-7 flex justify-between items-center w-full">
          <div className="search-location d-flex">
            <Location />
            <Search />
          </div>
          <ul
            className={`${
              navLink == false ? `md:left-0 -left-[100%]` : `left-0`
            } md:py-0 py-20 link flex md:flex-row flex-col items-center md:relative absolute md:top-0 sm:top-[89px] top-[79px] md:bg-transparent bg-[#252525] md:text-white text-[#d87093] md:w-auto md:h-auto h-[92.5vh] w-full ease-in-out duration-500 md:border-none`}
          >
            <li className="md:ml-4 md:py-0 py-1.5 md:my-0 my-2 md:w-auto w-full md:text-sm text-lg text-center">
              <Link
                className="md:px-2 md:py-1.5 block"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="md:ml-4 md:py-0 py-1.5 md:my-0 my-2 md:w-auto w-full md:text-sm text-lg text-center">
              <Link
                className="md:px-2 md:py-1.5 block"
                to="/"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li className="md:ml-4 md:py-0 py-1.5 md:my-0 my-2 md:w-auto w-full md:text-sm text-lg text-center">
              <Link
                className="md:px-2 md:py-1.5 block"
                to="/"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
            </li>
            <li className="md:ml-4 md:py-0 py-1.5 md:my-0 my-2 md:w-auto w-full md:text-sm text-lg text-center">
              <Link
                className="md:px-2 md:py-1.5 block"
                to="/"
                onClick={toggleMenu}
              >
                profile
              </Link>
            </li>
            <li className="md:ml-4 md:py-0 py-1.5 md:my-0 my-2 md:w-auto w-full md:text-sm text-lg text-center">
              <Link
                className="md:px-2 md:py-1.5 block"
                to="/ragister"
                onClick={toggleMenu}
              >
                Register/Login
              </Link>
            </li>
          </ul>
          <div
            className={`${
              toggle == false ? `toggle` : `toggle active`
            } relative place-items-center md:hidden grid border border-[#d87093] rounded-sm w-10 h-10 cursor-pointer `}
            onClick={toggleMenu}
            id="toggle"
          >
            <HiMenu className="open text-3xl absolute" />
            <RiCloseFill className="close text-3xl absolute" />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
