// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Númeno RPG',
			social: [],
      tableOfContents: {minHeadingLevel: 1, maxHeadingLevel: 3},
      defaultLocale: "pt-br",
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
          label: "Changelog",
          autogenerate: {directory: "Changelog"}
        },
			],
		}),
	],
});
