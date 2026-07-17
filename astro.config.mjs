// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  // Sitio 100% estático: HTML/CSS/JS pre-generado, sin servidor Node en runtime.
  // Hosteable en Vercel (deploy estático) o sirviendo dist/ con nginx/Caddy/etc.
  output: 'static',

  site: 'https://appico.net',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // Español en la raíz (/); inglés bajo /en/
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-AR',
          en: 'en',
        },
      },
    }),
    // React = estándar de islands del proyecto. Svelte queda disponible
    // solo para casos excepcionales (no mezclar ambos por defecto).
    react(),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
