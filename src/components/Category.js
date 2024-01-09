import React, { useState, useEffect } from "react";
import Card from "./Card";
import articlesData from "../datas/datas";
import "../styles/categoryStyle.css";

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
        ? ""
        : currentSection === "Expérience"
        ? "Ici, on parle de mes expériences professionnelles"
        : currentSection === "Formation"
        ? "Vous êtes dans la section Formations & Compétences"
        : currentSection === "Projet"
        ? "Quelques exemples de mes travaux"
        : ""
    );
  }, [currentSection]);

  const handleCardClick = (clickedId, cardRef) => {
    setCategoryArticles((prevArticles) =>
      prevArticles.map((article) => ({
        ...article,
        expanded: article.id === clickedId ? !article.expanded : false,
      }))
    );
    setTimeout(() => {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
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
            date={article.date}
            content={article.content}
            lien={article.liens}
            isSingle={categoryArticles.length === 1}
            expanded={article.expanded}
            onClick={(cardRef) => handleCardClick(article.id, cardRef)}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
