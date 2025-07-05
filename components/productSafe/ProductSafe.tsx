import SwiperCategory from "../swipercategory/SwiperCategory";
import Link from "next/link";

function ProductSafe() {
  return (
    <SwiperCategory
      countSlide={5}
      href="/products"
      showBtn={true}
      text="تجهیزات ایمنی"
      id="swiper3"
    >
      <Link href={"/products"}></Link>
    </SwiperCategory>
  );
}

export default ProductSafe;
