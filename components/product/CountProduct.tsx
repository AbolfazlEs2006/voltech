"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Product } from "@/app/products/Product";
import AddToBasketBtn from "./AddToBasketBtn";

function CountProduct({ product }: { product: Product }) {
  const [counts, setcounts] = useState(1);

  useEffect(() => {
    if (counts === 0) {
      toast.error(`این محصول موجود نمیباشد`);
    } else if (counts < 1) {
      setcounts(1);
    } else if (counts > product.count) {
      setcounts(product.count);
      toast.error(`فقط ${product.count} تا از این محصول موجود است.`, {
        position: "top-right",
      });
    }
  }, [counts]);

  return (
    <div className="flex items-center flex-row-reverse mt-7 w-full lg:mt-15 lg:mt-15">
      <div className={`${product.count === 0 && "hidden"} w-50`}>
        <button
          className="btn bg-red-500 text-gray-200 mx-2 dark:bg-gray-800 shadow"
          onClick={() => setcounts((prev) => prev + 1)}
        >
          +
        </button>
        <span>{counts}</span>
        <button
          className="btn bg-red-500 text-gray-200 mx-2 dark:bg-gray-800 shadow"
          onClick={() => setcounts((prev) => prev - 1)}
        >
          -
        </button>
      </div>
      <AddToBasketBtn product={product} count={counts} />
    </div>
  );
}

export default CountProduct;
