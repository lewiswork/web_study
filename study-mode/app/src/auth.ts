import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// 데모용 하드코딩 계정 — 6주차에 실제 DB(Prisma+Postgres) 연결 후
// authorize()가 db.users를 조회하도록 교체할 placeholder.
const DEMO_USERNAME = "study";
const DEMO_PASSWORD = "study1234";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "아이디" },
        password: { label: "비밀번호", type: "password" },
      },
      authorize: async (credentials) => {
        if (
          credentials.username === DEMO_USERNAME &&
          credentials.password === DEMO_PASSWORD
        ) {
          return { id: "1", name: "Study User" };
        }
        return null;
      },
    }),
  ],
});
