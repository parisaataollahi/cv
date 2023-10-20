function About() {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              I am well-versed in HTML, CSS and JavaScript , and other cutting
              edge frameworks and libraries,which allows me to implement
              interactive features. Additionally, I'm Seeking a challenging
              frontend developer position to leverage my skills and contribute
              to innovative projects.
            </p>
          </div>
        </div>

        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Tailwind</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Redux</span>
              <span>Sass</span>
              <span>Git</span>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
