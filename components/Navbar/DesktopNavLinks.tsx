import paths from "@/lib/constants";
import Link from "next/link";

interface DesktopNavLink {
  label: string;
  href: (typeof paths)[keyof typeof paths];
}

const navLinks: DesktopNavLink[] = [
  {
    label: "Home",
    href: paths.hero,
  },
  {
    label: "About Us",
    href: paths.aboutUs,
  },
  {
    label: "FAQs",
    href: paths.faqs,
  },
  {
    label: "Contact",
    href: paths.contactUs,
  },
];

export default function DesktopNavLinks() {
  return (
    <div className="hidden items-center gap-2 font-lexend lg:flex">
      {navLinks.map((navLink) => (
        <Link
          href={navLink.href}
          key={navLink.label}
          className="p-2.5 opacity-50 transition-opacity duration-300 hover:text-primary hover:opacity-100"
        >
          {navLink.label}
        </Link>
      ))}
    </div>
  );
}
