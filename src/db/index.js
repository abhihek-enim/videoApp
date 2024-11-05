import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import express from "express";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "\n MongoDb connected!! DB Host !!  " + connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MongoDB connection ERR: ", error);
    process.exit(1);
  }
};

export default connectDB;
