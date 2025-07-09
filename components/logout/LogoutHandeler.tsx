"use client";

import { logout } from "@/lib/auth-actions";
import { useAppDispatch } from "@/hook/hooks";
import { clearCart } from "@/features/cart/cartSlice";

function LogoutHandler({ style }: { style: string }) {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    logout();
    dispatch(clearCart());
  };

  return (
    <button className={style} onClick={logoutHandler}>
      خروج از حساب کاربری
    </button>
  );
}

export default LogoutHandler;
