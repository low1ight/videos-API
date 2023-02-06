export type UpdateVideoModel = {
    title:string,
    author:string,
    canBeDownloaded: boolean,
    minAgeRestriction: number | null,
    publicationDate: string,
    availableResolutions:string[]
}