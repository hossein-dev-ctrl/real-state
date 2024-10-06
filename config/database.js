import mongoose, { mongo } from "mongoose";

let connect = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose.set("debug", true);

  if (connect) {
    console.log("DB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000, // افزایش زمان تایم‌اوت به 30 ثانیه (30000 میلی‌ثانیه)
    });
    connect = true;
    console.log("db connect");
  } catch (error) {
    console.log("errrrrrrrrrrrror", error);
  }
};

export default connectDB;
