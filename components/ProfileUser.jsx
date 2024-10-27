import connectDB from "@/config/database";
import Image from "next/image";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import defultImage from "@/assets/images/profile.png";

const ProfileUser = async () => {
  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("آیدی کاربری الزامی است");
  }

  const imgProfile = sessionUser.user.image || defultImage;

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
          <div class="mb-10">
            <a href="/property.html">
              <Image
                class="h-32 w-full rounded-md object-cover"
                src="/images/properties/a1.jpg"
                width={0}
                height={0}
                alt="Property 1"
              />
            </a>
            <div class="mt-2">
              <p class="text-lg font-semibold">ملک قیطریه</p>
              <p class="text-gray-600">آدرس : خیابان شریعتی نبش گلها پلاک 3</p>
            </div>
            <div class="mt-2">
              <a
                href="/add-property.html"
                class="bg-blue-500 text-white px-2 py-2 rounded-md ml-2 hover:bg-blue-600"
              >
                ویرایش
              </a>
              <button
                class="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                type="button"
              >
                حذف
              </button>
            </div>
          </div>
          <div class="mb-10">
            <a href="/property.html">
              <Image
                class="h-32 w-full rounded-md object-cover"
                src="/images/properties/b1.jpg"
                width={0}
                height={0}
                alt="Property 2"
              />
            </a>
            <div class="mt-2">
              <p class="text-lg font-semibold">ملک سعادت آباد</p>
              <p class="text-gray-600">آدرس میدان صنعت نبش اقاقیها پلاک 83</p>
            </div>
            <div class="mt-2">
              <a
                href="/add-property.html"
                class="bg-blue-500 text-white px-2 py-2 rounded-md ml-2 hover:bg-blue-600"
              >
                ویرایش
              </a>
              <button
                class="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                type="button"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
