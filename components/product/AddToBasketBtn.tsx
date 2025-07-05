"use client";

import { useState, useEffect } from "react";

function AddToBasketBtn({ count }: { count: number }) {
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    setBtnDisable(count === 0);
  }, [count]);

  return (
    <div className="w-full">
      <button
        className={`btn  ${
          btnDisable
            ? "text-gray-800 cursor-not-allowed bg-gray-100"
            : "text-gray-200 bg-red-500 dark:bg-gray-800 dark:shadow"
        } w-full`}
      >
        {btnDisable ? "این محصول موجود نیست" : "افزودن به سبد خرید"}
      </button>
    </div>
  );
}

export default AddToBasketBtn;
