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

## Spline 3D 로봇

히어로 섹션에는 **실제 Spline 3D 로봇**(공식 공개 씬 NEXBOT — 마우스를 따라다님)이
`@splinetool/viewer` 웹 컴포넌트로 연결되어 있습니다. 씬이 로드되기 전이나
로드에 실패하면 CSS로 만든 오브(orb)가 자동 폴백으로 표시됩니다.

### 다른 로봇/장면으로 교체하기
1. [Spline](https://spline.design) 커뮤니티에서 원하는 3D를 **Remix**
2. **Export → Public URL** 에서 `scene.splinecode` 주소 복사
3. `index.html`의 `<spline-viewer>` 의 `url` 값만 교체:

```html
<spline-viewer
  url="https://prod.spline.design/내-씬-id/scene.splinecode"></spline-viewer>
```

> 기본 씬: `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode`

## 실행

별도 빌드 없이 정적 파일입니다. 브라우저로 `index.html`을 열거나:

```bash
python3 -m http.server 8000
# http://localhost:8000 접속
```

## 출처

Ginas · Gemini · Spline · Pinterest로 만든 3D 웹 데모. Made with ❤️
