import React, { useState } from "react";
import pdf from "../assets/resume2.pdf";
import Button from "react-bootstrap/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Parisa</p>
        <span>.</span>
      </div>
      <div className={`nav-menu ${isOpen ? " responsive" : ""}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a
              href="#home"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="nav_list">
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li className="nav_list">
            <a
              href="#projects"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li className="nav_list">
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        {/* <button className="btn">
          Download CV <i className="uil uil-file-alt"></i>
        </button> */}
        <Button
          variant="primary"
          className="btn"
          href={pdf}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          &nbsp;Download CV
          <i className="uil uil-file-alt"></i>
        </Button>
      </div>
      <div className="nav-menu-btn">
        <i
          className={`uil ${!isOpen ? " uil-bars" : " uil-cancel"}`}
          onClick={toggleNav}
        ></i>
      </div>
    </nav>
  );
}

export default Header;
