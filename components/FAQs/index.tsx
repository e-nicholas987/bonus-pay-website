import paths from "@/constants/paths";
import FaqCard from "./FaqCard";
import { ReactNode } from "react";

interface FAQ {
  question: string;
  answer: ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "What sets Bonuspay apart from other crypto exchange platforms?",
    answer:
      "Bonuspay is a cutting-edge platform facilitating seamless exchange between cryptocurrencies and Naira. Our user-friendly interface, competitive rates, and advanced security measures set us apart from the competition.",
  },
  {
    question: "What cryptocurrencies can I exchange on Bonuspay?",
    answer: "We currently only sell BTC, ETH and USDT.",
  },
  {
    question: "How do I create an account on Bonuspay?",
    answer: (
      <span>
        Creating an account is simple! Visit our website at{" "}
        <a
          className="text-[#6CAFFF] hover:underline"
          href={paths.getStarted}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://app.bonuspay.io
        </a>
        , click the “Sign Up” button, fill in the needed details, tap the
        ‘Register’ button and that’s it. You’re ready to start trading!",
      </span>
    ),
  },
  {
    question: "Is BonusPay a secure platform for exchanging cryptocurrencies?",
    answer:
      "Yes, Bonuspay employs state-of-the-art security measures to protect your transactions and personal information. Our team constantly monitors and updates security protocols to ensure a safe trading environment.",
  },
  {
    question: "How quickly are transactions processed on Bonuspay?",
    answer: "Transactions are processed promptly, within few minutes.",
  },
  {
    question: "Can I exchange large amounts of cryptocurrency on Bonuspay?",
    answer:
      "Yes, Bonuspay accommodates both small and large transactions. We are committed to carry out all transactions seamlessly and effortlessly.",
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <section id="faqs" className="mt-10 lg:mt-20 lg:bg-[#FDFFF9] lg:py-14">
      <div className="container">
        <div className="relative flex flex-col overflow-clip rounded-[2rem] bg-primary px-6 py-10 md:py-20">
          <div className="absolute left-0 top-0 size-[3.4375rem] rounded-br-[2rem] border border-[#383838] bg-[rgba(255,255,255,0.03)] md:h-[11.25rem] md:w-[6.5rem]" />
          <div className="absolute right-0 top-0 size-[3.4375rem] rounded-bl-[2rem] border border-[#383838] bg-[rgba(255,255,255,0.03)] md:h-[11.25rem] md:w-[6.5rem]" />
          <h4 className="md:max-w-auto mx-auto max-w-[19.6875rem] text-center text-[2rem] leading-[2rem] tracking-[-0.1rem] text-white md:text-[2.5rem] md:leading-[3rem]">
            Frequently Asked Questions
          </h4>
          <p className="mx-auto mt-4 max-w-[31rem] px-8 text-center leading-[1.5rem] tracking-[-0.011rem] text-white">
            Feeling a bit confused about Bonuspay? Let’s fix that for you. Here
            are a couple of our most-asked questions and their answers.
          </p>

          <div className="mt-4 md:mt-14">
            {faqs.map(({ question, answer }) => (
              <FaqCard question={question} answer={answer} />
            ))}
          </div>
          <p className="mt-11 text-center tracking-[-0.011rem] text-white">
            Contact us on WhatsApp at{" "}
            <a
              href={paths.whatAppContact}
              className="text-[#6CAFFF] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              0902 639 1686
            </a>{" "}
            or Email us at{" "}
            <a
              href={paths.supportEmailAddress}
              className="text-[#6CAFFF] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@bonuspay.io
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
