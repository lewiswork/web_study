"use client";

import { useQuery } from "@tanstack/react-query";
import type { Post } from "@/lib/posts";

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("/api/posts");
  if (!res.ok) {
    throw new Error("게시글을 불러오지 못했습니다");
  }
  return res.json();
}

export default function PostsRefresh() {
  const { data, isFetching, isError, error, refetch, dataUpdatedAt } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled: false,
  });

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        이 카드는 Server Component가 아니라 <code>useQuery</code>로{" "}
        <code>/api/posts</code>를 클라이언트에서 다시 호출합니다.
      </p>
      <button
        type="button"
        onClick={() => refetch()}
        disabled={isFetching}
        className="self-start rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        {isFetching ? "불러오는 중..." : "클라이언트에서 다시 불러오기"}
      </button>
      {isError && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {(error as Error).message}
        </p>
      )}
      {data && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {new Date(dataUpdatedAt).toLocaleTimeString()} 기준 {data.length}건
          수신
        </p>
      )}
    </div>
  );
}
