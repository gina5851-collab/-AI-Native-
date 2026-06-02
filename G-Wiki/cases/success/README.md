# cases/success/

**성공 사례 (case_type: success)**

성과가 확인된 콘텐츠·프로젝트 사례를 보관한다. **"왜 떴는가"** 를 자산화한다.

## 규칙

- `case_type: success` 필수. ID는 `CASE-YYYYMMDD-NNN`.
- 성과 지표(조회수·완주율·댓글수·전환 등)를 본문에 근거로 기록한다.
- 성과 근거가 되는 통찰을 `SUPPORTS`로 `insights/`에 연결한다.
- 원본은 `CREATED_FROM`으로 `sources/`에 연결한다.

## 본문 구조

- **상황** — 어떤 콘텐츠/프로젝트였나
- **행동/시도** — 무엇을 했나 (적용한 procedure 등)
- **결과(성과)** — 지표 (사실)
- **왜 떴는가(Why)** — 성공 요인 분석 (핵심 자산)
- **재사용 학습** — 통찰화 (→ `insights/`)
