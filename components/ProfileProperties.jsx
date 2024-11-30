"use client";
import Image from "next/image";
import DeleteProperty from "@/app/actions/deleteProperty";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const ProfileProperties = ({ properties }) => {
  const [newProperties, setNewProperties] = useState(properties);

  const handleDeleteProperty = async (propertyId) => {
    const confirm = window.confirm("آیا از حذف ملک مطمئن هستید؟");

    if (!confirm) return;

    await DeleteProperty(propertyId);
    const updateproperties = properties.filter((property) => {
      property._id !== propertyId;
    });
    setNewProperties(updateproperties);

    toast.success("ملک با موفقیت حذف شد");
  };

  return newProperties.map((property, index) => (
    <div class="mb-10">
      <Link href={"/properties/" + property._id}>
        <Image
          class="h-32 w-full rounded-md object-cover"
          src={property.images[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt="Property 1"
        />
      </Link>
      <div class="mt-2">
        <p class="text-lg font-semibold">{property.name}</p>
        <p class="text-gray-600">آدرس : {property.location.street}</p>
      </div>
      <div class="mt-2">
        <Link
          href={`/properties/${property._id}/edit`}
          class="bg-blue-500 text-white px-2 py-2 rounded-md ml-2 hover:bg-blue-600"
        >
          ویرایش
        </Link>
        <button
          class="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          type="button"
          onClick={() => handleDeleteProperty(property._id)}
        >
          حذف
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;
