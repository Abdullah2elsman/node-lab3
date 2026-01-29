import express from 'express';
import { createPost, getPosts, updatePost, deletePost } from './post.controller.js';

const postRouter = express.Router();

postRouter.get('/posts', getPosts)
postRouter.post('/posts', createPost)
postRouter.patch('/posts/:id', updatePost)
postRouter.delete('/posts/:id', deletePost)

export default postRouter;