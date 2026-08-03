import { z } from "zod";
import type { NextRequest } from "next/server";
import { getPosts } from "@/lib/posts";

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).optional(),
});

export async function GET(request: NextRequest) {
  const parsed = querySchema.safeParse({
    limit: request.nextUrl.searchParams.get("limit") ?? undefined,
  });

  if (!parsed.success) {
    return Response.json(
      { error: "limit은 1~50 사이의 정수여야 합니다." },
      { status: 400 }
    );
  }

  try {
    const posts = await getPosts(parsed.data.limit);
    return Response.json(posts);
  } catch {
    return Response.json(
      { error: "게시글 목록을 조회하는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
