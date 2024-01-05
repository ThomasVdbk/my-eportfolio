import React, { useRef } from "react";
import "../styles/cardStyle.css";

function Card({ title, img, content, isSingle, expanded, onClick }) {
  const truncatedContent = isSingle ? content : content.slice(0, 100) + "...";
  // const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  const handleCardClick = () => {
    if (!isSingle && onClick) {
      onClick();
    }

    if (!isSingle && !expanded) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
      <img src={img} alt={title} />
      <h3 className="header">{title}</h3>
      <p className={expanded ? "expanded-content" : "truncated-content"}>
        {expanded ? content : truncatedContent}
      </p>
    </div>
  );
}

export default Card;
