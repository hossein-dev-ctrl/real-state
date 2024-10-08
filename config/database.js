import mongoose from "mongoose";

let connect = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connect) {
    console.log("DB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connect = true;
    console.log("DB connect...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
