import {Router,Request,Response} from "express";
import {setVideoDB} from "../videosDB";

export const testingRouter = Router({})


testingRouter.delete('/all-data', (req:Request, res:Response) => {
    setVideoDB([])
    res.send(204)
})