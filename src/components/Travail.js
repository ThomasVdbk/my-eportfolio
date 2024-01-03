import React from "react";
import articlesData from "../datas/datas";

function Travail() {
  const travailArticles = articlesData.filter(
    (article) => article.category === "Travail"
  );
  return (
    <div>
      <h2>Travail Component</h2>
      {travailArticles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Travail;
