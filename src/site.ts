// Datos generales del sitio que no cambian con el idioma.
export const site = {
  name: 'Paula Faúndez-Carrasco',
  email: 'paulafdez262@gmail.com',
  socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/paulafaundezcarrasco/' }],
};

export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};
