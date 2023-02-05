import express,{Request,Response} from 'express'
import {postNewVideoValidator} from "./validators/PostNewVideoValidator";
import {putNewVideoValidator} from "./validators/putVideoValidator";


export const app = express()
const port = 3000

app.use(express.json())


type Video = {
    id: number,
    title:string,
    author:string,
    canBeDownloaded: boolean,
    minAgeRestriction: number | null,
    createdAt: string,
    publicationDate: string,
    availableResolutions:string[]
}

let videosDB:Video[] = [
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


app.delete('/hometask_01/api/testing/all-data', (req:Request, res:Response) => {
    videosDB = []
    res.send(204)
})


app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})


app.get('/hometask_01/api/videos', (req:Request, res:Response) => {
    res.send(videosDB)
})


app.get('/hometask_01/api/videos/:id', (req:Request, res:Response) => {
    let foundVideo = videosDB.find(item => item.id === +req.params.id);
    if(foundVideo) {
        res.send(foundVideo)
        return
    }
    res.send(404)


})

app.put('/hometask_01/api/videos/:id', (req:Request, res:Response) => {

    let foundVideo:any = videosDB.find(item => item.id === +req.params.id);
    if(foundVideo) {
        let err = putNewVideoValidator(req.body)
        if(err) {
            res.status(400)
            res.send(err)
            return
        } else {
            for(let key in foundVideo) {
                if(req.body[key]) foundVideo[key] = req.body[key]
            }
            res.send(foundVideo)
        }

    }
    res.send(404)


})

app.delete('/hometask_01/api/videos/:id', (req:Request, res:Response) => {

    let filteredArr = videosDB.filter(item => item.id !== +req.params.id)

    if(filteredArr.length !== videosDB.length) {
        videosDB = filteredArr
        res.send(204)
        return
    }
    res.send(404)





})



app.post('/hometask_01/api/videos', (req:Request<{},{title:string,author:string,availableResolutions:string[]}>, res:Response) => {
        let err = postNewVideoValidator(req.body)
        if(err) {
            res.status(400)
            res.send(err)
            return
        }


       const createdAt = new Date();
       const copiedDate = new Date(createdAt.getTime() + 86400000);

        let video:Video = {
            id:Date.now(),
            title:req.body.title,
            author:req.body.author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: createdAt.toISOString(),
            publicationDate: copiedDate.toISOString(),
            availableResolutions:req.body.availableResolutions
        }
        videosDB.push(video)
        res.send(video)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


