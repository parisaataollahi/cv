import React from "react";
import { ProjectList } from "../data/ProjectData";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { FadeIn } from "react-slide-fade-in";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      {ProjectList.map((list, index) => (
        <FadeIn
          from="left"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={400}
          key={index}
        >
          {/* <ScrollAnimation animateIn="fadeInLeft" key={index}> */}
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
            </div>
          </div>
          {/* </ScrollAnimation> */}
        </FadeIn>
      ))}
    </section>
  );
}

export default Projects;
