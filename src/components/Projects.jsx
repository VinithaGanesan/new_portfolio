import React from "react";
import ecommerceImg from "../assets/e-commerce-image.png";
import gmailcloneImg from "../assets/gmail-clone-image.png";

const projects = [
  {
    id: 1,
    name: "E-Commerce-App",
    technologies: "MERN Stack",
    image: ecommerceImg,
    githubfrontend: "https://github.com/VinithaGanesan/E-Commerce_frontend_app",
    githubbackend: "https://github.com/VinithaGanesan/E-Commerce_backend_app",
    live: "https://main--e-commerce-app-vinitha.netlify.app",
  },
  {
    id: 2,
    name: "GMail-Clone-App",
    technologies: "MERN Stack",
    image: gmailcloneImg,
    githubfrontend:
      "https://github.com/VinithaGanesan/frontend_capstone_gmail_clone_app",
    githubbackend:
      "https://github.com/VinithaGanesan/backend_capstone_gmail_clone_app",
    live: "https://gmailclonecapstoneapp.netlify.app",
  },
];

export default function Projects() {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-62 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex flex-row justify-between">
                <a
                  href={project.live}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>

                <a
                  href={project.githubfrontend}
                  className="inline-block text-white px-4 py-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub-Frontend
                </a>
                <a
                  href={project.githubbackend}
                  className="inline-block text-white px-4 py-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub-Backend
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
