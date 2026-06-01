// 자체 3D 로봇 (Three.js). 외부 Spline 씬에 의존하지 않고 코드 안에서 직접 만들어
// 렌더링하므로 항상 표시되며, 마우스를 따라 고개를 돌립니다.
// Three.js 로드 실패 / WebGL 미지원 시에는 CSS 오브(orb) 폴백이 그대로 유지됩니다.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const mount = document.getElementById('robotMount');
const visual = document.getElementById('heroVisual');
const hint = document.querySelector('.orb-hint');

if (mount) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  try {
    initRobot();
  } catch (err) {
    // 실패하면 폴백 오브 유지
    console.warn('3D robot init failed, keeping fallback orb:', err);
  }

  function initRobot() {
    const getW = () => mount.clientWidth || 480;
    const getH = () => mount.clientHeight || 480;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(getW(), getH());
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, getW() / getH(), 0.1, 100);
    camera.position.set(0, 0.2, 8.4);

    // ---- 조명 (테마 컬러: 보라/민트) ----
    scene.add(new THREE.AmbientLight(0x99a3ff, 0.75));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(3, 5, 6);
    scene.add(key);
    const purple = new THREE.PointLight(0x7c5cff, 45, 30);
    purple.position.set(-5, 2.5, 3);
    scene.add(purple);
    const teal = new THREE.PointLight(0x34d6c8, 30, 30);
    teal.position.set(5, -1.5, 3.5);
    scene.add(teal);

    // ---- 재질 ----
    const shell = new THREE.MeshStandardMaterial({ color: 0xeef0fb, metalness: 0.55, roughness: 0.3 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x12121d, metalness: 0.9, roughness: 0.18 });
    const accent = new THREE.MeshStandardMaterial({ color: 0x7c5cff, emissive: 0x7c5cff, emissiveIntensity: 2.4, metalness: 0.3, roughness: 0.4 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xb9f3ff, emissive: 0x34d6c8, emissiveIntensity: 3.2 });

    const robot = new THREE.Group();
    robot.position.y = 0.25;
    scene.add(robot);

    // ---- 머리 (마우스를 따라 회전) ----
    const headG = new THREE.Group();
    robot.add(headG);

    const head = new THREE.Mesh(new THREE.SphereGeometry(1.3, 64, 64), shell);
    head.scale.set(1.06, 0.94, 0.96);
    headG.add(head);

    // 얼굴 바이저 (어두운 곡면 패널)
    const visor = new THREE.Mesh(new THREE.SphereGeometry(1.02, 64, 64), dark);
    visor.scale.set(1.0, 0.5, 0.55);
    visor.position.set(0, 0.02, 0.66);
    headG.add(visor);

    // 두 눈 (빛나는 점)
    const eyeGeo = new THREE.SphereGeometry(0.13, 24, 24);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.34, 0.06, 1.08);
    headG.add(eyeL);
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.34, 0.06, 1.08);
    headG.add(eyeR);

    // 귀 (헤드폰 컵)
    const earGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.26, 32);
    const earL = new THREE.Mesh(earGeo, dark);
    earL.rotation.z = Math.PI / 2;
    earL.position.set(-1.18, 0, 0);
    headG.add(earL);
    const earR = new THREE.Mesh(earGeo, dark);
    earR.rotation.z = Math.PI / 2;
    earR.position.set(1.18, 0, 0);
    headG.add(earR);
    // 귀 액센트 링
    const ringGeo = new THREE.TorusGeometry(0.22, 0.05, 16, 32);
    const ringL = new THREE.Mesh(ringGeo, accent);
    ringL.rotation.y = Math.PI / 2;
    ringL.position.set(-1.32, 0, 0);
    headG.add(ringL);
    const ringR = new THREE.Mesh(ringGeo, accent);
    ringR.rotation.y = Math.PI / 2;
    ringR.position.set(1.32, 0, 0);
    headG.add(ringR);

    // 안테나
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.55, 16), shell);
    antenna.position.set(0, 1.32, 0);
    headG.add(antenna);
    const antTip = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 24), accent);
    antTip.position.set(0, 1.64, 0);
    headG.add(antTip);

    // ---- 몸통 ----
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.92, 48, 48), shell);
    body.scale.set(1.0, 0.85, 0.9);
    body.position.set(0, -1.75, 0.05);
    robot.add(body);

    // 가슴 코어 (빛남)
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 32), accent);
    core.position.set(0, -1.6, 0.72);
    robot.add(core);

    // 목
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.4, 0.4, 24), dark);
    neck.position.set(0, -1.0, 0);
    robot.add(neck);

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
      if (hint) hint.textContent = '로봇이 마우스를 따라옵니다 ↗';
    }

    function tick() {
      const t = clock.getElapsedTime();
      // 공중 부유
      robot.position.y = 0.25 + Math.sin(t * 1.2) * 0.09;
      // 머리가 마우스를 향해 부드럽게 회전
      headG.rotation.y += (targetRY - headG.rotation.y) * 0.08;
      headG.rotation.x += (targetRX - headG.rotation.x) * 0.08;
      // 몸도 살짝 따라감
      robot.rotation.y += (targetRY * 0.35 - robot.rotation.y) * 0.05;
      // 눈/코어 미세한 깜빡임
      const pulse = 2.6 + Math.sin(t * 3) * 0.6;
      eyeMat.emissiveIntensity = pulse + 0.4;

      renderer.render(scene, camera);
      reveal(); // 첫 프레임이 그려지면 폴백 오브 숨김
      requestAnimationFrame(tick);
    }
    tick();

    // ---- 리사이즈 대응 ----
    window.addEventListener('resize', () => {
      camera.aspect = getW() / getH();
      camera.updateProjectionMatrix();
      renderer.setSize(getW(), getH());
    });
  }
}
