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
      <div className="contact">
        <p>
          Contactez-moi :{" "}
          <a href="mailto:thomas.vdbk@gmail.com">thomas.vdbk@gmail.com</a>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/thomas-vandemeulebroucke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ThomasVdbk"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <h4>Plan de mon portfolio</h4>
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
      <div className="copyright">
        <p>&copy; 2023-2024 Vandemeulebroucke Thomas. Tous droits réservés.</p>
      </div>
      <div className="heberge">
        <p>
          Hébergé par <a href="https://pages.github.com/">GitHub Pages</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
