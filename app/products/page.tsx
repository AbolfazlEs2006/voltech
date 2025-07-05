import { Suspense } from "react";
import Products from "./Product";
import Skeleton from "./Skeleton";

function page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Products />
    </Suspense>
  );
}

export default page;
