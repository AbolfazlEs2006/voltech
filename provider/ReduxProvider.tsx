"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/features/cart/makeStore";
import CartHydrationWrapper from "@/components/cartHydrationWrapper/CartHydrationWrapper";

const store = makeStore();

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <CartHydrationWrapper>{children}</CartHydrationWrapper>
    </Provider>
  );
}
