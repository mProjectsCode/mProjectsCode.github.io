export enum Tag {
    TYPE_SCRIPT = 'TypeScript',
    OBSIDIAN = 'Obsidian.md',
    JAVA = 'Java',
    C_SHARP = 'C#',
    TTRPG = 'TTRPG',
    PATHFINDER = 'Pathfinder'
}

export const tagColors: {name: Tag, color: string}[] = [
    {
        name: Tag.TYPE_SCRIPT,
        color: '#3178c6',
    },
    {
        name: Tag.OBSIDIAN,
        color: '#8b6cef',
    },
    {
        name: Tag.JAVA,
        color: '#e11e22',
    },
    {
        name: Tag.C_SHARP,
        color: '#1c9623',
    },
    {
        name: Tag.TTRPG,
        color: '#da4435',
    },
    {
        name: Tag.PATHFINDER,
        color: '#e2d893',
    },
]