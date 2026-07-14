export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-4 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          This page lives at <code>src/app/contact/page.tsx</code> and is
          automatically served at <code>/contact</code> — no route config
          needed.
        </p>
      </main>
    </div>
  );
}
