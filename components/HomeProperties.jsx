import properties from "@/properties.json";
import Property from "@/components/Property";
import Link from "next/link";

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3);
  return (
    <>
      <h2 className="text-3xl font-bold text-blue-500 mt-6 text-center">
        املاک اخیر
      </h2>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {recentProperties.length === 0 ? (
            <div>ملکی برای مشاهده وجود ندارد</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((property) => {
                // return <div>{property.name}</d
                return <Property key={property._id} property={property} />;
              })}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center pt-2 px-6 h-10 rounded-xl hover:bg-gray-700"
        >
          مشاهده همه املاک
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
