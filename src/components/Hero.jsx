import React from "react";
import Image from "../assets/image.jpg";

export default function Hero() {
  return (
    <div className="py-16 text-center text-white bg-black" id="hero">
      <img
        src={Image}
        alt=""
        className="object-cover w-48 h-48 mx-auto mb-8 transition-transform duration-300 transform rounded-full hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Vinitha
        </span>
        , Full-Stack Developer
      </h1>
      <p className="px-4 mt-4 text-lg text-gray-300 md:px-32">
        I specialize in building modern and responsive web application.
      </p>
      <div className="mt-8 space-x-4">
        <button className="px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">
          <a href="#contact">Contact With Me</a>
        </button>
        <a
          href={`${process.env.VITE_PUBLIC_URL}/VINITHA.pdf`}
          download="VINITHA.pdf"
        >
          <button className="px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 md:inline hover:scale-105">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
