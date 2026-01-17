// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Númeno RPG',
          social: [],
    tableOfContents: {minHeadingLevel: 1, maxHeadingLevel: 3},
    defaultLocale: "pt-br",
    favicon: "./public/favicon.svg",
    logo: {
      dark: "./src/assets/Logo Númeno.svg",
      light: "./src/assets/Logo Númeno (light theme).svg",
      replacesTitle: true,
    },
    credits: true,
    customCss: ["./src/theme.css"],
          sidebar: [
      {
        label: 'Regras',
        autogenerate: {directory: 'Regras'},
      },
      {
        label: "Classes",
        autogenerate: {directory: "Classes"}
      },
      {
        label: "Espécies",
        autogenerate: {directory: "Espécies"}
      },
      {
        label: "Equipamentos",
        autogenerate: {directory: "Equipamentos"}
      },
      {
        label: "Changelog",
        autogenerate: {directory: "Changelog"}
      },
          ],
      }),
	],

  adapter: vercel(),
});
