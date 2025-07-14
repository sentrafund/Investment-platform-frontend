import React from "react";

function BorderButton({ name, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="border border-[#F59E0B] rounded-xl p-2.5 w-28 text-[#F59E0B] cursor-pointer"
      >
        {name}
      </button>
    </div>
  );
}

export default BorderButton;
