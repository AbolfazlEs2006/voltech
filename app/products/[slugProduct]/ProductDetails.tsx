import { getProduct } from "@/lib/product";
import { Product } from "../Product";
import Image from "next/image";
import CountProduct from "@/components/product/CountProduct";
import AddToBasketBtn from "@/components/product/AddToBasketBtn";
import Link from "next/link";
import { auth } from "@/auth";
import { logingoogle } from "@/lib/auth-actions";

type Params = {
  slugProduct: string;
};

async function DetailProduct({ params }: { params: Params }) {
  const product: Product = await getProduct(params.slugProduct);
  const count = product.count;
  const session = await auth();

  return (
    <>
      <div className="breadcrumbs text-sm mt-15 mx-7">
        <ul>
          <li className="text-gray-400 hover:text-gray-600">
            <Link href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <li className="text-gray-400 hover:text-gray-600">
            <Link href={"/products"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Products
            </Link>
          </li>
          <li>
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              {product.slug}
            </span>
          </li>
        </ul>
      </div>
      <section className=" px-7 flex flex-col lg:flex-row lg:flex-row-reverse justify-around items-center">
        <header className="w-full">
          <div className="flex justify-center mt-15 mb-10">
            <Image
              src={product.img}
              width={180}
              height={180}
              alt={product.title}
              priority
              className="rounded"
            />
          </div>
          <div>
            <h1 className="font-bold mt-3 bg-gray-200 dark:bg-gray-800 text-end p-3">
              {product.title}
            </h1>
            <h2 className="bg-gray-200 dark:bg-gray-800 flex items-center justify-start pb-3 px-2 text-red-600 dark:text-gray-500">
              <span className="mr-2 ">
                10% <i className="bi bi-ticket-perforated mr-1"></i> |
              </span>
              <span className="mr-2 ">
                2 دیدگاه <i className="bi bi-chat-heart mr-1"></i> |
              </span>
              <span className="text-sm dark:text-yellow-300">
                <i className="bi bi-star"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
            </h2>
          </div>
        </header>
        <main className="w-100 md:w-full lg:w-300 mr-5 mt-8">
          <h1 className="text-end mt-8 mb-3 text-red-600 dark:text-gray-500 dark:font-bold">
            :ویژگی ها{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <h1 className="text-end my-2 text-gray-400">
              رنگ:{" "}
              <span className="text-gray-800 dark:text-gray-200 mr-1">
                آبی،خردلی،زرد،سفید
              </span>
            </h1>
            <h1 className="text-end my-2 text-gray-400">
              وزن:{" "}
              <span className="text-gray-800 dark:text-gray-200 mr-1">
                1 کیلوگرم
              </span>
            </h1>
            <h1 className="text-end text-gray-400">
              کاربرد:{" "}
              <span className="text-gray-800 dark:text-gray-200 mr-1">
                ساختمانی
              </span>
            </h1>
            <h1 className="text-end text-gray-400 my-2">
              دسته:{" "}
              <span className="text-gray-800 dark:text-gray-200 mr-1">
                انواع {product.title.slice(0, 5)}
              </span>
            </h1>
          </div>
          <h1 className="text-end text-gray-500 flex justify-between items-center my-3 mt-5 lg:mt-10">
            <span className="text-gray-800 dark:text-gray-200 font-bold">
              {product.price.toLocaleString()}
            </span>
            :قیمت کل
          </h1>
          <h1 className="text-gray-400 flex justify-between flex-row-reverse">
            :تعداد موجود{" "}
            <span className="text-gray-800 dark:text-gray-200">
              {product.count}
            </span>
          </h1>
          {session?.user ? (
            <div className="flex items-center flex-row-reverse mt-7 w-full lg:mt-15 lg:mt-15">
              <CountProduct count={count} />
              <AddToBasketBtn count={count} />
            </div>
          ) : (
            <div className="w-full mt-5 lg:mt-10 lg:mt-5">
              <button onClick={logingoogle} className="btn bg-gray-500 w-full">
                ورود | ثبت نام کنید
              </button>
            </div>
          )}
        </main>
      </section>
    </>
  );
}

export default DetailProduct;
