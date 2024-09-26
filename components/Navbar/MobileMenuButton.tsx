"use client";

import paths from "@/constants/paths";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Button from "../Buttons/Button";
import { AnimatePresence, motion } from "framer-motion";
import { FaCaretRight } from "react-icons/fa";

interface MobileNavLink {
  label: string;
  href: (typeof paths)[keyof typeof paths];
}

const mobileNavLinks: MobileNavLink[] = [
  { label: "Home", href: paths.home },
  { label: "About us", href: paths.aboutUs },
  { label: "FAQs", href: paths.faqs },
  { label: "Contact us", href: paths.contactUs },
  { label: "Create a Free account", href: paths.createAccount },
];

export default function MobileMenuButton() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        className={cn(
          "grid place-content-center rounded-md bg-white p-2.5 transition-all duration-300 lg:hidden",
          showMenu && "border border-[#0053B4]",
        )}
      >
        {showMenu ? (
          <MdClose size={24} className="text-[#0053B4]" />
        ) : (
          <IoMdMenu size={24} className="text-[#0053B4]" />
        )}
        <span className="sr-only">Open Mobile Menu</span>
      </button>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            role="dialog"
            onClick={() => setShowMenu(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-hidden bg-[rgb(0,0,0,0.5)] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -1000 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -1000 }}
              transition={{ ease: "linear", duration: 0.3 }}
              className="flex flex-col bg-white p-6 sm:items-center"
              role="menu"
              onClick={(e) => e.stopPropagation()}
            >
              <ul>
                {mobileNavLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      onClick={() => setShowMenu(false)}
                      href={link.href}
                      className="group block p-4 transition-colors duration-300 hover:text-primary sm:text-center"
                    >
                      <span className="relative inline-block">
                        {link.label}{" "}
                        <FaCaretRight className="absolute -right-3 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:-right-6 group-hover:opacity-100" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button className="my-4 block w-full sm:max-w-sm" size="md">
                Login
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
