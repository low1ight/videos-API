import express from 'express'
import {videosRouter} from "./routes/videos-router";
import {testingRouter} from "./routes/testing-router";

export const app = express()
const port = 3000

app.use(express.json())


let baseUrl = "/hometask_01/api"


app.use(baseUrl + '/videos',videosRouter)
app.use(baseUrl + '/testing',testingRouter)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


