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
            <div className="contact-items">
              <img className="item" src={linkedin} alt="linkedin-logo" />
              <img className="item" src={github} alt="github-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-right">header</div>
    </header>
  );
}

export default Header;
