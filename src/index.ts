import express,{Request,Response} from 'express'


const app = express()
const port = 3000

let test = new Date().toISOString()
app.use(express.json())


type Video = {
    id: number,
    title:string,
    author:string,
    canBeDownloaded: boolean,
    minAgeRestriction: number,
    createdAt: string,
    publicationDate: string,
    availableResolutions:string[]
}

let videosDB:Video[] = [
    {
        id:1,
        title:'tianic',
        author:'nolan',
        canBeDownloaded: false,
        minAgeRestriction: 6,
        createdAt: test,
        publicationDate: test,
        availableResolutions:['144p']
    },
    {
        id:2,
        title:'tianic2',
        author:'nolan',
        canBeDownloaded: false,
        minAgeRestriction: 6,
        createdAt: test,
        publicationDate: test,
        availableResolutions:['144p']
    },
    {
        id:2,
        title:'tianic3',
        author:'nolan',
        canBeDownloaded: false,
        minAgeRestriction: 6,
        createdAt: test,
        publicationDate: test,
        availableResolutions:['144p']
    },

]


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
        for(let key in foundVideo) {
            if(req.body[key]) foundVideo[key] = req.body[key]
        }
        res.send(foundVideo)
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

app.post('/hometask_01/api/videos', (req:Request, res:Response) => {
    if(req.body.title && req.body.author) {
        let video:Video = {
            id:Date.now(),
            title:req.body.title,
            author:req.body.author,
            canBeDownloaded: false,
            minAgeRestriction: 6,
            createdAt: test,
            publicationDate: test,
            availableResolutions:['144p']
        }
        videosDB.push(video)
        res.send(video)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})