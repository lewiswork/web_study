export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 bg-white px-16 py-24 dark:bg-black">
        <div className="flex flex-col gap-4">
          <div className="h-9 w-32 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-full max-w-md animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <ul className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <li
              key={i}
              className="flex flex-col gap-2 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <div className="h-4 w-1/3 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
              <div className="h-3 w-1/5 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
              <div className="h-3 w-2/3 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
