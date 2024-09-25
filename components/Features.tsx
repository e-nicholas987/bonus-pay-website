import Image, { StaticImageData } from "next/image";
import Swap from "/public/assets/swap.svg";
import CoinBag from "/public/assets/coin-bag.svg";
import ShieldLock from "/public/assets/shield-lock.svg";
import BadgeDollar from "/public/assets/badge-dollar.svg";
import CheckmarkDouble from "/public/assets/checkmark-double.svg";
import LightTouch from "/public/assets/light-touch.svg";

interface Feature {
  title: string;
  description: string;
  icon: StaticImageData;
}

const featuresList: Feature[] = [
  {
    title: "Convert and Swap",
    description:
      "Convert And Swap effortlessly! Experience seamless exchanges at lightning speed.",
    icon: Swap,
  },
  {
    title: "Buy and Sell",
    description:
      "OTC trading has never been easier than with Bonuspay. We set the stage for amazing deals.",
    icon: CoinBag,
  },
  {
    title: "Secure Wallet System",
    description:
      "We’ve got your back in every possible way. With Bonuspay, Your transaction are safe and free.",
    icon: ShieldLock,
  },
  {
    title: "Fast Payout",
    description:
      "Instantly access your earnings, experience the power of fast payouts with Bonuspay.",
    icon: CheckmarkDouble,
  },
  {
    title: "Convert and Swap",
    description:
      "Convert And Swap effortlessly! Experience seamless exchanges at lightning speed.",
    icon: BadgeDollar,
  },
  {
    title: "Friendly Interface",
    description:
      "Bonuspay's easy interface makes trading simple. Achieve efficiency by simplification.",
    icon: LightTouch,
  },
];

function FeatureCard({ title, description, icon }: Feature) {
  return (
    <div className="flex w-full flex-col items-center border-b border-b-[#EBEBEB] px-8 py-6 xl:w-[25rem] xl:border-l">
      <Image
        src={icon}
        alt={title}
        className="h-[1.5rem] w-[1.5rem] shrink-0"
      />
      <h3 className="mt-6">{title}</h3>
      <p className="mt-2 max-w-[20.4375rem] font-light text-grey3">
        {description}
      </p>
    </div>
  );
}
export default function Features() {
  return (
    <div className="mx-auto max-w-[1500px] border-t border-[#EBEBEB] xl:flex">
      <div className="hidden flex-1 shrink-0 xl:grid">
        <div className="w-full border-b border-[#EBEBEB]" />
        <div className="border-b border-[#EBEBEB]" />
      </div>
      <div className="grid max-w-[1217px] shrink-0 divide-x md:grid-cols-2 xl:grid-cols-3">
        {featuresList.map(({ title, description, icon }) => (
          <FeatureCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
      <div className="hidden flex-1 shrink-0 border-l border-[#EBEBEB] xl:grid">
        <div className="border-b border-[#EBEBEB]" />
        <div className="border-b border-[#EBEBEB]" />
      </div>
    </div>
  );
}
