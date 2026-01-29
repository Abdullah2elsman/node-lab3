import { model, Schema } from "mongoose"

const UserSchema = new Schema({
    name: String,
    age: Number,
    email: String,
})

export const UserModel = model('User', UserSchema)

