import { useState, useEffect } from "react";
import React from "react";
import avatar from "../assets/avatar.jpg";
import "../styles/headerStyle.css";
import { GrHomeRounded } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header({ setBodyContent }) {
  const [currentSection, setCurrentSection] = useState("Accueil");

  const handleButtonClick = (section) => {
    setCurrentSection(section);
    setBodyContent(section);
  };

  useEffect(() => {
    setBodyContent(currentSection);
  }, [currentSection, setBodyContent]);

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/thomas-vandemeulebroucke/",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    window.open("https://github.com/ThomasVdbk", "_blank");
  };

  return (
    <header>
      <div className="header-left">
        <img className="avatar" src={avatar} alt="user-avatar" />
        <div className="user-infos">
          <h1>Thomas</h1>
          <h3>Testeur / développeur web</h3>
          <div className="header-contacts">
            <FaLinkedin
              className="contact-item"
              onClick={handleLinkedInClick}
              size={30}
            />
            <FaGithub
              className="contact-item"
              onClick={handleGithubClick}
              size={30}
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
