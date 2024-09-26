import Image from "next/image";
import GreenStars from "/public/assets/green-stars.svg";

export default function LegalHeader({ title }: { title: string }) {
  return (
    <div className="mx-auto grid h-[6.875rem] max-w-[79.5625rem] place-content-center bg-[url('/assets/sign-up-form-bg.png')] bg-cover bg-center lg:h-[13.6875rem] min-[1273px]:rounded-lg">
      <h2 className="relative text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.125rem] text-white lg:text-[5.25rem] lg:leading-[5.28125rem] lg:tracking-[-0.3125rem]">
        <Image
          src={GreenStars}
          alt="Green Stars"
          className="absolute -left-6 -top-4 lg:-top-2"
        />
        {title}
      </h2>
    </div>
  );
}
