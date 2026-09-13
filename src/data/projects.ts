import type { BrandName } from "../components/brand/registry";

export type ProjectIcon = BrandName;

export interface Project {
	slug: string;
	name: string;
	description: string;
	url: string;
	repo?: string;
	icon: ProjectIcon;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		slug: "optima",
		name: "Optima (B2B SaaS)",
		description: "End-to-end B2B platform that automates SECOP II public procurement alerts in Colombia. Designed, scaled, and maintained entirely by me.",
		url: "https://contratosoptima.com/",
		icon: "terminal", 
		featured: true,
	},
	{
		slug: "disney-backend",
		name: "High-Throughput Microservices (Disney)",
		description: "Redesigned Go microservices and event-driven systems processing 30K+ daily state updates.",
		url: "https://linkedin.com/in/juanmanuelceronaraujo",
		icon: "code", 
		featured: true,
	},
	{
		slug: "meli-event-driven",
		name: "Event-Driven Backend (Mercado Libre)",
		description: "Built scalable event-driven Go backends handling tens of thousands of daily events.",
		url: "https://linkedin.com/in/juanmanuelceronaraujo",
		icon: "code",
		featured: true,
	},
	{
		slug: "mediapp",
		name: "MediApp Spring Boot",
		repo: "JuanCeron023/spring-mediapp1-backend",
		description: "Medical scheduling platform built with Java, Spring Boot, MySQL, and Angular.",
		url: "https://github.com/JuanCeron023/spring-mediapp1-backend",
		icon: "github",
		featured: true,
	},
	{
		slug: "cardiovascular-app",
		name: "Cardiovascular Risk App",
		description: "Dart/Firebase mobile app helping users assess cardiovascular risk. Published on Google Play.",
		url: "https://play.google.com/store/apps/details?id=com.niriom.riesgo_cardiovascular",
		icon: "android", 
		featured: true,
	},
	{
		slug: "pico-placa",
		name: "Pico y Placa Pasto",
		description: "Android app providing traffic restriction alerts and widgets for Pasto, Colombia.",
		url: "https://play.google.com/store/apps/details?id=com.niriom.restriccion_vehicular_pasto",
		icon: "android", 
		featured: true,
	}
];

export const featuredProjects = projects.filter((project) => project.featured);
