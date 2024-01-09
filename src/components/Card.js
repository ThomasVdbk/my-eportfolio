import React, { useRef } from "react";
import "../styles/cardStyle.css";

function Card({
  title,
  img,
  date,
  content,
  lien,
  isSingle,
  expanded,
  onClick,
}) {
  const cardRef = useRef(null);

  const handleCardClick = () => {
    if (!isSingle && onClick) {
      onClick(cardRef);
    }
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
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
      {lien && Array.isArray(lien) && (
        <div className="lien">
          {lien.map(({ titre, url }, index) => (
            <li key={index}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                {titre}
              </a>
            </li>
          ))}
        </div>
      )}
      {/* <pre className="p">{content}</pre> */}
      {/* {content && <p className="p">{content}</p>} */}
    </div>
  );
}

export default Card;
