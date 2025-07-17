import React from "react";
import { NavLink } from "react-router-dom";

function Button({ name, type, url, onClick }) {
  const baseStyles =
    "relative min-w-[7.375rem] font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95";
  const filled = "bg-[#F59E0B] hover:bg-[#D97706]";
  const outline = "border border-[#F59E0B] hover:bg-[#D97706]";
  const style = `${baseStyles} ${
    type === "outline" ? outline : filled
  } text-white cursor-pointer`;

  if (onClick) {
    return (
      <button className={style} onClick={onClick}>
        {name}
      </button>
    );
  }

  return (
    <NavLink to={url} className={style}>
      {name}
    </NavLink>
  );
}

export default Button;
