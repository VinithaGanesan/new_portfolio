import React from "react";
import resume from "../assets/Vinitha-Resume.pdf";
import { saveAs } from "file-saver";
import imagePhoto from "../assets/PHOTO.jpg";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const handleDownload = (e) => {
    saveAs(resume, "vinitha.pdf");
  };

  return (
    <div className="py-16 text-center text-white bg-black" id="hero">
      <img
        src={imagePhoto}
        alt="PhotoImage"
        className="object-cover w-48 h-48 mx-auto mb-8 transition-transform duration-300 transform rounded-full hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm Vinitha,&nbsp;
        <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
          <ReactTyped
            strings={[
              "Full-Stack Developer",
              "Frontend Developer",
              "Backend Developer",
            ]}
            typeSpeed={50}
            backSpeed={20}
            loop
          />
        </span>
      </h1>
      <p className="px-4 mt-4 text-lg text-gray-300 md:px-32">
        I craft dynamic and user-friendly web experiences.
      </p>
      <div className="mt-8 space-x-4">
        <button className="px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">
          <a href="#contact">Contact Me</a>
        </button>

        <button
          onClick={handleDownload}
          className="px-4 py-2 text-white transition-all duration-500 ease-in-out transform border border-white rounded-full hover:scale-105 hover:bg-white hover:text-black md:inline"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
