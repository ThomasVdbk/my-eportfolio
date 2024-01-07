import React from "react";
import { useState, useEffect } from "react";
import "../styles/footerStyle.css";

function Footer({ setBodyContent }) {
  const [currentSection, setCurrentSection] = useState("Accueil");

  const handleButtonClick = (section) => {
    setCurrentSection(section);
    setBodyContent(section);
  };

  useEffect(() => {
    setBodyContent(currentSection);
  }, [currentSection, setBodyContent]);

  return (
    <footer>
      <div className="footer-left">
        <p>
          Contactez-moi :<br />
          <a href="mailto:thomas.vdbk@gmail.com">thomas.vdbk@gmail.com</a>
        </p>
        <p>
          Réseaux sociaux :<br />
          <a
            href="https://www.linkedin.com/in/thomas-vandemeulebroucke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/ThomasVdbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
      <div className="footer-middle">
        <p>
          Liens rapides :
          <ul className="navigation-list">
            <li
              className="footer-li"
              pointer
              onClick={() => handleButtonClick("Accueil")}
            >
              Accueil
            </li>
            <li
              className="footer-li"
              pointer
              onClick={() => handleButtonClick("Expérience")}
            >
              Expérience
            </li>
            <li
              className="footer-li"
              pointer
              onClick={() => handleButtonClick("Travail")}
            >
              Travail
            </li>
          </ul>
        </p>
      </div>
      <div className="footer-right">
        <div className="heberge">
          <p>
            Hébergé par <a href="https://pages.github.com/">GitHub Pages</a>
          </p>
        </div>
        <div className="copyright">
          <p>
            &copy; 2023-2024 Vandemeulebroucke Thomas. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
