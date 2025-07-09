"use client";
import { SwiperSlide } from "swiper/react";
import SwiperCategory from "../../swipercategory/SwiperCategory";
import TeamCart from "./TeamCart";

const team = [
  { img: "/images/estiri.jpg", id: 1 },
  { img: "/images/estiri1.jpg", id: 2 },
  { img: "/images/estiri.jpg", id: 3 },
  { img: "/images/estiri1.jpg", id: 4 },
  { img: "/images/estiri.jpg", id: 5 },
  { img: "/images/estiri1.jpg", id: 6 },
];

function Team() {
  return (
    <SwiperCategory text="تیم ما" countSlide={5} href="" id="5" showBtn={false}>
      {team.map((profile) => (
        <SwiperSlide key={profile.id}>
          <TeamCart img={profile.img} />
        </SwiperSlide>
      ))}
    </SwiperCategory>
  );
}

export default Team;
