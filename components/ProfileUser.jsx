import connectDB from "@/config/database";
import Image from "next/image";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import defultImage from "@/assets/images/profile.png";
import ProfileProperties from "./ProfileProperties";
import { convertToSerializableToObject } from "@/utils/convertToObject";

const ProfileUser = async () => {
  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("آیدی کاربری الزامی است");
  }

  const imgProfile = sessionUser.user.image || defultImage;

  const propertiesProfile = await Property.find({ owner: userId }).lean();
  const properties = propertiesProfile.map(convertToSerializableToObject);
  // console.log(propertiesProfile);
  return (
    <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
      <h1 class="text-3xl font-bold mb-4">پروفایل شما</h1>
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/4 mx-20 mt-10">
          <div class="mb-4">
            <Image
              class="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
              src={imgProfile}
              width={200}
              height={200}
              alt="User"
            />
          </div>

          <h2 class="text-2xl mb-4">
            <span class="font-bold block">نام : </span> {sessionUser.user.name}
          </h2>
          <h2 class="text-2xl">
            <span class="font-bold block">ایمیل : </span>{" "}
            {sessionUser.user.email}
          </h2>
        </div>

        <div class="md:w-3/4 md:pl-4">
          <h2 class="text-xl font-semibold mb-4">لیست املاک شما</h2>
          <ProfileProperties properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
