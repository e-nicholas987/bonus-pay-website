import LegalHeader from "@/components/LegalHeader";
import paths from "@/constants/paths";
import { privacyPolicy } from "@/data/privacyPolicy";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section className="pt-10 lg:pt-20">
      <LegalHeader title="Privacy Policy" />
      <div className="px-6">
        <ul className="mx-auto mt-10 max-w-[46.875rem] space-y-8 px-6 lg:mt-24">
          <li>
            <h4 className="font-bold underline">
              HOW YOU MAY GIVE YOUR CONSENT
            </h4>
            <p>
              Please note that the terms of this Privacy Policy apply to your
              usage or continued usage of our services and regulate the
              acceptance, collection, storage, use, transfer, sharing or other
              forms of processing of your information as described herein and in
              our Terms and Conditions and by your checking the acceptance box
              on the sign up page of the application, you consent to the
              application of the terms of this Privacy Policy and Terms and
              Conditions to your usage of our services.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              STATEMENT OF COMPLIANCE WITH DATA PROTECTION PRINCIPLES
            </h4>
            <p>
              Your personal data is stored securely on our server and we take
              steps to ensure the security of your data by implementing
              physical, electronic, and procedural safeguards in order to
              protect the information, including storage of the information on
              secured servers protected by secured networks to which access is
              limited to a few authorized employees and personnel. Your data is
              stored for the period you are subscribed to our service and if you
              elect to deactivate your account, we delete your data from our
              server.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">INFORMATION AVAILABLE TO US</h4>
            <p>
              When you install, access or use our app, we may process the
              following categories of information for the purposes described
              below.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">INFORMATION YOU GIVE TO US</h4>
            <ul className="space-y-6">
              <li>
                Account and user profile: We accept your name, phone number and
                email address to create your user account and profile. You may
                also choose to provide additional information for your user
                profile such as photo and address.
              </li>
              <li>
                Address book: If you have granted consent, by responding to the
                explicit popup request for consent that comes up when you
                attempt to pick a phone number from your address book, we access
                the contacts in your address book. By granting such access, you
                confirm that you are authorized to share the information in your
                address book with us.
              </li>
              <li>
                The contact number you choose from your address book is
                collected to process your service request and will be shared
                with third-party service providers to complete the processing of
                your initiated service request.
              </li>
              <li>
                Photos: If you have granted consent, by responding to the
                explicit popup request for consent that comes up when you
                attempt to upload a profile photo or take identity verification
                photo, we securely store such images on our servers. By granting
                such access, you confirm that you are authorized to share the
                image with us.
              </li>
              <li>
                Customer support: When you contact us about your experience of
                using our services, we will use the information you have
                provided to respond to and resolve issues, for example, when you
                contact us via email support.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold underline">
              INFORMATION WE GET WHEN YOU USE OUR SERVICES
            </h4>
            <p>
              Device and connection information: We collect your device
              information and unique identifiers so that you can connect to and
              use our services. Device information means device settings,
              operating system, IP address, and screen resolution.
            </p>
            <p className="mt-6">We need access to device information to:</p>
            <ul
              style={{ listStyleType: "lower-alpha" }}
              className="mt-6 list-inside"
            >
              <li>
                Monitor our systems to ensure that they are working as intended;
              </li>
              <li>
                Identify and resolve any problems and bugs that may only impact
                one type of manufacturer or device type;
              </li>
              <li>
                For security and fraud detection by identifying unusual usage
                patterns;
              </li>
              <li>
                Understand whether you have turned on notifications and location
                so that we can comply with your choices.
              </li>
            </ul>
            <ul className="mt-6 space-y-6">
              <li>
                Unique identifiers are a number of characters used to identify a
                device. Some are permanent and others can be reset at any time
                by users on their devices. We use unique identifiers for various
                purposes including remembering your preferences, detecting
                fraud, security, customizing services or analysing device
                related issues.
              </li>
              <li>
                Location information: If you have granted, by responding to the
                explicit popup request for consent that comes up when you
                attempt to use a location dependent feature, we may collect
                information about your precise device location using GPS to
                enable user features. You can also control whether to share your
                location in your device settings at any time (Android devices,
                Apple devices).
              </li>
              <li>
                Order information: When you register for paid services, we will
                collect your payment information and payment receipts, including
                from third parties processing such payments. This enables us to
                keep record of our transactions with you.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold underline">THIRD PARTY INFORMATION</h4>
            <p>
              We receive information about you from third-parties when you
              register for services or update your profile information using
              third party services such as social media accounts.
            </p>
            <p className="mt-6">
              You may also use our services in connection with third-party
              services. In order for the services to interoperate with such
              third-party services we may receive information from them about
              you or we may share your information with them. For example, you
              may log in to our services using third party services or create an
              account on a third-party platform by using our services to
              pre-populate your information to register with them or you may
              connect your user profile with third-party services. By logging in
              to our app using third party services or creating an account on a
              third-party platform using our app or otherwise connecting your
              user profile on our app with third-party services, you agree that
              we may: (a) collect, accept, use and retain the information
              provided by these third-party services in accordance with this
              Privacy Policy, and (b) supplement your user information if, for
              example, you choose to create your account or update your profile
              information by using Facebook, Google or Microsoft. Such third
              parties only share such information with your prior consent and
              based on their privacy terms. We never store any passwords created
              for third-party services. Your use of third-party services is
              governed by the terms and privacy policies of such services.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">THIRD PARTY INFORMATION</h4>
            <p>
              We use the information to provide, operate, maintain, support,
              improve, understand, market and personalize our services for you
              in the following ways.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">THIRD PARTY INFORMATION</h4>
            <p>
              Club Members Some information including usage information and
              other information that may arise from your interaction with
              BonusPay app, cannot be used to identify you, whether in
              combination with other information or otherwise and will not
              constitute personal information for the purposes of this policy.
              <br />
              <br />
              Discount Partners A business may create a profile to make its
              business information (including business or trading name, phone
              number, email, address, business hours and social media handles)
              publicly available to users of the BonusPay app. Such information
              will not constitute personal information for the purposes of this
              policy and the Discount Partner Terms shall apply.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              HOW WE USE PERSONAL INFORMATION
            </h4>
            <p>
              We use the information to provide, operate, maintain, support,
              improve, understand, market and personalize our services for you
              in the following ways.
            </p>
            <br />
            <ul style={{ listStyleType: "disc" }} className="list-inside">
              <li>Claim discount from our discount partners.</li>
              <li>Purchase airtime and data.</li>
              <li>Make bill payments.</li>
              <li>Create a virtual account.</li>
              <li>Fund and withdraw from your secure wallet.</li>
              <li>
                Providing customer support, responding to your queries,
                investigating and resolving issues related to the services.
              </li>
              <li>Understanding how our users use our services.</li>
              <li>
                Analyzing and using the information to evaluate and improve our
                services, business and operations.
              </li>
              <li>
                Developing or providing services to third parties or to improve
                third party services.
              </li>
              <li>
                Researching, developing and testing new services and features.
              </li>
            </ul>
            <br />
            <p>
              Safety and security: We use your information to comply with
              applicable laws, identity verification, verify user accounts and
              activity, ensure service functionality, safety and data accuracy,
              investigate suspicious activity and enforce our agreements,
              perform troubleshooting activities, and prevent fraud, security
              breaches, circumvention of the intended use of our services, our{" "}
              <Link
                className="text-primaryBlue underline"
                href={paths.termsOfService}
              >
                Terms and Conditions
              </Link>
              , this Privacy Policy and restricted, prohibited or illegal
              activities.
            </p>
            <br />
            <p>
              Third party services: With your consent, we enable you to use and
              share your information to use our services in connection with
              other third-party services. For example, use payment services. If
              you use a third-party service via a link in our services, you may
              be providing information directly to such third party. In such
              cases the terms and privacy policies of the third-party service
              will apply to your use of their services.
            </p>
            <br />
            <p>
              Third party service providers: With your consent, we enable you to
              use and share your information to use our services in connection
              with other third-party services. For example, use payment
              services. If you use a third-party service via a link in our
              services, you may be providing information directly to such third
              party. In such cases the terms and privacy policies of the
              third-party service will apply to your use of their services.
            </p>
            <br />
            <p>
              Statistical data: We use aggregated information for statistical
              and analytical purposes. We may share such data with third
              parties. We do not consider personal information to include
              information that has been de-identified, made anonymous or
              aggregated so that it can no longer be used to identify a specific
              person, directly, or in combination with other information or
              means that are reasonably likely to be available to us. We may
              provide measurement and analytics services (using such
              information) in order to assist businesses to better understand
              the effectiveness of their user interactions on our services,
              engagement, and the distribution of their products and services.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">USER RIGHTS AND ACCESS</h4>
            <p>
              Access and Correction: You have the right to request access to the
              personal information we hold about you and to request corrections
              if the information is inaccurate or incomplete. You can do this
              through your account settings or by contacting us at{" "}
              <Link
                href="mailto:support@bonuspay.io."
                className="text-primaryBlue underline"
              >
                support@bonuspay.io.
              </Link>
            </p>
            <br />
            <p>
              Data Portability: You have the right to request a copy of your
              personal data in a structured, commonly used, and machine-readable
              format and to request that we transfer this data to another
              service provider where technically feasible.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              HOW WE ENABLE INFORMATION SHARING
            </h4>
            <p>
              We enable information sharing to provide, operate, maintain,
              support, improve, understand or personalize our services, in the
              following ways:
            </p>
            <br />
            <p>
              Third party services: With your consent, we enable you to use and
              share your information to use third party services. For example,
              use of payment services and identity verification using BVN. In
              such cases the terms and privacy policies of the third-party will
              apply to such information and your use of their services.
            </p>
            <br />
            <p>
              Third party service providers: We use trusted third-party service
              providers to support our services and business. When we share
              information with such third parties, we require them to take
              appropriate organizational and technical measures to protect your
              information and observe applicable laws.
            </p>
            <br />
            <p>
              Law and safety: We may disclose your information if we believe
              such action is necessary to:
            </p>
            <br />
            <ul
              style={{ listStyleType: "upper-greek" }}
              className="list-inside"
            >
              <li>
                Comply with applicable laws, government requests, or legal
                processes served on us;
              </li>
              <li>
                Protect and defend our rights and property, including the rights
                and property of our employees and contractors (including
                enforcing our agreements, policies, and Terms and Conditions);
              </li>
              <li>
                Protect the safety and security of our users and third parties
                or the public (including preventing fraud, security breaches, or
                the use of our services for illegal or restricted purposes);
              </li>
              <li>
                Enforce compliance with laws or regulations, including
                anti-money laundering regulations and “know your customer”
                requirements.
              </li>
            </ul>
            <br />
            <p>
              Safety and security: We use your information to comply with
              applicable laws, verify user accounts and activity, ensure service
              functionality, safety, and data accuracy, investigate suspicious
              activity, enforce our agreements, perform troubleshooting
              activities, and prevent fraud, security breaches, circumvention of
              the intended use of our services, our Terms and Conditions, this
              Privacy Policy, and restricted, prohibited, or illegal activities.
            </p>
            <br />
            <p>
              Acquisitions and transfer: We may disclose and transfer your
              information or our obligations and rights under this Privacy
              Policy to any of our affiliates or successors, and to any third
              party in connection with a proposed or actual corporate
              restructuring, who proposes to acquire all or part of business or
              operations, whether such acquisition is by way of investment,
              merger, restructuring, sale of capital or assets, by operation of
              law, or otherwise.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              HOW WE ENABLE INFORMATION SHARING
            </h4>
            <p>We process your data under the following legal bases:</p>
            <br />
            <p>
              Consent: When you have given explicit consent for us to process
              your data for specific purposes, such as marketing communications
              or location data.
            </p>
            <br />
            <p>
              Contract: When processing your data is necessary for the
              performance of a contract, such as providing services you have
              requested.
            </p>
            <br />
            <p>
              Legal Obligation: When we are required to process your data to
              comply with a legal obligation, such as anti-money laundering
              regulations.
            </p>
            <br />
            <p>
              Legitimate Interests: When processing your data is necessary for
              our legitimate interests, such as improving our services, provided
              it does not override your rights and freedoms.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">DATA RETENTION</h4>
            <p>
              BonusPay will retain your information for as long as you maintain
              a user profile in the services. You may at any time choose to
              deactivate your account and delete your user profile and
              information via Account Deletion. If you delete your account, your
              profile information will no longer be visible to others in the
              services, and we delete from our servers any of your information
              that we do not need to provide our services. However, deactivating
              your account will not delete information that you have shared with
              others. We will retain your information for the period necessary
              to fulfill the purposes outlined in our Privacy Policy unless a
              longer retention period is required or permitted by law.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">DATA RETENTION</h4>
            <p>
              The services require by their very nature that your information
              may be transferred to other users and third parties across the
              globe for effective provisioning of the services. BonusPay may use
              cloud-based services and subcontract storage or processing of your
              information to third parties located in countries other than your
              home country in order to provide the services, such as India and
              the USA. Information emanating from one country may for example,
              be transferred to and processed in another country.
            </p>
            <br />
            <p>
              We take all reasonable precautions to protect personal information
              from misuse, loss and unauthorized access, including by requiring
              transferees of information located in other countries to comply
              with contractual data protection requirements.{" "}
            </p>
            <br />
            <p>
              We have implemented physical, electronic, and procedural
              safeguards in order to protect the information, including that the
              information will be stored on secured servers and protected by
              secured networks to which access is limited to a few authorized
              employees and personnel. Data exchange between the BonusPay app
              and processing servers are encrypted. However, no method of
              transmission over the internet or method of electronic storage is
              100% secure. In case of any breach, your remedy will be as per the
              Terms and Conditions . You acknowledge and agree that BonusPay may
              transfer your information as described above for purposes
              consistent with this policy.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              INTERNATIONAL DATA TRANSFERS
            </h4>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We implement appropriate safeguards,
              including standard contractual clauses, to ensure that your data
              remains protected according to applicable data protection laws.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">BREACH NOTIFICATION</h4>
            <p>
              In the unlikely event of a data breach, we are committed to
              notifying you as soon as possible. We will take appropriate steps
              to mitigate any potential harm and will comply with applicable
              laws regarding breach notifications.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              COOKIES AND TRACKING TECHNOLOGIES
            </h4>
            <p>
              We use cookies and similar tracking technologies to collect
              information about your interactions with our app and website. This
              information is used to personalize your experience, analyze usage
              patterns, and provide relevant advertisements. You can manage your
              cookie preferences through your browser settings.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">THIRD-PARTY LINKS</h4>
            <p>
              Our app may contain links to third-party websites or services. We
              are not responsible for the privacy practices of these third
              parties. We encourage you to review the privacy policies of any
              third-party services you use.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">OPT-OUT OPTIONS</h4>
            <p>
              You have the right to opt out of certain types of data processing,
              including marketing communications and third-party data sharing.
              You can manage your preferences in your account settings or by
              contacting us directly.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              ACCESSING AND CONTROLLING YOUR INFORMATION CHILDREN’S PRIVACY
            </h4>
            <p>
              We do not intentionally or knowingly collect or solicit
              information from children under the relevant age of consent under
              the laws of their respective jurisdictions or knowingly allow such
              persons to register for the services. The services are not
              directed at children and is only intended to be used by
              individuals who have attained the relevant age of consent under
              the laws of their respective jurisdictions.
            </p>
            <br />
            <p>
              {" "}
              If you believe that we might have information from or about a
              child under the relevant age of consent, please contact us{" "}
              <Link
                href="mailto:support@bonuspay.io"
                className="text-primaryBlue underline"
              >
                support@bonuspay.io.
              </Link>{" "}
              We will promptly review the information and take appropriate
              action as required under applicable law.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              CHANGES TO THIS PRIVACY POLICY
            </h4>
            <p>
              BonusPay may at any time change this Privacy Policy. BonusPay will
              notify users of such changes by push notice or via in-app
              notification or by other means. If you object to any changes, you
              may deactivate your account and cease using the services. Your
              continued use of the services after BonusPay has communicated
              changes to this Privacy Policy, will mean that the collection,
              use, sharing and processing of your personal information is
              subject to the new Privacy Policy. We may from time to time set
              out more detailed information on how we process your personal
              information in relation to particular services in supplemental
              Privacy Notices which shall be incorporated into and form part of
              this Privacy Policy.
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              CONTACT INFORMATION FOR DATA PROTECTION OFFICER (DPO)
            </h4>
            <p>
              If you have any questions or concerns about your privacy or data
              protection, please contact our Data Protection Officer at
              dataprotection@xxxx.com.ng or by writing to us at:
            </p>
          </li>
          <li>
            <h4 className="font-bold underline">
              CHANGES TO THIS PRIVACY NOTICE
            </h4>
            <p>
              We reserve the right to modify this Privacy Policy at any time.
              Any changes will be effective immediately upon posting, and we
              will notify you of significant changes through our app or other
              communication methods.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
