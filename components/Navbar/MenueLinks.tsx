"use client";

import Link from "next/link";
import { useState } from "react";
import DarkMode from "./DarkMode";

function MenueLinks() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="drawer z-200 block lg:hidden mr-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content w-0">
          <label
            htmlFor="my-drawer"
            className="btn bg-gray-200 dark:bg-gray-800 drawer-button shadow"
          >
            <i className="bi bi-list dark:text-gray-200 "></i>
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu menu-horizontal px-1 flex flex-col items-end w-40 text-end z-30 bg-gray-200 dark:bg-gray-800 w-50 h-full px-2">
            <Link href={"/"} className="w-full p-2 py-1 mt-3">
              <li className="hover:bg-gray-400 rounded py-2 px-1">خانه</li>
            </Link>
            <Link href={"/blog"} className="w-full p-2 py-1">
              <li className="hover:bg-gray-400 rounded py-2 px-1">وبلاگ</li>
            </Link>
            <Link href={"/products"} className="w-full p-2 py-1">
              <li className="hover:bg-gray-400 rounded py-2 px-1">محصولات</li>
            </Link>
            <Link href={"/project"} className="w-full p-2 py-1">
              <li className="hover:bg-gray-400 rounded py-2 px-1">پروژه</li>
            </Link>
            <div className="collapse bg-transparent border-none border mr-3">
              <input type="checkbox" />
              <div className="collapse-title font-semibold px-0">
                <i className="bi bi-arrow-down mr-1 font-bold"></i>
                برگه ها
              </div>
              <div className="collapse-content text-sm flex flex-col">
                <Link
                  href={"/profile"}
                  className="mb-4 mt-3 hover:bg-gray-300 rounded p-1 hover:text-gray-800"
                >
                  پروفایل
                </Link>
                <Link
                  href={"/basket"}
                  className="hover:bg-gray-300 rounded p-1 hover:text-gray-800"
                >
                  سبد خرید
                </Link>
              </div>
            </div>

            <DarkMode style="w-full mt-3 shadow-lg" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenueLinks;
