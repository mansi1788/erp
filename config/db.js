import mongoose from "mongoose";
import colors from 'colors';

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout for server selection
      socketTimeoutMS: 45000,          // 45 seconds timeout for socket operations
      connectTimeoutMS: 30000,         // 30 seconds timeout for connection establishment
    });

    console.log(`Connected to MongoDB: ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error: ${error.message}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

export default connectdb;
