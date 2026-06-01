# distillations/

**정제 요약본 저장소**

`sources/`의 원본을 정제한 요약본을 보관한다. 원본은 절대 변경하지 않는다.

## 규칙

- 모든 정제본은 원본(`sources/`)을 `CREATED_FROM`으로 참조한다.
- 추론과 사실을 분리해 표기한다. (사실 / 해석 / 추론)
- 근거 없는 판단을 추가하지 않는다.
- 고객 PII를 비식별 정제하여 보관할 때는 `sensitivity: confidential`로 분류한다. → [`../harness/README.md`](../harness/README.md)

## 템플릿 (frontmatter 필수 / MUST)

ID는 [`../README.md`](../README.md)의 통일 채번 규칙(`{TYPE}-YYYYMMDD-NNN`)을 따른다.

```yaml
id: DIST-YYYYMMDD-NNN       # 필수. 예: DIST-20260601-001
type: Distillation          # 필수
source: sources/SRC-...      # 필수
sensitivity: public | internal | confidential   # 필수
project: [...]               # 필수(해당 시)
relations:                   # 필수(최소 1개)
  - CREATED_FROM: sources/SRC-...
```

### 본문 구조

- **요약** — 핵심 3~5줄
- **사실(Facts)** — 원본에서 직접 확인 가능한 내용
- **해석(Interpretation)** — 정제 과정의 해석
- **추론(Inference)** — 명시적으로 분리된 추론
