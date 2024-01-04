import React from "react";
import Categories from "./Categories";
import "../styles/bodyStyle.css";

function Body({ currentSection }) {
  return (
    <div className="body-container">
      <Categories currentSection={currentSection} />
    </div>
  );
}

export default Body;
