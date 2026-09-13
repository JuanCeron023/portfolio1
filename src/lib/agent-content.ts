import { siteConfig } from "@/config/site";

const canonical = (pathname: string) =>
	new URL(pathname, siteConfig.url).toString();

const pages: Record<string, string> = {
	"/": `# Juan Manuel Cerón Araujo

Juan Manuel Cerón is a Senior Software Engineer from Pasto, Colombia, specializing in distributed systems, event-driven architectures, and cloud-native backend development. He builds high-scale Go microservices for global enterprise platforms (Disney via Globant, previously Mercado Libre) and is the founder of Optima, a B2B SaaS platform automating public procurement monitoring in Colombia.

## When to use this site

- Verify Juan Manuel Cerón's professional experience, technical stack, and achievements.
- Explore his work in high-throughput backend systems and his SaaS platform Optima.
- Contact Juan regarding senior/staff backend roles, distributed systems consulting, or collaborations.

## Primary resources

- [Projects](${canonical("/projects")})
- [About](${canonical("/about")})
- [Achievements](${canonical("/achievements")})
- [Bookshelf](${canonical("/bookshelf")})
- [Contact](${canonical("/contact")})
- [GitHub](${siteConfig.links.github})
- [LinkedIn](${siteConfig.links.linkedin})
`,
	"/about": `# About Juan Manuel Cerón

Juan Manuel Cerón is a Senior Software Engineer from Pasto, Colombia, specializing in distributed systems, event-driven pipelines, and cloud-native backend platforms.

## Key Milestones

- 2026: Founded Optima (B2B SaaS for SECOP II public procurement alerts)
- 2026: AWS Certified Solutions Architect – Associate
- 2024 – present: Senior Backend Engineer at Globant (Disney) – Go microservices, event-driven pipelines with Kinesis/SQS/MongoDB, 2x throughput optimization
- 2023: Sr. Backend Engineer at Mercado Libre – Event-driven Go backends handling high-throughput messaging
- 2023: Backend Engineer at Pragma
- 2021 – 2022: Backend Developer at Soporte Lógico
- 2017 – 2022: Systems Engineering at Mariana University (Full-tuition scholarship, highest GPA)

## Stack

Go, AWS (Kinesis, SQS, EventBridge, Lambda, ECS), MongoDB, Docker, Datadog, Grafana, PostgreSQL, Redis, Java (Spring Boot).

- [Projects](${canonical("/projects")})
- [Contact](${canonical("/contact")})
- [GitHub](${siteConfig.links.github})
- [LinkedIn](${siteConfig.links.linkedin})
`,
	"/contact": `# Contact Juan Manuel Cerón

You can reach Juan Manuel Cerón through the following channels:

- Email: [juanceron256@gmail.com](mailto:juanceron256@gmail.com)
- LinkedIn: [linkedin.com/in/juanmanuelceronaraujo](${siteConfig.links.linkedin})
- GitHub: [github.com/JuanCeron023](${siteConfig.links.github})
- Credly: [credly.com/users/juan-manuel-ceron-araujo.4f4e3e87](https://www.credly.com/users/juan-manuel-ceron-araujo.4f4e3e87)
- Optima: [contratosoptima.com](https://contratosoptima.com)
`,
	"/projects": `# Projects – Juan Manuel Cerón

- **Optima (B2B SaaS)**: End-to-end B2B platform that automates SECOP II public procurement alerts in Colombia. Designed, scaled, and maintained entirely by Juan.
- **High-Throughput Microservices (Disney)**: Redesigned Go microservices and event-driven systems processing 30K+ daily state updates.
- **Event-Driven Backend (Mercado Libre)**: Built scalable event-driven Go backends handling tens of thousands of daily events.
- **MediApp Spring Boot**: Medical scheduling platform built with Java, Spring Boot, MySQL, and Angular.
- **Cardiovascular Risk App**: Mobile app published on Google Play helping users assess cardiovascular risk.
- **Pico y Placa Pasto**: Traffic restriction alerts and widgets for Pasto, Colombia.
`,
};

export function getNotFoundMarkdown(pathname?: string): string {
	return `# 404: Page not found

Use one of these paths:

- [Home](${canonical("/")})
- [About](${canonical("/about")})
- [Projects](${canonical("/projects")})
- [Achievements](${canonical("/achievements")})
- [Bookshelf](${canonical("/bookshelf")})
- [Contact](${canonical("/contact")})
`;
}

export function getAgentMarkdown(pathname: string): string {
	if (pages[pathname]) {
		return pages[pathname];
	}

	return getNotFoundMarkdown(pathname);
}
