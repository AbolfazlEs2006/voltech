import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <>
      <header className="flex justify-between bg-gray-200 dark:bg-transparent">
        <section className="hidden lg:block">
          <Image
            src={"/images/hero-1.png"}
            width={600}
            height={600}
            alt="Hero"
            priority
          />
        </section>
        <section className="text-end text-gray-600 dark:text-gray-400 mt-9 pr-2 w-full lg:w-170 pb-3">
          <h1 className="text-3xl font-bold mb-5 text-gray-800 dark:text-gray-300">
            بزرگترین تولید کننده ی ابزارآلات
          </h1>
          <p className="text-xl w-full lg:w-170 px-3 my-10">
            متخصصان ما در{" "}
            <span className="text-blue-600 dark:text-blue-400">ولتک</span> با
            تعهد و پشتکار، همواره در تلاشند تا با استفاده از جدیدترین
            تکنولوژی‌ها و نوآوری‌ها، بهترین ابزارآلات را برای نیازهای مختلف شما
            طراحی و تولید کنند. ما به کیفیت محصولات خود اطمینان کامل داریم و به
            همین دلیل، تمامی محصولاتمان را با ضمانت ارائه می‌دهیم..
          </p>
          <Link href={"/products"}>
            <button className="btn bg-gray-900 border-none shadow-none text-gray-200 mt-3">
              مشاهده محصولات
            </button>
          </Link>
        </section>
      </header>
    </>
  );
}

export default Hero;
