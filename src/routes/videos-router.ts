import {Request, Response, Router} from "express";
import {putNewVideoValidator} from "../validators/putVideoValidator";
import {postNewVideoValidator} from "../validators/PostNewVideoValidator";
import {videosDB,Video,setVideoDB} from "../videosDB";

export const videosRouter = Router({})



videosRouter.get('/', (req:Request, res:Response) => {
    res.send(videosDB)
})

videosRouter.get('/:id', (req:Request, res:Response) => {
    let foundVideo = videosDB.find(item => item.id === +req.params.id);
    if(foundVideo) {
        res.send(foundVideo)
        return
    }
    res.send(404)


})

videosRouter.put('/:id', (req:Request, res:Response) => {

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
            res.sendStatus(204).send(foundVideo)
        }

    }
    res.send(404)


})

videosRouter.delete('/:id', (req:Request, res:Response) => {

    let filteredArr = videosDB.filter(item => item.id !== +req.params.id)

    if(filteredArr.length !== videosDB.length) {
        setVideoDB(filteredArr)
        res.send(204)
        return
    }
    res.send(404)


})

videosRouter.post('/', (req:Request<{},{title:string,author:string,availableResolutions:string[]}>, res:Response) => {
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
    res.status(201).json(video)
})


