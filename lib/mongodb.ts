import mongoose from 'mongoose';

/**
 * Define a TypeScript interface for the cached connection.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

/**
 * Global variable to cache the MongoDB connection in development mode.
 * This prevents creating multiple connections during hot reloads in Next.js.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB.
 * @returns {Promise<mongoose.Connection>} The MongoDB connection.
 */
export async function connectToDatabase() {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local',
      );
    }

    cached!.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose);
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
}
