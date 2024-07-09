import React from "react";
import image1 from "../images/Sayan.jpg";
import image2 from "../images/password.png"

export default function Work() {
  const projects = [
    {
      id: 1,
      name: "Link Shortener App",
      description:
        "A simple link shortener app that allows you to shorten any link and share it with your friends. It also allows you to track the number of clicks on your link. It is built using React, Node.js, Express, MongoDB and Mongoose.",
      image: image1,
      link: "https://link-shortner-ochre.vercel.app/"
    },
    {
      id: 2,
      name: "Password Generator",
      description: "A password generator app that helps to create a strong password for the user. It is built using React.",
      image: image2,
      link: "https://codersayan1.github.io/password-generator/"
    },
  ];

  return (
    <div className="w-4/5 md:w-3/5 mx-auto" id="work">
      <div className="my-6">
        <h2 className="bg-gradient-to-r from-[#F7971E] to-[#FFD200] text-transparent bg-clip-text md:text-4xl text-2xl font-bold  my-6">
          Recent Projects
        </h2>
        <div className="flex flex-col">
          {projects.map((project) => (
            <div className="flex md:flex-row flex-col md:justify-between mb-6 p-4 rounded-xl bg-gradient-to-r from-[#394c59] to-[#2c3e50] w-full" key={project.id}>
              <div className="md:w-[30%] w-full mx-auto md:mx-0">
                <img src={project.image} alt="oops" className="rounded-lg"/>
              </div>
              <div className="text-white w-[70%] md:mx-10 mx-0">
                <div className="text-xl font-bold mb-4 md:text-left mt-4 md:mt-0">
                  <a href={project.link} target="_blank" className="hover:bg-gradient-to-r from-sky-200 to-cyan-400 hover:text-transparent hover:bg-clip-text cursor-pointer">{project.name}</a>
                </div>
                <p className="text-lg text-zinc-200 break-words">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
