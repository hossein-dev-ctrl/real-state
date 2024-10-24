import PropertyDetails from "@/components/PropertyDetails";
import PropertyGoBack from "@/components/PropertyGoBack";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const PropertyId = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <PropertyGoBack />
      {/* <div>{property.name}</div> */}
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
          <PropertyImages images={property.images} />
        </div>
      </section>
    </>
  );
};

export default PropertyId;
