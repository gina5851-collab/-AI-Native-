# indexes/

**인덱스 저장소**

G-Wiki 전체를 탐색하기 위한 마스터 인덱스를 보관한다.

| 인덱스 | 설명 |
| --- | --- |
| [`MASTER_INDEX.md`](MASTER_INDEX.md) | 전체 문서·폴더 마스터 인덱스 |
| [`PROJECT_INDEX.md`](PROJECT_INDEX.md) | 프로젝트별 인덱스 |
| [`ENTITY_INDEX.md`](ENTITY_INDEX.md) | 엔티티 인덱스 |

## 규칙

- Ingest 워크플로우의 마지막에 인덱스를 갱신한다.
- Query 워크플로우는 항상 인덱스 탐색부터 시작한다.
