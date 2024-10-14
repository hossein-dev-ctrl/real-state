import AddProperty from "@/app/actions/AddProperty";

const AddPropertyForm = () => {
  return (
    <form action={AddProperty}>
      <h2 className="text-3xl text-center font-semibold mb-6">
        اضافه کردن ملک
      </h2>

      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          نوع ملک
        </label>
        <select
          id="type"
          name="type"
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
        <label className="block text-gray-700 font-bold mb-2">نام فهرست</label>
        <input
          type="text"
          id="name"
          name="name"
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
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="خیابان"
        />
        <input
          type="text"
          id="city"
          name="location.city"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="شهر"
          required
        />
        <input
          type="text"
          id="state"
          name="location.state"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="استان"
          required
        />
        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
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
            name="baths"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="w-full sm:w-1/3 pl-2">
          <label
            htmlFor="meter_feet"
            className="block text-gray-700 font-bold mb-2"
          >
            متر مربع
          </label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
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
              value="Wifi"
              className="ml-2"
            />
            <label htmlFor="amenity_wifi">وایفای</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_kitchen"
              name="amenities"
              value="Full kitchen"
              className="ml-2"
            />
            <label htmlFor="amenity_kitchen">آشپزخانه</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_washer_dryer"
              name="amenities"
              value="Washer & Dryer"
              className="ml-2"
            />
            <label htmlFor="amenity_washer_dryer">ماشین لباسشویی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_free_parking"
              name="amenities"
              value="Free Parking"
              className="ml-2"
            />
            <label htmlFor="amenity_free_parking">پارکینگ</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              value="Swimming Pool"
              className="ml-2"
            />
            <label htmlFor="amenity_pool">استخر</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_hot_tub"
              name="amenities"
              value="Hot Tub"
              className="ml-2"
            />
            <label htmlFor="amenity_hot_tub">جکوزی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_24_7_security"
              name="amenities"
              value="24/7 Security"
              className="ml-2"
            />
            <label htmlFor="amenity_24_7_security">نگهبانی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_wheelchair_accessible"
              name="amenities"
              value="Wheelchair Accessible"
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
              value="Elevator Access"
              className="ml-2"
            />
            <label htmlFor="amenity_elevator_access">آسانسور</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_dishwasher"
              name="amenities"
              value="Dishwasher"
              className="ml-2"
            />
            <label htmlFor="amenity_dishwasher">ماشین ظرفشویی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_gym_fitness_center"
              name="amenities"
              value="Gym/Fitness Center"
              className="ml-2"
            />
            <label htmlFor="amenity_gym_fitness_center">باشگاه بدنسازی</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_air_conditioning"
              name="amenities"
              value="Air Conditioning"
              className="ml-2"
            />
            <label htmlFor="amenity_air_conditioning">سیستم تهویه</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_balcony_patio"
              name="amenities"
              value="Balcony/Patio"
              className="ml-2"
            />
            <label htmlFor="amenity_balcony_patio">بالکن/حیاط</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_smart_tv"
              name="amenities"
              value="Smart TV"
              className="ml-2"
            />
            <label htmlFor="amenity_smart_tv">تلویزیون هوشمند</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_barbecue"
              name="amenities"
              value="Bbarbecue"
              className="ml-2"
            />
            <label htmlFor="amenity_barbecue">باربیکیو</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_fire_place"
              name="amenities"
              value="Fire place"
              className="ml-2"
            />
            <label htmlFor="amenity_fire_place">شومینه</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              value="Pool"
              className="ml-2"
            />
            <label htmlFor="amenity_pool">استخر</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_library"
              name="amenities"
              value="Library"
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
          name="seller_info.name."
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
          className="border rounded w-full py-2 px-3"
          placeholder="تلفن"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
          تصاویر (انتخاب حداکثر ۴ تصویر)
        </label>
        <input
          type="file"
          id="images"
          name="images"
          className="border rounded w-full py-2 px-3"
          accept="image/*"
          multiple
          required
        />
      </div>

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          افزودن ملک
        </button>
      </div>
    </form>
  );
};

export default AddPropertyForm;
