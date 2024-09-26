import LegalHeader from "@/components/LegalHeader";
import { privacyPolicy } from "@/data/privacyPolicy";

export default function PrivacyPolicy() {
  return (
    <section className="pt-10 lg:pt-20">
      <LegalHeader title="Privacy Policy" />
      <div className="px-6">
        <ul className="mx-auto mt-10 max-w-[46.875rem] space-y-8 p-2.5 font-lexend lg:mt-24">
          <li className="text-sm">
            This Privacy Policy outlines the practices of Bonuspay regarding the
            collection, use, and protection of personal information in
            connection with our platform for buying, selling, and swapping
            cryptocurrencies.
          </li>
          {privacyPolicy.map((item) => (
            <li key={item.title} className="space-y-6">
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-sm">{item.content}</p>
            </li>
          ))}
          <li className="space-y-6">
            <p className="text-xl font-bold">Contact Information:</p>
            <p className="text-sm">
              For questions or concerns regarding this Privacy Policy, please
              contact{" "}
              <a
                href="mailto:admin@bonuspay.io"
                className="text-primaryBlue hover:underline"
              >
                [admin@bonuspay.io]
              </a>
              . By using our platform, you agree to the terms outlined in this
              Privacy Policy. It is essential to review this policy periodically
              for updates.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
