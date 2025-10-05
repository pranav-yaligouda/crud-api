import { Router } from 'express';

const authRouter = Router();

authRouter.post('/register', (req, res) => res.send({ title: 'Register route'}));

authRouter.post('/log-in', (req, res) => res.send ({ title: 'Login route' }));

authRouter.post('/log-out', (req, res) => res.send({ title: 'Logout route' }));

export default authRouter;