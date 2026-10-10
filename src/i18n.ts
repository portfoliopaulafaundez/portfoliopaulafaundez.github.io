import { getCollection } from 'astro:content';
import { url } from './site';

export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;

// Ruta de una página en un idioma. `path` es la parte común: '', 'about', 'bayer'…
export const localePath = (lang: Lang, path = '') => url(lang === 'en' ? path : `es/${path}`);

export async function getProjects(lang: Lang) {
  return (await getCollection('projects', (p) => p.id.startsWith(`${lang}/`)))
    .map((p) => ({ ...p, slug: p.id.split('/')[1] }))
    .sort((a, b) => a.data.order - b.data.order);
}

export const ui = {
  en: {
    work: 'Work',
    about: 'About',
    language: 'Language',
    menu: 'Menu',
    hello: 'Hi, I’m <em>Paula!</em>',
    intro: [
      'Creative Project Manager &amp; Producer with <strong>+5 years of experience</strong> across <strong>international creative agencies and live performances</strong>, turning <strong>ambitious briefs</strong> into standout <strong>creative work</strong> and driving <strong>account growth</strong>.',
      'Proven track owning end-to-end client relationships across <strong>EMEA and the US</strong>, from onboarding through delivery, translating <strong>business objectives</strong> into <strong>creative solutions</strong> and <strong>actionable production plans</strong> while aligning <strong>cross-functional teams of 15+ across strategy, creative, design and technical production.</strong> Results-driven, bilingual <strong>Spanish - English</strong> professional with a keen eye for creative <strong>quality</strong>, a <strong>proactive</strong> growth mindset, and <strong>hands-on experience</strong> &amp; currently <strong>integrating AI-driven tools</strong> into content and production workflows to move faster without compromising craft.',
    ],
    introLead: 'Creative Project Manager &amp; Producer with <strong>+5 years of experience</strong> across <strong>international creative agencies and live performances</strong>.',
    introPoints: [
      '<strong>Ambitious briefs into standout creative work</strong> that drives account growth.',
      '<strong>End-to-end client relationships</strong> across EMEA and the US, from onboarding to delivery.',
      '<strong>Cross-functional teams of 15+</strong> aligned across strategy, creative, design and technical production.',
      '<strong>Bilingual Spanish - English</strong>, proactive, with a keen eye for creative quality.',
      '<strong>Integrating AI-driven tools</strong> to move faster without compromising craft.',
    ],
    clientsLabel: 'Recent clients',
    clients: 'Bayer, Ikea, Novocure, MasterCard, Santen, Honeywell, Best Arctic, Minor Hotels, Burger King, Sanofi and more.',
    milestonesTitle: 'Key milestones',
    milestones: [
      'Helping <strong>double the revenue</strong> of a previously stable client account and <strong>doubling</strong> the volume of <strong>cross-selling</strong> &amp; <strong>up-selling projects</strong>.',
      '<strong>Optimizing delivery processes</strong> by 30%, proactively identifying bottlenecks and building <strong>strong client relationships</strong> grounded in <strong>transparency</strong> and <strong>active listening.</strong>',
      'Proactively <strong>identifying new business growth opportunities</strong>, expanding a client portfolio that continues to work with me today with a consistently high level of satisfaction.',
      'Developing <strong>creative concepts from the ground</strong> up and bringing a <strong>theatre production</strong> to a full season run across several major venues in Madrid, as well as securing its participation in multiple industry festivals.',
    ],
    recentProjects: 'Recent projects',
    aboutTagline: 'Who I am and how I work',
    role: 'Role',
    company: 'Company',
    watch: 'Watch on YouTube',
    pending: 'Project description and impact coming soon.',
    prev: 'Previous',
    next: 'Next',
    all: 'All projects',
    aboutTitle: 'Let’s work <em>together!</em>',
    aboutHighlight: 'I’m a <mark>versatile &amp; multipotentialite</mark> who’s able to dive into creative projects <mark>from start to finish</mark>.',
    aboutIntro: [
      'I’m Paula Faúndez-Carrasco, although some of you might know me as Paula Kleinlein: that’s the pseudonym I use for theatre productions.',
      'I’m <mark>endlessly curious</mark>, with more interests than I can count. It might sound like a lot at first, but that curiosity is exactly what lets me <mark>connect ideas, people and disciplines</mark> that don’t usually meet. Stay a while, and let me show you where it has taken me. Let’s connect!',
    ],
    cvTitle: 'CV',
    aboutPhotos: [
      { file: 'presenting', alt: 'Paula giving a presentation to a group in a meeting room' },
      { file: 'directing-shoot', alt: 'Paula reviewing shots with the team during a photo shoot' },
      { file: 'theatre-tech', alt: 'Paula running lights and sound from the theatre booth' },
      { file: 'theatre-stage', alt: 'A scene from one of Paula’s theatre productions' },
    ],
    experience: 'Experience',
    skills: 'Skills',
    hardSkills: 'Hard skills',
    softSkills: 'Soft skills',
    education: 'Education',
    languages: 'Languages',
    present: 'Present',
    contact: 'Let’s talk',
  },
  es: {
    work: 'Proyectos',
    about: 'Sobre mí',
    language: 'Idioma',
    menu: 'Menú',
    hello: '¡Hola, soy <em>Paula!</em>',
    intro: [
      'Creative Project Manager y productora con <strong>más de 5 años de experiencia</strong> en <strong>agencias creativas internacionales y artes escénicas</strong>, convirtiendo <strong>briefs ambiciosos</strong> en <strong>trabajo creativo</strong> que destaca e impulsando el <strong>crecimiento de cuentas</strong>.',
      'Experiencia demostrada gestionando relaciones con clientes de principio a fin en <strong>EMEA y Estados Unidos</strong>, desde el onboarding hasta la entrega, traduciendo <strong>objetivos de negocio</strong> en <strong>soluciones creativas</strong> y <strong>planes de producción accionables</strong>, y coordinando <strong>equipos multidisciplinares de más de 15 personas en estrategia, creatividad, diseño y producción técnica.</strong> Profesional orientada a resultados y bilingüe <strong>español - inglés</strong>, con buen ojo para la <strong>calidad</strong> creativa, mentalidad <strong>proactiva</strong> y de crecimiento, <strong>experiencia práctica</strong> y actualmente <strong>integrando herramientas de IA</strong> en flujos de contenido y producción para avanzar más rápido sin renunciar al oficio.',
    ],
    introLead: 'Creative Project Manager y productora con <strong>más de 5 años de experiencia</strong> en <strong>agencias creativas internacionales y artes escénicas</strong>.',
    introPoints: [
      '<strong>Briefs ambiciosos convertidos en trabajo creativo</strong> que destaca e impulsa el crecimiento de cuentas.',
      '<strong>Relaciones con clientes de principio a fin</strong> en EMEA y Estados Unidos, del onboarding a la entrega.',
      '<strong>Equipos multidisciplinares de más de 15 personas</strong> coordinados en estrategia, creatividad, diseño y producción técnica.',
      '<strong>Bilingüe español - inglés</strong>, proactiva y con buen ojo para la calidad creativa.',
      '<strong>Integrando herramientas de IA</strong> para avanzar más rápido sin renunciar al oficio.',
    ],
    clientsLabel: 'Clientes recientes',
    clients: 'Bayer, Ikea, Novocure, MasterCard, Santen, Honeywell, Best Arctic, Minor Hotels, Burger King, Sanofi y más.',
    milestonesTitle: 'Logros clave',
    milestones: [
      'Contribuir a <strong>duplicar la facturación</strong> de una cuenta hasta entonces estable y <strong>duplicar</strong> el volumen de proyectos de <strong>cross-selling</strong> y <strong>up-selling</strong>.',
      '<strong>Optimizar los procesos de entrega</strong> un 30%, detectando cuellos de botella de forma proactiva y construyendo <strong>relaciones sólidas con clientes</strong> basadas en la <strong>transparencia</strong> y la <strong>escucha activa.</strong>',
      '<strong>Identificar nuevas oportunidades de negocio</strong> de forma proactiva, ampliando una cartera de clientes que sigue trabajando conmigo hoy con un alto nivel de satisfacción.',
      'Desarrollar <strong>conceptos creativos desde cero</strong> y llevar una <strong>producción teatral</strong> a una temporada completa en varias salas importantes de Madrid, además de conseguir su participación en varios festivales del sector.',
    ],
    recentProjects: 'Proyectos recientes',
    aboutTagline: 'Quién soy y cómo trabajo',
    role: 'Rol',
    company: 'Empresa',
    watch: 'Ver en YouTube',
    pending: 'Descripción del proyecto e impacto próximamente.',
    prev: 'Anterior',
    next: 'Siguiente',
    all: 'Todos los proyectos',
    aboutTitle: '¡Trabajemos <em>juntos!</em>',
    aboutHighlight: 'Me considero una persona <mark>versátil y multipotencial</mark>, capaz de sumergirme en proyectos creativos <mark>de principio a fin</mark>.',
    aboutIntro: [
      'Soy Paula Faúndez-Carrasco, aunque puede que algunos me conozcáis como Paula Kleinlein: es el pseudónimo que uso en mis producciones teatrales.',
      'Tengo <mark>muchas inquietudes</mark> y no puedo elegir solo una. Precisamente esa curiosidad me permite <mark>conectar ideas, personas y disciplinas</mark> que normalmente no se cruzan, de una manera única. ¿Cómo lo hago? ¡Escríbeme y te cuento!',
    ],
    cvTitle: 'CV',
    aboutPhotos: [
      { file: 'presenting', alt: 'Paula dando una presentación a un grupo en una sala de reuniones' },
      { file: 'directing-shoot', alt: 'Paula revisando tomas con el equipo durante una sesión de fotos' },
      { file: 'theatre-tech', alt: 'Paula llevando luces y sonido desde la cabina del teatro' },
      { file: 'theatre-stage', alt: 'Una escena de una de las producciones teatrales de Paula' },
    ],
    experience: 'Experiencia',
    skills: 'Habilidades',
    hardSkills: 'Habilidades técnicas',
    softSkills: 'Habilidades interpersonales',
    education: 'Formación',
    languages: 'Idiomas',
    present: 'Actualidad',
    contact: 'Hablemos',
  },
} as const;
