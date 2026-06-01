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

## 공통 제약

모든 에이전트는 `harness/`의 Forbidden 규칙을 준수한다.
원본 삭제·무단 push·배포·DB/환경변수 변경 금지.
