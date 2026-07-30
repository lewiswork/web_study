import ContactForm from "@/components/ContactForm";

export default async function Contact({
  searchParams,
}: PageProps<"/contact">) {
  const { reason } = await searchParams;

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 bg-white px-16 py-24 dark:bg-black">
        {reason === "auth-required" && (
          <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
            /posts는 로그인이 필요한 페이지예요. proxy.ts가 요청을 가로채 이
            페이지로 보냈습니다.
          </div>
        )}

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Contact
          </h1>
          <p className="max-w-md text-zinc-600 dark:text-zinc-400">
            This page lives at{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-900">
              src/app/contact/page.tsx
            </code>{" "}
            and is automatically served at{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-900">
              /contact
            </code>{" "}
            — no route config needed.
          </p>
        </div>

        <ContactForm />
      </main>
    </div>
  );
}
