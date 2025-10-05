import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({title: 'GET all users route'}));

userRouter.get('/:id', (req, res) => res.send({title: 'GET user details by id'}));

userRouter.post('/', (req, res) => res.send({title: 'Create new user POST route'}));

userRouter.put('/:id', (req, res) => res.send({title: 'Update user by id PUT route'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'Delete user by id DELETE route'}));

export default userRouter;