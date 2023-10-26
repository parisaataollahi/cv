import React from "react";
import { ProjectList } from "../data/ProjectData";
import "animate.css/animate.min.css";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      {ProjectList.map((list, index) => (
        <div className="card">
          <div className="card-left">
            <img src={list.img} alt={list.name} />
          </div>
          <div className="card-right">
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <div className="TechCardContainer">
              {list.tech_stack.map((tech, index) => (
                <div className="TechCard" key={index}>
                  {tech}
                </div>
              ))}
            </div>
            <div className="btn-group">
              <a
                className="btn PrimaryBtn btn-shadow"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github ➜
              </a>

              {/* <a
                className="btn PrimaryBtn btn-shadow"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
