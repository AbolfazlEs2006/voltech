import { Suspense } from "react";
import DetailProduct from "./ProductDetails";
import Productloading from "./Productloading";
import { Params } from "next/dist/server/request/params";

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
