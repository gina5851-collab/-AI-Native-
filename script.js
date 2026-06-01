// Nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Mouse-driven 3D tilt on the hero orb (Spline-like interaction)
const orb = document.getElementById('orb');
const hero = document.getElementById('hero');
if (orb && hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let raf = null;
  let tx = 0, ty = 0; // target angles
  let cx = 0, cy = 0; // current angles

  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tx = py * -22;
    ty = px * 28;
    if (!raf) raf = requestAnimationFrame(animate);
  });
  hero.addEventListener('mouseleave', () => {
    tx = 0; ty = 0;
    if (!raf) raf = requestAnimationFrame(animate);
  });

  function animate() {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    orb.style.transform = `perspective(900px) rotateX(${cx}deg) rotateY(${cy}deg)`;
    if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
      raf = requestAnimationFrame(animate);
    } else {
      raf = null;
    }
  }
}

// Subscribe form (demo)
function handleSubscribe(e) {
  e.preventDefault();
  const input = document.getElementById('email');
  const note = document.getElementById('ctaNote');
  const value = (input.value || '').trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (!ok) {
    note.textContent = '올바른 이메일 주소를 입력해 주세요.';
    note.style.color = '#ff5d8f';
    return false;
  }
  note.textContent = `신청 완료! ${value} 로 베타 링크를 보내드릴게요. 🚀`;
  note.style.color = '';
  input.value = '';
  return false;
}
window.handleSubscribe = handleSubscribe;
