import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="مستاجران"
            buttonInfo={{
              link: "/properties",
              text: "مشاهده املاک",
              bgColor: "bg-black",
            }}
          >
            ملک اجاره ای رویایی خود را پیدا کنید. ویژگی و شماره تماس مالکان را
            نشانک گذاری کنید
          </InfoBox>
          <InfoBox
            heading="مالکان"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              link: "/properties/add-property",
              text: "افزودن ملک",
              bgColor: "bg-blue-500",
            }}
          >
            املاک خود را فهرست کنید و به مستاجران دسترسی پیدا کنید. (به صورت
            کوتاه یا بلند مدت)
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
