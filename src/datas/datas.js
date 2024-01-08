import accueil from "../assets/accueil.jpg";
import testeur from "../assets/test.jpg";
import dupas from "../assets/dupas.jpg";
import keo from "../assets/keo.jpg";
import logistique from "../assets/logistique.jpg";
import appro from "../assets/appro.png";
import securite from "../assets/securite.jpg";

const articlesData = [
  {
    id: 1,
    title: ``,
    img: accueil,
    content: `Bienvenue dans mon eportfolio
    `,
    category: "Accueil",
  },
  // {
  //   id: 2,
  //   title: ``,
  //   content: ``,
  //   category: "Accueil",
  // },
  // {
  //   id: 3,
  //   title: ``,
  //   content: ``,
  //   category: "Accueil",
  // },
  {
    id: 4,
    title: `Testeur logiciel`,
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
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Formation",
  },
  {
    id: 11,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Formation",
  },
  {
    id: 12,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Formation",
  },
  {
    id: 13,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Formation",
  },
  {
    id: 14,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Formation",
  },
  {
    id: 15,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Formation",
  },
  {
    id: 16,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Projet",
  },
  {
    id: 17,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Projet",
  },
  {
    id: 18,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Projet",
  },
  {
    id: 19,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Projet",
  },
  {
    id: 20,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Projet",
  },
  {
    id: 21,
    title: `Sécurité`,
    img: `Sécurité`,
    date: `2003 à 2014`,
    content: ``,
    category: "Projet",
  },
];

export default articlesData;
