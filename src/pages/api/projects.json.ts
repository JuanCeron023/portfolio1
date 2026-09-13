export const prerender = true;

import { projects as projectsData } from "@/data/projects";

export async function GET() {
	const projects = projectsData.map((project) => ({
		name: project.name,
		repo: project.repo,
		description: project.description,
		url: project.url,
		github: project.repo ? `https://github.com/${project.repo}` : undefined,
	}));

	return new Response(
		JSON.stringify({
			generatedAt: new Date().toISOString(),
			count: projects.length,
			projects,
		}),
		{
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "public, max-age=3600, s-maxage=3600",
			},
		},
	);
}
