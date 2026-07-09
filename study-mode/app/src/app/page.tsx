import BrandLogo from "@/components/BrandLogo";
import Hero from "@/components/Hero";
import CtaButtons from "@/components/CtaButtons";

const ctaLinks = [
  {
    label: "Deploy Now",
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    variant: "primary" as const,
    icon: { src: "/vercel.svg", alt: "Vercel logomark" },
  },
  {
    label: "Documentation",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    variant: "secondary" as const,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <BrandLogo />
        <Hero
          title="To get started, edit the page.tsx file."
          description={
            <>
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Learning
              </a>{" "}
              center.
            </>
          }
        />
        <CtaButtons links={ctaLinks} />
      </main>
    </div>
  );
}
