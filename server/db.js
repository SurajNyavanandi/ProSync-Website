import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/prosync_db';
  try {
    await mongoose.connect(uri);
    console.log(`[Database] Connected to MongoDB at ${uri.replace(/\/\/.*@/, '//<credentials>@')}`);
  } catch (err) {
    console.error('[Database] MongoDB connection error:', err.message);
    throw err;
  }
}

