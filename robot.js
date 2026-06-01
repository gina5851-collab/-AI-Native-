// 자체 3D 캐릭터 봇 "HACHUPING" 스타일 (Three.js).
// 핑크 하트 테마의 큐티 봇 — 외부 씬 없이 코드로 직접 생성, 마우스를 따라 고개를 돌립니다.
// WebGL 미지원/로드 실패 시 CSS 오브(orb)가 폴백으로 유지됩니다.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const mount = document.getElementById('robotMount');
const visual = document.getElementById('heroVisual');
const hint = document.querySelector('.orb-hint');

if (mount) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  try {
    initBot();
  } catch (err) {
    console.warn('3D bot init failed, keeping fallback orb:', err);
  }

  // 하트 지오메트리 (가슴/티아라/헤드폰/안테나에 사용)
  function makeHeartGeo(depth = 0.14) {
    const s = new THREE.Shape();
    s.moveTo(0, 0.3);
    s.bezierCurveTo(0, 0.3, -0.3, 0.8, -0.6, 0.3);
    s.bezierCurveTo(-0.9, -0.2, -0.3, -0.5, 0, -0.85);
    s.bezierCurveTo(0.3, -0.5, 0.9, -0.2, 0.6, 0.3);
    s.bezierCurveTo(0.3, 0.8, 0, 0.3, 0, 0.3);
    const g = new THREE.ExtrudeGeometry(s, {
      depth, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 2, curveSegments: 24,
    });
    g.center();
    return g;
  }

  function initBot() {
    const getW = () => mount.clientWidth || 480;
    const getH = () => mount.clientHeight || 480;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(getW(), getH());
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, getW() / getH(), 0.1, 100);
    camera.position.set(0, 0, 9);

    // ---- 조명 (핑크 톤) ----
    scene.add(new THREE.AmbientLight(0xffd9ec, 0.85));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(2, 5, 6);
    scene.add(key);
    const pink = new THREE.PointLight(0xff5fa0, 45, 40);
    pink.position.set(-5, 2, 4);
    scene.add(pink);
    const warm = new THREE.PointLight(0xffe0f0, 30, 40);
    warm.position.set(5, -1, 4);
    scene.add(warm);

    // ---- 재질 ----
    const shell = new THREE.MeshStandardMaterial({ color: 0xfff0f6, metalness: 0.35, roughness: 0.22 });
    const pinkMat = new THREE.MeshStandardMaterial({ color: 0xff9ec9, metalness: 0.4, roughness: 0.22 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0xff8cc4, metalness: 0.25, roughness: 0.18 });
    const deepPink = new THREE.MeshStandardMaterial({ color: 0xff5fa0, metalness: 0.4, roughness: 0.25 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xffd06b, metalness: 1.0, roughness: 0.25 });
    const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.1, roughness: 0.15 });
    const iris = new THREE.MeshStandardMaterial({ color: 0xff4f9d, emissive: 0xff2f86, emissiveIntensity: 1.6, roughness: 0.2 });
    const heartMat = new THREE.MeshStandardMaterial({ color: 0xff5fa0, emissive: 0xff3f90, emissiveIntensity: 2.4, metalness: 0.3, roughness: 0.35 });
    const blushMat = new THREE.MeshStandardMaterial({ color: 0xff7fb0, transparent: true, opacity: 0.55, roughness: 0.5 });

    const bot = new THREE.Group();
    scene.add(bot);

    // ============ 머리 (마우스 추적) ============
    const headG = new THREE.Group();
    headG.position.y = 0.7;
    bot.add(headG);

    const head = new THREE.Mesh(new THREE.SphereGeometry(1.3, 64, 64), shell);
    head.scale.set(1.05, 0.98, 0.96);
    headG.add(head);

    // 앞머리(포레록)
    const bang = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 32), hairMat);
    bang.scale.set(1.2, 0.8, 0.6);
    bang.position.set(0, 0.78, 0.85);
    headG.add(bang);

    // 큰 눈 (흰자 + 핑크 동공 + 하이라이트)
    function makeEye(x) {
      const g = new THREE.Group();
      const w = new THREE.Mesh(new THREE.SphereGeometry(0.32, 32, 32), eyeWhite);
      w.scale.set(0.85, 1.15, 0.6);
      g.add(w);
      const ir = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 32), iris);
      ir.position.set(0, -0.02, 0.18);
      ir.scale.set(0.85, 1.0, 0.7);
      g.add(ir);
      const hl = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 16), eyeWhite);
      hl.position.set(-0.08, 0.12, 0.32);
      g.add(hl);
      g.position.set(x, 0.02, 1.02);
      g.rotation.y = x > 0 ? -0.18 : 0.18;
      return g;
    }
    headG.add(makeEye(-0.42));
    headG.add(makeEye(0.42));

    // 볼터치
    const blL = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 24), blushMat);
    blL.scale.set(1, 0.6, 0.4); blL.position.set(-0.62, -0.32, 0.98); headG.add(blL);
    const blR = blL.clone(); blR.position.x = 0.62; headG.add(blR);

    // ============ 티아라 (왕관 + 하트 보석) ============
    const tiara = new THREE.Group();
    tiara.position.set(0, 1.02, 0.35);
    tiara.rotation.x = -0.25;
    headG.add(tiara);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.06, 16, 40, Math.PI), gold);
    band.rotation.z = Math.PI;
    tiara.add(band);
    [-0.42, 0, 0.42].forEach((px, i) => {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08, i === 1 ? 0.34 : 0.24, 16), gold);
      spike.position.set(px, i === 1 ? 0.2 : 0.12, 0);
      tiara.add(spike);
    });
    const tiaraHeart = new THREE.Mesh(makeHeartGeo(0.1), heartMat);
    tiaraHeart.scale.setScalar(0.34);
    tiaraHeart.position.set(0, 0.16, 0.08);
    tiara.add(tiaraHeart);

    // ============ 안테나 (하트 끝) ============
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.55, 12), gold);
    ant.position.set(0.5, 1.4, -0.1); ant.rotation.z = -0.3;
    headG.add(ant);
    const antHeart = new THREE.Mesh(makeHeartGeo(0.08), heartMat);
    antHeart.scale.setScalar(0.26);
    antHeart.position.set(0.66, 1.66, -0.1);
    headG.add(antHeart);

    // ============ 헤드폰 (귀 + 하트) ============
    function makeEar(side) {
      const g = new THREE.Group();
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.28, 32), pinkMat);
      cup.rotation.z = Math.PI / 2;
      g.add(cup);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.05, 16, 32), gold);
      rim.rotation.y = Math.PI / 2;
      rim.position.x = side * 0.16;
      g.add(rim);
      const hrt = new THREE.Mesh(makeHeartGeo(0.06), heartMat);
      hrt.scale.setScalar(0.3);
      hrt.position.set(side * 0.2, 0, 0);
      hrt.rotation.y = side * Math.PI / 2;
      g.add(hrt);
      g.position.set(side * 1.28, -0.05, 0);
      return g;
    }
    headG.add(makeEar(-1));
    headG.add(makeEar(1));

    // ============ 양갈래 트윈테일 ============
    const tails = [];
    function makeTail(side) {
      const g = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.07, 16, 32), gold);
      ring.rotation.y = Math.PI / 2;
      g.add(ring);
      const b1 = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 32), hairMat);
      b1.position.set(side * 0.35, -0.1, 0);
      g.add(b1);
      const cap = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 1.1, 8, 24), hairMat);
      cap.position.set(side * 0.62, -1.05, 0);
      cap.rotation.z = side * 0.35;
      g.add(cap);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), hairMat);
      tip.position.set(side * 0.95, -1.85, 0);
      g.add(tip);
      // 하트 장식
      const hd = new THREE.Mesh(makeHeartGeo(0.06), heartMat);
      hd.scale.setScalar(0.22);
      hd.position.set(side * 0.4, -0.1, 0.36);
      g.add(hd);
      g.position.set(side * 1.2, 0.5, -0.2);
      headG.add(g);
      tails.push({ g, side });
    }
    makeTail(-1);
    makeTail(1);

    // ============ 몸통 ============
    const bodyG = new THREE.Group();
    bodyG.position.y = -1.0;
    bot.add(bodyG);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 0.4, 24), shell);
    neck.position.y = 0.55;
    bodyG.add(neck);

    const torso = new THREE.Mesh(new THREE.SphereGeometry(0.82, 48, 48), shell);
    torso.scale.set(1.0, 0.95, 0.85);
    torso.position.y = -0.1;
    bodyG.add(torso);

    // 가슴 하트
    const chest = new THREE.Mesh(makeHeartGeo(0.12), heartMat);
    chest.scale.setScalar(0.42);
    chest.position.set(0, 0.05, 0.72);
    bodyG.add(chest);

    // 치마(스커트)
    const skirt = new THREE.Mesh(new THREE.ConeGeometry(1.05, 0.8, 32, 1, true), pinkMat);
    skirt.position.y = -0.85;
    bodyG.add(skirt);
    const skirtTrim = new THREE.Mesh(new THREE.TorusGeometry(1.02, 0.07, 16, 40), deepPink);
    skirtTrim.rotation.x = Math.PI / 2;
    skirtTrim.position.y = -1.22;
    bodyG.add(skirtTrim);

    // 팔 (한쪽은 인사하듯 듦)
    const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.5, 6, 16), pinkMat);
    armL.position.set(-0.9, 0.05, 0.1); armL.rotation.z = 0.5;
    bodyG.add(armL);
    const armR = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.5, 6, 16), pinkMat);
    armR.position.set(0.92, 0.25, 0.1); armR.rotation.z = -1.1;
    bodyG.add(armR);
    const handR = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 24), shell);
    handR.position.set(1.2, 0.62, 0.1);
    bodyG.add(handR);

    bot.scale.setScalar(0.92);

    // ---- 마우스 추적 ----
    let targetRX = 0, targetRY = 0;
    if (!reduceMotion) {
      window.addEventListener('pointermove', (e) => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        targetRY = nx * 0.7;
        targetRX = ny * 0.4;
      }, { passive: true });
    }

    // ---- 애니메이션 ----
    const clock = new THREE.Clock();
    let revealed = false;
    function reveal() {
      if (revealed) return;
      revealed = true;
      if (visual) visual.classList.add('scene-ready');
      if (hint) hint.textContent = '하추핑이 마우스를 따라봐요 ♥';
    }

    function tick() {
      const t = clock.getElapsedTime();
      bot.position.y = Math.sin(t * 1.2) * 0.1;
      headG.rotation.y += (targetRY - headG.rotation.y) * 0.08;
      headG.rotation.x += (targetRX - headG.rotation.x) * 0.08;
      bot.rotation.y += (targetRY * 0.3 - bot.rotation.y) * 0.05;
      // 트윈테일 살랑임
      tails.forEach(({ g, side }, i) => {
        g.rotation.z = Math.sin(t * 1.6 + i) * 0.12 * side + side * 0.1;
      });
      // 손 흔들기
      handR.position.x = 1.2 + Math.sin(t * 4) * 0.06;
      armR.rotation.z = -1.1 + Math.sin(t * 4) * 0.12;
      // 하트/눈 반짝임
      const pulse = 2.2 + Math.sin(t * 3) * 0.7;
      heartMat.emissiveIntensity = pulse;
      iris.emissiveIntensity = 1.4 + Math.sin(t * 3) * 0.4;

      renderer.render(scene, camera);
      reveal();
      requestAnimationFrame(tick);
    }
    tick();

    window.addEventListener('resize', () => {
      camera.aspect = getW() / getH();
      camera.updateProjectionMatrix();
      renderer.setSize(getW(), getH());
    });
  }
}
