# cases/

**사례(Case) 저장소**

지나스의 실제 사례를 보관한다. **"왜 실패했는가 / 왜 성공했는가 / 왜 그렇게 결정했는가"** —
결과가 아니라 **판단 과정**을 자산화하는 G-Wiki의 핵심 폴더다.

## 사례 유형 (case_type)

| case_type | 저장 위치 | 설명 |
| --- | --- | --- |
| success | `cases/success/` | 성공 사례 — "왜 떴는가" |
| failure | `cases/failure/` | 실패·시행착오 — "왜 망했는가" (← FAILURE_LOG 자산화) |
| decision | `cases/decision/` | 의사결정 — "왜 결정했는가" (← DECISION_LOG 자산화) |
| lecture | `cases/` (메타) | 강의 사례 (AI강의) — `case_type`으로만 구분 |
| fandom | `cases/` (메타) | 팬덤 사례 (무비지나·팬덤굿즈) — `case_type`으로만 구분 |
| customer | `cases/` (메타) | 고객 사례 (비식별 필수) — `case_type`으로만 구분 |

### 분류 구조 (v0.4+)

- **success / failure / decision** → 물리 하위폴더로 분리한다. (지나스 자산의 핵심 = "왜")
  - `cases/success/` · `cases/failure/` · `cases/decision/`
- **lecture / fandom / customer** → 전용 폴더 없이 `cases/` 루트에 두고 `case_type` 메타로 구분한다.
  (양이 누적되면 추후 하위폴더로 승격 검토)

## 규칙

- 모든 Case는 근거가 되는 원본(`sources/`)을 `CREATED_FROM`으로 연결한다.
- 모든 Case는 최소 1개의 통찰(`insights/`)을 `SUPPORTS`로, 또는 프로젝트(`projects/`)를 `PART_OF`로 연결한다.
- 고객 사례(`customer`)는 PII를 비식별 처리한다. → [`../harness/README.md`](../harness/README.md)의 *고객정보 충돌 해소 규칙*.
- 통찰을 뒤집는 사례는 `REFUTES`로 연결하고 폐기하지 않는다.

## 템플릿 (frontmatter 필수 / MUST)

ID는 [`../README.md`](../README.md)의 통일 채번 규칙(`{TYPE}-YYYYMMDD-NNN`)을 따른다.

```yaml
id: CASE-YYYYMMDD-NNN       # 필수. 예: CASE-20260601-001
type: Case                   # 필수
case_type: failure | success | decision | lecture | fandom | customer   # 필수
sensitivity: public | internal | confidential   # 필수
project: [...]               # 필수(해당 시)
relations:                   # 필수(최소 1개)
  - CREATED_FROM: sources/SRC-...
  - SUPPORTS: insights/INS-...
  - PART_OF: projects/...
```

### 본문 구조

- **상황(Context)** — 어떤 상황/프로젝트에서 발생했나
- **행동/시도(Action)** — 무엇을 했나
- **결과(Result)** — 무엇이 일어났나 (사실)
- **판단/원인(Why)** — 왜 그렇게 됐나 / 왜 그렇게 결정했나 (핵심 자산)
- **학습(Learning)** — 도출된 통찰 (→ `insights/`로 연결)
