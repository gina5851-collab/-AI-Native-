# insights/

**통찰(Insight) 저장소**

지나스의 경험·실패에서 도출된 통찰을 보관한다.
**Claim(주장)은 Insight의 하위 형태**이므로 전용 폴더 없이 이 폴더에서 `type: claim`으로 구분한다.

## 규칙

- 모든 통찰은 근거(source 또는 case)를 `SUPPORTS` 관계로 연결한다.
- 근거 없는 판단은 저장하지 않는다.
- 통찰을 뒤집는 사례가 나오면 `REFUTES`로 연결하고 폐기하지 않는다.
- 실제 사례는 `cases/`에 두고 통찰은 그 사례를 `SUPPORTS`로 참조한다. (사례 ≠ 통찰, 분리)
- `type`은 `insight`(통찰) 또는 `claim`(주장) 중 하나로 명시한다.

## 템플릿 (frontmatter 필수 / MUST)

ID는 [`../README.md`](../README.md)의 통일 채번 규칙(`{TYPE}-YYYYMMDD-NNN`)을 따른다.

```yaml
id: INS-YYYYMMDD-NNN        # 필수. 예: INS-20260601-001
type: insight | claim        # 필수 (claim = Insight의 하위 형태)
confidence: low | medium | high   # 필수
sensitivity: public | internal | confidential   # 필수
project: [...]               # 필수(해당 시)
relations:                   # 필수(최소 1개 — 근거 연결)
  - SUPPORTS: insights/...
  - CREATED_FROM: sources/SRC-...
  - REFUTES: insights/...
```

### 본문 구조

- **통찰** — 한 문장 핵심
- **맥락** — 어떤 상황에서 도출되었나
- **근거** — 뒷받침하는 사례/원본
- **적용 범위** — 일반화 가능 범위와 한계
