import {
  FaBath,
  FaBed,
  FaCheck,
  FaRulerCombined,
  FaTimes,
} from "react-icons/fa";

const PropertyDetails = ({ property }) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-right">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start text-left">
          <i className="fa-solid fa-location-dot text-lg text-orange-700 ml-2"></i>
          <p className="text-orange-700">
            {property.location.city} {property.location.street}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          نرخ ها و گزینه ها
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 ml-2 font-bold">روزانه</div>
            <div className="text-2xl font-bold">
              {property.rates.daily ? (
                <div className="text-xl font-bold text-blue-500">{`${property.rates.daily}میلیون تومان`}</div>
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 ml-2 font-bold">هفتگی</div>
            {property.rates.weekly ? (
              <div className="text-xl font-bold text-blue-500">{`${property.rates.weekly}میلیون تومان`}</div>
            ) : (
              <FaTimes className="text-red-700" />
            )}{" "}
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 ml-2 font-bold">ماهیانه</div>
            {property.rates.monthly ? (
              <div className="text-xl font-bold text-blue-500">{`${property.rates.monthly}`}</div>
            ) : (
              <FaTimes className="text-red-700" />
            )}{" "}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">توضیحات و جزئیات</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <p>
            <FaBed className="inline-block ml-2" /> {property.beds}{" "}
            <span className="hidden sm:inline">خواب</span>
          </p>
          <p>
            <FaBath className="inline-block ml-2" />
            {property.baths} <span className="hidden sm:inline">حمام</span>
          </p>
          <p>
            <FaRulerCombined className="inline-block ml-2" />
            {property.square_feet}{" "}
            <span className="hidden sm:inline">متر مربع</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">{property.description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">امکانات رفاهی</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property.amenities.map((amenty, igKey) => {
            return (
              <li key={igKey} className="mt-3">
                <FaCheck className="text-green-600 ml-2 inline-block" />
                {amenty}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map">map</div>
      </div>
    </main>
  );
};

export default PropertyDetails;
