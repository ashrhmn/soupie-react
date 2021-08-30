import React from "react";
import homeIcon from "../SVG/homeIcon.svg";
import cart from "../SVG/cart.svg";
import user from "../SVG/user.svg";

function BottomBar() {
  return (
    <div style={{maxWidth:'768px',width:'100%'}} className="md:hidden fixed z-9 bottom-0 overflow-hidden w-full">
      <div className="pt-2 pb-2 pl-6 pr-6 bg-gradient-to-t from-primary-dark to-primary flex justify-between items-center">
        <div>
          <button>
            <div className="border-white border-4 p-2 rounded-full">
              <img className="h-4" src={homeIcon} alt="" />
            </div>
          </button>
        </div>
        <div className="flex space-x-4">
          <button>
            <div>
              <img className="h-8" src={cart} alt="" />
            </div>
          </button>
          <button>
            <div>
              <img className="h-8" src={user} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
