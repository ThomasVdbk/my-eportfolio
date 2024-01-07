import { useState, useEffect } from "react";
import React from "react";
import photo from "../assets/photo.jpg";
import "../styles/headerStyle.css";
import { GrHomeRounded } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

function Header({ setBodyContent }) {
  const [currentSection, setCurrentSection] = useState("Accueil");

  const pdfFileName = "Thomas_Vandemeulebroucke_CV.pdf";
  const pdfFileUrl = process.env.PUBLIC_URL + "/" + pdfFileName;

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
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGithubClick = () => {
    window.open(
      "https://github.com/ThomasVdbk",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header>
      <div className="header-left">
        <img className="avatar" src={photo} alt="user-avatar" />
        <div className="user-infos">
          <h1>Thomas</h1>
          <h3>Développeur web - Testeur</h3>
          <div className="header-contacts">
            <FaLinkedin
              className="contact-item"
              onClick={handleLinkedInClick}
              size={30}
              title="Ouvrir mon linkedin"
            />
            <FaGithub
              className="contact-item"
              onClick={handleGithubClick}
              size={30}
              title="Ouvrir mon github"
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
      <div className="header-pdf">
        <a href={pdfFileUrl} download={pdfFileName} title="Télécharger mon CV">
          <FaFilePdf className="pdf" size={40} color="white" />
        </a>
      </div>
    </header>
  );
}

export default Header;
