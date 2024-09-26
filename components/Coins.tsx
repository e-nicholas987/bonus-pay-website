import Image from "next/image";
import CoinImage from "/public/assets/coins.png";

export default function Coins() {
  return (
    <section className="container">
      <div className="relative mx-auto aspect-square h-[12.5rem] w-full max-w-[36.8125rem] lg:h-[21.6875rem]">
        <Image
          src={CoinImage}
          fill
          priority
          alt="Coins"
          className="object-cover"
        />
      </div>
    </section>
  );
}
