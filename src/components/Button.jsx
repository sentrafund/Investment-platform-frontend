import React from "react";

function Button({ name, onClick, type }) {
  if(type=="outline"){
    return(
      <div>
      <button
        onClick={onClick}
        className="min-w-[7.375rem] border border-[#F59E0B] rounded-xl p-2.5 text-[#F59E0B] cursor-pointer"
      >
        {name}
      </button>
    </div>
    );
  }
  else{

    return (
      <div>
        <button
          onClick={onClick}
          className="min-w-[7.375rem] bg-[#F59E0B] rounded-xl p-2.5 text-white hover:bg-amber-500 cursor-pointer"
        >
          {name}
        </button>
      </div>
    );
  }
}

export default Button;
