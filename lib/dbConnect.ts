import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );
}

async function dbConnect(): Promise<typeof mongoose> {
  const opts: mongoose.ConnectOptions = {
    bufferCommands: false,
  };

  try {
    const conn = await mongoose.connect(MONGODB_URI as string, opts);
    console.log("MongoDB connected successfully");
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default dbConnect;