import testeur from "../assets/test.jpg";
import dupas from "../assets/dupas.jpg";
import keo from "../assets/keo.jpg";
import logistique from "../assets/logistique.jpg";
import appro from "../assets/appro.png";
import securite from "../assets/securite.jpg";
import autodidacte from "../assets/autodidacte.jpg";
import ms from "../assets/ms.jpg";
import java from "../assets/java.png";
import licence from "../assets/licence.jpg";
import dut from "../assets/dut.jpg";
import build from "../assets/build.jpg";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.webp";

const articlesData = [
  {
    id: 1,
    title: ``,
    content: `Bonjour et bienvenue sur mon portfolio professionnel en ligne ! 
    Je suis Thomas, développeur web junior et testeur, passionné par l’univers du Web et des nouvelles technologies. 
    En explorant ces composants, je partage mon parcours, mes formations, mes compétences et réalisations dans le domaine du développement.
    Mon objectif est de créer une expérience numérique en mettant l'accent sur mon savoir faire et ma maîtrise des langages de programmation. Que ce soit à travers le développement de logiciels, la conception d'interfaces utilisateur ou la gestion de projets, je m'efforce toujours d'atteindre l'excellence.
    Naviguez à travers les différentes sections de mon portfolio pour en savoir plus sur mon parcours professionnel, mes projets passés et mes compétences techniques. Si vous avez des questions ou si vous souhaitez discuter d'une collaboration potentielle, n'hésitez pas à me contacter.
    Merci de prendre le temps de découvrir mon travail. J'espère que vous trouverez ici un aperçu inspirant de ce que je peux apporter à votre équipe ou à votre projet.
    Bien à vous,
    Thomas Vandemeulebroucke`,
    category: "Accueil",
  },
  {
    id: 4,
    title: `Testeur de logiciels`,
    img: testeur,
    date: `Juin à Juillet 2023`,
    content: `Durant ma formation de Testeur de logiciels avec l'AFPA, j'ai eu l'occasion de participer a un stage en entreprise et c'est l'entreprise WAAT (solution de recharge sécurisée) qui m'a donné l'opportunité de participer activement sur les thèmes suivants :
    - Tests en boîte noire (fonctionnels et non-fonctionnels).
    - Participation à la digitalisation des processus opérationnels et réunions de projets.
    - Initiation WordPress / reporting Excel`,
    category: "Expérience",
  },
  {
    id: 5,
    title: `Agent d'exploitation`,
    img: dupas,
    date: `2021`,
    content: `En tant qu'agent d'exploitation chez Voyage Dupas et Lebeda, j'ai pu être multitaches, en voici quelques unes : 
    - responsable planning
    - gestion du parc autocar
    - mise en place et organisation de la production
    - recrutement et management`,
    category: "Expérience",
  },
  {
    id: 6,
    title: `Agent d'exploitation`,
    img: keo,
    date: `2018 à 2021`,
    content: `Keolis Westeel est une entreprise formatrice dans laquelle je suis devenu agent d'exploitation puis rapidement vu endossé le rôle de chef de centre dans l'Aisne. Un métier qui demande une grande polyvalence, voici une liste non exhaustive de mes missions :
    - management
    - analyse des données
    - organisation du parc 
    - planning
    - étude et méthode
    - accidentologie
    - entretien professionnel
    - réunion de coordination`,
    category: "Expérience",
  },
  {
    id: 7,
    title: `Logistique`,
    img: logistique,
    date: `2016 à 2018`,
    content: `Adlis fournisseur de services d'impression numérique m'a accueillie en tant qu'operateur polyvalent logistique. Pour résumer mon role, rien de plus simple, tout est dans le titre... Au besoin, je pouvais intervenir sur l'ensemble de la chaine de logistique, allant ainsi de la réception des matières premières jusqu'à l'expédition des produits finis, en passant par la chaine de production. Voici quelques exemples :
    - expédition 
    - réception des marchandises 
    - gestion des stocks 
    - contrôle qualité
    - management de projet`,
    category: "Expérience",
  },
  {
    id: 8,
    title: `Approvisionneur`,
    img: appro,
    date: `2015 à 2016`,
    content: `Je garde de bons souvenir de mon poste en tant qu'approvisionneur chez Cristal. Pour simplifier ce role, je peux dire que c'est la personne cachée derrière nos distributeurs automatiques. C'est un métier physique et responsable, en voici les raisons :
    - gestion de stock du véhicule
    - approvisionnement des machines
    - récupération de la monnaie
    - entretient des distributeurs`,
    category: "Expérience",
  },
  {
    id: 9,
    title: `Sécurité`,
    img: securite,
    date: `2003 à 2014`,
    content: `Mon premier emploi est agent de sécurité chez ACT, travaillant les soirs et week-ends tout en poursuivant mes études jusqu'au BAC Commerce. J'y appris les bons et mauvais côté de la vie, un emploi qui a forgé mon caractère et permis de passé d'agent de sécurité à responsable, voici quelques unes de mes missions :
    - gardiennage
    - intervention
    - alarme
    - video surveillance
    - planning collaborateur
    - relation client`,
    category: "Expérience",
  },
  {
    id: 10,
    title: `Autodidacte`,
    img: autodidacte,
    date: `2023 à aujourd'hui`,
    content: `Après avoir effectué plusieurs formations dans le domaine du développement et en attendant de trouver l'entreprise qui me correspond. 
    Je continue ma montée en compétences en explorant diverses ressources disponibles à ma portée. 
    Le web est devenu ma bibliothèque principale où je puise des connaissances, que ce soit sur des plateformes telles qu'OpenClassrooms, dans les documentations officielles, auprès de créateurs de contenu sur YouTube, et bien d'autres encore... 
    
    Les compétences développées :
    - Algo  
    - Github
    - Pages Web dynamique JS
    - Full Stack Node.js / Express / MongoDB
    - React  
    - Angular`,
    category: "Formation",
  },
  {
    id: 11,
    title: `Testeur de logiciels`,
    img: testeur,
    date: `Avril à Juillet 2023`,
    content: `De part ma nature perfectionniste, j'ai entrepris cette formation avec l'AFPA afin d'acquérir des fondations solides et rien de tel que la qualité et le test pour y parvenir.
    Ainsi j'ai pu ajouté la certification ISTQB à mes bagages.
    
    Les compétences développées :
    - test unitaire
    - test fonctionnels, automatisés 
    - test de performances 
    - Squash  
    - Allure  
    - Selenium 
    - Cucumber`,
    category: "Formation",
  },
  {
    id: 12,
    title: `MS Développement applications`,
    img: ms,
    date: `Février à Avril 2023`,
    content: `Reprise des notions de base en développement avec l'AFPA, avec découverte de nouveaux langages.
    
    Compétences développées :
    - algorithme
    - POO
    - MCD au MLD 
    - requête SQL
    - Scrum
    - Java 17 
    - JavaScript 
    - Python 3 `,
    category: "Formation",
  },
  {
    id: 13,
    title: `Développeur Java EE`,
    img: java,
    date: `2022`,
    content: `Début de ma reconversion professionnelle avec l'AFPA et Aston pour devenir développeur Java. Dans cette passionnante aventure, je m'immerge dans un univers fascinant composé de langages, de frameworks et de technologies avancées. Cette formation intensive représente bien plus qu'une simple transition de carrière, c'est une opportunité d'explorer les profondeurs du développement logiciel, de maîtriser le langage Java et d'acquérir une expertise approfondie dans le monde complexe de Java EE. 
    Je suis à présent stimulé chaque jour par le défi intellectuel de résoudre des problèmes, de concevoir des solutions innovantes et de contribuer à la réalisation de projets qui auront un impact tangible.  
    
    Compétences développées :
    - Front-End > HTML / CSS / JS / Angular
    - Back-End > Java 17 / Spring / Hibernate / REST
    - Database > MySQL / Jmerise
    - Cadre > Méthode Agile / Framework SCRUM / Figma / Trello
    - Devops > Docker / Microsoft Azure
    - Projet fil rouge HerdTrack`,
    category: "Formation",
  },
  {
    id: 14,
    title: `Licence management transport`,
    img: licence,
    date: `2018 à 2019`,
    content: `Formation visant à me former dans le transport de voyageurs afin de devenir agent d'exploitation en la matière
    
    Compétences développées :
    - droit et législation en vigueur
    - savoir théoriques du quotidien exploitant
    - solution aux problèmatiques dans la gestion
    - calcule des divers coûts d'exploitation
    - stratégie de développement d'entreprise`,
    category: "Formation",
  },
  {
    id: 15,
    title: `DUT logistique et transport`,
    img: dut,
    date: `2016 à 2018`,
    content: `L'objectif est de former des professionnels capables de diriger un centre de profit, d’assumer des responsabilités dans les services logistiques des entreprises commerciales et industrielles ainsi que dans les services d’exploitation des transports.

    Compétences développées :
    - fondement et concept de la logistique
    - exploitation d'une entreprise de transport routier de marchandise 
    - exploitation d'une entreprise de transport routier de voyageurs
    `,
    category: "Formation",
  },
  {
    id: 16,
    title: `In build`,
    img: build,
    date: `2024 à aujourd'hui`,
    content: `Parceque je cherche à évolué et parfaire mes connaissances, d'autres projets viendront encore s'ajouter à la liste`,
    category: "Projet",
  },
  {
    id: 17,
    title: `React`,
    img: react,
    date: `2023`,
    content: `Découvrir la manipulation de la bibliothèque React s'avère être une démarche enrichissante pour concrétiser mes connaissances en JavaScript. Ce parcours m'a permis d'explorer la logique du routing, les hooks, et toutes les fonctionnalités interactives qui font de React l'une des bibliothèques JavaScript les plus prisées pour la construction d'interfaces web.
    
    Mon apprentissage s'est déployé en plusieurs phases :
    - Acquérir les fondamentaux via des cours sur OpenClassrooms, en mettant directement en pratique les concepts appris.
    - Elargir ma compréhension en visionnant des vidéos de créateurs sur YouTube, en complément des documents officiels qui ont renforcé et étayé leurs explications.
    - Mise en œuvre de mes connaissances par la création d'un projet simple, suivi de la réalisation de mon portfolio, que vous explorez actuellement (liens vers les dépôts GitHub en bas de carte).
    
    Compétences acquises :
    - Établissement des bases d'une application avec Create React App.
    - Gestion du style et du contenu pour une interface attrayante.
    - Utilisation des hooks useState et useEffect pour une gestion efficace de l'état et des effets secondaires.
    - Manipulation des props pour la communication entre composants.
    `,
    liens: [
      {
        titre: "lien projet React OpenClassrooms",
        url: "https://github.com/ThomasVdbk/ecommerce_react/tree/develop",
      },
      {
        titre: "lien projet React simple",
        url: "https://github.com/ThomasVdbk/simple-project-react.git",
      },
      {
        titre: "lien projet React portfolio",
        url: "https://github.com/ThomasVdbk/my-eportfolio/tree/develop",
      },
    ],
    category: "Projet",
  },
  {
    id: 18,
    title: `JavaScript`,
    img: javascript,
    date: `2023`,
    content: `JavaScript est un incontournable dans le monde de la programmation en raison de sa prédominance et de sa polyvalence, tant du côté frontend que du côté backend avec Node.js. J'apprécie travailler avec ce langage au quotidien, même si parfois je ressens le manque du côté rigoureux de Java dans son développement. Néanmoins, JavaScript reste l'un des langages les plus populaires, offrant un accès à un vaste éventail de frameworks et de bibliothèques.
    En ce qui concerne l'apprentissage de JavaScript, rien de plus simple : il suffit de se laisser guider et de pratiquer, pratiquer, et encore pratiquer, un peu comme pour tous les langages. Comme en témoigne la liste de mes projets utilisant ce langage ci-dessous, la manipulation est la clé, et je suis loin d'en avoir fini.
    
    Mes projets basés sur JavaScript :
    - random_gift (thème phare de Noel: le tirage au sort de cadeau)
    - my-eportfolio (le portfolio que vous consultez actuellement)
    - ecommerce_react (développé en apprentissage avec OpenClassrooms)
    - simple-project-react (pour l'apprentissage simpliste de react)
    - go-fullstack-node-express-mongodb (tout est dans le titre, développé en apprentissage avec OpenClassrooms)
    (Vous trouverez les liens vers les dépôts GitHub en bas de la carte)
    `,
    liens: [
      {
        titre: "lien projet random_gift",
        url: "https://github.com/ThomasVdbk/random_gift/tree/develop",
      },
      {
        titre: "lien projet my-eportfolio",
        url: "https://github.com/ThomasVdbk/my-eportfolio/tree/develop",
      },
      {
        titre: "lien projet ecommerce_react",
        url: "https://github.com/ThomasVdbk/ecommerce_react/tree/develop",
      },
      {
        titre: "lien projet simple-project-react",
        url: "https://github.com/ThomasVdbk/simple-project-react.git",
      },
      {
        titre: "lien projet go-fullstack-node-express-mongodb",
        url: "https://github.com/ThomasVdbk/go-fullstack-node-express-mongodb/tree/develop",
      },
    ],
    category: "Projet",
  },
  {
    id: 19,
    title: `HTML CSS`,
    img: html,
    date: `2022 à 2023`,
    content: `La vitrine de la grande majorité des sites web est constituée de langage de balises, qu'elles soient pair ou orpheline, stylisées avec des propriétés CSS. Ce fut ma première expérience lors de ma découverte initiale, et j'ai tout de suite adhéré. Simple, intuitif, avec des résultats concrets presque immédiats, on ne peut que prendre du plaisir à les manipuler.
    En ce qui concerne les projets, tous en sont composés, donc la manipulation pour quelqu'un comme moi, qui débute, est forcément quotidienne.
    
    Mes projets basés sur HTML & CSS :
    - random_gift (thème phare de Noel: le tirage au sort de cadeau)
    - my-eportfolio (le portfolio que vous consultez actuellement)
    - ecommerce_react (développé en apprentissage avec OpenClassrooms)
    - simple-project-react (pour l'apprentissage simpliste de react)
    - go-fullstack-node-express-mongodb (tout est dans le titre, développé en apprentissage avec OpenClassrooms)
    (Vous trouverez les liens vers les dépôts GitHub en bas de la carte)
    `,
    liens: [
      {
        titre: "lien projet random_gift",
        url: "https://github.com/ThomasVdbk/random_gift/tree/develop",
      },
      {
        titre: "lien projet my-eportfolio",
        url: "https://github.com/ThomasVdbk/my-eportfolio/tree/develop",
      },
      {
        titre: "lien projet ecommerce_react",
        url: "https://github.com/ThomasVdbk/ecommerce_react/tree/develop",
      },
      {
        titre: "lien projet simple-project-react",
        url: "https://github.com/ThomasVdbk/simple-project-react.git",
      },
      {
        titre: "lien projet go-fullstack-node-express-mongodb",
        url: "https://github.com/ThomasVdbk/go-fullstack-node-express-mongodb/tree/develop",
      },
    ],
    category: "Projet",
  },
  {
    id: 20,
    title: `Java`,
    img: java,
    date: `2022`,
    content: `Le socle de nombreux logiciels, le langage Java offre une robustesse et une portabilité exceptionnelles. Son utilisation m'a été révélée lors de mes premiers pas dans le monde du développement, et depuis, j'ai été séduit par sa structure élégante et son approche orientée objet.
    Java, c'est plus qu'un simple langage. C'est une plateforme complète qui permet de construire des applications variées, de la programmation côté serveur à la création d'applications mobiles Android. La syntaxe claire et la gestion efficace de la mémoire en font un choix de prédilection pour de nombreux développeurs.
    En écrivant ces mots, je réalise que je n'avais pas à l'époque adopté l'habitude d'utiliser GitHub. Je compte bien remédier à cela à l'avenir en développant une gamme diversifiée d'applications.
    
    Projet Java sur Github :
    - HerdtrackBackEnd: projet fil rouge de ma formation chez Aston, développé avec trois camarades, il avait pour vocation de gérer l'exploitation bovine, en prenant en compte le troupeau, les parcs, et évoluant avec une gestion du carnet de santé par animal. `,
    liens: [
      {
        titre: "lien projet HerdtrackBackEnd",
        url: "https://github.com/ThomasVdbk/HerdtrackBackEnd/tree/master",
      },
    ],
    category: "Projet",
  },
];

export default articlesData;
