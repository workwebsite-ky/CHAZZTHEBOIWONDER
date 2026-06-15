/* =====================================================================
   CHAZZ THE BOI WONDER — site interactions
   ===================================================================== */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    const pre = $('.preload');
    if (pre) setTimeout(() => pre.classList.add('done'), 350);
  });

  /* ---------- Year ---------- */
  $$('.js-year').forEach(el => (el.textContent = new Date().getFullYear()));

  /* ---------- Sticky nav ---------- */
  const nav = $('.nav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
    const top = $('.to-top');
    if (top) top.classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const toggle = $('.nav-toggle');
  const links = $('.nav-links');
  if (toggle && links) {
    const close = () => { toggle.classList.remove('open'); links.classList.remove('open'); document.body.style.overflow = ''; };
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    $$('a', links).forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  const counters = $$('[data-count]');
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const val = target * ease;
      el.textContent = (target % 1 === 0 ? Math.floor(val) : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = (target % 1 === 0 ? target : target.toFixed(1)) + suffix;
    };
    requestAnimationFrame(step);
  };
  if (counters.length) {
    if ('IntersectionObserver' in window && !reduceMotion) {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) { runCounter(en.target); cio.unobserve(en.target); } });
      }, { threshold: 0.6 });
      counters.forEach(c => cio.observe(c));
    } else {
      counters.forEach(c => (c.textContent = c.dataset.count + (c.dataset.suffix || '')));
    }
  }

  /* ---------- FAQ accordion ---------- */
  $$('.acc').forEach(acc => {
    const q = $('.acc-q', acc);
    const a = $('.acc-a', acc);
    q.addEventListener('click', () => {
      const open = acc.classList.contains('open');
      $$('.acc').forEach(o => { o.classList.remove('open'); $('.acc-a', o).style.maxHeight = null; });
      if (!open) { acc.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  /* ---------- Active nav link by page ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html')) a.classList.add('active');
  });

  /* ---------- Contact form (mailto fallback) ---------- */
  const form = $('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#name', form).value.trim();
      const email = $('#email', form).value.trim();
      const msg = $('#message', form).value.trim();
      const subject = encodeURIComponent(`Booking / Inquiry from ${name || 'a fan'}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
      window.location.href = `mailto:boiwonderent@gmail.com?subject=${subject}&body=${body}`;
      const note = $('.form-status');
      if (note) note.textContent = 'Opening your email app… if nothing happens, email boiwonderent@gmail.com directly.';
    });
  }

  /* ---------- Hero rain canvas (light, atmospheric) ---------- */
  const canvas = $('#rain');
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let w, h, drops, raf;
    const COLORS = ['rgba(227,178,60,', 'rgba(246,211,114,', 'rgba(60,120,235,'];
    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      const count = Math.min(150, Math.floor(w / 9));
      drops = Array.from({ length: count }, () => newDrop());
    };
    const newDrop = () => ({
      x: Math.random() * w,
      y: Math.random() * -h,
      len: 10 + Math.random() * 22,
      sp: 4 + Math.random() * 7,
      a: 0.08 + Math.random() * 0.32,
      c: COLORS[Math.random() < 0.85 ? (Math.random() < 0.5 ? 0 : 1) : 2],
    });
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of drops) {
        ctx.strokeStyle = d.c + d.a + ')';
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 4, d.y + d.len);
        ctx.stroke();
        d.y += d.sp;
        d.x -= 0.8;
        if (d.y > h) Object.assign(d, newDrop(), { y: -20 });
      }
      raf = requestAnimationFrame(tick);
    };
    resize();
    tick();
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
    // pause when tab hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else tick();
    });
  }

  /* ---------- Subtle parallax on hero disc ---------- */
  const disc = $('.hero-disc');
  if (disc && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      disc.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive: true });
  }
})();
