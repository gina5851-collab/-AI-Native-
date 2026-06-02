# cases/failure/

**실패 사례 (case_type: failure)**

기대에 못 미쳤거나 실패한 사례를 보관한다. **"왜 망했는가"** 를 자산화한다.
(← GINAS_SECOND_BRAIN의 FAILURE_LOG 자산화 대상)

## 규칙

- `case_type: failure` 필수. ID는 `CASE-YYYYMMDD-NNN`.
- 실패는 자산이다. 솔직하게 기록하고 폐기하지 않는다.
- 실패가 통찰을 뒤집으면 `REFUTES`로 해당 `insights/`에 연결한다.
- 원본은 `CREATED_FROM`으로 `sources/`에 연결한다.

## 본문 구조

- **상황** — 어떤 시도였나
- **행동/시도** — 무엇을 했나
- **결과** — 무엇이 잘못됐나 (사실)
- **왜 망했는가(Why)** — 원인 추정 (핵심 자산)
- **다음에 바꿀 것** — 학습 (→ `insights/`)
