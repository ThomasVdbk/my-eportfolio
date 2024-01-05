import React, { useState } from "react";
import "../styles/cardStyle.css";

function Card({ title, content, isSingle }) {
  const truncatedContent = isSingle ? content : content.slice(0, 100) + "...";
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`article-card ${isSingle ? "single-article" : ""} ${
        expanded ? "expanded" : ""
      }`}
    >
      <h3 className="header">{title}</h3>
      <p>{expanded ? content : truncatedContent}</p>
      {isSingle || (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Réduire" : "Étendre"}
        </button>
      )}
    </div>
  );
}

export default Card;
