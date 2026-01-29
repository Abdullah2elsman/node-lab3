import { PostModel } from "../../Database/Models/Post.model.js";

const getPosts = async (req, res) => {
    let posts = await PostModel.find();
    if (posts.length === 0) {
        return res.status(200).json({ message: "no posts found", data: [] })
    }
    res.status(200).json({ message: "success", data: posts })
}

const createPost = async (req, res) => {
    if (!req.body.author || req.body.author.trim() === "") {
        return res.status(400).json({ message: "author is required" })
    }

    if (!req.body.title || req.body.title.trim() === "") {
        return res.status(400).json({ message: "title is required" })
    }

    if (!req.body.content || req.body.content.trim() === "") {
        return res.status(400).json({ message: "content is required" })
    }

    const postData = {
        author: req.body.author.trim(),
        title: req.body.title.trim(),
        content: req.body.content.trim()
    }

    let newPost = await PostModel.insertMany([postData])
    console.log("Created post:", newPost);
    res.status(201).json({ message: "post added successfully", data: newPost })
}

const updatePost = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ message: "post id is required" })
    }

    if (!req.body.author || req.body.author.trim() === "") {
        return res.status(400).json({ message: "author is required" })
    }

    if (!req.body.title || req.body.title.trim() === "") {
        return res.status(400).json({ message: "title is required" })
    }

    if (!req.body.content || req.body.content.trim() === "") {
        return res.status(400).json({ message: "content is required" })
    }

    const updateData = {
        author: req.body.author.trim(),
        title: req.body.title.trim(),
        content: req.body.content.trim()
    }

    let postUpdated = await PostModel.findByIdAndUpdate(id, updateData, { new: true })

    if (!postUpdated) {
        return res.status(404).json({ message: "post not found" })
    }

    res.status(200).json({ message: "post updated successfully", data: postUpdated })
}

const deletePost = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ message: "post id is required" })
    }

    let post = await PostModel.findByIdAndDelete(id)

    if (!post) {
        return res.status(404).json({ message: "post not found" })
    }

    res.status(200).json({ message: "post deleted successfully", data: post })
}

export { getPosts, createPost, updatePost, deletePost }