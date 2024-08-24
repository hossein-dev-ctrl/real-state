import Property from "@/components/Property";
import properties from "@/properties.json";

const Properties = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <div>ملکی برای مشاهده وجود ندارد</div>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => {
              // return <div>{property.name}</d
              return <Property key={property._id} property={property} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
