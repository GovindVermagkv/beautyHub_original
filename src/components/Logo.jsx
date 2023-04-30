import React from "react";
import { Outlet } from "react-router-dom";

import "../css/Logo.css";

export const Logo = () => {
  return (
    <>
      <div id="logo" className="animate_animated animate_fadeInDown">
        <img
          src="https://i.pinimg.com/originals/c6/5e/64/c65e6462967bbeba86a6ed9d59554310.png"
          alt=" "
        />{" "}
        <h1>
          Beauty<span>Hub</span>
        </h1>
        <b>.Com</b>{" "}
      </div>
      {/* <Outlet /> */}
    </>
  );
};
