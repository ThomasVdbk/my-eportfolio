import React from "react";
import Categories from "./Categories";

function Body({ currentSection }) {
  return (
    <div className="body-container">
      <Categories currentSection={currentSection} />
    </div>
  );
}

export default Body;
