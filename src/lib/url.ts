// Prefix internal paths with the configured base so the site works both at the
// apex domain (base "/") and at a GitHub Pages project subpath (base
// "/identitymatters") during preview. External/mailto/anchor links pass through.
const BASE = import.meta.env.BASE_URL; // "/" or "/identitymatters/"

export function url(path = '/'): string {
  if (/^([a-z]+:|\/\/|#)/i.test(path)) return path; // http:, mailto:, //, #...
  const base = BASE.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}
