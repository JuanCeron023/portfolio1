export const openApiDocument = {
	openapi: "3.1.0",
	info: {
		title: "Juan Manuel Cerón Portfolio API",
		version: "1.0.0",
		description:
			"Read-only public metadata for Juan Manuel Cerón's portfolio. No authentication is required.",
		license: { name: "MIT", url: "https://github.com/JuanCeron023" },
	},
	security: [],
	servers: [{ url: "https://jmceron.com" }],
	paths: {
		"/api/projects.json": {
			get: {
				operationId: "listProjects",
				summary: "List public projects and backend platforms",
				description:
					"Returns the canonical public project catalog.",
				responses: {
					"200": {
						description: "Public project catalog",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ProjectCatalog" },
							},
						},
					},
					"404": {
						description: "API route not found",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ErrorResponse" },
							},
						},
					},
				},
			},
		},
	},
	components: {
		schemas: {
			Project: {
				type: "object",
				required: ["name", "description", "url", "stars"],
				properties: {
					name: { type: "string", description: "Project name" },
					repo: {
						type: "string",
						description: "GitHub owner and repository name",
					},
					description: { type: "string", description: "Project summary" },
					url: { type: "string", format: "uri", description: "Project URL" },
					stars: {
						type: "integer",
						minimum: 0,
						description: "Last recorded GitHub star count",
					},
					github: {
						type: "string",
						format: "uri",
						description: "Canonical GitHub repository URL",
					},
				},
			},
			ProjectCatalog: {
				type: "object",
				required: ["generatedAt", "count", "projects"],
				properties: {
					generatedAt: { type: "string", format: "date-time" },
					count: { type: "integer", minimum: 0 },
					projects: {
						type: "array",
						items: { $ref: "#/components/schemas/Project" },
					},
				},
			},
			ErrorResponse: {
				type: "object",
				required: ["error"],
				properties: {
					error: {
						type: "object",
						required: ["code", "message", "resolution", "documentation"],
						properties: {
							code: { type: "string" },
							message: { type: "string" },
							resolution: { type: "string" },
							documentation: { type: "string", format: "uri" },
						},
					},
				},
			},
		},
	},
} as const;
