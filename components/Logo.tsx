import Image from "next/image";
import BonusPayLogo from "@/assets/bonus-pay-logo.svg";
import BonusPayText from "@/assets/bonus-pay-text.svg";
import Link from "next/link";
import paths from "@/lib/constants";

export default function Logo() {
  return (
    <Link href={paths.hero} className="flex h-10 items-center gap-2.5">
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
