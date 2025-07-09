"use client";

import SwiperCategory from "../swipercategory/SwiperCategory";
import CartProduct from "../product/CartProduct";
import useProducts from "@/hook/useProduct";

function ProductSafe() {
  const { products, loading, error } = useProducts();
  return (
    <SwiperCategory
      countSlide={5}
      href="/products"
      showBtn={true}
      text="تجهیزات ایمنی"
      id="swiper3"
    >
      <div
        className={`${
          loading
            ? "flex flex-col items-center justify-center mt-10 w-full"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {loading ? (
          <h1 className="font-bold flex flex-col items-center justify-center">
            <span className="loading loading-infinity loading-xl"></span>
            Loading...
          </h1>
        ) : (
          <CartProduct products={products.slice(0, 4).reverse()} />
        )}
      </div>
    </SwiperCategory>
  );
}

export default ProductSafe;
