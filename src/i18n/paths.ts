import { defaultLocale, isLocale, type Locale } from './config';

/** Path segments per locale for non-product pages. */
const pageSlugs = {
  about: { es: 'nosotros', en: 'about' },
  contact: { es: 'contacto', en: 'contact' },
} as const;

export type PageKey = keyof typeof pageSlugs | 'home' | BusinessLineSlug;

export type BusinessLineSlug =
  | 'synapse'
  | 'mind'
  | 'sense'
  | 'flow'
  | 'chain';

const businessLineSlugs: BusinessLineSlug[] = [
  'synapse',
  'mind',
  'sense',
  'flow',
  'chain',
];

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale && isLocale(maybeLocale)) {
    return maybeLocale;
  }
  return defaultLocale;
}

/** Localized path for a known page key (no trailing slash except home). */
export function getLocalizedPath(locale: Locale, page: PageKey): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;

  if (page === 'home') {
    return prefix || '/';
  }

  if (page in pageSlugs) {
    const slug = pageSlugs[page as keyof typeof pageSlugs][locale];
    return `${prefix}/${slug}`;
  }

  // Business lines keep the same slug in both languages
  return `${prefix}/${page}`;
}

/** Switch current path to another locale, mapping translated slugs. */
export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const segments = currentPath.replace(/\/+$/, '').split('/').filter(Boolean);
  let rest = segments;

  if (segments[0] && isLocale(segments[0])) {
    rest = segments.slice(1);
  }

  if (rest.length === 0) {
    return getLocalizedPath(targetLocale, 'home');
  }

  const slug = rest[0];

  // Map about/contact between locales
  if (slug === 'nosotros' || slug === 'about') {
    return getLocalizedPath(targetLocale, 'about');
  }
  if (slug === 'contacto' || slug === 'contact') {
    return getLocalizedPath(targetLocale, 'contact');
  }

  if (businessLineSlugs.includes(slug as BusinessLineSlug)) {
    return getLocalizedPath(targetLocale, slug as BusinessLineSlug);
  }

  return getLocalizedPath(targetLocale, 'home');
}

export function getAlternateLinks(currentPath: string): { locale: Locale; href: string }[] {
  return (['es', 'en'] as Locale[]).map((locale) => ({
    locale,
    href: switchLocalePath(currentPath, locale),
  }));
}
