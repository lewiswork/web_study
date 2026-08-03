import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: PageProps<"/login">) {
  const { reason, error } = await searchParams;

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 bg-white px-16 py-24 dark:bg-black">
        {reason === "auth-required" && (
          <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
            /posts는 로그인이 필요한 페이지예요. proxy.ts가 세션을 확인하고
            이 페이지로 보냈습니다.
          </div>
        )}

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Login
          </h1>
          <p className="max-w-md text-zinc-600 dark:text-zinc-400">
            데모 계정: <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-900">study</code>{" "}
            /{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-900">study1234</code>
            . 실제 DB 연동 전까지는 <code>src/auth.ts</code>에 하드코딩된
            값입니다.
          </p>
        </div>

        {error === "invalid-credentials" && (
          <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
            아이디 또는 비밀번호가 올바르지 않습니다.
          </div>
        )}

        <form action={login} className="flex max-w-sm flex-col gap-4">
          <input type="hidden" name="redirectTo" value="/posts" />

          <label className="flex flex-col gap-1 text-sm">
            아이디
            <input
              type="text"
              name="username"
              required
              className="rounded-md border border-zinc-300 px-3 py-2 text-black shadow-sm focus:ring dark:border-zinc-700 dark:bg-black dark:text-white"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            비밀번호
            <input
              type="password"
              name="password"
              required
              className="rounded-md border border-zinc-300 px-3 py-2 text-black shadow-sm focus:ring dark:border-zinc-700 dark:bg-black dark:text-white"
            />
          </label>

          <button
            type="submit"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            로그인
          </button>
        </form>
      </main>
    </div>
  );
}
