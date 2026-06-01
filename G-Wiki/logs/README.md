# logs/

**로그 저장소**

G-Wiki의 모든 활동을 추적한다.

| 로그 | 설명 |
| --- | --- |
| [`INGEST_LOG.md`](INGEST_LOG.md) | 자료 수집·처리 기록 |
| [`QUERY_LOG.md`](QUERY_LOG.md) | 질의·답변 기록 |
| [`LINT_LOG.md`](LINT_LOG.md) | 정합성·보안 검사 기록 |

## 규칙

- 로그는 append-only. 과거 기록을 수정·삭제하지 않는다.
- 각 워크플로우의 마지막 단계에서 해당 로그를 기록한다.
