import type { Tag } from './tag';

export interface Project {
	frontmatter: {
		title: string;
		description?: string;
		tags?: Tag[];
		featured?: boolean;
	};

	url: string;

	compiledContent: () => string;
}

export function getAllCodingProjects(): Project[] {
	return (
		Object.values(
			// @ts-ignore
			import.meta.glob('/src/pages/coding-projects/**/*.{md,mdx}', { eager: true }),
		) as Project[]
	).sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
}

export function getTopCodingProjects(): Project[] {
	return (
		Object.values(
			// @ts-ignore
			import.meta.glob('/src/pages/coding-projects/**/*.{md,mdx}', { eager: true }),
		) as Project[]
	)
		.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))
		.filter(x => x.frontmatter.featured === true);
}

export function getCodingProjectsByTag(tag: Tag): Project[] {
	return (
		Object.values(
			// @ts-ignore
			import.meta.glob('/src/pages/coding-projects/**/*.{md,mdx}', { eager: true }),
		) as Project[]
	)
		.filter(x => x.frontmatter.tags?.includes(tag))
		.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
}
