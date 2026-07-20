const stats = [
  { label: "Framework", value: "Next.js (App Router)" },
  { label: "Styling", value: "Tailwind CSS v4" },
  { label: "Language", value: "TypeScript" },
];

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 bg-white px-16 py-24 dark:bg-black">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            About
          </h1>
          <p className="max-w-md text-zinc-600 dark:text-zinc-400">
            This page lives at{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-900">
              src/app/about/page.tsx
            </code>{" "}
            and is automatically served at{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-900">
              /about
            </code>{" "}
            — no route config needed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                {stat.label}
              </p>
              <p className="mt-1 text-sm font-medium text-black dark:text-zinc-50">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
