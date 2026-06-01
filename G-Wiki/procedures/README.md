# procedures/

**절차(Procedure) 저장소**

반복 가능한 절차·워크플로우·체크리스트를 보관한다.

## 규칙

- 절차는 입력 → 단계 → 출력 → 검증으로 구성한다.
- 절차가 의존하는 다른 절차/문서는 `DEPENDS_ON`으로 연결한다.
- 실행 사례는 `Case`로 별도 기록하고 `USED_BY`로 연결한다.

## 템플릿 (frontmatter 필수 / MUST)

ID는 [`../README.md`](../README.md)의 통일 채번 규칙(`{TYPE}-YYYYMMDD-NNN`)을 따른다.

```yaml
id: PROC-YYYYMMDD-NNN       # 필수. 예: PROC-20260601-001
type: Procedure              # 필수
sensitivity: public | internal | confidential   # 필수
project: [...]               # 필수(해당 시)
relations:                   # 필수(최소 1개)
  - DEPENDS_ON: procedures/...
  - USED_BY: projects/...
```

### 본문 구조

- **목적**
- **입력 / 사전 조건**
- **단계(Step)** — 순서가 있는 실행 단계
- **출력 / 완료 기준**
- **검증 / 체크리스트**
