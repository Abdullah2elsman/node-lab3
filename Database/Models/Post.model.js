import { model, Schema } from "mongoose"

const PostSchema = new Schema({
    author: String,
    title: String,
    content: String,
})

export const PostModel = model('Post', PostSchema)

