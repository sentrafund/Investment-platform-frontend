import React from "react";

function Button({ name, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#F59E0B] rounded-xl p-2.5 text-white hover:bg-amber-500 cursor-pointer"
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
