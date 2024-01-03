import React from "react";
import { useState } from "react";
import Accueil from "./Accueil";
import Experience from "./Experience";
import Travail from "./Travail";

function Body({ currentSection }) {
  return (
    <div className="body-container">
      {currentSection === "Accueil" && <Accueil />}
      {currentSection === "Expérience" && <Experience />}
      {currentSection === "Travail" && <Travail />}
    </div>
  );
}

export default Body;
