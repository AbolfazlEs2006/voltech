"use client";

import Link from "next/link";

import { useAppSelector } from "@/hook/hooks";

function BasketBtn() {
  const { CartItem, total } = useAppSelector((state) => state.cart);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn rounded p-2 bg-gray-100 dark:bg-gray-900"
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />{" "}
          </svg>
          <span className="badge badge-sm top-[-10] left-[2] bg-gray-100 dark:bg-gray-600 indicator-item ">
            {CartItem.length}
          </span>
        </div>
      </div>
      {CartItem.length === 0 ? (
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-72 shadow left-[-65] md:left-[-25] lg:left-[-15] right-0 text-end shadow"
        >
          <div className="card-body">
            <h1>سبد خرید شما خالی است</h1>
          </div>
        </div>
      ) : (
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-72 shadow left-[-75] md:left-[-25] left-[-15] text-end shadow"
        >
          <div className="card-body">
            <span className="text-lg font-bold flex justify-end gap-1 items-center">
              <h1>محصول</h1>
              {CartItem.length}
            </span>
            <h1 className="text-gray">
              جمع خرید:{" "}
              <span className="text-start">{total.toLocaleString()} تومان</span>
            </h1>
            <div className="card-actions">
              <Link className="w-100" href={"/basket"}>
                <button className="btn btn-gray btn-block mt-3">
                  مشاهده سبد خرید
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasketBtn;
