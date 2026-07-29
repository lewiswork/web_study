import { getPosts } from "@/lib/posts";

export async function GET() {
  try {
    const posts = await getPosts();
    return Response.json(posts);
  } catch {
    return Response.json(
      { error: "게시글 목록을 조회하는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
