import React, { useRef } from "react";
import "../styles/cardStyle.css";

function Card({ title, img, content, isSingle, expanded, onClick }) {
  const cardRef = useRef(null);

  const handleCardClick = () => {
    if (!isSingle && onClick) {
      onClick(cardRef);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`article-card ${isSingle ? "single-article" : ""} ${
        expanded ? "expanded" : ""
      }`}
      onClick={handleCardClick}
    >
      <img className="img" src={img} alt={title} />
      <h3 className="header">{title}</h3>
      {content && <p className="p">{content}</p>}
    </div>
  );
}

export default Card;
