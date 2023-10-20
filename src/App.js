import Header from "./components/Header";
import Featured from "./components/Featured";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="wrapper">
        <Featured />
        <About />
        <Skillset />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
