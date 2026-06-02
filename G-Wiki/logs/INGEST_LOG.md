# INGEST LOG

자료 수집·처리 기록 (append-only).

Ingest 워크플로우: 원본 저장 → 요약 → 엔티티 추출 → 인사이트 추출 → 프로젝트 연결 → 위키 생성 → 인덱스 갱신 → 로그 기록

---

| date | source_id | title | project | sensitivity | distillation | entities | insights | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-06-01 | — | (G-Wiki 초기 구조 생성) | — | internal | — | 0 | 0 | bootstrap |
| 2026-06-02 | SRC-20260602-001 | 4050 여성 저격 캐릭터 해석형 5단계 플로우 (MG-04) | 무비지나 | internal | DIST-20260602-001 | 1 (ENT-...-001) | 1 (INS-...-001) | done — +PROC-20260602-001 |

---

_새 자료가 들어올 때마다 한 줄씩 추가한다. 기존 줄은 수정하지 않는다._
