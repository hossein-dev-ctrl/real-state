"use server";

import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const UpdateProperty = async (propertyId, formData) => {
  connectDB();

  const SesssionUser = await getSessionUser();

  if (!SesssionUser || !SesssionUser.userId) {
    throw new Error("آیدی کاربری ضروری است");
  }

  const { userId } = SesssionUser;

  const existingProperty = await Property.findById(propertyId);

  if (existingProperty.owner.toString() !== userId) {
    throw new Error("شما نمیتوانید این ملک را تغییر دهید");
  }

  const propertyData = {
    owner: userId,
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    square_meter: formData.get("square_meter"),
    amenities: formData.getAll("amenities"),
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

  const updateProperty = await Property.findByIdAndUpdate(
    propertyId,
    propertyData
  );

  revalidatePath("/", "layout");

  redirect(`/properties/${updateProperty._id}`);
};
export default UpdateProperty;
