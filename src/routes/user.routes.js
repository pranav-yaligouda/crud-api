import { Router } from 'express';
import { getUsers, getUser } from "../controllers/user.controller.js"
const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', (req, res) => res.send({title: 'Create new user POST route'}));

userRouter.put('/:id', (req, res) => res.send({title: 'Update user by id PUT route'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'Delete user by id DELETE route'}));

export default userRouter;