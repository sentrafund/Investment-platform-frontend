import React from "react";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "16605283910";
  const message = "Hello! I'm interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
      <svg
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48A11.87 11.87 0 0012 0a11.83 11.83 0 00-10.2 17.94L0 24l6.29-1.68A11.83 11.83 0 0012 24h.01A11.86 11.86 0 0024 12a11.87 11.87 0 00-3.48-8.52zM12 21.54a9.56 9.56 0 01-4.89-1.32l-.35-.21-3.73 1 1-3.63-.23-.37a9.57 9.57 0 1117.48-5.97A9.58 9.58 0 0112 21.54zm5.19-7.36c-.28-.14-1.63-.8-1.88-.89s-.44-.14-.62.14-.71.88-.88 1.06-.32.21-.6.07a7.73 7.73 0 01-2.27-1.4 8.54 8.54 0 01-1.57-1.94c-.16-.27 0-.42.12-.56.12-.12.27-.32.4-.47a1.89 1.89 0 00.28-.47.51.51 0 000-.49c-.07-.14-.62-1.5-.85-2s-.45-.46-.62-.46h-.53a1 1 0 00-.74.35A3.13 3.13 0 005.6 9a5.5 5.5 0 001.17 3.63 12.73 12.73 0 005.51 4.65 6.46 6.46 0 002.78.53 3.23 3.23 0 002.11-1.49 2.64 2.64 0 00.19-1.49c-.08-.13-.25-.2-.53-.34z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
