"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function CountProduct({ count }: { count: number }) {
  const [counts, setcounts] = useState(1);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (counts < 1) {
      setcounts(1);
    } else if (counts > count) {
      setcounts(count);
      toast.error(`فقط ${count} تا از این محصول موجود است.`, {
        position: "top-right",
      });
    }
  }, [counts]);

  return (
    <div className="w-50">
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
  );
}

export default CountProduct;
