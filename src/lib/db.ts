import mongoose, { Mongoose } from "mongoose";

type GlobalWithMongoose = typeof globalThis & {
  _mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
};

const globalWithMongoose = global as GlobalWithMongoose;

if (!globalWithMongoose._mongoose) {
  globalWithMongoose._mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Mongoose> {
  const cached = globalWithMongoose._mongoose;
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 5000,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}


