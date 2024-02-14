export interface t_article {
    _id: string,
    title: string,
    subtitle?: string,
    topic?: string,
    contents?: string[],
    date?: string,
    tags?: string[],
}