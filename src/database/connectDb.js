import mongoose from "mongoose";
import { MONGODB_URI } from "../config/envconfig.js";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the ENVIRONMENT VARIABLES .env file");
}

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connect to MongoDB Database");
  } catch (error) {
    console.error("Error Connecting to database", error);
    process.exit(1);
  }
};

export default ConnectToDatabase;
