"use client";

import { Product } from "@/app/products/Product";
import { addItem } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hook/hooks";
import { useState, useEffect } from "react";
import { CartItem } from "@/features/cart/cartSlice";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

function AddToBasketBtn({
  product,
  count,
}: {
  product: Product;
  count: number;
}) {
  const [btnDisable, setBtnDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { CartItem } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (product.count === 0) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, [product.count]);

  const addToBasket = async () => {
    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      img: product.img,
      count,
      slug: product.slug,
    };
    const isProduct = CartItem.some((item) => cartItem.id === item.id);
    if (isProduct) {
      toast.error("!این محصول در سبد خرید شما وجود دارد");
    } else {
      dispatch(addItem(cartItem));
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("!محصول با موفقیت اضافه شد");
      setLoading(false);
      redirect("/basket");
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={addToBasket}
        className={`btn  ${
          btnDisable
            ? "text-gray-800 cursor-not-allowed bg-gray-100"
            : "text-gray-200 bg-red-500 dark:bg-gray-800 dark:shadow"
        } w-full`}
      >
        {btnDisable
          ? "این محصول موجود نیست"
          : `${loading ? "...در حال اضافه به سبد خرید" : "افزودن به سبد خرید"}`}
      </button>
    </div>
  );
}

export default AddToBasketBtn;
