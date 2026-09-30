export const cvData = {
  personal: {
    name: 'Elena Gil Salazar',
    title: 'Développeuse d’applications web',
    subtitle: 'React • JavaScript • API',
    photo: '/images/profile.png',
    location: 'Paris',
    email: 'elegil93@gmail.com',
    phone: '+33 7 45 51 23 96',
    github: 'https://github.com/elenixu',
    linkedin: 'https://www.linkedin.com/in/elenagilsalazar/',
  },

  profile:
    'Développeuse d’applications web avec 2 ans d’expérience professionnelle chez CS GROUP (Sopra Steria) sur le projet CRIMSON. Spécialisée en React, JavaScript et TypeScript, avec une expérience en intégration d’API, interfaces métier, gestion des utilisateurs et outils cartographiques.',

  skills: {
    development: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'React Flow',
    ],

    integration: ['API REST', 'JSON', 'Keycloak'],

    tools: ['Git', 'GitLab', 'Jira', 'Postman', 'Podman', 'Figma'],

    analysis: [
      'Debugging',
      'Maintenance applicative',
      'Conception d’interfaces',
      'Résolution de problèmes',
    ],
  },

  languages: [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Bilingue' },
    { name: 'Espagnol', level: 'Langue maternelle' },
  ],

  experience: [
    {
      company: 'CS GROUP (Sopra Steria)',
      location: 'Toulouse',
      role: 'Développeuse Front-End React — Projet CRIMSON',
      start: '09/2024',
      end: '09/2026',
      contract: 'Alternance',
      description: [
        'Participation à la transformation web de CRIMSON, application opérationnelle destinée aux services de secours, avec React, JavaScript et TypeScript.',
        'Conception et développement de modules métier : gestion des utilisateurs et sessions, droits via Keycloak, tableau des moyens et visualisations interactives avec React Flow.',
        'Développement d’outils cartographiques : mesure de distances, ajout de formes et événements sur la carte opérationnelle.',
        'Intégration de services back-end, manipulation de données, debugging et maintenance de modules existants.',
        'Workflow professionnel avec Git/GitLab, Jira et Podman : découpage des fonctionnalités, Merge Requests, revues de code, tests et présentation des réalisations.',
      ],
    },

    {
      company: 'Studios internationaux',
      location: 'Europe • Amérique • Remote',
      role: 'Animation & production visuelle',
      start: '2016',
      end: '2021',
      contract: 'Salariée & Freelance',
      description: [
        'Animation 2D, direction artistique et production visuelle pour des projets TV, cinéma et jeu vidéo au sein d’équipes internationales.',
        'Collaborations : Random Encounters, Relish, Studio Shout, Bader Animation, Outstandly, JAM Media, Herald Entertainment et Kapricorn Media.',
      ],
    },
  ],

  education: [
    {
      school: 'OpenClassrooms',
      degree: 'Développeur d’application JavaScript React',
      level: 'Titre RNCP Niveau 6 — Bac +3/4',
      start: '2024',
      end: '2026',
    },
    {
      school: 'OpenClassrooms',
      degree: 'Intégrateur Web',
      level: 'Titre RNCP Niveau 5 — Bac +2',
      start: '2023',
      end: '2024',
    },
    {
      school: 'GOBELINS Paris',
      degree: 'Conception et réalisation de films d’animation',
      level: 'Bac +5',
      start: '2020',
      end: '2022',
    },
  ],
}
