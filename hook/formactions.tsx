"use server";

export async function handleLogin(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !email.includes("@") || !email.includes(".")) {
      return { success: false, message: "لطفا یک ایمیل معتبر وارد کنید" };
    }

    if (!password || password.length < 6) {
      return { success: false, message: "رمز عبور باید حداقل 6 کاراکتر باشد" };
    }
    return { success: true, message: "ثبت نام با موفقیت انجام شد" };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "خطایی در هنگام ورود رخ داده است" };
  }
}
