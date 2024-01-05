import React, { useState } from "react";

function Card({ title, content, isSingle }) {
  const truncatedContent = isSingle ? content : content.slice(0, 100) + "...";
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`article-card ${isSingle ? "single-article" : ""}`}>
      <h3>{title}</h3>
      <p>{truncatedContent}</p>
      {isSingle || (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Réduire" : "Étendre"}
        </button>
      )}
    </div>
  );
}

export default Card;
