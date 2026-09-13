// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import vesperDark from "./public/themes/vesper-dark.json";
import vesperLight from "./public/themes/vesper-light.json";

// https://astro.build/config
export default defineConfig({
	site: "https://juanceron023.github.io",
	base: "/portfolio1",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		sitemap(),
		mdx(),
		react(),
	],

	markdown: {
		shikiConfig: {
			themes: {
				// @ts-expect-error
				light: vesperLight,
				// @ts-expect-error
				dark: vesperDark,
			},
			defaultColor: "light",
			cssVariablePrefix: "--shiki-",
			transformers: [
				{
					line(node, line) {
						node.properties["data-line"] = line;
						this.addClassToHast(node, "line");
					},
				},
			],
		},
	},
});
