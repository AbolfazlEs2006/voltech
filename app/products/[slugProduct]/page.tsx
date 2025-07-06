import { Suspense } from "react";
import DetailProduct from "./ProductDetails";
import Productloading from "./Productloading";

type Params = {
  slugProduct: string;
};

function page({ params }: { params: Params }) {
  return (
    <>
      <Suspense fallback={<Productloading />}>
        <DetailProduct params={params} />
      </Suspense>
    </>
  );
}

export default page;
