"use client";

import { toast } from "react-hot-toast";

import { handleLogin } from "@/hook/formactions";
import { useActionState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(handleLogin, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message, { position: "top-right", duration: 3000 });
      redirect("/");
    } else if (state?.success === false) {
      toast.error(state.message, { position: "top-right" });
    }
  }, [state]);

  return (
    <form action={formAction} className="mt-3 flex flex-col">
      <label className="floating-label mt-3">
        <span>ایمیل شما</span>
        <input
          type="text"
          placeholder="ایمیل خود را وارد کنید"
          className="input input-md w-100 text-end"
          name="email"
        />
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="input w-100 text-end my-2"
        placeholder="رمز خود رو وارد کنید"
      />
      <button
        type="submit"
        className="btn w-100 bg-green-500 mt-3"
        disabled={isPending}
      >
        {isPending ? "در حال پردازش..." : "ثبت نام | ورود"}
      </button>
    </form>
  );
}
