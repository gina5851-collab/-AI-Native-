# cases/decision/

**의사결정 사례 (case_type: decision)**

중요한 의사결정을 보관한다. **"왜 그렇게 결정했는가"** 를 자산화한다.
(← GINAS_SECOND_BRAIN의 DECISION_LOG 자산화 대상)

## 규칙

- `case_type: decision` 필수. ID는 `CASE-YYYYMMDD-NNN`.
- "왜 그렇게 정했는가"를 남겨 미래의 판단 비용을 줄인다.
- 결정이 의존한 통찰/사례를 `DEPENDS_ON` 또는 `SUPPORTS`로 연결한다.
- 원본(결정 메모)은 `CREATED_FROM`으로 `sources/`에 연결한다.

## 본문 구조

- **배경/문제** — 어떤 상황에서 결정이 필요했나
- **검토한 선택지** — 후보들
- **결정** — 무엇을 택했나 (사실)
- **왜 그렇게 결정했는가(Why)** — 결정 이유 (핵심 자산)
- **영향 범위/후속** — 결정의 파급 (→ 관련 project/insight)
