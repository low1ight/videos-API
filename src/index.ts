import express,{Request,Response} from 'express'
import {videosRouter} from "./routes/videos-router";


export const app = express()
const port = 3000

app.use(express.json())





videosRouter.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})

let baseUrl = "/hometask_01/api"

app.use(baseUrl + '/videos',videosRouter)
app.use(baseUrl + '/testing',videosRouter)






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


