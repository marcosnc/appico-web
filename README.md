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

## Contacto / Web3Forms

El formulario envía a [Web3Forms](https://web3forms.com/) (`https://api.web3forms.com/submit`).

La access key vive en `PUBLIC_WEB3FORMS_ACCESS_KEY` (ver `.env.example`). Es pública por diseño; en el dashboard de Web3Forms conviene restringir el dominio permitido.

## Idiomas

| ES | EN |
|----|----|
| `/` | `/en/` |
| `/nosotros` | `/en/about` |
| `/contacto` | `/en/contact` |
| `/synapse` … `/chain` | `/en/synapse` … `/en/chain` |

Copy y meta viven en `src/i18n/dictionaries.ts`.
