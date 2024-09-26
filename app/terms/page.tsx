import LegalHeader from "@/components/LegalHeader";
import { terms } from "@/data/termsAndConditions";

export default function PrivacyPolicy() {
  return (
    <section className="pt-10 lg:pt-20">
      <LegalHeader title="Terms of Service" />
      <div className="px-6">
        <ul className="mx-auto mt-10 max-w-[46.875rem] space-y-8 p-2.5 font-lexend lg:mt-24">
          {terms.map((term) => (
            <li key={term.title} className="space-y-6">
              <p className="text-xl font-bold">{term.title}</p>
              <ul className="space-y-4">
                {term.content.map((content) => (
                  <li className="text-sm" key={content}>
                    {content}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
