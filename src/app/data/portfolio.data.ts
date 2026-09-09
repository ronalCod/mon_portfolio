/**
 * Contenus statiques du portfolio (issus du handoff de design et du CV).
 * Aucune API : des tableaux typés suffisent.
 */

/** Drapeau de configuration : afficher le numéro de téléphone sur la page contact. */
export const SITE_CONFIG = {
  showPhone: true,
} as const;

export const IDENTITY = {
  firstName: 'Ronaldo',
  lastName: 'Yonlonfin',
  availability: 'Développeur web full-stack · Cotonou, Bénin',
  email: 'ronaldo.yonlonfin@epitech.eu',
  phone: '+229 01 66 12 69 44',
  phoneHref: 'tel:+2290166126944',
  location: 'Cotonou, Bénin',
  linkedin: 'https://linkedin.com/in/ronaldo-yonlonfin-514a64177',
  github: 'https://github.com/ronalCod',
  githubLabel: 'github.com/ronalCod',
  cv: 'cv-ronaldo-yonlonfin.pdf',
} as const;

export const HERO = {
  leadStrong: 'Je construis des sites et des applications web qui font gagner du temps aux équipes.',
  lead:
    "Je m'occupe de ce que l'on voit à l'écran comme de ce qui tourne derrière. Une dizaine de " +
    "sites en ligne, une expérience en banque, en institution publique et en agence.",
};

export interface Stat {
  value: string;
  label: string;
}
export const STATS: Stat[] = [
  { value: '10+', label: "sites en ligne aujourd'hui" },
  { value: '5 ans', label: "d'expérience en entreprise, banque et administration" },
  { value: '6', label: 'personnes pilotées sur un projet public' },
];

export interface SiteLink {
  name: string;
  note: string;
  url: string;
}
export const SITES: SiteLink[] = [
  { name: 'Digit Consults', note: "Site d'une agence digitale · Cotonou", url: 'https://digitconsults.com/' },
  {
    name: 'Ministère du Travail',
    note: 'Portail public · République du Bénin',
    url: 'https://www.travail.gouv.bj/accueil',
  },
  {
    name: 'Rose-Croix Afrique',
    note: 'Site associatif · antenne Bénin',
    url: 'https://www.rose-croix-afrique.org/benin/',
  },
  { name: 'Assouka Magazine', note: 'Magazine en ligne · presse', url: 'https://assoukamagazine.com/' },
];

export interface ParcoursColumn {
  period: string;
  role: string;
  org: string;
  current: boolean;
}
export const PARCOURS_COLUMNS: ParcoursColumn[] = [
  { period: '2026 —', role: 'Développeur full-stack', org: 'BestCash', current: true },
  {
    period: '2025 — 2026',
    role: 'Développeur',
    org: 'Banking and Financial Technologies',
    current: false,
  },
  { period: '2024 — 2025', role: 'Chef de projets (intérim)', org: 'Ministère du Travail', current: false },
  { period: '2022 — 2024', role: 'Développeur front-end', org: 'Digit Consults', current: false },
];

export interface ClientProject {
  name: string;
  kind: string;
  description: string;
  role: string;
  url: string;
  urlLabel: string;
}
export const CLIENT_PROJECTS: ClientProject[] = [
  {
    name: 'Digit Consults',
    kind: 'agence de transformation digitale',
    description:
      "Le site vitrine de l'agence : services, équipe, projets réalisés et prise de contact.",
    role: "Mon rôle : intégration des pages et mise en ligne, en lien avec l'équipe design.",
    url: 'https://digitconsults.com/',
    urlLabel: 'digitconsults.com',
  },
  {
    name: 'Ministère du Travail',
    kind: 'portail public · Bénin',
    description:
      "Le portail du Ministère du Travail et de la Fonction Publique : actualités, démarches et " +
      "informations pour les agents de l'État.",
    role:
      'Mon rôle : développement des pages et coordination du déploiement avec une équipe de 6 personnes.',
    url: 'https://www.travail.gouv.bj/accueil',
    urlLabel: 'travail.gouv.bj',
  },
  {
    name: 'Rose-Croix Afrique',
    kind: 'site associatif · antenne Bénin',
    description:
      "L'espace en ligne de l'antenne béninoise : présentation, activités et informations pour les " +
      'membres.',
    role: 'Mon rôle : intégration du site et mise en place des pages de contenu.',
    url: 'https://www.rose-croix-afrique.org/benin/',
    urlLabel: 'rose-croix-afrique.org',
  },
  {
    name: 'Assouka Magazine',
    kind: 'magazine en ligne · presse',
    description:
      "Un magazine en ligne : publication d'articles, rubriques et lecture confortable sur téléphone.",
    role: "Mon rôle : intégration des gabarits d'articles et affichage des contenus.",
    url: 'https://assoukamagazine.com/',
    urlLabel: 'assoukamagazine.com',
  },
];

export interface PersonalProject {
  name: string;
  stack: string;
  description: string;
}
export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    name: 'Gestion des finances personnelles',
    stack: 'Django · Angular · API REST',
    description: "Suivre ses dépenses et son épargne mois après mois, et savoir où part l'argent.",
  },
  {
    name: 'PDF Scanner',
    stack: 'React Native',
    description:
      'Scanner un document avec son téléphone et le récupérer en PDF propre, sans photocopieuse.',
  },
  {
    name: 'CSV Convert',
    stack: 'Python',
    description:
      "Déposer un tableau de données et récupérer le format attendu par l'outil d'en face. Une heure " +
      'de manipulation devient quelques secondes.',
  },
];

export interface Experience {
  period: string;
  title: string;
  description: string;
  current: boolean;
}
export const EXPERIENCES: Experience[] = [
  {
    period: 'Depuis 2026',
    title: 'Développeur full-stack · BestCash',
    description:
      "Applications métier de l'entreprise, et mise en place de l'agrégateur de paiement : le service " +
      "qui permet d'encaisser depuis plusieurs moyens de paiement au même endroit.",
    current: true,
  },
  {
    period: 'Mai 2025 — juil. 2026',
    title: 'Développeur · Banking and Financial Technologies',
    description:
      "Modules d'un logiciel bancaire (comptes, opérations) et outils d'automatisation des processus " +
      'internes. Tests et documentation à chaque livraison.',
    current: false,
  },
  {
    period: 'Nov. 2024 — avr. 2025',
    title: 'Chef de projets (intérim) · Ministère du Travail et de la Fonction Publique',
    description:
      "Pilotage d'une équipe de 6 personnes pour déployer un système d'information institutionnel : " +
      "recueil des besoins, coordination, rapports d'avancement.",
    current: false,
  },
  {
    period: 'Août 2022 — juin 2024',
    title: 'Développeur front-end · Digit Consults',
    description:
      "Interfaces web de la maquette jusqu'à la mise en ligne, en lien avec l'équipe qui gère les " +
      'données. La plupart des sites listés en réalisations viennent de cette période.',
    current: false,
  },
];

export interface ToolGroup {
  label: string;
  blurb: string;
  lines: string[];
}
export const TOOL_GROUPS: ToolGroup[] = [
  {
    label: 'Ce qui se voit',
    blurb: "Les écrans et l'expérience utilisateur.",
    lines: ['HTML · CSS · JavaScript', 'React.js · Angular'],
  },
  {
    label: 'Ce qui tourne derrière',
    blurb: 'La logique, les règles métier, les données.',
    lines: ['Python · Django · Flask', 'Frappe · Laravel · NestJS'],
  },
  {
    label: 'Où vivent les données',
    blurb: 'Stockage fiable et interrogeable.',
    lines: ['MySQL · PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Livrer proprement',
    blurb: 'Travail en équipe, mises en production sans casse.',
    lines: ['Git · Docker · CI/CD', 'Jira · Agile/Scrum'],
  },
];

export interface Formation {
  period: string;
  title: string;
  school: string;
  note: string;
  current: boolean;
}
export const FORMATIONS: Formation[] = [
  {
    period: '',
    title: 'Master informatique décisionnelle',
    school: 'ENEAM · Cotonou',
    note: 'Cours du soir, en parallèle du travail.',
    current: true,
  },
  {
    period: '2024 — 2025',
    title: 'Coding Academy, développement full-stack',
    school: 'EPITECH Bénin',
    note: 'Programme intensif de 12 mois.',
    current: false,
  },
  {
    period: '2024',
    title: 'Certification product management',
    school: 'EPITECH Bénin',
    note: 'Cadrer un produit, pas seulement le coder.',
    current: false,
  },
  {
    period: '2022',
    title: 'Licence informatique de gestion',
    school: 'ENEAM · Cotonou',
    note: "Informatique et pilotage d'organisation.",
    current: false,
  },
];

export interface LanguageSkill {
  name: string;
  level: string;
  /** true → niveau affiché en accent (courant), false → en gris (B2). */
  levelAccent: boolean;
  /** Segments remplis sur 5. */
  filled: number;
  usage: string;
}
export const LANGUAGES: LanguageSkill[] = [
  {
    name: 'Français',
    level: 'courant',
    levelAccent: true,
    filled: 5,
    usage: "Langue de travail au quotidien, à l'écrit comme à l'oral.",
  },
  {
    name: 'Fon',
    level: 'courant',
    levelAccent: true,
    filled: 5,
    usage: 'Pour échanger directement avec les utilisateurs sur le terrain.',
  },
  {
    name: 'Anglais',
    level: 'B2',
    levelAccent: false,
    filled: 3,
    usage: 'Documentation technique, réunions et échanges écrits.',
  },
];
