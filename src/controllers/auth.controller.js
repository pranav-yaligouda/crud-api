import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/envconfig.js";

export const register = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    //Registration logic
    const { name, email, phone, gender, dob, password } = req.body;

    //Check if user already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUsers = await User.create([{ name, email, password: hashedPassword, phone, gender, dob }], { session } );

    const token = jwt.sign({ userId: newUsers[0]._id} , JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        user: newUsers[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const login = async (req, res, next) => {};

export const logout = async (req, res, next) => {};
