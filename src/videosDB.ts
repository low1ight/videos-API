export let videosDB:VideoType[] = [
    {
        id:1,
        title:'Dead Poets Society',
        author:'Peter Weir',
        canBeDownloaded: false,
        minAgeRestriction: 16,
        createdAt: '2023-02-05T11:10:25.902Z',
        publicationDate: '2023-02-06T11:10:25.902Z',
        availableResolutions:['P144','P720']
    },
]

export function setVideoDB (newDB:VideoType[]) {
    videosDB = newDB
}

export type VideoType = {
    id: number,
    title:string,
    author:string,
    canBeDownloaded: boolean,
    minAgeRestriction: number | null,
    createdAt: string,
    publicationDate: string,
    availableResolutions:string[]
}