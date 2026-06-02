# MASTER INDEX

G-Wiki 전체 마스터 인덱스. 모든 탐색의 시작점.

_최종 갱신: 2026-06-02 (v0.4.1 — cases/ 3분류 하위폴더 구축)_

---

## 폴더 맵

| 폴더 | 목적 | 문서 수 |
| --- | --- | --- |
| [`sources/`](../sources/) | 원본 자료 (불변) | 1 |
| [`distillations/`](../distillations/) | 정제 요약본 | 1 |
| [`entities/`](../entities/) | 엔티티 | 1 |
| [`insights/`](../insights/) | 통찰 (Claim 포함) | 1 |
| [`cases/`](../cases/) | 실제 사례 (success/failure/decision 하위분류) | 0 |
| [`cases/success/`](../cases/success/) | 성공 사례 — 왜 떴는가 | 0 |
| [`cases/failure/`](../cases/failure/) | 실패 사례 — 왜 망했는가 | 0 |
| [`cases/decision/`](../cases/decision/) | 의사결정 — 왜 결정했는가 | 0 |
| [`procedures/`](../procedures/) | 절차 | 1 |
| [`projects/`](../projects/) | 프로젝트 히스토리 | 0 |
| [`harness/`](../harness/) | 규칙·정책·검수 기준 | 1 |
| [`agents/`](../agents/) | 에이전트 정의 | 6 |
| [`indexes/`](.) | 인덱스 | 3 |
| [`logs/`](../logs/) | 로그 | 3 |

---

## 보조 인덱스

- [PROJECT_INDEX](PROJECT_INDEX.md) — 프로젝트별
- [ENTITY_INDEX](ENTITY_INDEX.md) — 엔티티별

---

## Knowledge Type 인덱스

| Type | 위치 | 등록 수 |
| --- | --- | --- |
| Source | `sources/` | 1 |
| Entity | `entities/` | 1 |
| Insight | `insights/` | 1 |
| Claim | `insights/` (`type: claim`) | 0 |
| Case | `cases/` | 0 |
| Procedure | `procedures/` | 1 |
| Distillation | `distillations/` | 1 |

---

## 갱신 규칙

Ingest 워크플로우의 7단계(인덱스 갱신)에서 이 표의 문서 수와 항목을 갱신한다.
신규 문서는 해당 Type 인덱스와 폴더 맵에 동시에 반영한다.
