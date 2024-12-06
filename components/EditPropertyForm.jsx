import UpdateProperty from "@/app/actions/UpdateProperty";

const EditPropertyForm = ({ property }) => {
  const UpdatePropertyById = UpdateProperty.bind(null, property._id);
  return (
    <form action={UpdatePropertyById}>
      <h2 className="text-3xl text-center font-semibold mb-6">ویرایش ملک</h2>

      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          نوع ملک
        </label>
        <select
          id="type"
          name="type"
          defaultValue={property.type}
          className="border rounded w-full py-2 px-3"
          required
        >
          <option value="Apartment">آپارتمان</option>
          <option value="Condo">سوئیت</option>
          <option value="House">خانه</option>
          <option value="CabinOrCottage">کلبه</option>
          <option value="Room">اتاق</option>
          <option value="Studio">استودیو</option>
          <option value="Other">دیگر</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">عنوان</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={property.name}
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="به عنوان مثال آپارتمان زیبا در قیطریه"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          توضیحات
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={property.description}
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="یک توضیح اختیاری به ملک خود اضافه کنید"
        ></textarea>
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">مکان</label>
        <input
          type="text"
          id="street"
          name="location.street"
          defaultValue={property.location.street}
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="خیابان"
        />
        <input
          type="text"
          id="city"
          name="location.city"
          defaultValue={property.location.city}
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="شهر"
          required
        />
        <input
          type="text"
          id="state"
          name="location.state"
          defaultValue={property.location.state}
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="استان"
          required
        />
        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
          defaultValue={property.location.zipcode}
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="کد پستی"
        />
      </div>

      <div className="mb-4 flex flex-wrap">
        <div className="w-full sm:w-1/3 pr-2">
          <label htmlFor="beds" className="block text-gray-700 font-bold mb-2">
            اتاق خواب
          </label>
          <input
            type="number"
            id="beds"
            name="beds"
            defaultValue={property.beds}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="w-full sm:w-1/3 px-2">
          <label htmlFor="baths" className="block text-gray-700 font-bold mb-2">
            حمام ها
          </label>
          <input
            type="number"
            id="baths"
            defaultValue={property.baths}
            name="baths"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="w-full sm:w-1/3 pl-2">
          <label
            htmlFor="square_meter"
            className="block text-gray-700 font-bold mb-2"
          >
            متر مربع
          </label>
          <input
            type="number"
            id="square_meter"
            name="square_meter"
            defaultValue={property.suare_meter}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">امکانات</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div>
            <input
              type="checkbox"
              id="amenity_wifi"
              name="amenities"
              defaultChecked={property.amenities.includes("وایفای")}
              value="وایفای"
              className="ml-2"
            />
            <label htmlFor="amenity_wifi">وایفای</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_kitchen"
              defaultChecked={property.amenities.includes("آشپزخانه")}
              name="amenities"
              value="آشپزخانه"
              className="ml-2"
            />
            <label htmlFor="amenity_kitchen">آشپزخانه</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_washer_dryer"
              name="amenities"
              defaultChecked={property.amenities.includes("ماشین لباسشویی")}
              value="ماشین لباسشویی"
              className="ml-2"
            />
            <label htmlFor="amenity_washer_dryer">ماشین لباسشویی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_free_parking"
              defaultChecked={property.amenities.includes("پارکینگ")}
              name="amenities"
              value="پارکینگ"
              className="ml-2"
            />
            <label htmlFor="amenity_free_parking">پارکینگ</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              defaultChecked={property.amenities.includes("استخر")}
              value="استخر"
              className="ml-2"
            />
            <label htmlFor="amenity_pool">استخر</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_hot_tub"
              name="amenities"
              defaultChecked={property.amenities.includes("جکوزی")}
              value="جکوزی"
              className="ml-2"
            />
            <label htmlFor="amenity_hot_tub">جکوزی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_24_7_security"
              name="amenities"
              defaultChecked={property.amenities.includes("نگهبانی")}
              value="نگهبانی"
              className="ml-2"
            />
            <label htmlFor="amenity_24_7_security">نگهبانی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_wheelchair_accessible"
              name="amenities"
              defaultChecked={property.amenities.includes("دسترسی با ویلچر")}
              value="دسترسی با ویلچر"
              className="ml-2"
            />
            <label htmlFor="amenity_wheelchair_accessible">
              دسترسی با ویلچر
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_elevator_access"
              name="amenities"
              defaultChecked={property.amenities.includes("آسانسور")}
              value="آسانسور"
              className="ml-2"
            />
            <label htmlFor="amenity_elevator_access">آسانسور</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_dishwasher"
              name="amenities"
              defaultChecked={property.amenities.includes("ماشین ظرفشویی")}
              value="ماشین ظرفشویی"
              className="ml-2"
            />
            <label htmlFor="amenity_dishwasher">ماشین ظرفشویی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_gym_fitness_center"
              name="amenities"
              defaultChecked={property.amenities.includes("باشگاه بدنسازی")}
              value="باشگاه بدنسازی"
              className="ml-2"
            />
            <label htmlFor="amenity_gym_fitness_center">باشگاه بدنسازی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_air_conditioning"
              name="amenities"
              defaultChecked={property.amenities.includes("سیستم تهویه")}
              value="سیستم تهویه"
              className="ml-2"
            />
            <label htmlFor="amenity_air_conditioning">سیستم تهویه</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_balcony_patio"
              name="amenities"
              defaultChecked={property.amenities.includes("بالکن/حیاط")}
              value="بالکن/حیاط"
              className="ml-2"
            />
            <label htmlFor="amenity_balcony_patio">بالکن/حیاط</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_smart_tv"
              name="amenities"
              value="تلویزیون هوشمند"
              defaultChecked={property.amenities.includes("تلویزیون هوشمند")}
              className="ml-2"
            />
            <label htmlFor="amenity_smart_tv">تلویزیون هوشمند</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_barbecue"
              name="amenities"
              defaultChecked={property.amenities.includes("باربیکیو")}
              value="باربیکیو"
              className="ml-2"
            />
            <label htmlFor="amenity_barbecue">باربیکیو</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_fire_place"
              name="amenities"
              defaultChecked={property.amenities.includes("شومینه")}
              value="شومینه"
              className="ml-2"
            />
            <label htmlFor="amenity_fire_place">شومینه</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_library"
              name="amenities"
              defaultChecked={property.amenities.includes("کتابخانه")}
              value="کتابخانه"
              className="ml-2"
            />
            <label htmlFor="amenity_library">کتابخانه</label>
          </div>
        </div>
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">
          مدت (در صورت عدم نیاز خالی بگذارید)
        </label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <label htmlFor="weekly_rate" className="mr-2">
              هفتگی
            </label>
            <input
              type="number"
              id="weekly_rate"
              name="rates.weekly"
              defaultValue={property.rates.weekly}
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="monthly_rate" className="mr-2">
              ماهیانه
            </label>
            <input
              type="number"
              id="monthly_rate"
              defaultValue={property.rates.monthly}
              name="rates.monthly"
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="daily_rate" className="mr-2">
              روزانه
            </label>
            <input
              type="number"
              id="daily_rate"
              name="rates.daily"
              defaultValue={property.rates.daily}
              className="border rounded w-full py-2 px-3"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="seller_name"
          className="block text-gray-700 font-bold mb-2"
        >
          نام فروشنده
        </label>
        <input
          type="text"
          id="seller_name"
          name="seller_info.name"
          defaultValue={property.seller_info.name}
          className="border rounded w-full py-2 px-3"
          placeholder="نام"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_email"
          className="block text-gray-700 font-bold mb-2"
        >
          ایمیل فروشنده
        </label>
        <input
          type="email"
          id="seller_email"
          name="seller_info.email"
          defaultValue={property.seller_info.email}
          className="border rounded w-full py-2 px-3"
          placeholder="آدرس ایمیل"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_phone"
          className="block text-gray-700 font-bold mb-2"
        >
          تلفن فروشنده
        </label>
        <input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          defaultValue={property.seller_info.phone}
          className="border rounded w-full py-2 px-3"
          placeholder="تلفن"
        />
      </div>

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          ویرایش ملک
        </button>
      </div>
    </form>
  );
};

export default EditPropertyForm;
