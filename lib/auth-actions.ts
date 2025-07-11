"use server";

import { signIn, signOut } from "@/auth";

export const logingit = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const logingoogle = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/signup" });
};
