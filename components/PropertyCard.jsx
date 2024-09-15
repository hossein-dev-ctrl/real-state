import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";
const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `   ${rates.monthly}تومان  / ماهیانه`;
    } else if (rates.weekly) {
      return `   ${rates.weekly}تومان  / هفتگی`;
    } else if (rates.daily) {
      return `   ${rates.daily}تومان  / روزانه`;
    }
  };

  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        // src="/images/properties/a1.jpg"
        src={`/images/properties/${property.images[1]}`}
        alt=""
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-right md:text-center lg:text-right mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <span className="flex gap-2">
              <FaBed className="md:hidden lg:inline"></FaBed> {property.baths}{" "}
            </span>
            <span className="md:hidden lg:inline">اتاق خواب</span>
          </p>
          <p>
            <span className="flex gap-2">
              <FaBath className="md:hidden lg:inline"></FaBath> {property.beds}{" "}
            </span>

            <span className="md:hidden lg:inline">حمام</span>
          </p>
          <p>
            <span className="flex gap-2">
              <FaRulerCombined className="md:hidden lg:inline"></FaRulerCombined>
              {property.square_feet}
            </span>

            <span className="md:hidden lg:inline">متر مربع</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            <FaMoneyBill className="md:hidden lg:inline"></FaMoneyBill>هفتگی
          </p>
          <p>
            <FaMoneyBill className="md:hidden lg:inline"></FaMoneyBill>ماهانه
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="fa-solid fa-location-dot text-lg text-orange-700"></FaMapMarker>
            <span className="text-orange-700"> باغ فردوس، تهران </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            جزئیات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
