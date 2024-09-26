import NavLinks from "./DesktopNavLinks";
import paths from "@/constants/paths";
import { buttonVariants } from "../Buttons/Button";
import MobileMenuButton from "./MobileMenuButton";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between bg-light-blue px-6 py-2.5 lg:h-20">
      <Logo />
      <NavLinks />
      <div className="hidden items-center gap-2 lg:flex">
        <a
          href={paths.createAccount}
          className={buttonVariants({
            size: "md",
            className: "w-[13.313rem]",
          })}
          target="_blank"
          rel="noopener noreferrer"
        >
          Create a Free account
        </a>
        <a
          href={paths.login}
          className={buttonVariants({
            size: "md",
            variant: "black",
            className: "w-20",
          })}
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>
      <MobileMenuButton />
    </nav>
  );
}
