import mongoose from 'mongoose';
import Contact from "@/models/ContactSchema";

const MONGODB_URI_CONTACT = process.env.MONGODB_URI_CONTACT;

if (!MONGODB_URI_CONTACT) {
    throw new Error('Please define the MONGODB_URI_CONTACT environment variable');
}

// Connection caching
let cachedClient = global.mongoose;

if (!cachedClient) {
    cachedClient = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cachedClient.conn) {
        return cachedClient.conn;
    }

    if (!cachedClient.promise) {
        cachedClient.promise = mongoose.connect(MONGODB_URI_CONTACT, {
            dbName: process.env.MONGODB_DB,
            bufferCommands: false,
        }).then((mongoose) => {
            return mongoose;
        });
    }

    cachedClient.conn = await cachedClient.promise;
    return cachedClient.conn;
}

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "POST") {
        try {
            const contactData = new Contact(req.body);
            const savedContact = await contactData.save();

            return res.status(200).json({
                message: "Contact saved successfully",
                id: savedContact._id,
            });
        } catch (error) {
            console.error("MongoDB Error:", error);
            return res.status(400).json({
                message: "Failed to save contact",
                error: error.message,
            });
        }
    }

    return res.status(405).json({ message: "Method not allowed" });
}

export const config = {
    api: {
        externalResolver: true,
    },
};












