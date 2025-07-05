import { Suspense } from "react";
import DetailProduct from "./ProductDetails";
import Productloading from "./Productloading";

function page({ params }: { params: { slugProduct: string } }) {
  return (
    <>
      <Suspense fallback={<Productloading />}>
        <DetailProduct params={params} />
      </Suspense>
    </>
  );
}

export default page;
