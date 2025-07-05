import Link from "next/link";

function Navlinks() {
  return (
    <section className="flex flex-row-reverse items-center">
      <div className="">
        <Link
          href={"/"}
          className="btn text-xl bg-transparent border-none shadow-none"
        >
          ولتک
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>برگه ها</summary>
              <ul className="bg-base-100 rounded-t-none p-2 w-30">
                <li>
                  <Link href={"/profile"} className="text-start">
                    پروفایل
                  </Link>
                </li>
                <li>
                  <Link href={"/basket"} className="text-start">
                    سبد خرید
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/project"}>پروژه</Link>
          </li>
          <li>
            <Link href={"/products"}>محصولات</Link>
          </li>
          <li>
            <Link href={"/blog"}>وبلاگ</Link>
          </li>
          <li>
            <Link href={"/"}>خانه</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navlinks;
