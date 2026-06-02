# ENTITY INDEX

전체 엔티티 인덱스.

_최종 갱신: 2026-06-02 (v0.4 — MG-04 무비지나 파일럿 Ingest)_

---

## 등록된 엔티티

| ID | name | entity_type | sensitivity | 관련 프로젝트 |
| --- | --- | --- | --- | --- |
| `ENT-20260602-001` | 4050 여성 | concept | public | 무비지나 |

---

## Type별 집계

| type | 수 |
| --- | --- |
| person | 0 |
| brand | 0 |
| product | 0 |
| project | 0 |
| channel | 0 |
| concept | 1 |

---

## 규칙

- 모든 엔티티는 등록 시 고유 ID(`ENT-NNN`)를 부여한다.
- `confidential` 엔티티는 본문에 민감정보를 직접 노출하지 않는다.
- 중복 엔티티는 Lint에서 병합하고 `aliases`로 흡수한다.
- Ingest 3단계(엔티티 추출)에서 이 인덱스를 갱신한다.
