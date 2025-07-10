import Image from "next/image";

function Catalog() {
  return (
    <section className="lg:relative flex flex-col flex-col-reverse justify-between my-10 mt-30 bg-gray-200 dark:bg-gray-800 dark:bg-gray-800 px-1 rounded py-3 lg:py-7">
      <div className="mb-3 mx-5 md:hidden lg:block">
        <Image
          src={"/images/catalog.png"}
          width={450}
          height={450}
          alt="Catalog"
          priority
          className="lg:absolute top-[-30]"
        />
      </div>
      <div className="text-end mx-5">
        <h1 className="text-xl mb-4">دریافت رایگان کاتالوگ محصولات</h1>
        <p className="mb-5">
          با بیش از 2000 نوع ابزار مختلق و 24000 نوع قطعات یدکی، ما در کنار شما
          هستیم تا تقریبا هر کاری را انحام دهید.
        </p>
        <button className="btn">دریافت کاتالوگ</button>
      </div>
    </section>
  );
}

export default Catalog;
