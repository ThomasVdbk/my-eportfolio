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

  const pdfFileName = "Thomas_Vandemeulebroucke_CV.pdf";
  const pdfFileUrl = process.env.PUBLIC_URL + "/" + pdfFileName;

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
        <p>Liens rapides :</p>
        <ul className="navigation-list">
          <li
            className="footer-li"
            onClick={() => handleButtonClick("Accueil")}
          >
            Accueil
          </li>
          <li
            className="footer-li"
            onClick={() => handleButtonClick("Expérience")}
          >
            Parcours professionnel
          </li>
          <li
            className="footer-li"
            onClick={() => handleButtonClick("Formation")}
          >
            Formations & Compétences
          </li>
          <li className="footer-li" onClick={() => handleButtonClick("Projet")}>
            Mes projets
          </li>
          <li className="footer-li">
            <a href={pdfFileUrl} download={pdfFileName}>
              Télécharger mon CV
            </a>
          </li>
        </ul>
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
