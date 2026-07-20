import { getPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 bg-white px-16 py-24 dark:bg-black">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Posts
          </h1>
          <p className="max-w-md text-zinc-600 dark:text-zinc-400">
            이 컴포넌트는 <code>async function</code>으로 선언된 Server
            Component입니다. <code>await getPosts()</code>가 끝날 때까지
            (1.2초) 응답 자체가 지연된 뒤, 완성된 HTML이 한 번에 내려옵니다.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <p className="font-medium text-black dark:text-zinc-50">
                {post.title}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                by {post.author}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
