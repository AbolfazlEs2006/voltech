import { auth } from "@/auth";
import { Session } from "next-auth";

import DarkMode from "./DarkMode";
import ProfileBtn from "./ProfileBtn";
import BasketBtn from "./BasketBtn";
import Navlinks from "./Navlinks";
import MenueLinks from "./MenueLinks";

async function Navbar() {
  const session: Session = await auth();

  return (
    <nav className="navbar bg-gray-200 dark:bg-transparent flex justify-between flex-row-reverse items-center p-7 shadow-xl">
      <Navlinks />
      <section className="flex gap-5">
        <MenueLinks />
        <ProfileBtn session={session} />
        <BasketBtn />
        <DarkMode style="hidden lg:block" />
      </section>
    </nav>
  );
}

export default Navbar;
