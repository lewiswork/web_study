"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/login", label: "Login" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 border-b border-zinc-200 px-16 py-4 text-sm dark:border-zinc-800">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors hover:underline ${
              isActive
                ? "font-semibold text-black dark:text-white"
                : "text-zinc-600 dark:text-zinc-400"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
