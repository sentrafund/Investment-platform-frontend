import React from "react";
import BrandIcon from "./BrandIcon";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-10 pb-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand & Description */}
          <div>
            {/* <img
              className="mb-4 cursor-pointer w-32"
              src="/Sentrafundlogo.png"
              alt="Sentrafund logo"
            /> */}
            <div className="w-32 my-2">
              <BrandIcon />
            </div>
            <p className="text-sm max-w-xs">
              Your trusted partner in financial markets. Trade stocks, crypto,
              forex and more with confidence and security.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            {[
              "Stock Trading",
              "Cryptocurrency",
              "Forex Trading",
              "Binary Options",
              "Bonds and Fixed Income",
            ].map((service, idx) => (
              <div
                key={idx}
                className="mb-2 hover:text-yellow-500 transition duration-300 cursor-pointer text-sm"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <a
              href="mailto:help@sentrafund.com"
              className="flex items-center gap-2 mb-4 hover:text-yellow-500 cursor-pointer transition"
            >
              <img
                src="/material-symbols_mail-outline-rounded.svg"
                alt="Email icon"
                className="w-5 h-5"
              />
              <span className="text-sm">help@sentrafund.com</span>
            </a>

            <a
              href="https://wa.me/16605283910"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition"
            >
              <img
                src="/ri_whatsapp-line.svg"
                alt="WhatsApp icon"
                className="w-5 h-5"
              />
              <span className="text-sm">+1 (660) 528-3910</span>
            </a>
          </div>

          {/* Social Links */}
          {/* <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <img
                className="cursor-pointer w-6"
                src="/fe_facebook.svg"
                alt="Facebook icon"
              />
              <img
                className="cursor-pointer w-6"
                src="/streamline-logos_x-twitter-logo-block.svg"
                alt="X (Twitter) icon"
              />
              <img
                className="cursor-pointer w-6"
                src="/mdi_linkedin.svg"
                alt="LinkedIn icon"
              />
              <img
                className="cursor-pointer w-6"
                src="/streamline_instagram-solid.svg"
                alt="Instagram icon"
              />
            </div>
          </div> */}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-600 mb-4" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/ic_baseline-copyright.svg"
              alt="Copyright icon"
              className="w-4 h-4"
            />
            <span>2025 Sentrafund. All rights reserved</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Risk Disclosure",
              // "Disclaimer: Built independently. Developer is not involved in content, intent, or site operations.",
            ].map((item, idx) => (
              <span
                key={idx}
                className="hover:text-yellow-500 cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
