import React from "react";
import Category from "./Category";
import "../styles/bodyStyle.css";

function Body({ currentSection }) {
  return (
    <div className="body-container">
      <Category currentSection={currentSection} />
    </div>
  );
}

export default Body;
