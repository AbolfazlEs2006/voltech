"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/hook/hooks";
import { initializeCart } from "@/features/cart/cartSlice";

export default function CartHydrationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch(initializeCart(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  return <>{children}</>;
}
