const Hero = () => {
  return (
    <section className="bg-blue-700 py-20 mb-4" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            پیدا کردن اجاره به قیمت عالی
          </h1>
          <p className="my-4 text-xl text-white">
            جستجوی ملک مناسب مطابق با نیازهای شما
          </p>
        </div>
        {/* <!-- Form Component --> */}
        <form className="mt-3 mx-auto gap-2 max-w-2xl w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 md:pl-2 mb-4 md:mb-0">
            <label htmlFor="location" className="sr-only">
              مکان
            </label>
            <input
              type="text"
              id="location"
              placeholder="محله را وارد کنید تا محدوده آن را نمایش دهد"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-2/5 ">
            <label htmlFor="property-type" className="sr-only">
              نوع ملک
            </label>
            <select
              id="property-type"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="All">همه</option>
              <option value="Apartment">آپارتمان</option>
              <option value="Studio">استودیو</option>
              <option value="House">خانه ویلایی</option>
              <option value="Cabin Or Cottage">زمین</option>
              <option value="Room">اتاق</option>
              <option value="Other">دیگر</option>
            </select>
          </div>
          <button
            type="submit"
            className="md:mr-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            جستجو
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
