export type Params = Promise<{ slug: string }>
export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
export type PageParams = {
    params: Params,
    searchParams: SearchParams
}