const fields = [
  { label: "Name", type: "text", placeholder: "Ada Lovelace" },
  { label: "Email", type: "email", placeholder: "ada@example.com" },
];

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 bg-white px-16 py-24 dark:bg-black">
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

        <form className="flex max-w-sm flex-col gap-4 rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
          {fields.map((field) => (
            <label key={field.label} className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-black dark:text-zinc-50">
                {field.label}
              </span>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-black focus:ring-1 focus:ring-black dark:border-zinc-800 dark:text-zinc-50 dark:focus:border-white dark:focus:ring-white"
              />
            </label>
          ))}
          <button
            type="button"
            className="mt-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Send message
          </button>
        </form>
      </main>
    </div>
  );
}
