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
          <Card
            key={article.id}
            title={article.title}
            content={article.content}
            isSingle={categoryArticles.length === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
