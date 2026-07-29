import { getPostById } from "@/lib/posts";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/api/posts/[id]">
) {
  const { id } = await ctx.params;

  try {
    const post = await getPostById(id);

    if (!post) {
      return Response.json(
        { error: `id ${id}에 해당하는 게시글을 찾을 수 없습니다.` },
        { status: 404 }
      );
    }

    return Response.json(post);
  } catch {
    return Response.json(
      { error: "게시글을 조회하는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
