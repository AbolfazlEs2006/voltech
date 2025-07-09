import Hero from "./Hero";
import SwiperSlides from "../swipercategory/SwiperSlides";
import Catalog from "./Catalog";
import Brand from "./Brand";
import Team from "./team/Team";

function Home() {
  return (
    <>
      <Hero />
      <SwiperSlides />
      <Catalog />
      <Brand />
      <Team />
    </>
  );
}

export default Home;
