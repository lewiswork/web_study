// 로그인 폼에서 그대로 쓰던 데모 계정(study / study1234)을 실제 DB에
// 심어두는 일회성 스크립트. authorize()가 이제 하드코딩 대신
// User 테이블을 조회하므로, 이 계정이 없으면 로그인이 항상 실패한다.
//
// 실행: node scripts/create-demo-user.ts
import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const USERNAME = "study";
const PASSWORD = "study1234";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const passwordHash = await bcrypt.hash(PASSWORD, 10);

const user = await prisma.user.upsert({
  where: { username: USERNAME },
  update: { passwordHash },
  create: {
    username: USERNAME,
    passwordHash,
    name: "Study User",
  },
});

console.log("Seeded user:", { id: user.id, username: user.username, name: user.name });

await prisma.$disconnect();
