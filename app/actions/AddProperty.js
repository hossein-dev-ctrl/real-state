"use server";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

const AddProperty = async (formData) => {
  const amenities = formData.getAll("amenities");
  const images = formData.getAll("images").filter((image) => image !== "");
  const SesssionUser = await getSessionUser();

  if (!SesssionUser || !SesssionUser.userId) {
    throw new Error("آیدی کاربری ضروری است");
  }

  const { userId } = SesssionUser;

  const propertyData = {
    owner: userId,
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("description"),
      city: formData.get("city"),
      state: formData.get("state"),
      zipcode: formData.get("zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    square_meter: formData.get("square_meter"),
    amenities,
    rates: {
      daily: formData.get("rates.daily"),
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
  };
  const imageUrls = [];

  for (const imageFiles of images) {
    const imageBuffer = await imageFiles.arrayBuffer();

    const imageArray = Array.from(new Uint8Array(imageBuffer));

    const imageData = Buffer.from(imageArray);

    //convert to base64
    const imageBase64 = imageData.toString("base64");

    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "real-state",
      }
    );
    imageUrls.push(result.secure_url);
  }

  propertyData.images = imageUrls;
  const newProperty = await Property(propertyData);
  newProperty.save();

  revalidatePath("/", "layout");

  redirect(`/properties/${newProperty._id}`);
};

export default AddProperty;
