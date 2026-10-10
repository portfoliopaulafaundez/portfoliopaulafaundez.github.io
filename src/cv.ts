// Contenido del CV, en inglés y español.
import type { Lang } from './i18n';

type T = Record<Lang, string>;

export const experience: { role: string; company: string | T; from: string; to: string | null; text: T }[] = [
  {
    role: 'Project Manager & Digital Marketing Strategist', company: 'Azurally · Madrid', from: 'Jan 2024', to: null,
    text: {
      en: 'Own client relationships across EMEA and US accounts (Bayer, Novocure, Santen, NH Hotels, Best Arctic) from onboarding to retention and growth. I turn business goals into multichannel content plans, manage timelines, forecasts and budgets, and lead a cross-functional team of 15+ across QA, design, PR, social, creative and dev. I also bring AI tools into our workflows to make the team faster.',
      es: 'Gestiono la relación con clientes de EMEA y EE. UU. (Bayer, Novocure, Santen, NH Hotels, Best Arctic) desde el onboarding hasta la fidelización y el crecimiento. Traduzco objetivos de negocio en planes de contenido multicanal, gestiono plazos, previsiones y presupuestos, y lidero un equipo multidisciplinar de más de 15 personas en QA, diseño, PR, social, creatividad y desarrollo. Además integro herramientas de IA en los flujos de trabajo para que el equipo avance más rápido.',
    },
  },
  {
    role: 'PMO Jr & Content Manager', company: 'McCann / MRM · Madrid', from: 'Jun 2021', to: 'Jun 2023',
    text: {
      en: 'Managed accounts and digital content production for international B2B and B2C campaigns for Burger King, Mastercard, IKEA, Iberdrola, Honeywell and Sanofi. Main client contact: proposals, expectations, results and on-time delivery, plus live coordination during campaign launches and quality control.',
      es: 'Gestión de cuentas y producción de contenido digital para campañas internacionales B2B y B2C de Burger King, Mastercard, IKEA, Iberdrola, Honeywell y Sanofi. Principal interlocutora con el cliente: propuestas, expectativas, resultados y entregas a tiempo, además de coordinación en directo durante los lanzamientos y control de calidad.',
    },
  },
  {
    role: 'Independent Theatre Producer', company: { en: 'Self-employed', es: 'Autónoma' }, from: '2021', to: null,
    text: {
      en: 'End-to-end production of live performances: planning, casting, budgeting, logistics, team coordination and promotion, consistently with a positive return.',
      es: 'Producción integral de espectáculos en directo: planificación, casting, presupuesto, logística, coordinación del equipo y promoción, con retorno positivo de forma constante.',
    },
  },
  {
    role: 'UX/UI Designer & Content Production', company: 'Qaleon · Madrid', from: 'Jan 2021', to: 'Jun 2021',
    text: {
      en: 'Designed AI-powered interfaces and social content for enterprise clients, prototyping concepts together with the engineering team.',
      es: 'Diseño de interfaces con IA y contenido para redes sociales para clientes empresariales, prototipando conceptos junto al equipo de ingeniería.',
    },
  },
  {
    role: 'Journalist / Event Reporter', company: 'El Ibérico · London', from: 'Jun 2019', to: 'Sep 2019',
    text: {
      en: 'Covered cultural and media events in London, writing articles and interviews on tight deadlines.',
      es: 'Cobertura de eventos culturales y de medios en Londres, con artículos y entrevistas bajo plazos ajustados.',
    },
  },
  {
    role: 'Content & Localisation Intern', company: 'Dermalogica · Madrid', from: 'Jun 2018', to: 'Sep 2018',
    text: {
      en: 'Created and localised multimedia campaign content, coordinating translation, dubbing and video editing (EN-ES).',
      es: 'Creación y localización de contenido multimedia para campañas, coordinando traducción, doblaje y edición de vídeo (EN-ES).',
    },
  },
];

export const hardSkills: Record<Lang, string[]> = {
  en: ['End-to-end campaign management', 'Client account management', 'Upsell & cross-sell', 'Budget & timeline control', 'Performance reporting', 'Process optimisation', 'QC & brand consistency', 'AV, print & digital production', 'Transcreation & localisation', 'Agile & sprint planning', 'ClickUp · Asana · Jira · Notion · Monday', 'Adobe Suite · DaVinci Resolve · Figma', 'Claude · ChatGPT · Runway · ElevenLabs', 'AEM · Drupal · WordPress'],
  es: ['Gestión integral de campañas', 'Gestión de cuentas', 'Upsell y cross-sell', 'Control de presupuesto y plazos', 'Reporting de resultados', 'Optimización de procesos', 'Control de calidad y coherencia de marca', 'Producción audiovisual, impresa y digital', 'Transcreación y localización', 'Agile y planificación de sprints', 'ClickUp · Asana · Jira · Notion · Monday', 'Adobe Suite · DaVinci Resolve · Figma', 'Claude · ChatGPT · Runway · ElevenLabs', 'AEM · Drupal · WordPress'],
};

export const softSkills: Record<Lang, string[]> = {
  en: ['Client communication & negotiation', 'Team leadership', 'Proactive, can-do attitude under pressure', 'Detail-oriented', 'Cross-cultural collaboration', 'Creative thinking', 'User-focused problem solving'],
  es: ['Comunicación y negociación con clientes', 'Liderazgo de equipos', 'Actitud proactiva bajo presión', 'Atención al detalle', 'Colaboración intercultural', 'Pensamiento creativo', 'Resolución de problemas centrada en el usuario'],
};

export const education = [
  { title: 'UX/UI Design Bootcamp', place: 'CEI, Madrid', years: '2023' },
  { title: 'Bilingual Degree in Media, TV, Radio & Film', place: 'Universidad Carlos III de Madrid', years: '2016 – 2021' },
  { title: 'Media Studies & Communication (Erasmus+)', place: 'Glasgow Caledonian University', years: '2019 – 2020' },
  { title: 'Minor in English Business Management', place: 'Universidad Carlos III de Madrid', years: '2017 – 2018' },
];

export const languages: T = {
  en: 'Spanish (native) · English (C2) · German (B1)',
  es: 'Español (nativo) · Inglés (C2) · Alemán (B1)',
};
