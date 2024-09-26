import React from "react";
import { buttonVariants } from "./Buttons/Button";
import paths from "@/constants/paths";
import ComingSoonButton from "./Buttons/ComingSoonButton";
import WomanHoldingPhone from "/public/assets/woman-holding-a-phone.png";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function ConvenienceMeetsCryptoTrading() {
  return (
    <section className="container relative flex flex-col gap-10 pt-10 sm:items-center lg:pt-20">
      <div className="space-y-4 lg:absolute lg:left-6 lg:top-1/2 lg:z-10 lg:-translate-y-1/2 lg:space-y-8">
        <h5 className="text-[2.5rem] font-semibold leading-[2.5625rem] tracking-[-0.15625rem;] sm:text-center lg:text-left lg:text-[4rem] lg:leading-[4.125rem] lg:tracking-[-0.3125rem]">
          Convenience Meets
          <br /> Crypto Trading
        </h5>
        <p className="max-w-[26.9375rem] font-light text-grey3">
          Experience the future of crypto on the go! Install the Bonuspay app
          effortlessly from the App Store for iOS or Play Store for Android.
        </p>
        <div className="flex flex-col gap-2.5 sm:items-center lg:items-start">
          <a
            href={paths.login}
            className={buttonVariants({ className: "w-full max-w-[19rem]" })}
          >
            Get Started
          </a>
          <ComingSoonButton />
        </div>
      </div>
      <div className="relative h-[18.701rem] w-full max-w-[23.75rem] self-center sm:self-auto lg:ml-auto lg:h-[47.6875rem] lg:max-w-[60.5625rem]">
        <Image
          src={WomanHoldingPhone}
          alt="Woman holding a phone"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute right-0 top-1/2 flex items-center gap-3 rounded-[60px] bg-[linear-gradient(97deg,#B4CF0E_44.32%,#A8BD25_79.68%)] px-3 py-1.5 lg:px-[1.90169rem] lg:py-4">
          <div className="grid size-[0.76625rem] shrink-0 place-content-center rounded-full bg-white lg:size-8">
            <FiCheck className="text-[10px] lg:text-base" />
          </div>
          <div className="flex flex-col items-center font-lexend text-white">
            <p className="text-[0.401rem] lg:text-base lg:leading-9">
              Sent 556.89 ETH
            </p>
            <p className="text-[0.23469rem] lg:text-[0.59844rem]">
              Successful Transfer!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
