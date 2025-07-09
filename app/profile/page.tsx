import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import AddNumberHandeler from "@/components/profile/AddNumberHandeler";
import LogoutHandler from "@/components/logout/LogoutHandeler";

async function Profile() {
  const session = await auth();
  const userData = session?.user;

  if (!userData) {
    redirect("/signup");
  }

  return (
    <>
      <header className="flex flex-col items-center pt-9 bg-gray-200 dark:bg-transparent h-126 lg:h-125">
        <section className="flex items-center gap-4 w-100 lg:w-150">
          <Image
            src={`${userData.image}`}
            alt="user Img"
            width={80}
            height={80}
            priority
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl dark:text-gray-200">{userData?.name}</h1>
            <h1 className="text-xl text-gray-400">{userData?.email}</h1>
          </div>
        </section>
        <section className="mt-10 w-100 lg:w-150">
          <h1 className="flex items-center justify-between w-100 lg:w-150 font-bold text-xl dark:text-gray-300">
            <span>{userData?.name}</span>
            :نام
          </h1>
          <hr className="my-3 text-gray-500 dark:text-gray-600" />
          <h1 className="flex items-center justify-between w-100  lg:w-150 font-bold text-xl dark:text-gray-300 mt-10">
            <span>{userData?.email}</span>
            :ایمیل
          </h1>
          <hr className="my-3 text-gray-500 dark:text-gray-600" />
          <h1 className="flex items-center justify-between w-100 lg:w-150 font-bold text-xl dark:text-gray-300 mt-10">
            <AddNumberHandeler />
            :تلفن
          </h1>
          <hr className="my-3 text-gray-500 dark:text-gray-600" />
          <LogoutHandler style="btn bg-red-500 text-gray-200 border-none w-full mt-10" />
        </section>
      </header>
    </>
  );
}

export default Profile;
