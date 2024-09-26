import Image from "next/image";
import BonusPayLogo from "/public/assets/bonus-pay-logo.svg";
import BonusPayText from "/public/assets/bonus-pay-text.svg";
import Link from "next/link";
import paths from "@/constants/paths";

export default function Logo() {
  return (
    <Link href={paths.home} className="flex h-10 items-center gap-2.5">
      <Image
        src={BonusPayLogo}
        width={34.26}
        alt="Bonus pag logo"
        className="h-full shrink-0"
      />
      <Image
        src={BonusPayText}
        width={142.938}
        alt="Bonus pag logo"
        className="h-full shrink-0"
      />
    </Link>
  );
}
