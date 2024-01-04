import React from "react";
import { useState, useEffect } from "react";
import articlesData from "../datas/datas";
import "../styles/categoriesStyle.css";

function Categories({ currentSection }) {
  const [categoryArticles, setCategoryArticles] = useState([]);

  useEffect(() => {
    const filteredArticles = articlesData.filter(
      (article) => article.category === currentSection
    );
    setCategoryArticles(filteredArticles);
  }, [currentSection]);

  const numberOfArticles = categoryArticles.length;

  return (
    <div>
      <h2>{currentSection} Component</h2>
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
