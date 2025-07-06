import { Suspense } from "react";
import DetailProduct from "./ProductDetails";
import Productloading from "./Productloading";

type Params = {
  slugProduct: string;
};

export default function Page({ params }: { params: Params }) {
  return (
    <Suspense fallback={<Productloading />}>
      <DetailProduct params={params} />
    </Suspense>
  );
}
