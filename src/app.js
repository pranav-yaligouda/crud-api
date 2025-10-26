import express from "express";
import cookieParser from 'cookie-parser'
import { NODE_ENV, PORT } from "./config/envconfig.js";
import ConnectToDatabase from "./database/connectDb.js";
import errorMiddleware  from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to CRUD API');
});

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime()})
});

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime()});
});

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/users', userRouter);

app.use(errorMiddleware);

ConnectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${NODE_ENV} environment.`);
  });
});
