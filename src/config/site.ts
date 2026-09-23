import type { SiteConfig } from "@/types";

interface OgUrlOptions {
	title: string;
	description: string;
	tag?: string;
	date?: string;
}

export const siteConfig: SiteConfig = {
	name: "Juan Manuel Cerón",
	description:
		"Senior Software Engineer specialized in distributed systems, cloud-native architectures, and high-scale backend platforms. Building resilient Go microservices and event-driven systems for global platforms.",
	url: "https://jmceron.com",
	ogImage: "/images/avatar.png",
	hero: {
		title: "Juan Cerón",
		role: "Senior Software Engineer",
		location: "Pasto, Colombia",
	},
	author: "Juan Manuel Cerón",
	email: "juanceron256@gmail.com",
	links: {
		twitter: "",
		github: "https://github.com/JuanCeron023",
		linkedin: "https://linkedin.com/in/juanmanuelceronaraujo",
	},
	keywords: [
		"Juan Manuel Ceron Araujo",
		"Senior Software Engineer",
		"Go",
		"Golang",
		"AWS",
		"Event-Driven",
		"Microservices",
		"Disney",
		"Globant",
		"Mercado Libre",
		"Pasto",
		"Colombia"
	],
	locale: "en_US",
	themeColor: {
		light: "#FDFDFC",
		dark: "#111111",
	},
	icons: {
		icon: "/images/avatar.png",
		shortcut: "/images/avatar.png",
		apple: "/images/avatar.png",
	},
	manifest: "/images/avatar.png",
};

export function ogUrl(_options?: OgUrlOptions) {
	return "/images/avatar.png";
}
