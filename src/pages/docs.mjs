import { page, btn, eyebrow, bracket, pad, ic, CTA_URL } from '../lib.mjs';
import { procCards } from './home.mjs';

// Draft documentation map — the Google Doc's Doc tab was empty; article titles follow the plugin's feature list.
const CATS = [
  ['Getting Started', ic.bolt, ['Installing FlyAffiliate', 'Setting up your affiliate program', 'Choosing your default commission rate', 'Adding the affiliate registration page']],
  ['Affiliates', ic.user, ['Registration and email activation', 'Managing affiliate accounts', 'What affiliates see in their dashboard']],
  ['Referral Links &amp; Tracking', ic.link, ['How referral links work', 'Creating product and page links', 'First-party tracking explained', 'The 30-day attribution window']],
  ['Commissions', ic.coin, ['How per-item commissions are calculated', 'Setting product-level rates', 'Setting a maximum commission', 'Adding and editing commissions manually']],
  ['Hold Period &amp; Statuses', ic.clock, ['Setting a commission hold period', 'Pending, unpaid, paid, and rejected', 'How order status sync works', 'Handling refunds']],
  ['Payouts', ic.wallet, ['Creating a payout batch', 'Setting a payout minimum', 'Marking payouts as paid', 'Exporting CSV payout records']],
  ['WooCommerce', ic.cart, ['Tracking referred WooCommerce orders', 'Classic and block checkout support']],
  ['Dokan Marketplaces', ic.store, ['Enabling vendor affiliate programs', 'Vendor commission rules', 'Vendor-level attribution', 'Affiliate commissions and vendor earnings']],
];
const POPULAR = ['Installing FlyAffiliate', 'How per-item commissions are calculated', 'Setting a commission hold period', 'Creating a payout batch', 'Enabling vendor affiliate programs'];

const hero = `
<section class="phero" aria-labelledby="d-h">
  <div class="wrap">
    <div class="phero__grid">
      <div class="phero__l">${eyebrow('Documentation')}</div>
      <div class="phero__r">
        <h1 id="d-h" class="phero__h" data-reveal><span aria-hidden="true">— </span>Everything you need to set up, run, and grow your affiliate program with FlyAffiliate.</h1>
        <div class="dsearch" data-reveal>
          <span class="dsearch__ic" aria-hidden="true">${ic.search}</span>
          <label class="sr-only" for="doc-q">Search the docs</label>
          <input id="doc-q" type="search" placeholder="Search the docs…" autocomplete="off" data-doc-search>
          <kbd aria-hidden="true">⌘K</kbd>
        </div>
        <div class="dpop" data-reveal><span class="muted">Popular:</span>${['hold period', 'payout', 'referral links', 'Dokan'].map(q => `<button type="button" data-doc-q="${q}">${q}</button>`).join('')}</div>
      </div>
    </div>
  </div>
</section>`;

const cats = `
<section class="sec sec--snug" id="topics" aria-labelledby="topics-h">
  <div class="wrap">
    <div class="shead shead--rule" data-reveal>${eyebrow('Browse by topic')}${bracket(`${pad(CATS.length)} topics`)}</div>
    <h2 id="topics-h" class="sr-only">Topics</h2>
    <div class="dcats" data-reveal-stagger>
      ${CATS.map(([t, icon, arts], i) => `<article class="dcat" data-doc-card="${t.replace('&amp;', '&')}">
        <div class="dcat__top"><span class="dcat__ic">${icon}</span><span class="dcat__n">${pad(i + 1)}</span></div>
        <h3 class="dcat__t">${t}</h3>
        <ul class="dcat__list">${arts.map(a => `<li><a href="#">${a}<span aria-hidden="true">${ic.arrow}</span></a></li>`).join('')}</ul>
        <p class="dcat__foot"><i class="dot" aria-hidden="true"></i>${arts.length} articles</p>
      </article>`).join('\n      ')}
    </div>
    <p class="bempty" data-doc-empty hidden>No articles match that search. Try “commission” or “payout”.</p>
  </div>
</section>`;

const big = i => `<div class="proc__glyph">${i}</div>`;
const QUICK = [
  ['Install the Plugin', 'Add FlyAffiliate to your WordPress site and activate it.', 'Time', 'A few minutes', big(ic.download)],
  ['Set Your Rates', 'Choose a default commission rate, then add product-level rates or a maximum where needed.', 'Where', 'Settings', big(ic.gear)],
  ['Invite Affiliates', 'Share your registration page so affiliates can sign up and activate their accounts.', 'Where', 'Registration page', big(ic.user)],
  ['Track &amp; Pay', 'Watch referrals turn into commissions, then pay them in organized batches.', 'Where', 'Commissions & Payouts', big(ic.wallet)],
];
const quick = `
<section class="sec" id="quick-start" aria-labelledby="qs-h">
  <div class="wrap">
    <div class="shead" data-reveal>${eyebrow('Quick start')}${bracket('01 — 04')}</div>
    <div class="split-head">
      <h2 id="qs-h" class="h2" data-reveal>Up and Running in Four Steps</h2>
      <p class="lead muted" data-reveal>The shortest path from installing the plugin to your first affiliate payout.</p>
    </div>
    <div class="proc" data-proc data-reveal>${procCards(QUICK)}
    </div>
  </div>
</section>`;

const popular = `
<section class="sec" id="popular" aria-labelledby="pop-h">
  <div class="wrap mlist">
    <div class="mlist__l">
      <p class="mlist__big" aria-hidden="true">(${pad(POPULAR.length)})</p>
      ${eyebrow('Most read')}
      <h2 id="pop-h" class="h3" data-reveal>Popular Articles</h2>
      <p class="muted" data-reveal>Where most store owners start.</p>
    </div>
    <ol class="plist" data-reveal-stagger>
      ${POPULAR.map((t, i) => `<li><a href="#"><span class="plist__n">${pad(i + 1)}</span><span class="plist__t">${t}</span><span class="plist__go" aria-hidden="true">${ic.arrow}</span></a></li>`).join('\n      ')}
    </ol>
  </div>
</section>`;

const help = `
<section class="sec" id="help" aria-labelledby="help-h">
  <div class="wrap faq">
    <div class="faq__l">
      ${eyebrow('Help')}
      <h2 id="help-h" class="h3" data-reveal>Still got more questions?</h2>
      <p class="muted" data-reveal>Check the FAQ, or grab the plugin and explore it on your own site.</p>
      <div data-reveal>${btn('Read the FAQ', '/#faq')}</div>
    </div>
    <div class="hcards" data-reveal-stagger>
      <a class="hcard" href="/#faq"><span class="hcard__ic">${ic.chat}</span><span><b>Frequently asked questions</b><small>Quick answers about tracking, commissions, and payouts.</small></span><span class="hcard__go" aria-hidden="true">${ic.arrow}</span></a>
      <a class="hcard" href="/features/"><span class="hcard__ic">${ic.book}</span><span><b>Feature overview</b><small>Every feature, grouped by what it helps you do.</small></span><span class="hcard__go" aria-hidden="true">${ic.arrow}</span></a>
      <a class="hcard" href="${CTA_URL}" target="_blank" rel="noopener"><span class="hcard__ic">${ic.download}</span><span><b>Download the plugin</b><small>FlyAffiliate is a free WordPress plugin.</small></span><span class="hcard__go" aria-hidden="true">${ic.arrow}</span></a>
    </div>
  </div>
</section>`;

export default () => page({
  title: 'Docs — FlyAffiliate',
  desc: 'FlyAffiliate documentation: getting started, affiliates, referral tracking, commissions, hold periods, payouts, WooCommerce, and Dokan.',
  cur: 'Docs',
  body: [hero, cats, quick, popular, help].join('\n'),
});
