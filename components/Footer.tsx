import React, { ReactNode } from "react";
import Logo from "./Logo";
import paths from "@/constants/paths";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

interface NavLink {
  label: string;
  href: (typeof paths)[keyof typeof paths];
}
interface Social {
  icon: ReactNode;
  href: (typeof paths)[keyof typeof paths];
}

const navLinks: NavLink[] = [
  {
    label: "Contact",
    href: paths.supportEmailAddress,
  },
  {
    label: "Terms of Service",
    href: paths.termsOfService,
  },
  {
    label: "Privacy Policy",
    href: paths.privacyPolicy,
  },
];
const socials: Social[] = [
  {
    icon: <FaFacebook size={20} />,
    href: paths.facebook,
  },
  {
    icon: <FaInstagram size={20} />,
    href: paths.instagram,
  },
  {
    icon: <FaXTwitter size={20} />,
    href: paths.twitter,
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-wrap items-center justify-between gap-6 px-6 py-10 lg:mt-20">
      <Logo />
      <div className="space-x-6 md:space-x-10">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-lexend text-sm text-grey3 hover:text-primary hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        {socials.map((link) => (
          <a
            key={link.href}
            target="_blank"
            href={link.href}
            rel="noopener noreferrer"
            className="inline-block rounded-full p-2 text-grey3 transition-colors duration-300 hover:bg-gray-200 hover:text-primary md:p-2.5"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
