export type Post = {
  id: string;
  title: string;
  author: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    id: "1",
    title: "Server Components 첫걸음",
    author: "Ada",
    excerpt: "async 함수로 컴포넌트를 선언하면 서버에서 데이터를 직접 조회할 수 있다.",
  },
  {
    id: "2",
    title: "클라이언트로 보내지 않는 조회 로직",
    author: "Grace",
    excerpt: "Server Component의 데이터 조회 코드는 클라이언트 번들에 포함되지 않는다.",
  },
  {
    id: "3",
    title: "왜 useEffect가 필요 없을까",
    author: "Linus",
    excerpt: "렌더링 자체가 서버에서 일어나기 때문에 마운트 후 fetch할 필요가 없다.",
  },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 일부러 지연을 줘서 "조회가 끝날 때까지 응답이 늦어진다"를 체감할 수 있게 한다.
export async function getPosts(): Promise<Post[]> {
  await delay(1200);
  return posts;
}
