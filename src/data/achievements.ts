export type Scope = "global" | "pe" | "cl" | "co" | "br";

export interface Achievement {
	id: string;
	year: string;
	achievement: string;
	event: string; // Issuer
	eventUrl?: string;
	project?: string;
	projectUrl?: string;
	scope: Scope;
	description?: string;
	credentialUrl?: string;
	skills?: string[];
}

export const credlyProfileUrl = "https://www.credly.com/users/juan-manuel-ceron-araujo.4f4e3e87";

export const achievements: Achievement[] = [
	{
		id: "aws-solutions-architect",
		year: "2026",
		achievement: "AWS Certified Solutions Architect – Associate",
		event: "Amazon Web Services (AWS)",
		eventUrl: credlyProfileUrl,
		scope: "global",
		credentialUrl: credlyProfileUrl,
		description:
			"Designing resilient, secure, and cost-effective cloud architectures. Covers decoupled messaging (SQS, SNS, EventBridge), high availability, multi-tier backends, and storage on AWS.",
		skills: ["AWS", "Distributed Systems", "Cloud Architecture", "High Availability", "Security", "Cost Optimization"],
	},
	{
		id: "google-ai-professional",
		year: "2026",
		achievement: "Google AI Professional Certificate",
		event: "Google",
		eventUrl: credlyProfileUrl,
		scope: "global",
		credentialUrl: credlyProfileUrl,
		description:
			"Practical workflows with large language models (LLMs), prompt engineering, and integrating modern AI capabilities into production software.",
		skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Integration", "Python"],
	},
	{
		id: "claude-partner-badge",
		year: "2026",
		achievement: "Claude Partner Badge – Claude Code",
		event: "Anthropic",
		eventUrl: credlyProfileUrl,
		scope: "global",
		credentialUrl: credlyProfileUrl,
		description:
			"Practical experience with agentic coding workflows, context management, and using Claude Code to architect, navigate, and refactor complex codebases.",
		skills: ["Agentic AI", "Claude Code", "AI Assisted Engineering", "Context Engineering"],
	},
	{
		id: "mongodb-si-architect",
		year: "2025",
		achievement: "MongoDB SI Architect Certification",
		event: "MongoDB",
		eventUrl: credlyProfileUrl,
		scope: "global",
		credentialUrl: credlyProfileUrl,
		description:
			"Document schema design at scale, indexing strategies, replica sets, sharding topologies, and building high-volume transactional data pipelines.",
		skills: ["MongoDB", "NoSQL", "Sharding & Replication", "Query Optimization", "Data Modeling"],
	},
	{
		id: "azure-fundamentals",
		year: "2022",
		achievement: "Microsoft Certified: Azure Fundamentals (AZ-900)",
		event: "Microsoft",
		eventUrl: credlyProfileUrl,
		scope: "global",
		credentialUrl: credlyProfileUrl,
		description:
			"Core cloud computing concepts, security, networking, pricing tiers, and governance across Microsoft Azure services.",
		skills: ["Microsoft Azure", "Cloud Concepts", "Cloud Security", "SLA & Governance"],
	},
	{
		id: "scrum-foundation",
		year: "2021",
		achievement: "Scrum Foundation Professional Certificate (SFPC)",
		event: "CertiProf",
		eventUrl: credlyProfileUrl,
		scope: "global",
		credentialUrl: credlyProfileUrl,
		description:
			"Agile product delivery, sprint planning, continuous delivery loops, and cross-functional team execution.",
		skills: ["Scrum", "Agile Methodologies", "Sprint Planning", "Cross-Functional Collaboration"],
	},
	{
		id: "mariana-scholarship",
		year: "2017 – 2022",
		achievement: "Full-Tuition Academic Scholarship (Highest GPA)",
		event: "Mariana University",
		scope: "co",
		description:
			"Awarded 100% full-tuition merit scholarship throughout the entire Systems Engineering program for holding the highest GPA in the cohort.",
		skills: ["Software Engineering", "Algorithms", "Data Structures", "Academic Excellence"],
	},
];
