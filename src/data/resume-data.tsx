import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  OcapiatLogo,
  OmicroneLogo,
  NinksLogo,
  PortfolioLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Amine Djennadi",
  initials: "AD",
  location: "Colombes, France",
  locationLink: "https://www.google.com/maps/place/92700+Colombes",
  about: "Développeur Web, actuellement chez Ocapiat",
  summary:
    "En ce moment, J'aime travailler avec TypeScript, React, Angular. Curieux et polyvalent, je suis soucieux de développer constamment mes compétences afin d'assurer mon évolution professionnelle et personnelle, Je suis confiant dans ma capacité à proposer des idées intéressantes et valorisées dans différents environnements techniques.",
  avatarUrl: "/profile.jpg",
  personalWebsiteUrl: "https://amidjenn.netlify.app/home",
  contact: {
    email: "amine.djennadi@hotmail.fr",
    tel: "+33686899626",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/amine-maker",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amine-djennadi/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Sup de Vinci, La Défense",
      degree: "Master expert en système d'informations Option développement",
      start: "2021",
      end: "2023",
    },
    {
      school: "Sup de Vinci, La Défense",
      degree: "Bachelor expert en système d'informations Option développement",
      start: "2020",
      end: "2021",
    },
    {
      school: "Lycée Turgot, Paris",
      degree: "BTS SIO Option SLAM",
      start: "2018",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Ocapiat",
      link: "https://www.ocapiat.fr/",
      badges: ["Actuel"],
      title: "Développeur Web",
      logo: OcapiatLogo,
      start: "Janvier 2021",
      end: "Actuel",
      description:
        "Maintenance et développement d'outils ainsi que d'extranets destinés aux entreprises et organismes de formation. En parallèle, je travaille sur le développement d'une application complète de gestion des entrées et sorties, ainsi que des rendez-vous extérieurs.",
    },
    {
      company: "Omicrone",
      link: "https://omicrone.fr/fr/",
      badges: ["Stage"],
      title: "Développeur Web",
      logo: OmicroneLogo,
      start: "Décembre 2019",
      end: "Février 2020",
      description:
        "Développement d'une application web de gestion des commissions et de la trésorerie.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Angular",
    "Vite",
    "Tailwind",
    "RxJs",
  ],
  projects: [
    {
      title: "Ninks",
      techStack: [
        "En cours",
        "Side project",
        "TypeScript",
        "React",
        "Supabase",
        "Tailwind",
        "shadcn",
        "Vite",
      ],
      description: "Plateforme de regroupement de liens et réseaux sociaux",
      logo: NinksLogo,
      link: {
        label: "Ninks",
        href: "https://ninks.vercel.app/",
      },
    },
    {
      title: "Ocapeek",
      techStack: [
        "TypeScript",
        "Angular",
        "Tailwind",
        "C#",
        ".NET",
        "SQLServer",
      ],
      description:
        "Application interne dédiée à la gestion des entrées et sorties en relation avec les sites physique d'Ocapiat, incluant une fonctionnalité de gestion des rendez-vous extérieurs.",
      logo: OcapiatLogo,
    },
    {
      title: "SDS Streaming",
      techStack: ["Projet d'école", "TypeScript", "Angular", "TMDB"],
      description: "Plateforme basée sur l'API de TMDB",
      logo: null,
      link: {
        label: "sds-streaming.netlify.app",
        href: "https://sds-streaming.netlify.app/",
      },
    },
    {
      title: "Site personnel",
      techStack: ["React", "TypeScript", "Firebase", "Tailwind"],
      description: "Création de mon portfolio regroupant mes travaux",
      logo: PortfolioLogo,
      link: {
        label: "amidjenn.netlify.app",
        href: "https://amidjenn.netlify.app/",
      },
    },
    {
      title: "Commission",
      techStack: ["PHP", "Redbean", "MySQL"],
      description:
        "Développement d'une application web de gestion des commissions et de la trésorerie.",
      logo: null,
    },
  ],
} as const;
