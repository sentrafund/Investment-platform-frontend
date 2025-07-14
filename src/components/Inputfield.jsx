// InputField.js
import React from "react";

function InputField({ label, type = "text", name, value, onChange, placeholder, required = false,}) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input className="w-[461px] px-4 py-2 border-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}/>
    </div>
  );
}

export default InputField;
