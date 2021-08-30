import React from "react";
import logo from "../SVG/logo.svg";
import cup from "../SVG/cup.svg";
import cart from "../SVG/cart.svg";

function Nav() {
  return (
    <div
      style={{ maxWidth: "768px", width: "97%" }}
      className=" pt-6 pb-8 pr-2 pl-2 fixed z-5 bg-gradient-to-b from-white via-white"
    >
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <img src={logo} alt="logo" />
          <img style={{ height: "80%" }} src={cup} alt="logo" />
        </div>
        <div className="flex space-x-2 items-center">
          <button>
            <div className="bg-primary rounded-full p-2 md:block hidden">
              <img className="h-8" src={cart} alt="" />
            </div>
          </button>
          <button className="bg-primary text-white p-1 md:text-xl rounded-md hover:bg-primary-dark">
            Login
          </button>
          <button className="bg-primary text-white p-1 md:text-xl rounded-md hover:bg-primary-dark">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
