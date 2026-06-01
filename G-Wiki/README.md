# G-Wiki

**Gina's AI Native Second Brain**

지식은 공짜가 되었다. 맥락은 여전히 독점적이다.
G-Wiki는 지나스의 경험·실패·통찰·판단·취향·운영 원칙을
**AI가 활용 가능한 Context Asset**으로 영구 보존한다.

---

## Core Rule

- 절대 원본을 삭제하지 않는다. 원본은 항상 보존한다.
- 정제본은 별도로 생성한다.
- 추론은 사실과 분리한다.
- 근거 없는 판단은 하지 않는다.
- 민감정보는 자동 분류한다.
- **단, 고객 개인정보 원본은 G-Wiki에 저장하지 않는다.** "원본 보존"과 "고객정보 저장 금지"가 충돌할 경우의 처리 규칙은 [`harness/README.md`](harness/README.md)의 *고객정보 충돌 해소 규칙*을 따른다.

---

## Metadata & ID 규칙 (MUST)

모든 문서는 아래 규칙을 **필수(MUST)** 로 준수한다. (권장이 아니다.)

### Frontmatter 필수

- 모든 문서(README 제외)는 YAML frontmatter를 **반드시** 포함한다.
- frontmatter가 없는 문서는 미완성으로 간주하며, Lint에서 결함으로 검출한다.
- 공통 필수 필드: `id`, `type`, `sensitivity`. (유형별 추가 필수 필드는 각 폴더 README 참조.)

### 통일 ID 채번 규칙

모든 ID는 단일 포맷을 따른다.

```
{TYPE}-YYYYMMDD-NNN
```

- `TYPE` — 문서 유형 접두사: `SRC` · `DIST` · `ENT` · `INS` · `PROC` · `CASE` · `CLAIM` · `PRJ`
- `YYYYMMDD` — 문서 **최초 생성일** (불변. 갱신해도 바뀌지 않는다.)
- `NNN` — 해당 일자·해당 TYPE 내 3자리 일련번호 (`001`부터 시작)
- 예: `SRC-20260601-001`, `INS-20260601-003`, `PRJ-20260601-002`

**프로젝트 소속은 ID에 넣지 않는다.** 소속은 frontmatter의 `project:` 필드로만 표기한다.
(프로젝트 코드를 ID에 넣으면 재분류 시 ID가 깨지고 프로젝트 오염을 유발하므로 금지.)

---

## Architecture

```
G-Wiki/
├─ sources/        원본 자료 (불변, 삭제 금지)
├─ distillations/  정제 요약본
├─ entities/       사람·브랜드·상품·프로젝트·채널·개념
├─ insights/       통찰
├─ procedures/     반복 가능한 절차
├─ projects/       프로젝트 히스토리
├─ harness/        규칙·정책·검수 기준
├─ indexes/        MASTER / PROJECT / ENTITY 인덱스
├─ logs/           INGEST / QUERY / LINT 로그
└─ agents/         에이전트 정의
```

---

## Knowledge Types

| 유형 | 설명 |
| --- | --- |
| Entity | 사람·브랜드·상품·프로젝트·채널·개념 |
| Insight | 통찰 |
| Procedure | 반복 가능한 절차 |
| Case | 실제 사례 |
| Claim | 주장 |
| Distillation | 정제된 요약 |

---

## Ontology

문서는 반드시 연결되어야 한다. 관계 없는 문서는 존재하면 안 된다.

관계 유형: `SUPPORTS` · `EXPANDS` · `REFUTES` · `SIMILAR_TO` · `PART_OF` · `CREATED_FROM` · `USED_BY` · `DEPENDS_ON`

---

## Workflows

- **Ingest** — 원본 저장 → 요약 → 엔티티 추출 → 인사이트 추출 → 프로젝트 연결 → 위키 생성 → 인덱스 갱신 → 로그 기록
- **Query** — Index 탐색 → Wiki 탐색 → Project 탐색 → Context 조합 → 답변 생성 (내부 Context 우선)
- **Lint** — 중복·노후 정보·모순·보안 문제·프로젝트 오염 검사

---

## Active Projects

| 코드 | 프로젝트 | 영역 |
| --- | --- | --- |
| 운명PT | 운명PT | AI 자기이해 리포트 |
| BrandG | BrandG | AI 교육 및 퍼스널 브랜딩 |
| 지나스뷰티 | 지나스뷰티 | 4050 여성 뷰티 |
| 팬덤굿즈 | 팬덤굿즈 | 미니 인형 사업 |
| AI강의 | AI강의 | 공공기관 강의 |
| 보안운영 | 보안운영 | 공개/비공개 기준 |

자세한 내용은 [`indexes/PROJECT_INDEX.md`](indexes/PROJECT_INDEX.md) 참고.

---

## Forbidden

원본 삭제 · 무단 커밋 · 무단 push · main merge · 배포 · DB 변경 ·
환경변수 변경 · 고객정보 저장 · API 노출 · 프롬프트 공개

---

> Knowledge Architect · Ontology Designer · Context Engineer · Agent System Builder
