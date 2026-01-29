import express from 'express';
import { createUser, getUsers, updateUser, deleteUser } from './user.controller.js';

const userRouter = express.Router();

userRouter.get('/users', getUsers)
userRouter.post('/users', createUser)
userRouter.patch('/users/:id', updateUser)
userRouter.delete('/users/:id', deleteUser)

export default userRouter;