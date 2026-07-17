# Appico — Evolving Labs

Sitio corporativo estático (Astro + Tailwind). Español (raíz) e inglés (`/en/`).

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

La salida queda en `dist/` (hosteable en Vercel estático o cualquier servidor de archivos).

## Contacto / Formspree

Copiá `.env.example` a `.env` y reemplazá `PUBLIC_CONTACT_FORM_ENDPOINT` por tu endpoint real (Formspree u otro). Mientras figure `PLACEHOLDER`, el formulario valida en cliente y simula éxito sin enviar.

## Idiomas

| ES | EN |
|----|----|
| `/` | `/en/` |
| `/nosotros` | `/en/about` |
| `/contacto` | `/en/contact` |
| `/synapse` … `/chain` | `/en/synapse` … `/en/chain` |

Copy y meta viven en `src/i18n/dictionaries.ts`.
