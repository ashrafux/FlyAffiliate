import { page, btn, eyebrow, bracket, chips, ic } from '../lib.mjs';

// Draft article list — the Google Doc's Blog tab was empty, so titles/excerpts are placeholders to replace.
const POSTS = [
  { cat: 'Guides', title: 'How to Start an Affiliate Program on WordPress', ex: 'From your first commission rate to your first payout — a step-by-step setup for store owners.', date: 'Oct 8, 2026', read: '8 min', art: 'hero', glyph: '<span class="g-mono">?ref=you</span>', featured: true },
  { cat: 'Commissions', title: 'Per-Item Commissions, Explained', ex: 'Why calculating commissions for each product in an order keeps payouts fair across different margins.', date: 'Oct 1, 2026', read: '5 min', art: 'peach', glyph: '<span class="g-big">%</span>' },
  { cat: 'Commissions', title: 'Why a Hold Period Protects Your Margins', ex: 'Keep commissions pending until the sale is ready, and let refunds reject what should not be paid.', date: 'Sep 24, 2026', read: '4 min', art: 'stone', glyph: `<span class="g-ic">${ic.clock}</span>` },
  { cat: 'Guides', title: 'First-Party Tracking: Keep Referral Data on Your Site', ex: 'What changes when attribution runs on your own WordPress site instead of a third-party network.', date: 'Sep 17, 2026', read: '6 min', art: 'sand', glyph: `<span class="g-ic">${ic.shield}</span>` },
  { cat: 'Payouts', title: 'Paying Affiliates Without Spreadsheets', ex: 'Set a minimum, review the batch, mark it paid, and export CSV records for your books.', date: 'Sep 10, 2026', read: '5 min', art: 'dune', glyph: '<span class="g-big">$</span>' },
  { cat: 'Dokan', title: 'Vendor-Powered Affiliate Marketing for Dokan', ex: 'Let vendors fund promotion for their own products while your marketplace keeps its structure.', date: 'Sep 3, 2026', read: '7 min', art: 'ember', glyph: `<span class="g-ic">${ic.store}</span>` },
  { cat: 'WooCommerce', title: 'An Affiliate Checklist for WooCommerce Stores', ex: 'Orders, product-level tracking, and both checkout types — what to check before you launch.', date: 'Aug 27, 2026', read: '6 min', art: 'peach', glyph: `<span class="g-ic">${ic.cart}</span>` },
  { cat: 'Guides', title: 'Recruiting Your First 20 Affiliates', ex: 'Start with the customers and creators who already recommend you, then make joining effortless.', date: 'Aug 20, 2026', read: '6 min', art: 'sand', glyph: '<span class="g-big">20</span>' },
  { cat: 'Product updates', title: 'Introducing FlyAffiliate', ex: 'Recruit affiliates, track referrals, manage commissions, and handle payouts — all from WordPress.', date: 'Aug 13, 2026', read: '3 min', art: 'hero', glyph: '<span class="g-word">FlyAffiliate<i>.</i></span>' },
];
const CATS = ['All', 'Guides', 'Commissions', 'Payouts', 'WooCommerce', 'Dokan', 'Product updates'];
const slug = c => c.toLowerCase().replace(/\s+/g, '-');

const hero = `
<section class="phero" aria-labelledby="b-h">
  <div class="wrap">
    <div class="phero__grid">
      <div class="phero__l">${eyebrow('Latest articles')}</div>
      <div class="phero__r">
        <h1 id="b-h" class="phero__h" data-reveal><span aria-hidden="true">— </span>Guides, playbooks, and product updates for running an affiliate program on WordPress.</h1>
        <p class="phero__p" data-reveal>Practical reading for WooCommerce stores and Dokan marketplaces — written by the team building FlyAffiliate.</p>
      </div>
    </div>
  </div>
</section>`;

const f = POSTS.find(p => p.featured);
const featured = `
<section class="sec sec--snug" aria-label="Featured article">
  <div class="wrap">
    <div class="shead" data-reveal>${eyebrow('Featured')}${bracket(`${String(POSTS.length).padStart(2, '0')} articles`)}</div>
    <a class="work work--link" href="#" data-reveal>
      <div class="work__media art art--${f.art} bthumb bthumb--xl">${f.glyph}<span class="bthumb__cat">${f.cat}</span></div>
      <div class="work__cap">
        <div class="work__capl"><p class="bmeta">${f.date} · ${f.read} read</p><h2 class="work__t">${f.title}</h2><p class="muted">${f.ex}</p></div>
        <span class="bcard__go" aria-hidden="true">${ic.arrow}</span>
      </div>
    </a>
  </div>
</section>`;

const grid = `
<section class="sec sec--snug" aria-labelledby="all-h">
  <div class="wrap">
    <div class="bbar">
      <h2 id="all-h" class="h3" data-reveal>All articles</h2>
      <div class="filters" role="group" aria-label="Filter by category" data-filter="[data-post]" data-empty="[data-post-empty]" data-reveal>
        ${CATS.map((c, i) => `<button type="button" data-cat="${i ? slug(c) : 'all'}" aria-pressed="${i === 0}">${c}</button>`).join('')}
      </div>
    </div>
    <div class="bgrid" data-reveal-stagger>
      ${POSTS.filter(p => !p.featured).map(p => `<a class="bcard" href="#" data-post data-cat="${slug(p.cat)}">
        <div class="bcard__media art art--${p.art} bthumb">${p.glyph}<span class="bthumb__cat">${p.cat}</span></div>
        <div class="bcard__cap">
          <p class="bmeta">${p.date} · ${p.read} read</p>
          <h3 class="bcard__t">${p.title}</h3>
          <p class="bcard__ex">${p.ex}</p>
          <span class="bcard__go" aria-hidden="true">${ic.arrow}</span>
        </div>
      </a>`).join('\n      ')}
    </div>
    <p class="bempty" data-post-empty hidden>No articles in this category yet.</p>
  </div>
</section>`;

const news = `
<section class="sec sec--dark contact" id="newsletter" aria-labelledby="nl-h">
  <div class="wrap contact__grid">
    <div class="contact__l">
      ${eyebrow('Newsletter')}
      <h2 id="nl-h" class="h2xl" data-reveal>Get New Guides in Your Inbox</h2>
      <p class="lead contact__p" data-reveal>One email when something new is published. Affiliate playbooks, product updates, and Dokan tips.</p>
      <div class="contact__meta" data-reveal><p class="muted">Frequency</p><p class="contact__big">Only when there’s something worth reading.</p></div>
    </div>
    <form class="contact__card form" data-demo-form data-reveal>
      <p class="contact__ct">Subscribe to the blog.</p>
      <label class="sr-only" for="nl-name">Name</label><input id="nl-name" class="field" type="text" name="name" placeholder="Your name" autocomplete="name">
      <label class="sr-only" for="nl-email">Email</label><input id="nl-email" class="field" type="email" name="email" placeholder="you@yourstore.com" autocomplete="email" required>
      <button class="btn btn--block" type="submit"><span class="btn__t">Subscribe</span><span class="btn__i" aria-hidden="true">${ic.arrow}</span></button>
      <p class="form__note" data-form-note data-ok="Thanks — you’re on the list. (Demo form: nothing was sent.)" hidden role="status"></p>
    </form>
  </div>
</section>`;

export default () => page({
  title: 'Blog — FlyAffiliate',
  desc: 'Guides, playbooks, and product updates for running an affiliate program on WordPress, WooCommerce, and Dokan.',
  cur: 'Blog',
  body: [hero, featured, grid, news].join('\n'),
});
