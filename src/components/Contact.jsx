import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="py-20 text-white bg-black" id="contact">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center">Contact Me</h2>
        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <div className="flex-1">
            <h3
              className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            >
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development Projects and job
              opportunities.
            </p>
            <div className="mt-8 mb-4">
              <FaEnvelope className="inline-block mr-2 text-green-400"></FaEnvelope>
              <a
                href="mailto:vinithabegp@gmail.com"
                className="hover:underline"
              >
                vinithabegp@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block mr-2 text-green-400"></FaPhone>
              <span>+91-9087385976, </span>
              <span>+91-9944437853</span>
            </div>
            {/* <div className="mb-4">
              <FaMapMarkedAlt className="inline-block mr-2 text-green-400"></FaMapMarkedAlt>
              <span>
                Vagayadi East Car Street, Nagercoil - 629002, Tamilnadu, India
              </span>
            </div> */}
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400"
                  placeholder="Enter You Name"
                  name="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400"
                  placeholder="Enter You Email"
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter You Message"
                  name="message"
                />
              </div>
              <button
                type="submit"
                className="hidden px-8 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
