import { Session } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import LogoutHandler from "../logout/LogoutHandeler";

function ProfileBtn({ session }: { session: Session }) {
  const userData = session?.user;

  return (
    <div>
      {userData ? (
        <div className={`flex ml-2 lg:ml-0`}>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-9 rounded-full border border-gray-200">
                  <span className="text-2xl">
                    <Image
                      src={userData?.image}
                      width={100}
                      height={100}
                      alt={userData?.name}
                    />
                  </span>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-21 mt-3 w-52 p-2 shadow left-[-5]"
            >
              <li>
                <Link href={"/profile"} className="justify-between">
                  <span className="badge shadow">جدید</span>
                  پروفایل
                </Link>
              </li>
              <hr className="text-gray-300 my-1 dark:text-gray-300" />
              <li>
                <LogoutHandler style={"justify-end text-red-400"} />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link href={"/signup"} className="w-full">
          <button className="btn bg-gray-900 text-gray-200 border-none shadow-none w-[140] lg:ml-10 ml-2 lg:ml-0">
            ورود / ثبت نام
          </button>
        </Link>
      )}
    </div>
  );
}

export default ProfileBtn;
