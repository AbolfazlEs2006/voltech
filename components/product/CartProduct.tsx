import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/products/Product";

function CartProduct({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`} className="">
          <section className="w-[100%] px-5 mt-6">
            <div className="items-center text-center bg-gray-200 dark:bg-gray-800 p-5 rounded h-85 shadow-lg">
              <div className="flex justify-center my-7">
                <Image
                  src={product.img}
                  width={80}
                  height={80}
                  alt={product.title}
                  priority
                />
              </div>
              <h1 className="font-bold mb-5">{product.title}</h1>
              <div className="flex items-center mb-5 justify-center gap-1">
                <span className=" text-red-600 dark:text-gray-200">تومان </span>
                <span className="mr-4 text-red-600 dark:text-gray-200">
                  {product.price.toLocaleString()}
                </span>
                <span className="text-gray-500">تومان </span>
                <span className="text-gray-500 line-through">
                  {product.totalprice.toLocaleString()}
                </span>
              </div>
              <h1 className="border text-gray-400 border-dashed"></h1>
              <h2 className="flex items-center justify-between mt-5">
                <span>
                  <span className="text-gray-500">باقیمانده:</span>{" "}
                  {product.count}
                </span>
                <span>
                  <span className="text-gray-500">سفارش:</span> {product.by}
                </span>
              </h2>
            </div>
          </section>
        </Link>
      ))}
    </>
  );
}

export default CartProduct;
