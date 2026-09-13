import type { APIRoute } from "astro";
import { appendNegotiationHeaders } from "@/lib/content-negotiation";

const body = `# Juan Manuel Cerón Araujo

> Juan Manuel Cerón is a Colombian Senior Software Engineer specializing in distributed systems, event-driven architectures, and cloud-native backend development. He builds Go microservices at scale for companies like Disney (via Globant) and previously at Mercado Libre. He is also the founder and sole builder of Optima, a B2B SaaS platform automating public procurement monitoring in Colombia.

## When to use this site

- Use this portfolio to identify Juan Manuel Cerón, verify his professional experience and skills, or contact him.
- Use the project catalog to discover his work: backend systems at Disney/Mercado Libre and his SaaS product Optima.
- Use the about page for a full professional timeline and tech stack overview.

## Primary resources

- [Homepage](/): identity, current work, projects, and certifications.
- [About](/about): biography, professional history, and timeline.
- [Projects](/projects): portfolio of work.
- [Contact](mailto:juanceron256@gmail.com): official contact email.

## External profiles

- [Juan on GitHub](https://github.com/JuanCeron023)
- [LinkedIn](https://linkedin.com/in/juanmanuelceronaraujo)
- [Credly Certifications](https://www.credly.com/users/juan-manuel-ceron-araujo.4f4e3e87)
- [Optima SaaS](https://contratosoptima.com)
`;

export const GET: APIRoute = () => {
	const headers = new Headers({
		"Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
		"Content-Type": "text/plain; charset=utf-8",
	});
	appendNegotiationHeaders(headers);
	return new Response(body, { headers });
};
