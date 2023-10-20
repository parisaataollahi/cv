import { TypeAnimation } from "react-type-animation";
import pdf from "../assets/resume2.pdf";
import Button from "react-bootstrap/Button";

function Featured() {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Parisa Ataollahi</span>
        </div>
        <div className="featured-name">
          <p>
            I'm{" "}
            <span className="typedText">
              <TypeAnimation
                cursor={true}
                sequence={[
                  1000,
                  "A Front-end Developer.",
                  1000,
                  "An IUST graduate.",
                  // // 'I design and code beautifully simple things, and I love what I do.',
                  1000,
                  "A problem solver."
                  // 1000,
                  // "An innovative thinker.",
                  // 1000
                ]}
                speed={20}
                deletionSpeed={50}
                // wrapper="h5"
                repeat={Infinity}
              />
            </span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Recent Computer Engineering graduate with a strong foundation in
            frontend development and a passion for creating responsive and
            user-friendly web applications
          </p>
        </div>
        <div className="featured-text-btn">
          {/* <button className="btn blue-btn">Download CV</button> */}
          <Button
            variant="primary"
            className="btn blue-btn"
            href={pdf}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            &nbsp;Download CV
            <i className="uil uil-file-alt"></i>
          </Button>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/parisa-ataollahi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src="about3.jpg" alt="avatar" />
        </div>
      </div>
    </section>
  );
}

export default Featured;
