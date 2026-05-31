# GINAS_SECOND_BRAIN — 지나스 AI Native 업무 운영체제

지나스(GINAS)의 다(多)브랜드 업무를 **분리 운영**하기 위한 Markdown 기반 Second Brain입니다.
AI 에이전트(Claude 등)가 읽고 일할 수 있는 **조직 운영 문서 체계 + 실행 프롬프트 시스템**입니다.

> 작업 시작 전 반드시 읽기: `CLAUDE.md`(작업 지침) → `00_PROFILE/IDENTITY.md`(정체성) → `00_PROFILE/VOICE_TONE.md`(말투) → 해당 브랜드 `BRAND_GRAMMAR.md`

---

## 헌법 계층 (상위 → 하위)
```
IDENTITY.md            나는 누구인가 (최상위)
  └ VOICE_TONE.md      어떻게 말하는가 (공통 톤 + 브랜드 분기)
      └ BRAND_GRAMMAR  브랜드별 말투 헌법 (01~04)
          └ 정책/검수  CONTENT_POLICY.md · review_prompt.md
```

## 폴더 맵
| 폴더 | 용도 | 핵심 파일 |
|------|------|-----------|
| `00_PROFILE` | 공통 정체성·말투·작업방식 | IDENTITY · VOICE_TONE · WORKING_STYLE · ROLE_MAP |
| `01_BRAND_GINAS_BEAUTY` | 지나스 뷰티 | BRAND_GRAMMAR |
| `02_BRANDG_AI` | BrandG AI 사업 | BRAND_GRAMMAR |
| `03_FATE_PT` | 운명PT(외부/내부 분리) | BRAND_GRAMMAR · CONTENT_POLICY · FUNNEL |
| `04_MOVIE_GINA` | 무비지나 영상·서사 | BRAND_GRAMMAR · STORY_GRAMMAR |
| `05_DESIGN_SYSTEM` | 브랜드별 디자인 | PRINCIPLES · COMPONENTS · TOKENS/ |
| `06_PROMPTS` | 프롬프트 라이브러리 | _TEMPLATE · 브랜드별/공통 프롬프트 |
| `07_PROJECTS` | 프로젝트 단위 작업 | active_projects |
| `08_AUTOMATION` | 자동화 설계 | WORKFLOWS · CHECKLISTS · daily_operation |
| `09_ARCHIVE` | 보관·인사이트 | INSIGHTS |

## 루트 운영 문서
- `CLAUDE.md` — AI 작업 지침
- `PROJECT_RULE.md` — 운영 원칙
- `DAILY_OPERATION.md` — 일일 루틴
- `DECISION_LOG.md` — 의사결정 기록
- `FAILURE_LOG.md` — 실패·시행착오 기록

## 절대 규칙
1. 브랜드 도메인을 섞지 않는다.
2. 운명PT는 외부 안전 콘텐츠 / 자사몰 내부 전환 콘텐츠를 분리한다.
3. 개인정보·API Key·결제정보·자격증명은 생성/저장/노출하지 않는다.
4. 감이 아니라 문서 기준으로 일한다.
5. 커밋/푸시/머지는 운영 규칙에 따른다(main 머지는 별도 승인).

## 작업 흐름
계획 보고 → 생성 → 검수(`review_prompt.md`) → 변경 파일 보고 → 커밋/푸시
