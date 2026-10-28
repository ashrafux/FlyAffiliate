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

// Tracking: card grid after the "Explore our talent" inspiration — badge + heading with an inline icon chip, 2×2 cards with a live detail strip
const TRACK = [
  ['Unique Referral Links', 'Give every affiliate a unique tracking link.', ic.link, `<span class="tk__url"><span>yourstore.com/?affiliate=<b>1</b></span><i>${ic.copy}</i></span>`],
  ['Product &amp; Page Links', 'Create links for specific products or pages.', ic.file, `<span class="tk__chips"><span>/tote?affiliate=1</span><span>/sale?affiliate=1</span></span>`],
  ['First-Party Tracking', 'Track referrals directly on your WordPress site.', ic.shield, `<span class="tk__chips"><span>${ic.chart}Visits 1,284</span><span>${ic.cart}Orders 46</span></span>`],
  ['30-Day Attribution', 'Keep referral attribution for 30 days by default.', ic.clock, `<span class="tk__days">${Array.from({ length: 10 }, (_, i) => `<i${i < 10 ? ' class="on"' : ''}></i>`).join('')}<b>30 days</b></span>`],
];
const trackSec = (gi) => `
<section class="sec fgroup tk" id="tracking" aria-labelledby="tracking-h">
  <div class="wrap">
    <div class="tk__head">
      <div>
        <p class="tk__pill" data-reveal>Tracking</p>
        <h2 id="tracking-h" class="h2 tk__h" data-reveal>Know Where Every Sale <span class="tk__chip" aria-hidden="true">${ic.link}</span> Came From</h2>
      </div>
      ${bracket(`${pad(gi + 1)} / ${pad(GROUPS.length)}`)}
    </div>
    <div class="tk__grid" data-reveal-stagger>
      ${TRACK.map(([t, d, icon, strip], k) => `<article class="tk__card${k === 1 ? ' tk__card--dark' : ''}">
        <span class="tk__ic" aria-hidden="true">${icon}</span>
        <h3 class="tk__t">${t}</h3>
        <p class="tk__d">${d}</p>
        <div class="tk__foot">${strip}<a class="tk__go" href="/docs/" aria-label="${t.replace('&amp;', 'and')} in the docs">${ic.arrow}</a></div>
      </article>`).join('')}
    </div>
  </div>
</section>`;

// Commissions: bento after the "Manage your restaurant" inspiration — headline card with an order mockup, a per-item table card, three small cards
const svgBag = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke-linecap="round"/></svg>';
const svgCard = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3.5" y="6" width="17" height="12" rx="2.5"/><path d="M3.5 10h17" /></svg>';
const svgGift = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="4" y="9" width="16" height="11" rx="1.5"/><path d="M3 9h18M12 9v11M12 9c-2-4-6-4-6-1.5S10 9 12 9c2 0 6-1 6-1.5S14 5 12 9Z"/></svg>';
const ITEMS = [['Leather Tote', '$120.00', '10', '$12.00', svgBag, 'p1', true], ['Card Holder', '$40.00', '10', '$4.00', svgCard, 'p2', false], ['Gift Wrap', '$5.00', '10', '$0.50', svgGift, 'p3', false]];
const commSec = (gi) => `
<section class="sec fgroup cb" id="commissions" aria-labelledby="commissions-h">
  <div class="wrap">
    <div class="cb__top">
      <div class="cb__card cb__hero" data-reveal>
        <div class="cb__row"><p class="tk__pill">Commissions</p>${bracket(`${pad(gi + 1)} / ${pad(GROUPS.length)}`)}</div>
        <h2 id="commissions-h" class="h2 cb__h">Calculate Commissions Per Product</h2>
        <div class="cb__order" aria-hidden="true">
          <div class="cb__order-hd"><b>Order #2481</b><span class="st st--pending">Pending</span></div>
          ${ITEMS.map(([n, , r, c, icon, tone]) => `<div class="cb__order-row"><span class="cb__th cb__th--${tone}">${icon}</span><span>${n}<small>${r}% per item</small></span><b>${c}</b></div>`).join('')}
          <div class="cb__order-tot"><span>Commission</span><b>$16.50</b></div>
        </div>
      </div>
      <div class="cb__card cb__table-card" data-reveal>
        <h3 class="cb__t">Per-Item Commissions</h3>
        <p class="cb__d">Calculate earnings for each order item.</p>
        <div class="cb__table" aria-hidden="true">
          <div class="cb__tr cb__tr--hd"><i class="cb__cb"></i><span>Item</span><span>Rate</span><span>Commission</span></div>
          ${ITEMS.map(([n, , r, c, icon, tone, on]) => `<div class="cb__tr"><i class="cb__cb${on ? ' on' : ''}">${on ? ic.check : ''}</i><span class="cb__item"><span class="cb__th cb__th--${tone}">${icon}</span>${n}</span><span class="cb__rate">${r}<em>%</em></span><b>${c}</b></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="cb__bottom" data-reveal-stagger>
      <div class="cb__card cb__sm">
        <h3 class="cb__t">Product-Level Rates</h3>
        <p class="cb__d">Apply product-specific commission rates where configured.</p>
        <div class="cb__chips" aria-hidden="true"><span>Leather Tote <b>12%</b></span><span>Canvas Sneakers <b>8%</b></span><span>Wool Overshirt <b>15%</b></span></div>
      </div>
      <div class="cb__card cb__sm">
        <h3 class="cb__t">Global Default Rate</h3>
        <p class="cb__d">Set a default rate for your program.</p>
        <div class="cb__field" aria-hidden="true"><span>Default rate</span><div class="cb__input">10<em>%</em></div></div>
      </div>
      <div class="cb__card cb__sm">
        <h3 class="cb__t">Maximum Commission</h3>
        <p class="cb__d">Keep commissions within your defined limit.</p>
        <div class="cb__cap" aria-hidden="true"><div><span>Maximum rate</span><b>50%</b></div><i style="--p:20%"></i><small><span>Default 10%</span><span>Cap 50%</span></small></div>
      </div>
    </div>
  </div>
</section>`;

// Hold & status: image card left, heading + icon rows + CTA right (after the "Tailored services" inspiration)
const icSync = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.6-4.5M4 13a8 8 0 0 0 14.6 4.5"/><path d="M5 3v4h4M19 21v-4h-4"/></svg>';
const icRefund = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>';
const icList = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.3"/><circle cx="4.5" cy="12" r="1.3"/><circle cx="4.5" cy="18" r="1.3"/></svg>';
const holdSec = (gi, rows, vis) => `
<section class="sec fgroup hs" id="hold" aria-labelledby="hold-h">
  <div class="wrap hs__grid">
    <div class="hs__media art art--stone" data-reveal>${vis}</div>
    <div class="hs__copy">
      <div class="cb__row" data-reveal><p class="tk__pill">Hold &amp; status</p>${bracket(`${pad(gi + 1)} / ${pad(GROUPS.length)}`)}</div>
      <h2 id="hold-h" class="h2 hs__h" data-reveal>Pay Commissions When They’re Ready</h2>
      <ul class="hs__list" data-reveal-stagger>
        ${rows.map(([t, d], k) => `<li><span class="hs__ic" aria-hidden="true">${[ic.clock, icSync, icRefund, icList][k]}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
      </ul>
      <div class="hs__cta" data-reveal>${btn('Start Your Affiliate Program', CTA_URL, '', ' target="_blank" rel="noopener"')}</div>
    </div>
  </div>
</section>`;

const groups = GROUPS.map(([id, label, h, art, rows, vis], gi) => id === 'tracking' ? trackSec(gi) : id === 'commissions' ? commSec(gi) : id === 'hold' ? holdSec(gi, rows, vis) : `
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
<section class="sec sec--dk art" id="dokan" aria-labelledby="fd-h">
  <div class="wrap">
    <div class="dk" data-reveal>
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
// workflow: six ring steps on a dashed wave (CartPilot "three steps" pattern)
const flowSec = `
<section class="sec" id="workflow" aria-labelledby="fw-h">
  <div class="wrap">
    <div class="wv__head">
      <h2 id="fw-h" class="h2" data-reveal>From Click to Commission to Payout</h2>
      <p class="lead muted" data-reveal>Recruit → Share → Track → Calculate → Hold → Pay</p>
    </div>
    <div class="wv" data-reveal>
      <svg class="wv__path" viewBox="0 0 1200 250" preserveAspectRatio="none" aria-hidden="true"><path d="M164 60 C200.0 60 200.0 190 236 190 M364 190 C400.0 190 400.0 60 436 60 M564 60 C600.0 60 600.0 190 636 190 M764 190 C800.0 190 800.0 60 836 60 M964 60 C1000.0 60 1000.0 190 1036 190" vector-effect="non-scaling-stroke"/></svg>
      <ol class="wv__list">
        ${STEPS.map(([t, d, , , vis], k) => `<li class="wv__s${k % 2 ? ' wv__s--dn' : ''}"><span class="wv__ring" aria-hidden="true">${vis.replace('proc__glyph', 'wv__ic')}<b>${k + 1}</b></span><h3 class="wv__t">${t}</h3><p>${d}</p></li>`).join('')}
      </ol>
    </div>
    <p class="wv__note" data-reveal><span class="wv__note-ic" aria-hidden="true">${ic.wp || ic.check}</span>One affiliate workflow. One WordPress site.</p>
  </div>
</section>`;


export default () => page({
  title: 'Features — FlyAffiliate',
  desc: 'Track referrals, manage commissions, and handle payouts from WordPress. Referral links, per-item commissions, hold periods, affiliate dashboards, payouts, and Dokan support.',
  cur: 'Features',
  cta: { h: 'Start Your Affiliate Program', p: 'Your products already have people talking about them. Give them a way to promote your store and earn from the sales they generate.', note: 'Free WordPress plugin.' },
  body: [hero, `<div class="jump-scope">${jump}${groups}${more}</div>`, dokan, flowSec].join('\n'),
});
