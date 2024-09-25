import Image from "next/image";
import HeroBg from "@/assets/hero-bg.png";
import FemaleHandHoldingIphone from "@/assets/female-hand-holding-iphone.png";
import GreenStars from "@/assets/green-stars.svg";
import paths from "@/lib/constants";
import { buttonVariants } from "./Buttons/Button";
import ComingSoonButton from "./Buttons/ComingSoonButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center gap-5 py-14 lg:py-24 xl:grid xl:grid-cols-2"
    >
      <div className="flex max-w-[25rem] flex-col items-center gap-4 lg:max-w-[35.125rem]">
        <h1 className="text-[3.5rem] font-semibold leading-[3.5rem] tracking-[-0.25rem] lg:text-[5.25rem] lg:leading-[5.28125rem] lg:tracking-[-0.3125rem]">
          Earn a Bonus{" "}
          <span className="relative inline-block w-fit">
            for
            <Image
              src={GreenStars}
              alt="Green Stars"
              className="absolute -left-5 -top-2.5"
            />
          </span>{" "}
          every time you trade crypto.
        </h1>

        <p className="font-light leading-6 text-grey3">
          You can now enjoy seamless crypto transactions at lightning speed with
          Bonuspay. Trade smarter and earn bonuses.
        </p>
        <a
          href={paths.getStarted}
          className={buttonVariants({ className: "w-full max-w-[19rem]" })}
        >
          Get Started
        </a>
        <ComingSoonButton />
      </div>

      <div className="relative overflow-x-clip bg-white">
        <Image
          src={HeroBg}
          className="h-[23.67256rem] w-[23.67256rem] lg:h-[34.51581rem] lg:w-[38.74219rem]"
          alt="Blue BackGround"
        />
        <div className="absolute inset-0 bg-[#0053B4] mix-blend-color-burn" />
        <Image
          src={FemaleHandHoldingIphone}
          alt="Female Hand Holding an Iphone 14"
          className="absolute left-14 top-4 h-[27.97275rem] w-full max-w-[19.67963rem] lg:left-24 lg:top-8 lg:h-[45.98788rem] lg:max-w-[32.35375rem]"
        />
      </div>
    </section>
  );
}
