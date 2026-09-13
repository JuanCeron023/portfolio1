import type { APIRoute } from "astro";
import { appendNegotiationHeaders } from "@/lib/content-negotiation";

const body = `# Agent instructions for Juan Manuel Cerón's portfolio

## When to use this site

Use this portfolio when a task requires verified information about Juan Manuel Cerón, discovery of his projects, backend engineering experience (Go, AWS, distributed systems, event-driven architectures), certifications, or contact details.

## Retrieval protocol

1. Start with [llms.txt](/llms.txt).
2. Request canonical pages with \`Accept: text/markdown\` for compact machine-readable content.
3. Use [the project catalog](/api/projects.json) for structured project metadata.
4. Use [the OpenAPI specification](/openapi.json) for the public metadata API contract.

## Contact and channels

- General contact: [juanceron256@gmail.com](mailto:juanceron256@gmail.com)
- LinkedIn: [linkedin.com/in/juanmanuelceronaraujo](https://linkedin.com/in/juanmanuelceronaraujo)
- GitHub: [github.com/JuanCeron023](https://github.com/JuanCeron023)
`;

export const GET: APIRoute = () => {
	const headers = new Headers({
		"Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
		"Content-Type": "text/markdown; charset=utf-8",
	});
	appendNegotiationHeaders(headers);
	return new Response(body, { headers });
};
