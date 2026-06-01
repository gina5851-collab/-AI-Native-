# sources/

**원본 자료 저장소 — 불변(immutable)**

새로 들어온 모든 자료의 원본을 그대로 보존한다.

## 규칙

- 절대 삭제하지 않는다.
- 절대 수정하지 않는다. (오탈자 포함, 원본 그대로 유지)
- 정제·요약은 `distillations/`에서 별도로 수행한다.
- 모든 원본에는 고유 ID와 수집 메타데이터를 부여한다.
- **고객 개인정보(PII) 원본은 저장하지 않는다.** → [`../harness/README.md`](../harness/README.md)의 *고객정보 충돌 해소 규칙* 적용.

## 파일 메타데이터 (frontmatter 필수 / MUST)

모든 원본은 아래 frontmatter를 **반드시** 포함한다. ID는 [`../README.md`](../README.md)의 통일 채번 규칙(`{TYPE}-YYYYMMDD-NNN`)을 따른다.

```yaml
id: SRC-YYYYMMDD-NNN        # 필수. 예: SRC-20260601-001
title: 원본 제목            # 필수
type: Source                # 필수
captured_at: YYYY-MM-DD     # 필수
source_type: note | url | transcript | image | doc   # 필수
sensitivity: public | internal | confidential        # 필수
project: [운명PT | BrandG | 지나스뷰티 | 팬덤굿즈 | AI강의 | 보안운영]   # 필수(해당 시)
created_distillation: distillations/...               # 선택
```

## 관계

원본은 `CREATED_FROM` 관계의 시작점이다.
`distillations/`, `insights/`, `entities/` 문서가 이 원본을 참조한다.
