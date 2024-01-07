import React from "react";
import Category from "./Category";
import "../styles/bodyStyle.css";

function Body({ currentSection }) {
  return (
    <body className="body-container">
      <Category currentSection={currentSection} />
    </body>
  );
}

export default Body;
