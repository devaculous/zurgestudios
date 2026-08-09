(() => {
  "use strict";

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  // Loader
  window.addEventListener("load", () => {
    const loader = $("#loader");
    if (!loader) return;
    setTimeout(() => loader.classList.add("hidden"), 950);
  });

  // Custom cursor
  const cursor = $("#cursor");
  const ring = $("#cursor-ring");
  if (cursor && ring && window.matchMedia("(pointer:fine)").matches) {
    let mx = innerWidth / 2, my = innerHeight / 2;
    let rx = mx, ry = my;

    window.addEventListener("pointermove", e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    }, { passive: true });

    const tick = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(tick);
    };
    tick();
  }

  // Navigation state
  const nav = $("#nav");
  const updateNav = () => {
    if (nav) nav.classList.toggle("solid", window.scrollY > 30);
    const prog = $("#scroll-prog");
    if (prog) {
      const max = document.documentElement.scrollHeight - innerHeight;
      prog.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    }
  };
  addEventListener("scroll", updateNav, { passive: true });
  updateNav();

  // Mobile menu
  const burger = $(".burger");
  const menu = $(".mob-menu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = burger.classList.toggle("open");
      menu.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("menu-open", open);
    });
    $$(".mob-menu a").forEach(a => a.addEventListener("click", () => {
      burger.classList.remove("open");
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      document.body.classList.remove("menu-open");
    }));
  }

  // Reveal-on-scroll
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("visible"));
  }

  // Subtle hero parallax
  const heroImage = $(".hero-img-wrap img");
  if (heroImage && window.matchMedia("(prefers-reduced-motion:no-preference)").matches) {
    addEventListener("pointermove", e => {
      if (innerWidth < 1100) return;
      const x = (e.clientX / innerWidth - .5) * 6;
      const y = (e.clientY / innerHeight - .5) * 4;
      heroImage.style.transform = `scale(1.04) translate(${x}px, ${y}px)`;
    }, { passive: true });
  }
})();
