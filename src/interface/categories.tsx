export interface InCategory{
    id : number | string,
    title: string,
    thumbnail: string
}

export type formCategory = Pick<InCategory , "id" | "title" |"thumbnail">