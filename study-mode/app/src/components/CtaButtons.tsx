import Image from "next/image";

type CtaLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: { src: string; alt: string };
};

type CtaButtonsProps = {
  links: CtaLink[];
};

const variantClassName: Record<CtaLink["variant"], string> = {
  primary:
    "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
  secondary:
    "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]",
};

export default function CtaButtons({ links }: CtaButtonsProps) {
  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
      {links.map((link) => (
        <a
          key={link.href}
          className={`flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors md:w-[158px] ${variantClassName[link.variant]}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon && (
            <Image
              className="dark:invert"
              src={link.icon.src}
              alt={link.icon.alt}
              width={16}
              height={16}
            />
          )}
          {link.label}
        </a>
      ))}
    </div>
  );
}
