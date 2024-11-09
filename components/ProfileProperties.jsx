import Image from "next/image";
const ProfileProperties = ({ properties }) =>
  properties.map((property, index) => (
    <div class="mb-10">
      <a href="/property.html">
        <Image
          class="h-32 w-full rounded-md object-cover"
          src={property.images[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt="Property 1"
        />
      </a>
      <div class="mt-2">
        <p class="text-lg font-semibold">{property.name}</p>
        <p class="text-gray-600">آدرس : {property.location.street}</p>
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
  ));

export default ProfileProperties;
