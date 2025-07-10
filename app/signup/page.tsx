import Image from "next/image";
import LoginPage from "./FormSignup";
import SignUpBtn from "@/components/signupbtn/SignUpBtn";

function Singup() {
  return (
    <>
      <section className="flex justify-evenly p-0 lg:py-6.5 bg-gray-200 dark:bg-transparent  lg:mt-0 h-127  lg:h-125 py-10">
        <div className="hidden lg:block">
          <Image
            src={"/images/signup.jpg"}
            width={450}
            height={450}
            priority
            alt="signup Img"
            className="rounded"
          />{" "}
        </div>
        <div className="pr-0 mt-5 lg:pr-20 w-130 flex flex-col items-center lg:items-start">
          <h2 className="text-start text-2xl font-bold mb-2">Welcome to</h2>
          <h1 className="text-purple-500 text-start mb-3 text-3xl font-bold">
            VOLTech Web
          </h1>
          <SignUpBtn />
          <LoginPage />
        </div>
      </section>
    </>
  );
}

export default Singup;
