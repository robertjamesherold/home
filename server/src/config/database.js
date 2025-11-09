import mongoose from 'mongoose';

let isConnected = false;

export const connectDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('[database] No MONGODB_URI provided. Running in memory-only mode.');
    return;
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log('[database] Connected to MongoDB');
  } catch (error) {
    console.error('[database] Failed to connect to MongoDB:', error.message);
    console.warn('[database] Continuing in memory-only mode.');
  }
};

export const disconnectDatabase = async () => {
  if (!isConnected) return;
  await mongoose.disconnect();
  isConnected = false;
};

export const isDatabaseConnected = () => isConnected;
