import React from "react";
import articlesData from "../datas/datas";

function Experience() {
  const experienceArticles = articlesData.filter(
    (article) => article.category === "Expérience"
  );
  return (
    <div>
      <h2>Experience Component</h2>
      {experienceArticles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
