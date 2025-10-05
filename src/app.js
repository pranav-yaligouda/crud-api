import express from "express";
import { NODE_ENV, PORT } from "./config/envconfig.js";
import ConnectToDatabase from "./database/connectDb.js";
const app = express();

ConnectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${NODE_ENV} environment.`);
  });
});
