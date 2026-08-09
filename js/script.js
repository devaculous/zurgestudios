/* ═══════════════════════════════════════════════
   ERBIUM INTERACTIVE — SCRIPT
   ═══════════════════════════════════════════════ */

// ─── CUSTOM CURSOR ──────────────────────────────
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

if (cursor && ring) {
    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top  = my + 'px';
    });

    // Ring follows with lerp
    function lerpRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
        requestAnimationFrame(lerpRing);
    }
    lerpRing();

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        ring.style.opacity   = '0';
    });
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        ring.style.opacity   = '1';
    });
}

// ─── NAV SCROLL ─────────────────────────────────
const nav = document.getElementById('nav');
if (nav) {
    const onScroll = () => {
        nav.classList.toggle('solid', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ─── HERO PARALLAX ──────────────────────────────
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        heroBg.style.transform = `translateY(${y * 0.3}px)`;
    }, { passive: true });
}

// ─── SMOOTH ANCHOR SCROLL ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
