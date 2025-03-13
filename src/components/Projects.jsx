import React from "react";
import ecommerceImg from "../assets/e-commerce-image.png";
import gmailcloneImg from "../assets/gmail-clone-image.png";
import ChatappImg from "../assets/chat-app.png";
import FinanceappImg from "../assets/finance-app.png";

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
    name: "Chat-App",
    technologies: "MERN Stack",
    image: ChatappImg,
    github: "https://github.com/VinithaGanesan/chat_app",
    live: "https://chat-app-w995.onrender.com",
  },
  {
    id: 3,
    name: "Finance-App",
    technologies: "MERN Stack",
    image: FinanceappImg,
    github: "https://github.com/VinithaGanesan/Finance_app_nextjs",
    live: "https://finance-app-nextjs-eight.vercel.app",
  },
  {
    id: 4,
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
    <div className="py-20 text-white bg-black" id="project">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg hover:shadow-lg hover:scale-105"
            >
              <div className="h-60">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full mb-4 rounded-lg"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
              <p className="mb-4 text-gray-400">{project.technologies}</p>
              <div className="flex flex-row justify-between">
                <a
                  href={project.live}
                  className="inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-block px-4 py-2 text-white hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.githubfrontend && (
                  <a
                    href={project.githubfrontend}
                    className="inline-block px-4 py-2 text-white hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub-Frontend
                  </a>
                )}
                {project.githubbackend && (
                  <a
                    href={project.githubbackend}
                    className="inline-block px-4 py-2 text-white hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub-Backend
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
