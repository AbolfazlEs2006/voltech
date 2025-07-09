import Image from "next/image";

function Brand() {
  return (
    <section className="grid grid-cols-3 gap-5 lg:grid-cols-6 justify-items-center justify-evenly my-20 mt-25">
      <Image
        src={"/images/arva.png"}
        width={100}
        height={100}
        alt="arva"
        priority
      />
      <Image
        src={"/images/ronix.png"}
        width={100}
        height={100}
        alt="arva"
        priority
      />
      <Image
        src={"/images/tosan.png"}
        width={100}
        height={100}
        alt="arva"
        priority
      />
      <Image
        src={"/images/arva.png"}
        width={100}
        height={100}
        alt="arva"
        priority
      />
      <Image
        src={"/images/ronix.png"}
        width={100}
        height={100}
        alt="arva"
        priority
      />
      <Image
        src={"/images/tosan.png"}
        width={100}
        height={100}
        alt="arva"
        priority
      />
    </section>
  );
}

export default Brand;
