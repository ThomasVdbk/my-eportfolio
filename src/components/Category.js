import React, { useState, useEffect } from "react";
import Card from "./Card";
import articlesData from "../datas/datas";
import "../styles/categoriesStyle.css";

function Categories({ currentSection }) {
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    const filteredArticles = articlesData.filter(
      (article) => article.category === currentSection
    );

    const articlesWithExpanded = filteredArticles.map((article) => ({
      ...article,
      expanded: false,
    }));

    setCategoryArticles(articlesWithExpanded);

    setCategoryTitle(
      currentSection === "Accueil"
        ? "Articles d'accueil"
        : currentSection === "Expérience"
        ? "Articles d'expérience"
        : currentSection === "Travail"
        ? "Articles de travail"
        : ""
    );
  }, [currentSection]);

  const handleCardClick = (clickedId) => {
    setCategoryArticles((prevArticles) =>
      prevArticles.map((article) => ({
        ...article,
        expanded: article.id === clickedId ? !article.expanded : false,
      }))
    );
  };

  return (
    <div>
      <h2>{categoryTitle}</h2>
      <div className="card-container">
        {categoryArticles.map((article) => (
          <Card
            key={article.id}
            img={article.img}
            title={article.title}
            content={article.content}
            isSingle={categoryArticles.length === 1}
            expanded={article.expanded}
            onClick={() => handleCardClick(article.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
