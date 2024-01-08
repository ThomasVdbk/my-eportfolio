import React, { useRef } from "react";
import "../styles/cardStyle.css";

function Card({ title, img, date, content, isSingle, expanded, onClick }) {
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
      <h3 className="title">{title}</h3>
      <div className="date">{date}</div>
      <div className="p">
        {content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {/* <pre className="p">{content}</pre> */}
      {/* {content && <p className="p">{content}</p>} */}
    </div>
  );
}

export default Card;
