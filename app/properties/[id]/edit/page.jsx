import EditPropertyForm from "@/components/EditPropertyForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableToObject } from "@/utils/convertToObject";

const profileEdit = async ({ params }) => {
  await connectDB();

  const PropertyDoc = await Property.findById(params.id).lean();
  const property = await convertToSerializableToObject(PropertyDoc);
  if (!property)
    return (
      <h1 className="text-center text-2xl text-bold mt-10">
        ملک مورد نظر وجود ندارد
      </h1>
    );

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4">
          <EditPropertyForm property={property} />
        </div>
      </div>
    </section>
  );
};

export default profileEdit;
