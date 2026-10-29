import { page, btn, ic, CTA_URL } from '../lib.mjs';
import { faqBlock } from './home.mjs';

// Copy: "FlyAffiliate Pricing Page (Section Structure)" supplied by the user.
// Items marked [confirm] in that doc are shown in neutral wording; see the note in the session.
const ext = ' target="_blank" rel="noopener"';
const PRO_URL = '#plans'; // checkout link not supplied yet

const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const I = {
  paypal: svg('<path d="M8 20H5.5L8 4h6.5a4 4 0 0 1 0 8H10l-1.2 8"/><path d="M10.5 16H14a4 4 0 0 0 4-4"/>'),
  mail: svg('<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="m4.5 7 7.5 6 7.5-6"/>'),
  list: svg('<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.2"/><circle cx="4.5" cy="12" r="1.2"/><circle cx="4.5" cy="18" r="1.2"/>'),
  retry: svg('<path d="M20 11a8 8 0 0 0-14.6-4.5M4 13a8 8 0 0 0 14.6 4.5"/><path d="M5 3v4h4M19 21v-4h-4"/>'),
  shield: ic.shield, lock: svg('<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>'),
  ledger: svg('<path d="M6 3.5h9l3 3V20.5H6z"/><path d="M9 11h6M9 15h6M9 7h3"/>'), team: ic.store,
  dash: '<span aria-hidden="true">–</span>',
};

const PLANS = [
  ['Starter', '1 Site License', ['49', '99'], ['149', '299'], 'Starter'],
  ['Growth', '5 Site Licenses', ['89', '179'], ['229', '459'], 'Growth', true],
  ['Agency', '25 Site Licenses', ['149', '299'], ['349', '699'], 'Agency'],
];

const hero = `
<section class="pr-hero" aria-labelledby="pr-h">
  <div class="wrap pr-hero__in">
    <p class="pr-badge" data-reveal><span>Launch Pricing</span>Save 50%</p>
    <h1 id="pr-h" class="pr-hero__h" data-reveal>Simple Pricing. Every Feature in Every Plan.</h1>
    <p class="lead muted pr-hero__p" data-reveal>Start free and upgrade when you’re ready. Pro adds PayPal payouts, so you can pay your whole affiliate team in one go. Every plan includes every Pro feature.</p>
    <div class="pr-toggle" role="tablist" aria-label="Billing" data-billing-toggle data-reveal>
      <button type="button" role="tab" aria-selected="true" data-billing="annual">Annual</button>
      <button type="button" role="tab" aria-selected="false" data-billing="lifetime">Lifetime</button>
    </div>
    <ul class="pr-trust" data-reveal><li>${ic.check}Free plugin forever</li><li>${ic.check}One-time lifetime option</li><li>${ic.check}Money-back guarantee</li></ul>
  </div>
</section>`;

const plans = `
<section class="pr-plans" id="plans" aria-label="Plans" data-billing-scope data-mode="annual">
  <div class="wrap">
    <div class="pr-grid" data-reveal-stagger>
      ${PLANS.map(([n, sites, an, lt, cta, pop]) => `
      <article class="pr-card${pop ? ' pr-card--pop' : ''}">
        <div class="pr-card__top"><h2 class="pr-card__n">${n}</h2>${pop ? '<span class="pr-card__tag">Most Popular</span>' : ''}</div>
        <p class="pr-card__price" data-show="annual"><b>$${an[0]}</b><span>/year</span></p>
        <p class="pr-card__price" data-show="lifetime"><b>$${lt[0]}</b><span>one-time</span></p>
        <p class="pr-card__was" data-show="annual"><s>$${an[1]}</s><em>Save 50%</em></p>
        <p class="pr-card__was" data-show="lifetime"><s>$${lt[1]}</s><em>Save 50%</em></p>
        <ul class="pr-card__list">
          <li>${ic.check}${sites}</li>
          <li>${ic.check}All Pro Features</li>
          <li data-show="annual">${ic.check}Updates and support for 1 year</li>
          <li data-show="lifetime">${ic.check}Lifetime updates</li>
        </ul>
        <span data-show="annual">${btn(`Get ${cta}`, PRO_URL, pop ? 'block' : 'dark block')}</span>
        <span data-show="lifetime">${btn(`Get ${cta} Lifetime`, PRO_URL, pop ? 'block' : 'dark block')}</span>
      </article>`).join('')}
    </div>
    <p class="pr-under" data-show="annual">Every plan includes the same features. Pick the number of sites you run.</p>
    <p class="pr-under" data-show="lifetime">Pay once. No renewals.</p>
  </div>
</section>`;

const FREE = ['Affiliate registration with email activation', 'Unique referral links and first-party tracking', 'Per-item commissions with a maximum rate cap', 'Hold period that follows the order status', 'Commission ledger: pending, unpaid, paid, rejected', 'Manual batch payouts with CSV export', 'Admin dashboard and affiliate dashboard', 'WooCommerce, classic and block checkout'];
const free = `
<section class="sec" id="free" aria-labelledby="free-h">
  <div class="wrap">
    <div class="pr-free" data-reveal>
      <div class="pr-free__l">
        <p class="pr-pill">Free plan</p>
        <h2 id="free-h" class="h3">Not Ready for Pro? Start Free.</h2>
        <p class="lead muted">The free plugin runs a complete affiliate program today. Upgrade any time.</p>
        ${btn('Download Free', CTA_URL, 'dark', ext)}
      </div>
      <div class="pr-free__r"><p class="pr-free__k">Free includes</p><ul>${FREE.map(t => `<li>${ic.check}${t}</li>`).join('')}</ul></div>
    </div>
  </div>
</section>`;

const PRO = [
  ['PayPal Payouts', 'Pay a whole batch of affiliates through PayPal in one action.', I.paypal],
  ['Just an Email Needed', 'Affiliates only need a PayPal email to get paid.', I.mail],
  ['Real Results per Payment', 'Every payment shows whether it’s paid, pending or failed.', I.list],
  ['Safe Retries', 'A failed payment stays unpaid so you can retry it. It’s never marked paid by mistake.', I.retry],
];
const BATCH = [['MK', 'Maya Khan', 'maya@studio.co', '$212.80', 'paid', 18], ['JR', 'Jonas Reed', 'jonas@reed.io', '$96.40', 'pending', 200], ['AL', 'Ava Lim', 'ava@lim.shop', '$148.00', 'failed', 140]];
const pro = `
<section class="sec pr-pro" id="pro" aria-labelledby="pro-h">
  <div class="wrap pr-pro__grid">
    <div class="pr-pro__l">
      <p class="pr-pill pr-pill--acc">FlyAffiliate Pro</p>
      <h2 id="pro-h" class="h2" data-reveal>Everything in Free, Plus PayPal Payouts</h2>
      <p class="lead muted pr-pro__sub" data-reveal>Stop sending payments one by one. Pay your whole affiliate team through PayPal in one go.</p>
      <ul class="pr-pro__cards" data-reveal-stagger>${PRO.map(([t, d, i]) => `<li><span class="pr-ic" aria-hidden="true">${i}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ul>
      <p class="pr-tag" data-reveal><i></i>Pay everyone at once. Know exactly what was sent.</p>
    </div>
    <div class="pr-pro__vis art art--payouts" data-reveal aria-hidden="true">
      <div class="ui pr-batch">
        <div class="ui__bar"><span class="ui__title">PayPal payout</span><span class="ui__pill">3 affiliates</span></div>
        <div class="ui__body">
          ${BATCH.map(([i, n, e, a, st, h]) => `<div class="pr-batch__row"><span class="av" style="--h:${h}">${i}</span><span><b>${n}</b><small>${e}</small></span><b>${a}</b><span class="st st--${st === 'failed' ? 'rejected' : st}">${st[0].toUpperCase() + st.slice(1)}</span></div>`).join('')}
          <div class="pr-batch__ft"><span>Failed payments stay unpaid</span><span class="ui__solid">Retry failed</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`;

const ROWS = [
  ['Referral links and first-party tracking', 1, 1], ['Per-item commissions', 1, 1], ['Hold period and order status sync', 1, 1], ['Commission ledger', 1, 1],
  ['Manual batch payouts and CSV export', 1, 1], ['Admin and affiliate dashboards', 1, 1], ['WooCommerce integration', 1, 1],
  ['PayPal payouts in one click', 0, 1], ['Payment status per affiliate (paid, pending, failed)', 0, 1], ['Support', 'WordPress.org forum', 'Ticket support'],
];
const cell = v => v === 1 ? `<span class="pr-yes">${ic.check}<span class="sr-only">Included</span></span>` : v === 0 ? `<span class="pr-no">–<span class="sr-only">Not included</span></span>` : v;
const compare = `
<section class="sec" id="compare" aria-labelledby="cmp-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="cmp-h" class="h2" data-reveal>Free vs Pro, <br>Side by Side</h2>
      <p class="lead muted" data-reveal>Everything the free plugin does, plus what Pro adds <br>for paying your affiliates through PayPal.</p>
    </div>
    <div class="pr-table" data-reveal>
      <table>
        <thead><tr><th scope="col">Feature</th><th scope="col">Free</th><th scope="col" class="pr-table__pro">Pro</th></tr></thead>
        <tbody>${ROWS.map(([f, a, b]) => `<tr><th scope="row">${f}</th><td>${cell(a)}</td><td class="pr-table__pro">${cell(b)}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div>
</section>`;

const WHY = [
  ['Safe by Default', 'A 30-day hold period is on from the start, so you don’t pay out on refunded orders.', I.shield],
  ['Your Data Stays Yours', 'No external requests. Visitor data is stored as hashes on your own site.', I.lock],
  ['A Clear Ledger', 'Every commission is earned, owed or paid, and follows the order behind it.', I.ledger],
  ['Built by the Dokan Team', 'Made by weDevs, the team behind Dokan, WP User Frontend and weMail.', I.team],
];
const why = `
<section class="sec" id="why" aria-labelledby="why-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="why-h" class="h2" data-reveal>Built to Run Your <br>Program the Right Way</h2>
      <p class="lead muted" data-reveal>Every plan starts with safe defaults, data that stays <br>on your site and a ledger you can trust.</p>
    </div>
    <ul class="pr-why" data-reveal-stagger>${WHY.map(([t, d, i]) => `<li><span class="pr-ic" aria-hidden="true">${i}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ul>
  </div>
</section>`;

const MATH = [['Starter', '$149', 'about 3 years of annual', 3], ['Growth', '$229', 'about 2.6 years of annual', 2.6], ['Agency', '$349', 'about 2.3 years of annual', 2.3]];
const math = `
<section class="sec" id="lifetime" aria-labelledby="lt-h">
  <div class="wrap pr-math">
    <div class="pr-math__l">
      <h2 id="lt-h" class="h2" data-reveal>Lifetime Pays for Itself</h2>
      <p class="pr-tag" data-reveal><i></i>Every year after that costs nothing.</p>
    </div>
    <ul class="pr-math__rows" data-reveal-stagger>${MATH.map(([n, p, t, y]) => `<li><span class="pr-math__n">${n}</span><span class="pr-math__p">Lifetime <b>${p}</b></span><span class="pr-math__bar" style="--y:${(y / 3.4 * 100).toFixed(0)}%"><i></i></span><span class="pr-math__t">= ${t}</span></li>`).join('')}</ul>
  </div>
</section>`;

const guarantee = `
<section class="sec" id="guarantee" aria-labelledby="gu-h">
  <div class="wrap">
    <div class="pr-guar" data-reveal>
      <span class="pr-guar__seal" aria-hidden="true">${I.shield}</span>
      <div><h2 id="gu-h" class="h3">Try Pro Risk Free</h2><p class="lead">If FlyAffiliate Pro isn’t right for you, ask for a full refund within the guarantee period.</p></div>
    </div>
  </div>
</section>`;

const FAQ = [
  ['Is there a free version?', 'Yes. The free plugin is on WordPress.org and runs a complete single-tier affiliate program.'],
  ['What’s the difference between the plans?', 'Only the number of sites. Every plan includes every Pro feature.'],
  ['How do PayPal payouts work?', 'Create a payout as usual, then send it through PayPal in one action. Each affiliate is paid to their PayPal email, and every payment shows its result.'],
  ['What happens when my annual license ends?', 'The plugin keeps working. Updates and support stop until you renew.'],
  ['Can I upgrade from Starter to Growth or Agency later?', 'Yes. You pay the difference.'],
  ['Does Pro include the Dokan integration?', 'The Dokan integration is in development. We’ll share plan details when it launches.'],
  ['Do I need WooCommerce?', 'No. FlyAffiliate works on WordPress alone. WooCommerce adds automatic order tracking.'],
  ['Is there a refund policy?', 'Yes. Ask for a full refund within the guarantee period.'],
];

export default () => page({
  title: 'Pricing — FlyAffiliate',
  desc: 'Simple pricing for FlyAffiliate. Every feature in every plan, a free plugin forever, and a one-time lifetime option.',
  cur: 'Pricing',
  bodyClass: 'page-pricing',
  body: [hero, plans, free, pro, compare, why, math, guarantee, faqBlock({ id: 'faq', title: 'Pricing <br>Questions', sub: 'Plans, licenses, upgrades and refunds, <br>answered before you buy.', items: FAQ })].join('\n'),
});
