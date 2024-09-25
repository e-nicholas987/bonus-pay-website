import paths from "@/lib/constants";
import BonuspayAdvert from "./BonuspayAdvert";

export default function SmartTrading() {
  return (
    <section id="smart-trading" className="container">
      <div
        style={{
          background: `
          url('/assets/smart-trading-bg.png') no-repeat center center / cover,
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
          #000
        `,
        }}
        className="relative flex flex-col items-center justify-between gap-10 rounded-2xl px-6 py-10 lg:mt-10 lg:h-[36.5rem] lg:flex-row lg:gap-5 lg:pl-[4.5rem] lg:pr-11"
      >
        <div>
          <h2 className="max-w-[30.5rem] text-[2.5rem] font-semibold leading-[2.425rem] tracking-[0.15625rem] text-white xl:text-[4rem] xl:leading-[4.0625rem] xl:tracking-[-0.13944rem]">
            Smart Trading Better Rewards
          </h2>
          <p className="mt-4 max-w-[29.27688rem] font-light tracking-[0.011rem] text-[#A0A0A0] lg:mt-8">
            Sell crypto and enjoy bonuses!
            <br /> Convert coins to cash instantly and receive a bonus on every
            transaction. Sign up today for a seamless trading experience!
          </p>
          <a
            href={paths.createAccount}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block max-w-[13.3125rem] rounded-full border border-white bg-[linear-gradient(91deg,_#080808_19.3%,_rgba(68,_68,_68,_0.59)_46.87%,_rgba(125,_125,_125,_0)_87.12%)] p-2.5 text-center text-white transition-all duration-300 hover:border-black hover:bg-black"
          >
            Create a Free account
          </a>
        </div>

        <BonuspayAdvert />
      </div>
    </section>
  );
}
