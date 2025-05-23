const skillsData = [
  {
    title: "front-end",
    listSkillsCategory: [
      "HTML",
      "CSS",
      "SASS",
      "LESS",
      "Bootstrap",
      "Bulma",
      "Pico",
      "AntD",
      "Javascript",
      "React",
      "Vue",
    ],
  },
  {
    title: "back-end / bdd / cicd",
    listSkillsCategory: [
      "Node",
      "Express",
      "EJS",
      "PUG",
      "PostgreSQL",
      "Airtable",
      "Firebase",
      "Render",
      "Vercel",
      "Gitlab",
      "Gitkraken",
    ],
  },
  {
    title: "les petits +",
    listSkillsCategory: ["Electron", "Linux", "Windows", "Unreal Engine 5", "Wordpress", "Scrum", "Suite Google"],
  },
  {
    title: "multimedias",
    listSkillsCategory: [
      "Photoshop",
      "Illustrator",
      "Lightroom",
      "After Effect",
      "Premiere Pro",
      "Sony Vegas Pro",
      "Figma",
      "Fusion 360",
      "FL Studio",
    ],
  },
];

const experiencesData = [
  {
    period: "2024 (Juillet) / En cours",
    title: "Développeur web - Freelance",
    description:
      "Intervention sur divers projets pour renforcer des équipes dans le besoin et assurer une veille technologique.",
    skills: ["Adaptabilité", "Diversité", "Polyvalence", "Organisation", "Travail d'équipe"],
    technologies: ["Vue", "Node", "Express", "Javascript", "HTML"],
  },
  {
    period: "2022 (Février) / 2024 (Mai)",
    title: "Tuteur pédagogique - O'clock",
    description:
      "Accompagnement et aide pédagogique auprès de personnes réalisant une reconversion professionnelle dans le milieu du développement web.",
    skills: ["Organisation", "Suivi de projet", "Partage des connaissance", "Autonomie", "Animation d'atelier"],
    technologies: ["React", "Node", "Express", "PostgreSQL", "EJS", "HTML", "CSS", "SASS"],
  },
  {
    period: "2020 (Février) / 2021 (Août)",
    title: "Développeur web - Avec.fr",
    description:
      "Application de mise en relation entre des praticiens et des patients à travers une prise de rendez-vous en ligne.",
    skills: ["Travail d'équipe", "SCRUM"],
    technologies: ["React", "Node", "Express", "Firebase", "HTML/JSX", "AntD", "LESS"],
  },
  {
    period: "Septembre 2019",
    title: "Projet fin de formation",
    description:
      "Projet de fin de formation ayant pour but de mettre en relation des équipes e-sport de même niveau afin de procéder à des entraînements en jeu.",
    skills: ["Travaille d'équipe", "SCRUM", "Communication", "Product Owner"],
    technologies: ["HTML/jsx", "SASS", "React", "Symfony", "SQL"],
  },
  {
    period: "Anglais parlé & écrit",
    title: "Niveau moyen +",
    description:
      "J'apprends l'anglais depuis plusieurs années à l'aide d'applications et de la documentation liée aux langages que j'utilise. J'ai une bonne compréhension écrite, tant pour les échanges quotidiens que pour le jargon technique du métier. En revanche, j'éprouve encore des difficultés à converser oralement avec un interlocuteur réel. Par convention, j'utilise toujours l'anglais à travers le code que je mets en place.",
    skills: [],
    technologies: [],
  },
];

const contactsData = [
  {
    type: "Téléphone",
    value: "06 43 18 02 91",
    isLink: false,
  },
  {
    type: "Email",
    value: "fougeray.florian@gmail.com",
    isLink: false,
  },
  {
    type: "Adresse",
    value: "Longeville Les Metz - 57050",
    isLink: false,
  },
  {
    type: "Linkedin",
    value: "https://www.linkedin.com/in/florian-fougeray/",
    isLink: true,
  },
  {
    type: "Github",
    value: "https://github.com/BaltiBlast",
    isLink: true,
  },
];

const personalityGameData = [
  {
    trait: "Perfectionniste/Minutieux",
    options: [
      {
        perspective: "Positif",
        description: "Produit un travail soigné et de qualité, attentif aux détails et à la finition.",
      },
      {
        perspective: "À considérer",
        description:
          "Peut prendre plus de temps pour finaliser les tâches, parfois trop focalisé sur des détails mineurs.",
      },
    ],
  },
  {
    trait: "Autonome",
    options: [
      {
        perspective: "Positif",
        description:
          "Capable de travailler efficacement sans supervision constante, prend des initiatives pertinentes.",
      },
      {
        perspective: "À considérer",
        description:
          "Parfois réticent à demander de l'aide, peut s'isoler et manquer de synchronisation avec l'équipe.",
      },
    ],
  },
  {
    trait: "Créatif",
    options: [
      {
        perspective: "Positif",
        description: "Propose des solutions originales et innovantes, pense en dehors des sentiers battus.",
      },
      {
        perspective: "À considérer",
        description:
          "Peut s'écarter des méthodes conventionnelles, parfois au détriment de l'efficacité ou de la simplicité.",
      },
    ],
  },
  {
    trait: "Analytique",
    options: [
      {
        perspective: "Positif",
        description:
          "Prend des décisions basées sur des données et une réflexion approfondie, anticipe les problèmes potentiels.",
      },
      {
        perspective: "À considérer",
        description:
          "Peut trop réfléchir avant d'agir, parfois ralenti par l'excès d'analyse au détriment de l'action.",
      },
    ],
  },
  {
    trait: "Sincère",
    options: [
      {
        perspective: "Positif",
        description: "Communication transparente et honnête, instaure un climat de confiance et de respect mutuel.",
      },
      {
        perspective: "À considérer",
        description:
          "Peut paraître trop direct ou manquer de tact dans certaines situations qui nécessiteraient plus de diplomatie.",
      },
    ],
  },
  {
    trait: "Adaptable",
    options: [
      {
        perspective: "Positif",
        description:
          "S'ajuste rapidement aux changements de contexte, de priorités ou de technologies, flexible face aux imprévus.",
      },
      {
        perspective: "À considérer",
        description:
          "Peut parfois manquer de constance dans sa méthode de travail ou avoir du mal à établir des routines stables.",
      },
    ],
  },
  {
    trait: "Curieux",
    options: [
      {
        perspective: "Positif",
        description: "Constamment en apprentissage, explore de nouvelles technologies et approches avec enthousiasme.",
      },
      {
        perspective: "À considérer",
        description:
          "Peut se disperser en explorant trop de directions différentes ou en changeant fréquemment de centre d'intérêt.",
      },
    ],
  },
];
