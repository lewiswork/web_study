# Study Mode — 풀스택 웹 개발 스터디 로드맵

Next.js(React + Node.js) 풀스택 조합과 PostgreSQL을 축으로, Claude Code와 MCP를 짝 프로그래머 삼아 설계부터 배포까지 완주하는 12주 학습 계획. 여기서 배운 스킬은 그대로 `../practice-mode`, `../development-mode`에서 재사용합니다.

## 개요

- **기간**: 12주 (주 2–3회, 회당 2–3시간 권장)
- **최종 목표**: 인증 + CRUD를 갖춘 앱을 실제 도메인으로 배포
- **학습 방식**: 매 주차 "개념 학습 → Claude Code로 실습 → MCP로 검증" 사이클
- **산출물**: GitHub 리포지토리 + 배포된 서비스 URL + 회고 문서

## 기술 스택 — Next.js 풀스택

| 영역 | 선택 | 세부 옵션 | 비고 |
|---|---|---|---|
| 애플리케이션 | Next.js (App Router) + TypeScript | React UI + Node.js 서버 로직 통합 | Route Handler·Server Action이 곧 백엔드, 별도 Express 서버 불필요 |
| 스타일링 | TailwindCSS | + shadcn/ui | 디자인 시스템·컴포넌트 재사용 학습 |
| 데이터 패칭 | Server Component에서 직접 조회 | 클라이언트 상호작용은 TanStack Query, 로컬 상태는 Zustand | 초기 로딩은 서버, 갱신은 클라이언트 |
| 서버 로직 | Route Handler(`app/api`) / Server Action | 외부 노출 API는 Route Handler, 폼 제출 등은 Server Action | REST 설계 원칙(상태코드·에러 포맷) 동일 적용 |
| ORM | Prisma | 또는 Drizzle ORM | Prisma: 생산성 / Drizzle: 가볍고 SQL에 가까움 |
| Database | PostgreSQL | Neon 또는 Supabase(서버리스) | 로컬 → 클라우드 이전이 쉬움 |
| 인증 | Auth.js (NextAuth) | 세션/미들웨어가 App Router와 통합 | 직접 JWT보다 궁합이 좋아 기본안 |
| 테스트 | Vitest | + Playwright(E2E) | Route Handler·Server Action 모두 동일 도구로 테스트 |
| 배포 | Vercel 하나로 통합 | DB만 Neon/Supabase로 분리 | 프론트·백엔드 별도 배포 불필요 |

**왜 Next.js인가**: 프론트엔드와 백엔드를 하나의 배포 단위로 묶어 인프라 구성을 단순화하고, SSR·캐싱·로딩/에러 바운더리 같은 실무 패턴을 자연스럽게 익힐 수 있습니다. 대신 Route Handler와 Server Action 중 무엇을 언제 쓸지 판단하는 감각이 필요합니다 — 4–5주차, 7–8주차에서 집중 다룹니다.

## Claude Code MCP 활용

| MCP | 활용 시점 | 용도 |
|---|---|---|
| Postgres MCP | DB·통합 주차 핵심 | 스키마 확인, 쿼리 실행, 마이그레이션 결과를 대화 안에서 바로 검증 |
| GitHub MCP | 전 구간 상시 | 이슈·PR 생성, 브랜치 관리, 주차별 진행 기록 |
| Playwright MCP | 테스트·통합 주차 | 실제 브라우저로 화면 확인, 핵심 시나리오 E2E 실행 |
| Filesystem(기본 내장) | 전 구간 상시 | 프로젝트 구조 탐색, 리팩터링 |

> 0주차에 `claude mcp add`로 Postgres·GitHub MCP를 등록하고 `.mcp.json`을 리포지토리에 커밋해두면 설정을 그대로 공유/재사용할 수 있습니다.

## 12주 로드맵

| 주차 | 태그 | 목표 | 산출물 |
|---|---|---|---|
| 0주차 | SETUP | `create-next-app`(TS+Tailwind+App Router), GitHub, Postgres/GitHub MCP 등록 | Next.js 프로젝트 스캐폴딩 + MCP 연결 확인 |
| 1–2주차 | FRONTEND | 컴포넌트/state, App Router 라우팅, `layout.tsx`, Server/Client Component 구분, Tailwind | 정적 데이터로 동작하는 UI |
| 3주차 | FRONTEND | Server Component 데이터 조회, TanStack Query, RHF+Zod 폼 검증, `loading.tsx`/`error.tsx` | 폼 제출·검증 화면, 로딩/에러 처리 |
| 4–5주차 | SERVER | Route Handler vs Server Action, REST 설계, Zod 검증, `middleware.ts`, Auth.js 인증 | 인증 흐름 + 리소스 CRUD(목업 데이터) |
| 6주차 | DATABASE | 테이블 설계·정규화·관계·인덱스, Prisma 마이그레이션, Postgres MCP로 검증 | ERD + 마이그레이션 적용된 실제 DB |
| 7–8주차 | INTEGRATION | 실제 DB 연결, Auth.js 세션/보호 라우트, `revalidatePath` 등 캐싱 개념, 페이지네이션/검색 | 하나의 Next.js 프로젝트로 완결되는 풀스택 앱 |
| 9주차 | TESTING | Vitest 유닛 테스트, supertest 통합 테스트, Playwright MCP E2E | 핵심 플로우 테스트 스위트 + CI 연결 |
| 10–11주차 | DEPLOY | GitHub Actions CI, Neon/Supabase 프로덕션 DB, Vercel 통합 배포 | 실제 URL로 접속 가능한 서비스 |
| 12주차 | WRAP-UP | 기능 정리, README/회고 작성, 다음 스텝 결정 | 완성된 포트폴리오 프로젝트 + 회고 문서 |

## 미니 프로젝트 후보

- **스터디 그룹 게시판 (추천)** — 인증, 댓글(1:N), 검색/페이지네이션까지 로드맵 전체를 관통. 스터디 자체를 위한 도구로도 사용 가능.
- **할 일/프로젝트 보드** — 보드–카드–라벨의 N:M 관계, 드래그앤드롭 UI 비중이 큼.
- **북마크 아카이브** — 외부 API 연동(메타데이터 크롤링), 태그 검색. 백엔드 통합 난이도가 조금 더 높음.

## 배포 전 체크리스트

- [ ] `.env` 값을 프로덕션/개발로 분리, 시크릿은 Vercel 프로젝트 설정에 등록
- [ ] 같은 Vercel 배포 안이라 CORS는 대부분 불필요(외부 API 공개 시에만 설정)
- [ ] DB 커넥션 풀 확인(서버리스 환경 — Prisma pooling/Neon pooler)
- [ ] `/api/health` 헬스체크 라우트 추가 후 배포 확인
- [ ] 로그/에러 모니터링 최소 1개 연결
- [ ] 커스텀 도메인 연결 시 HTTPS 자동 적용 확인

## 진행 팁

- 매 주차 시작 전 Claude Code에게 "이번 주차 목표"를 먼저 검토받기
- 막힐 때는 코드를 복붙하기보다 에러 메시지를 그대로 붙여넣고 원인부터 질문
- Postgres MCP로 "이 쿼리 결과가 왜 이렇게 나왔는지" 바로 확인하는 습관
- 짧게라도 매주 회고를 남기면 12주차 종합 정리에서 재사용 가능
