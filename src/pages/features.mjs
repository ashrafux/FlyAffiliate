import { page, btn, eyebrow, bracket, pad, ic, CTA_URL, spark,
  uiReferralLink, uiPerItem, uiRates, uiHold, uiAffDash, uiPayout } from '../lib.mjs';
import { procCards } from './home.mjs';

const ext = ' target="_blank" rel="noopener"';

const uiOverview = () => `
<div class="ui ui--app">
  <aside class="ui-side" aria-hidden="true">
    <p class="ui-side__logo">FlyAffiliate<span>.</span></p>
    ${['Dashboard', 'Affiliates', 'Referrals', 'Commissions', 'Payouts', 'Reports', 'Settings'].map((t, i) => `<span class="${i === 0 ? 'on' : ''}">${t}</span>`).join('')}
  </aside>
  <div class="ui-main">
    <div class="ui__bar"><span class="ui__title">Program overview</span><span class="ui__actions"><span class="ui__pill">Last 30 days</span><span class="ui__solid">+ Add affiliate</span></span></div>
    <div class="ui__body">
      <div class="ui-kpis ui-kpis--4">
        <div><span class="ui-k">Affiliate revenue</span><span class="ui-v">$48,250</span></div>
        <div><span class="ui-k">Commissions</span><span class="ui-v">$4,825</span></div>
        <div><span class="ui-k">Visits</span><span class="ui-v">32,410</span></div>
        <div><span class="ui-k">Conversion</span><span class="ui-v ui-v--acc">3.6%</span></div>
      </div>
      <div class="ui-chart">${spark([12, 18, 15, 24, 22, 30, 27, 36, 33, 41, 38, 47, 44, 52], 640, 150)}</div>
      <div class="ui-lines">
        <div><span class="ui-who"><span class="av" style="--h:18">MK</span>Maya Khan referred order #2481</span><b>$18.40</b><span class="st st--pending">Pending</span></div>
        <div><span class="ui-who"><span class="av" style="--h:140">AL</span>Ava Lim referred order #2470</span><b>$22.00</b><span class="st st--paid">Paid</span></div>
      </div>
    </div>
  </div>
</div>`;

const hero = `
<section class="phero" aria-labelledby="f-h">
  <div class="wrap">
    <div class="phero__grid">
      <div class="phero__r">
        <h1 id="f-h" class="phero__h" data-reveal>Features That Give You Complete Control</h1>
        <p class="phero__p" data-reveal>Track referrals, manage commissions, and handle payouts from WordPress.</p>
        <div class="phero__row" data-reveal>${btn('Start Your Affiliate Program', CTA_URL, '', ext)}<span class="chip-rate"><i>${ic.bolt}</i>Free WordPress plugin</span></div>
      </div>
    </div>
    <div class="phero__media art art--hero" data-reveal>${uiOverview()}</div>
  </div>
</section>`;

const GROUPS = [
  ['tracking', 'Tracking', 'Know Where Every Sale Came From', 'sand', [
    ['Unique Referral Links', 'Give every affiliate a unique tracking link.'],
    ['Product &amp; Page Links', 'Create links for specific products or pages.'],
    ['First-Party Tracking', 'Track referrals directly on your WordPress site.'],
    ['30-Day Attribution', 'Keep referral attribution for 30 days by default.'],
  ], `<div class="fstack">${uiReferralLink()}<span class="fbadge"><i>${ic.clock}</i>Attribution window · 30 days</span></div>`],
  ['commissions', 'Commissions', 'Calculate Commissions Per Product', 'peach', [
    ['Per-Item Commissions', 'Calculate earnings for each order item.'],
    ['Product-Level Rates', 'Apply product-specific commission rates where configured.'],
    ['Global Default Rate', 'Set a default rate for your program.'],
    ['Maximum Commission', 'Keep commissions within your defined limit.'],
  ], `<div class="fstack fstack--two">${uiRates()}${uiPerItem()}</div>`],
  ['hold', 'Hold &amp; status', 'Pay Commissions When They’re Ready', 'stone', [
    ['Hold Period', 'Keep commissions pending for the time you choose.'],
    ['Order Status Sync', 'Commission status follows the WooCommerce order.'],
    ['Refund Handling', 'Reject eligible commissions after refunds when enabled.'],
    ['Clear Statuses', 'Track every commission from pending to unpaid, paid, or rejected.'],
  ], `<div class="fstack">${uiHold(1)}<span class="fbadge fbadge--row"><span class="st st--pending">Pending</span><span class="st st--unpaid">Unpaid</span><span class="st st--paid">Paid</span><span class="st st--rejected">Rejected</span></span></div>`],
  ['affiliates', 'Affiliate dashboard', 'Everything Affiliates Need to See', 'dune', [
    ['Referral Links', 'Access and generate links to share.'],
    ['Visits &amp; Commissions', 'See referral activity and earnings.'],
    ['Balance', 'Know how much is currently available.'],
    ['Payouts', 'See payout information in one place.'],
  ], `<div class="fstack">${uiAffDash()}</div>`],
  ['payouts', 'Payouts', 'Pay Affiliates Your Way', 'sand', [
    ['Choose Who to Pay', 'Pay everyone or selected affiliates.'],
    ['Set a Minimum', 'Only include balances above your threshold.'],
    ['Review First', 'Preview amounts before creating payouts.'],
    ['Keep Records', 'Mark payments as paid and export CSV records.'],
  ], `<div class="fstack">${uiPayout()}</div>`],
];

const jump = `
<nav class="jump" aria-label="Feature groups" data-spy>
  <div class="jump__in">
    ${GROUPS.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}
    <a href="#more">More</a><a href="#dokan">Dokan</a>
  </div>
</nav>`;

const groups = GROUPS.map(([id, label, h, art, rows, vis], gi) => `
<section class="sec fgroup${gi % 2 ? ' fgroup--flip' : ''}" id="${id}" aria-labelledby="${id}-h">
  <div class="wrap">
    <div class="shead shead--rule" data-reveal>${eyebrow(label)}${bracket(`${pad(gi + 1)} / ${pad(GROUPS.length)}`)}</div>
    <div class="fg">
      <div class="fg__copy">
        <h2 id="${id}-h" class="h2" data-reveal>${h}</h2>
        <ul class="frows" data-reveal-stagger>
          ${rows.map(([t, d]) => `<li><span class="frows__ic" aria-hidden="true">${ic.spark}</span><h3>${t}</h3><p>${d}</p></li>`).join('\n          ')}
        </ul>
      </div>
      <div class="fg__vis art art--${art}" data-reveal>${vis}</div>
    </div>
  </div>
</section>`).join('');

const MORE = [
  ['Affiliate Registration', 'Let affiliates join through a simple signup flow.'],
  ['Affiliate Management', 'Manage your affiliate accounts from WordPress.'],
  ['Commission Ledger', 'Keep every commission organized by status.'],
  ['Manual Commissions', 'Add commissions manually when needed.'],
  ['Commission Editing', 'Edit eligible commission records before payment.'],
  ['WooCommerce Integration', 'Connect affiliate activity with WooCommerce orders.'],
  ['Block &amp; Classic Checkout', 'Works with both WooCommerce checkout experiences.'],
  ['Manual Payouts', 'Create payout batches and record completed payments.'],
  ['CSV Export', 'Export payout information for your records.'],
  ['First-Party Tracking', 'Run referral attribution directly on your site.'],
  ['No Affiliate Network Required', 'Run your program without a third-party affiliate network.'],
  ['Commission Statuses', 'Track commissions from pending to paid or rejected.'],
];
const more = `
<section class="sec" id="more" aria-labelledby="more-h">
  <div class="wrap mlist">
    <div class="mlist__l">
      <p class="mlist__big" aria-hidden="true">(${MORE.length})</p>
      ${eyebrow('Everything else')}
      <h2 id="more-h" class="h3" data-reveal>More Features</h2>
      <p class="muted" data-reveal>The rest of the toolkit for running your program day to day.</p>
    </div>
    <table class="mlist__t">
      <caption class="sr-only">More FlyAffiliate features</caption>
      <thead class="sr-only"><tr><th scope="col">#</th><th scope="col">Feature</th><th scope="col">Description</th></tr></thead>
      <tbody data-reveal-stagger>
        ${MORE.map(([t, d], i) => `<tr><td class="mlist__n">${pad(i + 1)}</td><th scope="row">${t}</th><td class="mlist__d">${d}</td></tr>`).join('\n        ')}
      </tbody>
    </table>
  </div>
</section>`;

const icSliders = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 7h9m4 0h3M4 17h3m4 0h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/></svg>';
const icTarget = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>';
const icToggle = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="18" height="10" rx="5"/><circle cx="16" cy="12" r="3" fill="currentColor"/></svg>';
const DOKAN = [
  ['Vendor Affiliate Programs', 'Let vendors promote their own products through affiliates.', ic.store],
  ['Vendor Commission Rules', 'Let vendors define affiliate commission rules.', icSliders],
  ['Vendor-Level Attribution', 'Keep affiliate activity connected to vendor products.', icTarget],
  ['Flexible Participation', 'One vendor can participate while another chooses not to.', icToggle],
];
// Dokan: colourful art panel, frosted headline card, glass capability cards (design option S6)
const dokan = `
<section class="sec" id="dokan" aria-labelledby="fd-h">
  <div class="wrap">
    <div class="dk art" data-reveal>
      <div class="dk__card">
        <p class="soon">Coming Soon</p>
        <h2 id="fd-h" class="h2 dk__h">Specially Built for Dokan Marketplaces</h2>
        <p class="dk__sub">Let Vendors Grow With Affiliates</p>
      </div>
      <ul class="dk__g" data-reveal-stagger>
        ${DOKAN.map(([t, d, icon]) => `<li class="dk__c"><span class="dk__ic" aria-hidden="true">${icon}</span><div><h3 class="dk__t">${t}</h3><p>${d}</p></div></li>`).join('')}
      </ul>
    </div>
  </div>
</section>`;

const big = i => `<div class="proc__glyph">${i}</div>`;
const STEPS = [
  ['Recruit', 'Affiliates join through a simple signup flow.', 'Step', 'Registration', big(ic.user)],
  ['Share', 'Every affiliate gets unique links for your store, products, and pages.', 'Step', 'Referral links', big(ic.link)],
  ['Track', 'Visits and referred orders are tracked on your own site.', 'Step', 'First-party', big(ic.chart)],
  ['Calculate', 'Commissions are calculated per order item.', 'Step', 'Per item', big(ic.coin)],
  ['Hold', 'Commissions stay pending until your hold period ends.', 'Step', 'Pending', big(ic.clock)],
  ['Pay', 'Create payout batches, mark them paid, and export CSV records.', 'Step', 'Payouts', big(ic.wallet)],
];
const flowSec = `
<section class="sec" id="workflow" aria-labelledby="fw-h">
  <div class="wrap">
    <div class="shead" data-reveal>${eyebrow('Click to payout')}${bracket('01 — 06')}</div>
    <div class="split-head">
      <h2 id="fw-h" class="h2" data-reveal>From Click to Commission to Payout</h2>
      <p class="lead muted" data-reveal>Recruit → Share → Track → Calculate → Hold → Pay</p>
    </div>
    <div class="proc proc--six" data-proc data-reveal>${procCards(STEPS)}
    </div>
    <p class="caption" data-reveal><span class="dot" aria-hidden="true"></span>One affiliate workflow. One WordPress site.</p>
  </div>
</section>`;

const cta = `
<section class="sec sec--dark contact" id="start" aria-labelledby="fs-h">
  <div class="wrap contact__grid">
    <div class="contact__l">
      ${eyebrow('Get started')}
      <h2 id="fs-h" class="h2xl" data-reveal>Start Your Affiliate Program</h2>
      <p class="lead contact__p" data-reveal>Your products already have people talking about them.</p>
      <p class="muted contact__p2" data-reveal>Give them a way to promote your store and earn from the sales they generate.</p>
      <div class="contact__meta" data-reveal><p class="muted">Price</p><p class="contact__big">Free WordPress plugin.</p></div>
    </div>
    <div class="contact__card" data-reveal>
      <p class="contact__ct">Everything on this page, in one plugin.</p>
      <ol class="steps3">
        <li><span>01</span>Referral links &amp; first-party tracking</li>
        <li><span>02</span>Per-item commissions &amp; hold periods</li>
        <li><span>03</span>Affiliate dashboard &amp; payouts</li>
      </ol>
      ${btn('Start Your Affiliate Program', CTA_URL, 'block', ext)}
    </div>
  </div>
</section>`;

export default () => page({
  title: 'Features — FlyAffiliate',
  desc: 'Track referrals, manage commissions, and handle payouts from WordPress. Referral links, per-item commissions, hold periods, affiliate dashboards, payouts, and Dokan support.',
  cur: 'Features',
  body: [hero, `<div class="jump-scope">${jump}${groups}${more}</div>`, dokan, flowSec, cta].join('\n'),
});
