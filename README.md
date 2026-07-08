# 1_Web — 풀스택 웹 개발 스터디 &amp; 회사 홈페이지 제작

Next.js(React + Node.js) + PostgreSQL + Claude Code(MCP)로 진행하는 스터디와, 그 이후 만들 회사 홈페이지 프로젝트를 세 개의 모드로 나눠 병행 진행합니다.

## 폴더 구조

| 폴더 | 내용 |
|---|---|
| [`study-mode/`](./study-mode/README.md) | 12주 Next.js 풀스택 스터디 로드맵 (범용 스킬 학습, 미니 프로젝트) |
| [`practice-mode/`](./practice-mode/README.md) | 회사 홈페이지와 동일한 구조를 더미 데이터로 연습, 설명받으며 진행 (6주) |
| [`development-mode/`](./development-mode/README.md) | Practice 완료 후 실제 데이터·도메인으로 프로덕션 홈페이지 제작 (3주) |
| `fullstack_study_roadmap.html` | 세 모드로 나뉘기 전, 전체 계획을 한 문서로 정리한 초기 개요본 |

각 폴더의 `README.md`는 텍스트 기반 계획, `index.html`은 같은 내용을 보기 좋게 정리한 문서입니다(더블클릭해서 브라우저로 열람). `index.html` 상단 탭으로 세 모드 문서를 서로 오갈 수 있습니다.

## 진행 방식

- Study Mode는 독립적으로 진행 (범용 Next.js 스킬 학습)
- Practice Mode → Development Mode는 순서대로 진행 (Practice의 Definition of Done을 충족해야 Development로 이관)
- 세 모드는 병행 가능하나, Development Mode는 Practice Mode 완료가 전제 조건

## 여러 PC에서 작업하기

이 저장소를 클론한 뒤 각 폴더에서 실제 프로젝트(`create-next-app` 등)를 시작하면 됩니다. 폴더별로 만들어질 `node_modules/`, `.next/`, `.env*` 등은 `.gitignore`에 이미 포함되어 있습니다.
