# agents/

**에이전트 정의 저장소**

G-Wiki를 운영하는 에이전트의 역할·책임·권한을 정의한다.

## 에이전트 역할

| 역할 | 책임 |
| --- | --- |
| Knowledge Architect | 전체 구조 설계·유지 |
| Ontology Designer | 문서 간 관계·온톨로지 관리 |
| Context Engineer | Query 시 Context 조합·답변 생성 |
| Agent System Builder | 에이전트·워크플로우 구축 |

## Ingest Agent

원본 저장 → 요약 → 엔티티 추출 → 인사이트 추출 → 프로젝트 연결 → 위키 생성 → 인덱스 갱신 → 로그 기록

## Query Agent

Index 탐색 → Wiki 탐색 → Project 탐색 → Context 조합 → 답변 생성
(일반론보다 G-Wiki 내부 Context 우선)

## Lint Agent

중복 문서 · 오래된 정보 · 모순 · 보안 문제 · 프로젝트 오염 주기 검사

---

## 등록된 프로젝트 에이전트

위 시스템 에이전트(Ingest/Query/Lint)와 별개로, 프로젝트별 콘텐츠 생성 에이전트를 정의한다.

| 에이전트 | 파일 | 담당 프로젝트 | 핵심 역할 |
| --- | --- | --- | --- |
| movie-gina-agent | [`movie-gina-agent.md`](movie-gina-agent.md) | 무비지나 | 영상·서사 대본/후크/캐릭터 해석 (팬덤 존중, 4050 타깃) |
| beauty-agent | [`beauty-agent.md`](beauty-agent.md) | 지나스뷰티 | 상세페이지·SNS·공구 카피 (감성·신뢰·체험, 화장품법 준수) |
| brandg-agent | [`brandg-agent.md`](brandg-agent.md) | BrandG | AI 제안서·스레드·빌드로그 (AI Native·개발자식 톤) |
| fatept-agent | [`fatept-agent.md`](fatept-agent.md) | 운명PT | 외부안전/내부전환 분리 자기이해 콘텐츠 |
| lecture-agent | [`lecture-agent.md`](lecture-agent.md) | AI강의 (`PART_OF` BrandG) | 공공기관·소상공인 교안/실습/강의 대본 |

### 담당 프로젝트 매핑

- 무비지나 → `movie-gina-agent` (팬덤굿즈와 `SUPPORTS`/`DEPENDS_ON` 연동)
- 지나스뷰티 → `beauty-agent`
- BrandG → `brandg-agent` (보안운영 `USED_BY` 연동)
- 운명PT → `fatept-agent` (harness CONTENT_POLICY `DEPENDS_ON`)
- AI강의 → `lecture-agent` (`PART_OF` BrandG)

---

## 공통 실행 원칙 (전 프로젝트 에이전트)

1. **G-Wiki 내부 Context 우선** — 일반론보다 `sources`/`distillations`/`insights`/`cases`/`procedures` 참조를 우선한다.
2. **ID 인용 의무** — 모든 출력에 참조한 `source`/`insight`/`procedure`(및 case/distillation)의 ID를 명시한다. 근거 없는 단정 금지.
3. **confidential 누출 금지** — 민감(confidential) 자료는 공개 산출물에 절대 노출하지 않는다. 실제 키/API/환경변수/고객정보/결제정보 출력 금지.
4. **공개 전 harness 검수** — 공개용 콘텐츠 생성 전 `harness/`의 Public Content Review 13항목을 적용한다.
5. **Placeholder 참조 명시** — 실제 자산 Ingest 전이므로, 현재 각 에이전트의 entity/insight/procedure 참조는 **placeholder 코드**이다. 자산 투입 후 실제 ID로 교체한다. (각 에이전트 frontmatter `ingest_status: pre-ingest`)

## 공통 제약

모든 에이전트는 `harness/`의 Forbidden 규칙을 준수한다.
원본 삭제·무단 push·배포·DB/환경변수 변경 금지.
