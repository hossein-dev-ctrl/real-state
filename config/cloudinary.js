import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOINARY_CLOUND_NAME,
  api_key: process.env.CLOINARY_API_KEY,
  api_secret: process.env.CLOINARY_API_SECRET,
});

export default cloudinary;
