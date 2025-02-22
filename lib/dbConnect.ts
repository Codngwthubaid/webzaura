import mongoose from "mongoose";

// Define the Mongoose cache interface with precise typing
interface MongooseCache {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

// Module-level cache (replaces global.mongoose)
const mongooseCache: MongooseCache = { conn: null, promise: null };

const MONGODB_URI = process.env.MONGO_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );
}

async function dbConnect(): Promise<mongoose.Mongoose> {
  if (mongooseCache.conn) {
    return mongooseCache.conn;
  }

  if (!mongooseCache.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    mongooseCache.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    mongooseCache.conn = await mongooseCache.promise;
    console.log("MongoDB connected successfully");
    return mongooseCache.conn;
  } catch (error) {
    mongooseCache.promise = null;
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default dbConnect;