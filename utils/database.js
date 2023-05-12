import mongoose from 'mongoose';

const isConnected = false; // track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('using existing database connection');
    return;
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.MONGODB_DB,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;

      console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
  } 

}