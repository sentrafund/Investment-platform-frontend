import React from 'react';

function Investmentcards({ title, content }) {
  return (
    <div className="w-full max-w-xs bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-blue-900 mb-4">{title}</h2>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
}

export default Investmentcards;
