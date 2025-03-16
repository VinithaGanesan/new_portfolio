import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="px-8 text-white bg-black md:px-16 lg:px-24" id="navbar">
      <div className="container flex items-center justify-center py-2 md:justify-between">
        <div className="hidden text-2xl font-bold md:inline">Portfolio</div>
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
        <div className="flex items-center space-x-4 item md:my-0">
          <a
            href="https://www.linkedin.com/in/vinitharam-ganesan"
            className="text-gray-400 hover:text-white"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://github.com/VinithaGanesan"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={25} />
          </a>
          <button className="px-4 py-2 text-white transition-all duration-500 ease-in-out transform border border-white rounded-full hover:scale-105 hover:bg-white hover:text-black md:inline">
            <a href="#contact">Connect Me</a>
          </button>
        </div>
      </div>
    </div>
  );
}
