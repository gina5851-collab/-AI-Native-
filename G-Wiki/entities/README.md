# entities/

**엔티티 저장소**

사람 · 브랜드 · 상품 · 프로젝트 · 채널 · 개념을 정규화해 보관한다.

## 엔티티 유형

| type | 예시 |
| --- | --- |
| person | 고객, 파트너, 인물 |
| brand | 지나스뷰티, BrandG |
| product | 상품, 굿즈, 리포트 상품 |
| project | 운명PT, AI강의 |
| channel | SNS, 유튜브, 강의 플랫폼 |
| concept | 방법론, 용어, 프레임워크 |

## 템플릿 (frontmatter 필수 / MUST)

ID는 [`../README.md`](../README.md)의 통일 채번 규칙(`{TYPE}-YYYYMMDD-NNN`)을 따른다.
엔티티 유형(person/brand/...)은 ID가 아니라 `entity_type` 필드로 표기한다.

```yaml
id: ENT-YYYYMMDD-NNN        # 필수. 예: ENT-20260601-001
name: 엔티티명               # 필수
type: Entity                 # 필수
entity_type: person | brand | product | project | channel | concept   # 필수
aliases: []                  # 필수(빈 배열 허용)
sensitivity: public | internal | confidential   # 필수
relations:                   # 필수(최소 1개)
  - USED_BY: projects/...
  - PART_OF: entities/...
```

## 규칙

- 모든 엔티티는 [`../indexes/ENTITY_INDEX.md`](../indexes/ENTITY_INDEX.md)에 등록한다.
- 개인정보를 포함한 엔티티는 `sensitivity: confidential`로 분류한다.
- 중복 엔티티는 Lint 시 병합하고 `aliases`로 흡수한다.
