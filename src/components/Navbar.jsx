import React from "react";

export default function Navbar() {
  return (
    <div className="px-8 text-white bg-black md:px-16 lg:px-24" id="navbar">
      <div className="container flex items-center justify-center py-2 md:justify-between">
        <div className="hidden text-2xl font-bold md:inline">Vinitha</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          {/* <a href="#services" className="hover:text-gray-400">
            Services
          </a> */}
          <a href="#project" className="hover:text-gray-400">
            Project
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">
          <a href="#contact">Connect Me</a>
        </button>
      </div>
    </div>
  );
}
