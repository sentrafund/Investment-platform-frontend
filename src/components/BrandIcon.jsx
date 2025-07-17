import React from "react";
import { NavLink } from "react-router-dom";
import sentrafundlogo from "../../public/Sentrafundlogo.png";
import blue_logo from "../assets/logo_blue.png";

function BrandIcon({ type }) {
  if (type === "auth_logo") {
    return (
      <div className="cursor-pointer z-[2]">
        <NavLink to={"/"}>
          <img src={blue_logo} alt="sentrafund logo" srcset="" />
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="cursor-pointer z-[2]">
        <NavLink to={"/"}>
          <img src={sentrafundlogo} alt="sentrafund logo" srcset="" />
        </NavLink>
      </div>
    );
  }
}

export default BrandIcon;
