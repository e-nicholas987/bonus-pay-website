import { ReactNode } from "react";

interface Term {
  title: string;
  content: string[];
}

export const terms: Term[] = [
  {
    title: "Introduction",
    content: [
      "By accessing and using our platform, you agree to comply with these terms and conditions. Please read them carefully before engaging in any buying, selling, or swapping activities on our platform.",
    ],
  },
  {
    title: "Account Registration and Security",
    content: [
      "a. You must provide accurate and up-to-date information during the registration process.",
      "b. You are responsible for maintaining the confidentiality of your account credentials and ensuring the security of your account.",
    ],
  },
  {
    title: "Buying and Selling",
    content: [
      "a. All transactions are final. Ensure you review and confirm all details before completing any buy or sell orders.",
      "b. Prices and fees are subject to change without notice. Check the latest information before initiating transactions",
    ],
  },
  {
    title: "Swapping",
    content: [
      "a. Swapping services are provided as-is. We are not responsible for any losses incurred during or after the swapping process.",
      "b. Ensure compatibility and compliance with blockchain protocols when initiating swaps",
    ],
  },
  {
    title: "Compliance with Laws",
    content: [
      "a. Users are responsible for complying with all applicable laws and regulations related to cryptocurrency transactions in their jurisdiction.",
      "b. Our platform reserves the right to refuse service to anyone at our discretion, including in jurisdictions where our services may be prohibited",
    ],
  },
  {
    title: "Security",
    content: [
      "a. Users are responsible for securing their wallets and devices. We are not liable for any losses due to unauthorized access or security breaches.",
      "b. Report any suspicious activity or security concerns immediately to our support team.",
    ],
  },
  {
    title: "Privacy",
    content: [
      "a. We prioritize the privacy and protection of user data. Refer to our Privacy Policy for details on how we collect, use, and protect your information.",
    ],
  },
  {
    title: "Dispute Resolution",
    content: [
      "a. Disputes between users should be resolved through our designated dispute resolution process. Our decision is final in dispute resolution matters.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      'a. We provide our services "as is" without any warranties, expressed or implied.',
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "a. Our platform shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.",
    ],
  },
  {
    title: "Changes to Terms",
    content: [
      "a. We reserve the right to modify these terms at any time. Users will be notified of changes, and continued use of our platform constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Termination",
    content: [
      "a. We reserve the right to suspend or terminate your account if you violate these terms or engage in fraudulent or harmful activities.",
      "By using our platform, you acknowledge that you have read, understood, and agreed to these terms. If you do not agree, refrain from using our services",
    ],
  },
];
