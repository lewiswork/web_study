import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

// Next.js dev 서버는 파일 변경마다 모듈을 다시 로드하므로, 매번 새
// PrismaClient를 만들면 DB 커넥션이 쌓인다. globalThis에 캐싱해서
// 같은 인스턴스를 재사용한다 (production은 프로세스가 한 번만 뜨므로
// 문제 없음).
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
