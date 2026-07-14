"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <p className="text-lg text-black dark:text-zinc-50">{count} clicks</p>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-full bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black"
      >
        Click me
      </button>
    </div>
  );
}
