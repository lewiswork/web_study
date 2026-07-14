import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  return (
    <nav className="flex gap-6 border-b border-zinc-200 px-16 py-4 text-sm dark:border-zinc-800">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-zinc-600 hover:underline dark:text-zinc-400"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
