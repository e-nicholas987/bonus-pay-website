import React from "react";

export default function SignupForm() {
  return (
    <section className="container pt-10 lg:pt-20">
      <form className='flex flex-col rounded-2xl bg-[url("/assets/sign-up-form-bg.png")] bg-cover bg-center bg-no-repeat px-6 py-10 sm:justify-between md:flex-row'>
        <h6 className="text-center text-[2rem] font-semibold tracking-[-0.18rem] text-white md:w-[16rem] md:text-left">
          Sign up to our Newsletter
        </h6>
        <div className="mt-6 flex items-center md:mt-0">
          <div className="relative flex w-full flex-col gap-2.5 sm:h-fit sm:flex-row sm:justify-end sm:gap-0">
            <input
              className="input h-fit w-full rounded-full p-3 placeholder:text-xs sm:rounded-none sm:rounded-l-full md:w-[22.938rem]"
              type="email"
              placeholder="johnbola@yahoo.com"
            />
            <button
              type="submit"
              className="text-lexend mx-auto block w-full max-w-[12.53rem] rounded-full bg-black px-6 py-3 text-xs text-white hover:brightness-125 sm:max-w-[116px] sm:rounded-none sm:rounded-r-full"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
