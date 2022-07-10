import React from "react";
import ProjectCard from "./ProjectCard";
import "./css/Projects.css";
import projectImage1 from "../Assets/protostream.png";
import projectImage2 from "../Assets/moviemania.png";
import projectImage3 from "../Assets/periodictable.png";

function Projects({ theme }) {
  const projects = [
    {
      title: "Protostream",
      desc: "A native-web app portal with multi-user interface, to faciliate a unique platform for students / startup fellows / entrepreneurs / venture capalist / angel investors / mentors / institutional head / funding organization.",
      src: projectImage1,
      // src: "../assets/protostream.png",
      live: "https://protostream.in/",
      code: "https://github.com/PROTOSTREAM",
    },
    {
      title: "MovieMania",
      desc: "A Web application build using react where you can find everyting about your favourite movies and TV shows. It also shows currently Trending & popular movies in the market.",
      src: projectImage2,
      live: "https://github.com/HimanshuPandey2002/GetMovies",
      code: "https://github.com/HimanshuPandey2002/GetMovies",
    },
    {
      title: "Periodic table",
      desc: "A periodic table application created using React which shows information about each chemical element. Users can also filter elements by their metallic properties.",
      src: projectImage3,
      live: "https://github.com/HimanshuPandey2002/Periodic-Table/",
      code: "https://github.com/HimanshuPandey2002/Periodic-Table://github.com/PROTOSTREAM",
    },
  ];

  return (
    <div className="projects" id="projects">
      <div
        className="project-head"
        id="project-head"
        style={{ color: `${theme.accent}` }}
      >
        My Projects
      </div>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard
            head={project.title}
            desc={project.desc}
            live={project.live}
            code={project.code}
            image={project.src}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
