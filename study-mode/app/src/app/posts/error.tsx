"use client";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-start gap-4 bg-white px-16 py-24 dark:bg-black">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          게시글을 불러오지 못했습니다
        </h1>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">
          {error.message}
        </p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          다시 시도
        </button>
      </main>
    </div>
  );
}
