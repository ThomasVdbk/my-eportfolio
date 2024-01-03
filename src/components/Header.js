import { useState, useEffect } from "react";
import React from "react";
import avatar from "../assets/avatar.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import "../styles/headerStyle.css";
import { GrHomeRounded } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

function Header({ setBodyContent }) {
  const [currentSection, setCurrentSection] = useState("Accueil");

  const handleButtonClick = (section) => {
    setCurrentSection(section);
    setBodyContent(section);
  };

  useEffect(() => {
    setBodyContent(currentSection);
  }, [currentSection, setBodyContent]);

  return (
    <header>
      <div className="header-left">
        <img className="avatar" src={avatar} alt="user-avatar" />
        <div className="user-infos">
          <h1>Thomas</h1>
          <h3>Testeur / développeur web</h3>
          <div className="header-contacts">
            <img className="contact-item" src={linkedin} alt="linkedin-logo" />
            <img
              className="contact-item github"
              src={github}
              alt="github-logo"
            />
          </div>
        </div>
      </div>
      <div className="header-right">
        <button
          className="header-right-btn"
          onClick={() => handleButtonClick("Accueil")}
        >
          <GrHomeRounded />
          <br />
          Accueil
        </button>
        <button
          className="header-right-btn"
          onClick={() => handleButtonClick("Expérience")}
        >
          <MdWorkOutline />
          <br />
          Expérience
        </button>
        <button
          className="header-right-btn"
          onClick={() => handleButtonClick("Travail")}
        >
          <BsPersonWorkspace />
          <br />
          Travail
        </button>
      </div>
    </header>
  );
}

export default Header;
