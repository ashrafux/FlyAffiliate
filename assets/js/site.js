/* FlyAffiliate — site interactions (vanilla, no dependencies) */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* split giant words into letters for the slide-up reveal */
  $$('[data-split]').forEach(el => {
    const text = el.textContent.trim();
    el.style.setProperty('--len', text.length);
    el.textContent = '';
    [...text].forEach((c, i) => {
      const w = document.createElement('span'); w.className = 'chw';
      const s = document.createElement('span'); s.className = 'ch'; s.textContent = c === ' ' ? ' ' : c;
      s.style.setProperty('--i', i); if (c === '.' && i === text.length - 1) s.classList.add('ch--acc'); w.appendChild(s); el.appendChild(w);
    });
  });
  $$('[data-lines] .ln > span').forEach((s, i) => s.style.setProperty('--i', i));
  $$('[data-reveal-stagger]').forEach(g => [...g.children].forEach((c, i) => c.style.setProperty('--i', i)));
  $$('[data-reveal][data-delay]').forEach(el => el.style.setProperty('--i', el.dataset.delay));

  /* auto-reveal: every remaining component fades up out of a blur as it scrolls in,
     siblings one after another (same motion as the hand-tagged [data-reveal] blocks) */
  const TAGGED = '[data-reveal], [data-reveal-stagger], [data-split], [data-lines]';
  const SKIP = 'header, .hdr, .drawer, .uhero, .logos, .faq__a, [class*="__body"], [data-rule-panel], .ui, svg, button';
  const AUTO = 'h1, h2, h3, h4, h5, h6, p, ul, ol, table, form, figure, img, article, .btn, .ui, .tile, .scard, [class*="__card"], [class*="__row"], [class*="__tile"], [class*="__item"], [class*="__vis"], [class*="__img"], [class*="__thumb"]';
  $$('main ' + AUTO + ', footer ' + AUTO).forEach(el => {
    if (el.closest(TAGGED) || el.parentElement.closest(SKIP) || el.matches('header *, .drawer *')) return;
    const cs = getComputedStyle(el);
    if (cs.transform !== 'none' || cs.position === 'absolute' || cs.position === 'fixed' || cs.display === 'none') return;
    if (/^(UL|OL)$/.test(el.tagName) && el.children.length > 1) el.setAttribute('data-reveal-stagger', '');
    else el.setAttribute('data-reveal', '');
    el.dataset.rvAuto = '';
  });
  /* stagger auto-tagged siblings that share a parent */
  $$('[data-rv-auto][data-reveal]').forEach(el => {
    const sibs = [...el.parentElement.children].filter(c => c.hasAttribute('data-rv-auto') && c.hasAttribute('data-reveal'));
    if (sibs.length > 1 && !el.style.getPropertyValue('--i')) el.style.setProperty('--i', Math.min(sibs.indexOf(el), 6));
  });
  $$('[data-reveal-stagger]').forEach(g => [...g.children].forEach((c, i) => c.style.setProperty('--i', Math.min(i, 8))));

  /* reveal on scroll */
  const targets = $$('[data-reveal], [data-reveal-stagger], [data-split], [data-lines]');
  if (reduce || !('IntersectionObserver' in window)) targets.forEach(t => t.classList.add('is-in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { const t = e.target; t.classList.add('is-in'); io.unobserve(t); setTimeout(() => t.classList.add('rv-done'), 2200); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    targets.forEach(t => io.observe(t));
    /* the last rows of the footer can sit inside the IO bottom margin: reveal them once the page bottom is reached */
    const atEnd = () => { if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) targets.forEach(t => { if (!t.classList.contains('is-in')) { t.classList.add('is-in'); io.unobserve(t); setTimeout(() => t.classList.add('rv-done'), 2200); } }); };
    addEventListener('scroll', atEnd, { passive: true });
  }

  /* smart header: glass bar floats in after the hero, hides while scrolling down, returns on scroll up */
  const hdr = document.querySelector('.hdr');
  if (hdr) {
    let lastY = scrollY, ticking = false;
    const root = document.documentElement;
    const update = () => {
      ticking = false;
      const y = scrollY, h = root.scrollHeight - innerHeight;
      const float = y > (document.body.classList.contains('page-home') ? innerHeight * 0.6 : 80);
      const hide = float && y > lastY + 2 && y > 240 && !document.body.classList.contains('menu-open');
      const show = float && y < lastY - 2;
      hdr.classList.toggle('is-float', float);
      if (hide) hdr.classList.add('is-hidden'); else if (show || !float) hdr.classList.remove('is-hidden');
      root.style.setProperty('--hdr-off', float && !hdr.classList.contains('is-hidden') ? '68px' : '0px');
      lastY = y;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* magnetic buttons: drift a few px toward the pointer, spring back on leave */
  if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('.btn').forEach(b => {
      b.addEventListener('pointermove', e => {
        const r = b.getBoundingClientRect();
        b.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5) * 10 + 'px');
        b.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5) * 8 + 'px');
      });
      b.addEventListener('pointerleave', () => { b.style.removeProperty('--mx'); b.style.removeProperty('--my'); });
    });
  }

  /* pricing: annual / lifetime toggle */
  $$('[data-billing-toggle]').forEach(t => {
    const scope = document.querySelector('[data-billing-scope]');
    t.addEventListener('click', e => {
      const b = e.target.closest('[data-billing]'); if (!b || !scope) return;
      const mode = b.dataset.billing;
      scope.dataset.mode = mode;
      t.classList.toggle('is-life', mode === 'lifetime');
      $$('[data-billing]', t).forEach(x => x.setAttribute('aria-selected', String(x === b)));
    });
  });

  /* accordions: services rows + FAQ (one open at a time per group) */
  $$('[data-accordion]').forEach(group => {
    const items = $$('.svc__row, .faq__item', group);
    items.forEach(item => {
      const b = item.querySelector('button[aria-expanded]');
      b.addEventListener('click', () => {
        const open = !item.classList.contains('is-open');
        items.forEach(o => { o.classList.remove('is-open'); o.querySelector('button[aria-expanded]').setAttribute('aria-expanded', 'false'); });
        if (open) { item.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); }
      });
    });
  });

  /* commission rules: list rows drive the visual card and auto-advance */
  $$('[data-rules]').forEach(box => {
    const rows = $$('[data-rule]', box), panels = $$('[data-rule-panel]', box);
    let i = 0;
    const go = n => {
      i = (n + rows.length) % rows.length;
      rows.forEach((r, k) => { r.classList.toggle('is-open', k === i); r.querySelector('button').setAttribute('aria-expanded', String(k === i)); });
      panels.forEach((p, k) => p.classList.toggle('is-on', k === i));
      const bar = rows[i].querySelector('.rl__bar'); bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = '';
    };
    rows.forEach((r, k) => r.querySelector('button').addEventListener('click', () => go(k)));
    if (!reduce) {
      box.classList.add('is-auto');
      rows.forEach(r => r.querySelector('.rl__bar').addEventListener('animationend', () => go(i + 1)));
      box.addEventListener('mouseenter', () => box.classList.add('is-paused'));
      box.addEventListener('mouseleave', () => box.classList.remove('is-paused'));
      box.addEventListener('focusin', () => box.classList.add('is-paused'));
      box.addEventListener('focusout', () => box.classList.remove('is-paused'));
    }
  });

  /* process cards: expanding horizontal accordion */
  $$('[data-proc]').forEach(p => {
    const cards = $$('[data-proc-card]', p);
    const activate = c => cards.forEach(o => {
      const on = o === c; o.classList.toggle('is-active', on);
      o.querySelector('.proc__hit').setAttribute('aria-expanded', String(on));
    });
    cards.forEach(c => {
      c.querySelector('.proc__hit').addEventListener('click', () => activate(c));
      /* hover intent: only switch once the pointer settles, so sweeping across cards doesn't make them jump */
      if (matchMedia('(hover: hover) and (min-width: 1025px)').matches) {
        let t; c.addEventListener('mouseenter', () => { clearTimeout(t); t = setTimeout(() => activate(c), 140); });
        c.addEventListener('mouseleave', () => clearTimeout(t));
      }
    });
  });

  /* report slider */
  $$('[data-slider]').forEach(sl => {
    const slides = $$('.rev__slide', sl), cur = sl.querySelector('[data-slider-cur]');
    let i = 0, timer;
    const go = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => { s.classList.toggle('is-active', k === i); s.setAttribute('aria-hidden', String(k !== i)); });
      if (cur) cur.textContent = String(i + 1).padStart(2, '0');
    };
    const auto = () => { if (reduce) return; clearInterval(timer); timer = setInterval(() => go(i + 1), 6000); };
    sl.querySelector('[data-slider-prev]')?.addEventListener('click', () => { go(i - 1); auto(); });
    sl.querySelector('[data-slider-next]')?.addEventListener('click', () => { go(i + 1); auto(); });
    sl.addEventListener('mouseenter', () => clearInterval(timer));
    sl.addEventListener('mouseleave', auto);
    auto();
  });

  /* payout toggle: all eligible affiliates vs. a hand-picked selection */
  const tg = document.querySelector('[data-payout-toggle]');
  if (tg) {
    const sw = tg.querySelector('[role="switch"]'), list = document.querySelector('[data-pay-list]');
    const amt = document.querySelector('[data-pay-amt]'), cnt = document.querySelector('[data-pay-cnt]');
    const render = sel => {
      let total = 0, n = 0;
      list.querySelectorAll('li').forEach(li => {
        const s = +li.dataset.sel, on = sel ? s === 1 : s >= 0;
        li.classList.toggle('is-off', !on && s >= 0);
        li.querySelector('.ui-chk').classList.toggle('on', on);
        if (on) { total += +li.dataset.amt; n++; }
      });
      amt.textContent = '$' + total.toFixed(2);
      cnt.textContent = n + (n === 1 ? ' affiliate' : ' affiliates');
      tg.querySelector('[data-tgl-label="all"]').classList.toggle('is-on', !sel);
      tg.querySelector('[data-tgl-label="sel"]').classList.toggle('is-on', sel);
    };
    sw.addEventListener('click', () => { const v = sw.getAttribute('aria-checked') !== 'true'; sw.setAttribute('aria-checked', String(v)); render(v); });
    tg.querySelectorAll('[data-tgl-label]').forEach(l => l.addEventListener('click', () => { const v = l.dataset.tglLabel === 'sel'; sw.setAttribute('aria-checked', String(v)); render(v); }));
  }

  /* mobile drawer */
  const drawer = document.querySelector('[data-drawer]'), openBtn = document.querySelector('[data-menu]');
  if (drawer && openBtn) {
    const set = on => {
      drawer.classList.toggle('is-open', on); drawer.setAttribute('aria-hidden', String(!on));
      openBtn.setAttribute('aria-expanded', String(on)); document.body.classList.toggle('menu-open', on);
      if (on) drawer.querySelector('[data-menu-close]').focus(); else openBtn.focus();
    };
    openBtn.addEventListener('click', () => set(true));
    drawer.querySelector('[data-menu-close]').addEventListener('click', () => set(false));
    drawer.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
  }

  /* filter pills (blog) */
  $$('[data-filter]').forEach(bar => {
    const items = $$(bar.dataset.filter), btns = $$('button[data-cat]', bar), empty = document.querySelector(bar.dataset.empty || '#none');
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(o => o.setAttribute('aria-pressed', String(o === b)));
      let shown = 0;
      items.forEach(it => { const ok = b.dataset.cat === 'all' || it.dataset.cat === b.dataset.cat; it.hidden = !ok; if (ok) shown++; });
      if (empty) empty.hidden = shown > 0;
    }));
  });

  /* docs search: filters article links inside category cards */
  const q = document.querySelector('[data-doc-search]');
  if (q) {
    const cards = $$('[data-doc-card]'), empty = document.querySelector('[data-doc-empty]');
    const run = () => {
      const v = q.value.trim().toLowerCase(); let any = 0;
      cards.forEach(c => {
        let hits = 0;
        c.querySelectorAll('li').forEach(li => { const ok = !v || li.textContent.toLowerCase().includes(v) || c.dataset.docCard.toLowerCase().includes(v); li.hidden = !ok; if (ok) hits++; });
        c.hidden = hits === 0; any += hits;
      });
      if (empty) empty.hidden = any > 0;
    };
    q.addEventListener('input', run);
    $$('[data-doc-q]').forEach(b => b.addEventListener('click', () => { q.value = b.dataset.docQ; run(); q.focus(); }));
    addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); q.focus(); q.select(); } });
  }

  /* scroll spy for the features jump bar */
  const spy = document.querySelector('[data-spy]');
  if (spy && 'IntersectionObserver' in window) {
    const links = $$('a', spy), map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const io2 = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.remove('is-on'));
      const a = map.get(e.target.id); if (a) { a.classList.add('is-on'); const bar = a.parentElement; bar.scrollTo({ left: a.offsetLeft - (bar.clientWidth - a.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' }); }
    }), { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((a, id) => { const t = document.getElementById(id); if (t) io2.observe(t); });
  }

  /* front-end-only forms */
  $$('form[data-demo-form]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const note = f.querySelector('[data-form-note]');
    if (note) { note.hidden = false; note.textContent = note.dataset.ok || 'Thanks — we’ll be in touch.'; }
    f.reset();
  }));
})();
