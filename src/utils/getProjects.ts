import type { Tag } from "./tag";

export interface Project {
    frontmatter: {
        title: string,
        description?: string,
        tags?: Tag[],
        priority?: number,
    }

    url: string

    compiledContent: () => string
}

export function getAllCodingProjects(): Project[] {
    return (Object.values(
        import.meta.glob('/src/pages/coding-projects/**/*.{md,mdx}', { eager: true })
    ) as Project[]).sort((a, b) =>
        (b.frontmatter.priority ?? 0) - (a.frontmatter.priority ?? 0)
    );
}