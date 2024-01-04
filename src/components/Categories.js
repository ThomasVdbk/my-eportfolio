import React from "react";
import articlesData from "../datas/datas";

function Categories({ currentSection }) {
  const categoryArticles = articlesData.filter(
    (article) => article.category === currentSection
  );
  return (
    <div>
      <h2>{currentSection} Component</h2>
      {categoryArticles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
