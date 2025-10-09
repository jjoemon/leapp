// /app/lib/mongoose.ts
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

global.mongoose ||= { conn: null, promise: null };

export async function dbConnect(): Promise<Mongoose> {
  if (global.mongoose!.conn) return global.mongoose!.conn;

  if (!global.mongoose!.promise) {
    global.mongoose!.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  global.mongoose!.conn = await global.mongoose!.promise;
  return global.mongoose!.conn;
}
