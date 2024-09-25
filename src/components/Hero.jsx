import React from "react";
import Image from "../assets/image.jpg";

export default function Hero() {
  const handleDownload = () => {
    saveAs(
      "https://drive.google.com/file/d/1cTyZ_uVY6F5bZ_8Cc62zUcUbmnC64CVZ/view?usp=drive_link",
      "My_Resume.pdf"
    ); // Change to your resume URL
  };

  return (
    <div className="bg-black text-white text-center py-16" id="hero">
      <img
        src={Image}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Vinitha
        </span>
        ,Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
        I speialize in building modern and responsive web application.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline 
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="#contact">Contact With Me</a>
        </button>
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline 
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1cTyZ_uVY6F5bZ_8Cc62zUcUbmnC64CVZ"
            target="_blank"
            download
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}
