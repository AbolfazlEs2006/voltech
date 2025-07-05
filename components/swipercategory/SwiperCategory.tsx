import styles from "./Swiper.module.css";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const SwiperCategory = ({
  text,
  showBtn,
  href,
  children,
  countSlide,
  id,
}: {
  text: string;
  showBtn: boolean;
  href: string;
  countSlide: number;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${styles["swiper-container"]}`}>
      <section className="flex justify-between items-center">
        {showBtn && (
          <Link href={href} className="mb-4 mr-2">
            <button className="btn">مشاهده همه</button>
          </Link>
        )}
        <div className={`${styles["swiper-nav-buttons"]}`}>
          <button
            className={`${styles["custom-prev-button"]} btn bg-gray-300 hover:bg-gray-300 prev-${id}`}
          >
            <i className="bi bi-arrow-left-short text-2xl text-gray-800"></i>
          </button>
          <button
            className={`${styles["custom-prev-button"]} btn bg-gray-300 hover:bg-gray-300 next-${id}`}
          >
            <i className="bi bi-arrow-right-short text-2xl text-gray-800"></i>
          </button>
        </div>
        <h1 className="flex-grow border-1 mb-3 border-dashed border-gray-300 mx-5"></h1>
        <h1 className="mb-4 font-bold text-2xl">{text}</h1>
      </section>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.prev-${id}`,
          nextEl: `.next-${id}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: countSlide,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperCategory;
