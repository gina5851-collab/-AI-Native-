# Ginas · Gemini로 만드는 3D 인터랙티브 랜딩 페이지

유튜브 대본을 바탕으로 만든 **3D 인터랙티브 랜딩 페이지 데모**입니다.
Spline · Pinterest · Google AI Studio(Gemini) 세 가지 도구로 3D 웹을 만드는
워크플로우를 소개합니다.

## 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 페이지 구조 (히어로 · 도구 · 제작 과정 · 레퍼런스 · 꿀팁 · CTA) |
| `styles.css` | 다크 테마, 오로라 배경, 반응형 레이아웃, 등장 애니메이션 |
| `script.js` | 마우스를 따라 움직이는 3D 오브, 스크롤 리빌, 베타 신청 폼 |

## 주요 특징

- 🖱️ **마우스 인터랙션** — 히어로의 3D 오브가 시선(커서)을 따라 회전
- 🌈 **오로라 그라데이션 배경** + 그리드 오버레이로 꽉 찬 공간감
- 📜 **4단계 워크플로우** 타임라인과 실제 Gemini 프롬프트 예시
- 🎨 **4가지 레퍼런스 쇼케이스** (옵티머스 · Vision OS · 크립토 · 네오브루탈리즘)
- 📱 완전 반응형 + `prefers-reduced-motion` 접근성 대응

## 실제 Spline 3D 연결하기

기본 상태에서는 CSS로 만든 인터랙티브 3D 오브가 표시됩니다(폴백).
영상에서처럼 **실제 Spline 씬**을 넣으려면:

1. [Spline](https://spline.design) 커뮤니티에서 원하는 3D를 **Remix**
2. **Export → Public URL → Copy iframe(embed)** 로 임베드 URL 복사
3. `index.html`의 `#heroVisual` 요소 `data-spline-url=""` 안에 그 URL을 붙여넣기

```html
<div class="hero-visual" id="heroVisual"
     data-spline-url="https://my.spline.design/your-scene-id/">
```

URL을 넣으면 Spline iframe이 로드되며 CSS 오브는 자동으로 숨겨집니다.

## 실행

별도 빌드 없이 정적 파일입니다. 브라우저로 `index.html`을 열거나:

```bash
python3 -m http.server 8000
# http://localhost:8000 접속
```

## 출처

Ginas · Gemini · Spline · Pinterest로 만든 3D 웹 데모. Made with ❤️
