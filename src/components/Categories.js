import React from "react";
import articlesData from "../datas/datas";
import "../styles/categoriesStyle.css";

function Categories({ currentSection }) {
  const categoryArticles = articlesData.filter(
    (article) => article.category === currentSection
  );
  return (
    <div>
      <h2>{currentSection} Component</h2>
      <div className="card-container">
        {categoryArticles.map((article) => (
          <div className="article-card" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
