import SwiperCategory from "../swipercategory/SwiperCategory";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

function ProjectSlide() {
  return (
    <SwiperCategory
      href="/products"
      showBtn={true}
      text="پروژه های ما"
      countSlide={5}
      id="swiper2"
    >
      <SwiperSlide className="grayscale hover:grayscale-80 text-gray-100">
        <Link href={"/project"}>
          <Image
            src={"/images/projectimg1.jpg"}
            alt="project-img"
            width={550}
            height={500}
            className="rounded h-90 object-cover "
          />
          <h1 className="absolute top-80 shadow w-100 right-[-160] transform rotate-90 font-bold text-xl text-gray-100">
            جوش ماشین آلات کارخانه
          </h1>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="grayscale hover:grayscale-20 text-gray-100">
        <Link href={"/project"}>
          <Image
            src={"/images/projectimg2.jpg"}
            alt="project-img"
            width={550}
            height={500}
            className="rounded h-90 object-cover "
          />
          <h1 className="absolute top-80 shadow w-100 right-[-160] transform rotate-90 font-bold text-xl">
            سوراخ کاری میز های هتل
          </h1>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="grayscale hover:grayscale-20 text-gray-100">
        <Link href={"/project"}>
          <Image
            src={"/images/projectimg3.jpg"}
            alt="project-img"
            width={550}
            height={500}
            className="rounded h-90 object-cover "
          />
          <h1 className="absolute top-88 shadow w-100 right-[-160] transform rotate-90 font-bold text-2xl">
            تخریب بیمارستان
          </h1>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="grayscale hover:grayscale-20 text-gray-100">
        <Link href={"/project"}>
          <Image
            src={"/images/projectimg4.jpg"}
            alt="project-img"
            width={550}
            height={500}
            className="rounded h-90 object-cover "
          />
          <h1 className="absolute top-88 shadow w-100 right-[-160] transform rotate-90 font-bold text-xl">
            برش قطعات کارخانه
          </h1>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="grayscale hover:grayscale-20 text-gray-100">
        <Link href={"/project"}>
          <Image
            src={"/images/projectimg5.jpg"}
            alt="project-img"
            width={550}
            height={500}
            className="rounded h-90 object-cover "
          />
          <h1 className="absolute top-90 shadow w-100 right-[-160] transform rotate-90 font-bold text-xl">
            پروژه راه اندازی بتن
          </h1>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="grayscale hover:grayscale-20 text-gray-100">
        <Link href={"/project"}>
          <Image
            src={"/images/projectimg6.png"}
            alt="project-img"
            width={550}
            height={500}
            className="rounded h-90 object-cover "
          />
          <h1 className="absolute top-85 shadow w-100 right-[-160] transform rotate-90 font-bold text-xl">
            باغبانی و هرس درختان
          </h1>
        </Link>
      </SwiperSlide>
    </SwiperCategory>
  );
}

export default ProjectSlide;
