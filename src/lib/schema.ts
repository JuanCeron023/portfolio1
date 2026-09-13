import { siteConfig } from "@/config/site";

export interface SchemaProps {
	title: string;
	description: string;
	canonicalURL: URL;
	socialImageURL: URL;
	article: boolean;
	publishedTime?: Date;
	modifiedTime?: Date;
	readingTimeMinutes?: number;
	wordCount?: number;
}

export function buildSchemaGraph(props: SchemaProps): object {
	const graph: Record<string, unknown>[] = [
		{
			"@type": "WebSite",
			"@id": `${siteConfig.url}/#website`,
			url: siteConfig.url,
			name: siteConfig.name,
			description: siteConfig.description,
			inLanguage: "en-US",
		},
		{
			"@type": "Organization",
			"@id": `${siteConfig.url}/#organization`,
			name: "Optima",
			url: "https://contratosoptima.com",
			founder: { "@id": `${siteConfig.url}/#person` },
			contactPoint: {
				"@type": "ContactPoint",
				contactType: "general inquiries",
				email: siteConfig.email,
				availableLanguage: ["English", "Spanish"],
			},
			address: {
				"@type": "PostalAddress",
				addressLocality: "Pasto",
				addressCountry: "CO",
			},
			sameAs: ["https://contratosoptima.com"],
		},
		{
			"@type": "Person",
			"@id": `${siteConfig.url}/#person`,
			name: siteConfig.author,
			url: siteConfig.url,
			image: `${siteConfig.url}/images/b.png`,
			sameAs: [
				siteConfig.links.github,
				siteConfig.links.linkedin,
			].filter(Boolean),
			jobTitle: "Senior Software Engineer",
			description: siteConfig.description,
			worksFor: {
				"@type": "Organization",
				name: "Globant",
				url: "https://www.globant.com",
			},
			founder: { "@id": `${siteConfig.url}/#organization` },
			alumniOf: {
				"@type": "CollegeOrUniversity",
				name: "Universidad Mariana",
				url: "https://www.umariana.edu.co",
			},
		},
	];
	if (props.article && props.publishedTime) {
		const blogPosting: Record<string, unknown> = {
			"@type": "BlogPosting",
			headline: props.title,
			description: props.description,
			image: props.socialImageURL.toString(),
			datePublished: props.publishedTime.toISOString(),
			dateModified: (props.modifiedTime || props.publishedTime).toISOString(),
			author: { "@id": `${siteConfig.url}/#person` },
			publisher: { "@id": `${siteConfig.url}/#person` },
			mainEntityOfPage: { "@id": props.canonicalURL.toString() },
		};
		if (props.readingTimeMinutes) {
			blogPosting.timeRequired = `PT${props.readingTimeMinutes}M`;
		}
		if (props.wordCount) {
			blogPosting.wordCount = props.wordCount;
		}
		graph.push(blogPosting);
	}
	const breadcrumbItems: Record<string, unknown>[] = [
		{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
	];
	if (props.title !== siteConfig.name) {
		breadcrumbItems.push({
			"@type": "ListItem",
			position: 2,
			name: props.title,
		});
	}
	if (breadcrumbItems.length > 1) {
		graph.push({ "@type": "BreadcrumbList", itemListElement: breadcrumbItems });
	}
	return { "@context": "https://schema.org", "@graph": graph };
}
