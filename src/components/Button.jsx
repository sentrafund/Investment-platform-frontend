import React from "react";
import { NavLink } from "react-router-dom";

function Button({ name, type, url }) {
  if (type == "outline") {
    return (
      <div>
        <NavLink
          to={url}
          className="min-w-[7.375rem] border border-[#F59E0B]  hover:bg-[#D97706] cursor-pointer text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          {name}
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink
          to={url}
          className="min-w-[7.375rem] bg-[#F59E0B]  hover:bg-[#D97706] cursor-pointer text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          {name}
        </NavLink>
      </div>
    );
  }
}

export default Button;
