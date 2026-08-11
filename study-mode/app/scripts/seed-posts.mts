// lib/posts.ts의 mock Post 데이터를 실제 Post/Comment 테이블에 심어두는
// 일회성 스크립트. Post.authorId는 FK이므로 mock의 author 이름("Ada" 등)에
// 대응하는 User row를 먼저 만들고, 게시글마다 대표 댓글도 함께 심는다.
//
// 실행: npx tsx scripts/seed-posts.mts
import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const existingPostCount = await prisma.post.count();
if (existingPostCount > 0) {
  console.log(`Post 테이블에 이미 ${existingPostCount}건이 있어 시드를 건너뜁니다.`);
  await prisma.$disconnect();
  process.exit(0);
}

// mock 데이터의 로그인 계정이 아닌 관계(FK) 연습용 placeholder이므로
// 실제 로그인에는 쓰이지 않는 임의 비밀번호를 해시해서 넣는다.
const placeholderHash = await bcrypt.hash("not-a-real-login", 10);

async function upsertAuthor(username: string, name: string) {
  return prisma.user.upsert({
    where: { username },
    update: {},
    create: { username, name, passwordHash: placeholderHash },
  });
}

const [ada, grace, linus, study] = await Promise.all([
  upsertAuthor("ada", "Ada"),
  upsertAuthor("grace", "Grace"),
  upsertAuthor("linus", "Linus"),
  prisma.user.findUniqueOrThrow({ where: { username: "study" } }),
]);

const post1 = await prisma.post.create({
  data: {
    title: "Server Components 첫걸음",
    excerpt: "async 함수로 컴포넌트를 선언하면 서버에서 데이터를 직접 조회할 수 있다.",
    authorId: ada.id,
    comments: {
      create: [
        { body: "정리 잘 됐네요, 감사합니다!", authorId: study.id },
        { body: "다음에 Client Component도 다뤄주세요.", authorId: grace.id },
      ],
    },
  },
});

const post2 = await prisma.post.create({
  data: {
    title: "클라이언트로 보내지 않는 조회 로직",
    excerpt: "Server Component의 데이터 조회 코드는 클라이언트 번들에 포함되지 않는다.",
    authorId: grace.id,
    comments: {
      create: [{ body: "번들 사이즈 줄이는 데 정말 유용하네요.", authorId: linus.id }],
    },
  },
});

const post3 = await prisma.post.create({
  data: {
    title: "왜 useEffect가 필요 없을까",
    excerpt: "렌더링 자체가 서버에서 일어나기 때문에 마운트 후 fetch할 필요가 없다.",
    authorId: linus.id,
    comments: {
      create: [
        { body: "덕분에 이해했습니다.", authorId: study.id },
        { body: "명쾌한 설명이에요.", authorId: ada.id },
      ],
    },
  },
});

console.log("Seeded posts:", [post1, post2, post3].map((p) => ({ id: p.id, title: p.title })));

await prisma.$disconnect();
