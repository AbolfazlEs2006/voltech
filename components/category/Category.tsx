import SwiperCategory from "@/components/swipercategory/SwiperCategory";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

function Category() {
  return (
    <SwiperCategory
      text="دسته بندی محصولات"
      showBtn={false}
      href=""
      countSlide={6}
      id="swiper1"
    >
      <>
        <SwiperSlide
          className={`flex bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold flex justify-center items-center text-center font-xl py-2 rounded`}
        >
          <Image
            src={"/images/drill.png"}
            alt="icon"
            width={50}
            height={50}
            className="ml-16.5 py-3"
            priority
          />
          <h1 className="text-xl mb-1">تجهیزات ایمینی</h1>
          <Link
            className="text-sm mt-2 text-gray-500 dark:text-gray-200"
            href={"/products"}
          >
            مشاهده قیمت
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className={`flex bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold flex justify-center items-center text-center font-xl py-2 rounded`}
        >
          <Image
            src={"/images/drill.png"}
            alt="icon"
            width={50}
            height={50}
            className="ml-16.5 py-3"
          />
          <h1 className="text-xl mb-1">تجهیزات ایمینی</h1>
          <Link
            className="text-sm mt-2 text-gray-500 dark:text-gray-200"
            href={"/products"}
          >
            مشاهده قیمت
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className={`flex bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold flex justify-center items-center text-center font-xl py-2 rounded`}
        >
          <Image
            src={"/images/drill.png"}
            alt="icon"
            width={50}
            height={50}
            className="ml-16.5 py-3"
          />
          <h1 className="text-xl mb-1">تجهیزات ایمینی</h1>
          <Link
            className="text-sm mt-2 text-gray-500 dark:text-gray-200"
            href={"/products"}
          >
            مشاهده قیمت
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className={`flex bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold flex justify-center items-center text-center font-xl py-2 rounded`}
        >
          <Image
            src={"/images/drill.png"}
            alt="icon"
            width={50}
            height={50}
            className="ml-16.5 py-3"
          />
          <h1 className="text-xl mb-1">تجهیزات ایمینی</h1>
          <Link
            className="text-sm mt-2 text-gray-500 dark:text-gray-200"
            href={"/products"}
          >
            مشاهده قیمت
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className={`flex bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold flex justify-center items-center text-center font-xl py-2 rounded`}
        >
          <Image
            src={"/images/drill.png"}
            alt="icon"
            width={50}
            height={50}
            className="ml-16.5 py-3"
          />
          <h1 className="text-xl mb-1">تجهیزات ایمینی</h1>
          <Link
            className="text-sm mt-2 text-gray-500 dark:text-gray-200"
            href={"/products"}
          >
            مشاهده قیمت
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className={`flex bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold flex justify-center items-center text-center font-xl py-2 rounded`}
        >
          <Image
            src={"/images/drill.png"}
            alt="icon"
            width={50}
            height={50}
            className="ml-16.5 py-3"
          />
          <h1 className="text-xl mb-1">تجهیزات ایمینی</h1>
          <Link
            className="text-sm mt-2 text-gray-500 dark:text-gray-200"
            href={"/products"}
          >
            مشاهده قیمت
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className={`flex bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold flex justify-center items-center text-center font-xl py-2 rounded`}
        >
          <Image
            src={"/images/drill.png"}
            alt="icon"
            width={50}
            height={50}
            className="ml-16.5 py-3"
          />
          <h1 className="text-xl mb-1">تجهیزات ایمینی</h1>
          <Link
            className="text-sm mt-2 text-gray-500 dark:text-gray-200"
            href={"/products"}
          >
            مشاهده قیمت
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className={`flex bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold flex justify-center items-center text-center font-xl py-2 rounded`}
        >
          <Image
            src={"/images/drill.png"}
            alt="icon"
            width={50}
            height={50}
            className="ml-16.5 py-3"
          />
          <h1 className="text-xl mb-1">تجهیزات ایمینی</h1>
          <Link
            className="text-sm mt-2 text-gray-500 dark:text-gray-200"
            href={"/products"}
          >
            مشاهده قیمت
          </Link>
        </SwiperSlide>
      </>
    </SwiperCategory>
  );
}

export default Category;
