import React from "react";
import avatar from "../assets/avatar.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import "../styles/headerStyle.css";

function Header() {
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
        <button className="header-right-btn icon-button">Accueil</button>
        <button className="header-right-btn">Expérience</button>
        <button className="header-right-btn">Travail</button>
      </div>
    </header>
  );
}

export default Header;
