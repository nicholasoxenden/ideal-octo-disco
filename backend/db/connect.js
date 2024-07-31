import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

export const connectMongo = async () => {
  const options = {
    useNewUrlParser: true,
    autoIndex: false,
    maxPoolSize: 10,
  };

  try {
    mongoose.set("strictQuery", false); // removes deprecation warnings
    mongoose.connect(MONGODB_URI, options);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("MongoDB connection unsuccessful", err);
    throw err;
  }
};
