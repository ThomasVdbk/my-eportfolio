import React from "react";
import articlesData from "../datas/datas";

function Accueil() {
  const accueilArticles = articlesData.filter(
    (article) => article.category === "Accueil"
  );

  return (
    <div>
      <h2>Accueil Component</h2>
      {accueilArticles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Accueil;
