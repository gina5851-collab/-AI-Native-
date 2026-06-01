# projects/

**프로젝트 히스토리 저장소**

각 활성 프로젝트의 히스토리·결정·맥락을 보관한다.

## 활성 프로젝트

| 코드 | 영역 | 폴더 | 관계 |
| --- | --- | --- | --- |
| 운명PT | AI 자기이해 리포트 | `운명PT/` | — |
| BrandG | AI 교육 및 퍼스널 브랜딩 | `BrandG/` | — |
| 지나스뷰티 | 4050 여성 뷰티 | `지나스뷰티/` | — |
| 무비지나 | 영상·서사 콘텐츠 (TV/영화·팬덤) | `무비지나/` | `SUPPORTS` → 팬덤굿즈 |
| 팬덤굿즈 | 미니 인형 사업 | `팬덤굿즈/` | `DEPENDS_ON` → 무비지나 |
| AI강의 | 공공기관·소상공인 강의 | `AI강의/` | `PART_OF` → BrandG |
| 보안운영 | 공개/비공개 기준 | `보안운영/` | `USED_BY` → 전 프로젝트 |

## 규칙

- 프로젝트 문서는 [`../indexes/PROJECT_INDEX.md`](../indexes/PROJECT_INDEX.md)에 등록한다.
- 프로젝트 간 정보 오염(cross-contamination)을 금지한다. Lint에서 검사.
- 프로젝트 결정은 사실/근거와 함께 기록한다.

## 템플릿 (frontmatter 필수 / MUST)

ID는 [`../README.md`](../README.md)의 통일 채번 규칙(`{TYPE}-YYYYMMDD-NNN`)을 따른다.
**프로젝트 코드는 ID에 넣지 않고** `project:` 필드로만 표기한다. (재분류 시 ID 깨짐·프로젝트 오염 방지)

```yaml
id: PRJ-YYYYMMDD-NNN        # 필수. 예: PRJ-20260601-001
type: Project                # 필수
project: 운명PT | BrandG | 지나스뷰티 | 무비지나 | 팬덤굿즈 | AI강의 | 보안운영   # 필수
status: active | paused | archived   # 필수
sensitivity: public | internal | confidential   # 필수
relations:                   # 필수(최소 1개)
  - PART_OF: projects/...
  - USED_BY: ...
```
