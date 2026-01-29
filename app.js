import express from 'express'
import './Database/dbConnect.js'
import userRouter from './Modules/Users/user.routes.js'
import postRouter from './Modules/Posts/post.routes.js'

export const app = express()
app.use(express.json())
const port = 3000

app.use(userRouter)
app.use(postRouter)

app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(`server is running on port ${port} http://localhost:${port}`)
    }
})


