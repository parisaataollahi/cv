import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import {
  SiMaterialui,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiReactrouter,
  SiReactquery,
  SiSass
} from "react-icons/si";

function Skillset() {
  return (
    <section className="section" id="skillset">
      <div className="top-header">
        <h1>Skillset</h1>
      </div>
      <div className="skillset-container">
        <div className="skillset-box">
          <div>
            <SiHtml5 />
          </div>
        </div>
        <div className="skillset-box">
          <div>
            <SiCss3 />
          </div>
        </div>
        <div className="skillset-box">
          <div>
            <DiJavascript1 />
          </div>
        </div>
        <div className="skillset-box">
          <div>
            <DiReact />
          </div>
        </div>
        <div className="skillset-box">
          <div>
            <SiRedux />
          </div>
        </div>
        <div className="skillset-box">
          <div>
            <SiReactrouter />
          </div>
        </div>
        <div className="skillset-box">
          <div>
            <SiTailwindcss />
          </div>
        </div>
        <div className="skillset-box">
          <div>
            <SiSass />
          </div>
        </div>
        <div className="skillset-box">
          <div>
            <DiGit />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skillset;
