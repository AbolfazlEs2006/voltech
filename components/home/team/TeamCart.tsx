import Image from "next/image";
import Link from "next/link";

function TeamCart({ img }: { img: string }) {
  return (
    <section className="flex h-75">
      <div className="w-full">
        <Image
          src={img}
          width={150}
          height={150}
          alt="estiri"
          priority
          className="h-60 rounded w-full"
        />
        <h1 className="border border-dashed text-gray-500"></h1>
        <h1 className="text-center mt-3">ابوالفضل استیری</h1>

        <p className="text-center">برنامه نویس</p>
      </div>

      <div className="flex flex-col gap-1 bg-gray-200 dark:bg-gray-800 px-2 rounded">
        <Link className="mt-2" href={"https://abolfazlestiri.vercel.app"}>
          <i className="bi bi-linkedin"></i>
        </Link>
        <Link href={"https://abolfazlestiri.vercel.app"}>
          <i className="bi bi-telegram"></i>
        </Link>
        <Link href={"https://abolfazlestiri.vercel.app"}>
          <i className="bi bi-github"></i>
        </Link>
        <Link href={"https://abolfazlestiri.vercel.app"}>
          <i className="bi bi-globe2"></i>
        </Link>
      </div>
    </section>
  );
}

export default TeamCart;
