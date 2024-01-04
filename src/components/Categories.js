import React from "react";
import { useState, useEffect } from "react";
import articlesData from "../datas/datas";
import "../styles/categoriesStyle.css";

function Categories({ currentSection }) {
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const numberOfArticles = categoryArticles.length;

  useEffect(() => {
    const filteredArticles = articlesData.filter(
      (article) => article.category === currentSection
    );
    setCategoryArticles(filteredArticles);

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

  return (
    <div>
      <h2>{categoryTitle}</h2>
      <div className="card-container">
        {categoryArticles.map((article) => (
          <div
            className={`article-card ${
              numberOfArticles === 1 ? "single-article" : ""
            }`}
            key={article.id}
          >
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
