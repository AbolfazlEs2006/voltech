"use client";

import { removeItem } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hook/hooks";
import Image from "next/image";
import Link from "next/link";

function Basket() {
  const { CartItem, total } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const removeItemHandeler = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div>
        {CartItem.length ? (
          <div className="flex flex-col lg:flex-row flex-col-reverse justify-between mx-8 mt-3">
            <div className="border-1 border-gray-300 dark:border-gray-600 p-3 rounded shadow-xl w-full lg:w-140 h-79 mt-10">
              <div className="my-2 flex flex-row-reverse justify-between">
                :مجموع قیمت
                <h1 className="flex flex-row-reverse">
                  <span>{total.toLocaleString()}</span>
                  <span className="mr-1">تومان</span>
                </h1>
              </div>
              <hr className="text-gray-300 dark:text-gray-500 mb-4" />
              <div className="my-2 flex flex-row-reverse justify-between mt-5">
                :مالیات
                <h1 className="flex flex-row-reverse">
                  <span>15,000</span>
                  <span className="mr-1">تومان</span>
                </h1>
              </div>
              <hr className="text-gray-300 dark:text-gray-500 mb-4" />
              <div className="my-2 flex flex-row-reverse justify-between mt-5">
                :پست
                <h1 className="flex flex-row-reverse">
                  <span>20,000</span>
                  <span className="mr-1">تومان</span>
                </h1>
              </div>
              <hr className="text-gray-300 dark:text-gray-500 mb-4" />

              <div className="my-2 flex flex-row-reverse justify-between mt-10">
                :قیمت نهایی
                <h1 className="flex flex-row-reverse">
                  <span>{(total + 35000).toLocaleString()}</span>
                  <span className="mr-1">تومان</span>
                </h1>
              </div>
              <button className="w-full btn bg-gray-600 text-gray-200 mt-4">
                تسویه حساب
              </button>
            </div>

            <section className="flex flex-col lg:ml-10 mt-10 ">
              {CartItem.map((product) => (
                <div
                  key={product.slug}
                  className="flex flex-row-reverse border-1 border-gray-300 dark:border-gray-600 rounded p-5 w-full lg:w-170 mb-5"
                >
                  <Link href={`/products/${product.slug}`}>
                    <Image
                      src={product.img}
                      width={150}
                      alt={product.title}
                      height={150}
                      priority
                      className="rounded"
                    />
                  </Link>

                  <div className="mr-4 flex flex-col items-end w-full">
                    <h1 className="font-bold text-xl mb-3 text-end w-full">
                      {product.title}
                    </h1>
                    <h1 className="flex text-gray-500">
                      <span className="mr-1">تومان</span>
                      <span>{product.price.toLocaleString()}</span>
                    </h1>
                    <h1 className="mt-2 text-gray-500">
                      تعداد: {product.count}
                    </h1>
                  </div>

                  <div className="flex justify-start w-full">
                    <button
                      onClick={() => removeItemHandeler(product.id)}
                      className="btn bg-transparent border-none shadow-none"
                    >
                      <i className="bi bi-trash-fill text-red-500 text-xl"></i>
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        ) : (
          <section className="flex flex-col items-center justify-center mt-25">
            <Image
              src={"/images/shopping.png"}
              width={250}
              height={250}
              alt="empty img"
            />
            <h1>
              سبد خرید شما خالی میباشد |
              <Link
                href={"/products"}
                className="mr-2 text-green-500 font-bold mt-3"
              >
                خرید محصول
              </Link>
            </h1>
            <Link href={"/"}>
              <button className="btn bg-gray-200 text-gray-700 mt-5 w-50 shadow">
                برگشت به خانه
              </button>
            </Link>
          </section>
        )}
      </div>
    </>
  );
}

export default Basket;
