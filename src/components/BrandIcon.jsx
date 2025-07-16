import React from "react";
import { NavLink } from "react-router-dom";
import sentrafundlogo from "../../public/Sentrafundlogo.png";

function BrandIcon() {
  return (
    <div className="cursor-pointer z-[2]">
      <NavLink to={"/"}>
        <img src={sentrafundlogo} alt="sentrafund logo" srcset="" />
      </NavLink>
    </div>
  );
}

export default BrandIcon;
