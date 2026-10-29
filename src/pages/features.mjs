import { page, btn, eyebrow, bracket, pad, ic, CTA_URL, spark,
  uiReferralLink, uiPerItem, uiRates, uiHold, uiAffDash, uiPayout } from '../lib.mjs';
import { procCards } from './home.mjs';

const ext = ' target="_blank" rel="noopener"';

const logoMark = '<svg viewBox="0 0 145 145" aria-hidden="true"><rect width="145" height="145" rx="37" fill="#0043DA"/><path d="M69.3 73.4h35.6c-.5 8.9-3.1 16.5-9.6 22.9-10.9 10.2-20.5 9.4-34.3 9.4h-12.4c-3.1 0-8.7-2.5-8.7-8.1V82.2c0-6.2 4.8-8.8 9.3-8.8Zm17.3-35.2c-.8 10.4-7.8 30.2-28.9 32.3H39.9V47.1c0-6.4 5.1-8.9 9.3-8.9Z" fill="#fff"/></svg>';
const hi = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const HERO_NAV = [['Dashboard', hi('<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>')], ['Affiliates', hi('<circle cx="9" cy="9" r="3.2"/><path d="M3 19c.9-2.9 3.1-4.5 6-4.5s5.1 1.6 6 4.5"/><circle cx="17" cy="8" r="2.5"/><path d="M16 13.6c2.3.1 4 1.5 5 4"/>')], ['Commissions', hi('<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>')], ['Visits', hi('<path d="M4 20V4m0 16h16"/><path d="m7.5 15 3.5-4 3 2.5 5-6.5"/>')], ['Payouts', hi('<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="4" y="8" width="16" height="11" rx="2.5"/>')], ['Extensions', hi('<path d="M9 4v4M15 4v4M6 8h12v4a6 6 0 0 1-12 0zM12 18v2"/>')], ['Settings', hi('<circle cx="12" cy="12" r="3"/><path d="M12 3v2.2m0 13.6V21m9-9h-2.2M5.2 12H3m15.4-6.4-1.6 1.6M7.2 16.8l-1.6 1.6m12.8 0-1.6-1.6M7.2 7.2 5.6 5.6"/>')]];
const HERO_KPI = [['Referral revenue', '$48,250', '+12.4%', hi('<circle cx="12" cy="12" r="8.5"/><path d="M14.6 9.3c-.5-.9-1.5-1.4-2.6-1.4-1.5 0-2.6.8-2.6 2s1.1 1.7 2.6 2 2.7.8 2.7 2.1-1.2 2.1-2.7 2.1c-1.2 0-2.3-.6-2.8-1.6M12 6.3v1.6m0 8.3v1.5"/>')], ['Net revenue', '$43,425', '+9.8%', hi('<path d="M12 4v16M5 8h14M7 8l-3 7h6zM17 8l-3 7h6z"/>')], ['Total paid', '$3,960', '+4.1%', hi('<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M16 13.5h1.5"/>')], ['Total unpaid', '$865', '', hi('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>')]];
const heroPts = [14, 20, 17, 26, 23, 31, 28, 37, 33, 42, 39, 48, 45, 54];
const heroPts2 = [6, 9, 8, 12, 10, 14, 13, 17, 15, 19, 18, 22, 21, 25];
const hp = (a, w = 640, h = 140) => a.map((v, i) => `${(i / (a.length - 1) * w).toFixed(1)},${(h - v / 60 * h).toFixed(1)}`).join(' ');
const uiOverview = () => `
<div class="hd" aria-hidden="true">
  <div class="hd__win">
    <div class="hd__chrome"><i></i><i></i><i></i><span>yourstore.com/wp-admin/admin.php?page=flyaffiliate</span></div>
    <div class="hd__app">
      <aside class="hd__side">
        <p class="hd__brand">${logoMark}FlyAffiliate <em>1.0.0</em></p>
        ${HERO_NAV.map(([t, i], k) => `<span class="${k === 0 ? 'on' : ''}">${i}${t}</span>`).join('')}
      </aside>
      <div class="hd__main">
        <div class="hd__top"><div><b>Dashboard</b><small>How the affiliate programme is doing</small></div><span class="hd__range">${hi('<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>')}Last 30 days</span></div>
        <div class="hd__kpis">${HERO_KPI.map(([k, v, d, i]) => `<div><span class="hd__ki">${i}</span><small>${k}</small><b>${v}</b>${d ? `<em>${d}</em>` : '<em class="hd__muted">Awaiting payout</em>'}</div>`).join('')}</div>
        <div class="hd__row">
          <div class="hd__chart"><div class="hd__ch"><b>Visits per day</b><span><i></i>Visits<i class="on"></i>Converted</span></div>
            <svg viewBox="0 0 640 140" preserveAspectRatio="none"><defs><linearGradient id="hdg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0043DA" stop-opacity=".28"/><stop offset="1" stop-color="#0043DA" stop-opacity="0"/></linearGradient></defs><polygon points="0,140 ${hp(heroPts)} 640,140" fill="url(#hdg)"/><polyline points="${hp(heroPts)}" fill="none" stroke="#0043DA" stroke-width="2.5" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><polyline points="${hp(heroPts2)}" fill="none" stroke="#9fc0ff" stroke-width="2" stroke-dasharray="5 5" vector-effect="non-scaling-stroke"/></svg>
          </div>
          <div class="hd__top3"><b>Most valuable affiliates</b>${[['MK', 'Maya Khan', '$612', 18, 92], ['AL', 'Ava Lim', '$448', 140, 68], ['JR', 'Jonas Reed', '$305', 200, 46]].map(([i, n, a, h, w]) => `<div><span class="av" style="--h:${h}">${i}</span><span><span>${n}</span><i style="--w:${w}%"></i></span><em>${a}</em></div>`).join('')}</div>
        </div>
        <div class="hd__row hd__row--b">
          <div class="hd__list"><div class="hd__ch"><b>Recent commissions</b><span>All →</span></div>${[['MK', 'Maya Khan', 'Order #2481', '$18.40', 'pending', 18], ['AL', 'Ava Lim', 'Order #2470', '$22.00', 'paid', 140], ['JR', 'Jonas Reed', 'Order #2466', '$9.60', 'unpaid', 200]].map(([i, n, o, a, st, h]) => `<div class="hd__li"><span class="av" style="--h:${h}">${i}</span><span>${n}<small>${o}</small></span><b>${a}</b><span class="st st--${st}">${st[0].toUpperCase() + st.slice(1)}</span></div>`).join('')}</div>
          <div class="hd__list"><div class="hd__ch"><b>Highest converting products</b><span>All →</span></div>${[['Leather Tote', '8.2%'], ['Card Holder', '6.5%'], ['Wool Overshirt', '5.1%']].map(([n, r], k) => `<div class="hd__li hd__li--p"><span class="cb__th cb__th--p${k + 1}">${hi('<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>')}</span><span>${n}<small>Conversion</small></span><b>${r}</b></div>`).join('')}</div>
        </div>
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
        <div class="phero__row" data-reveal>${btn('Start Your Affiliate Program', CTA_URL, '', ext)}${btn('Free WordPress plugin', CTA_URL, 'secondary', ext)}</div>
      </div>
    </div>
    <div class="phero__media phero__media--fbg" data-reveal>${uiOverview()}</div>
  </div>
</section>`;

const uiNewPayout = () => `
<div class="ui ui--np">
  <div class="ui__bar"><span class="ui__title">New payout</span><span class="ui__pill">Manual</span></div>
  <div class="ui__body ui-np">
    <div class="ui-np__l">
      <p class="ui-np__k">Who to pay</p>
      <span class="ui-radio on">Everyone with an unpaid balance</span>
      <span class="ui-radio">Only the affiliates I choose</span>
      <span class="ui-radio">Everyone except the affiliates I choose</span>
      <p class="ui-np__k">Minimum amount</p><span class="ui-np__in">$50.00</span>
      <p class="ui-np__k">Period</p><span class="ui-np__in">Any time</span>
    </div>
    <div class="ui-np__r">
      <p class="ui-np__k">Preview</p>
      ${[['MK', 'Maya Khan', '$212.80', 18], ['JR', 'Jonas Reed', '$96.40', 200], ['AL', 'Ava Lim', '$148.00', 140]].map(([i, n, a, h]) => `<div class="ui-np__p"><span class="av" style="--h:${h}">${i}</span><span>${n}</span><b>${a}</b></div>`).join('')}
      <div class="ui-np__tot"><span>3 affiliates</span><b>$457.20</b></div>
      <span class="ui__solid ui-np__btn">Create payout</span>
    </div>
  </div>
</div>`;

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
  ['payouts', 'Payouts', 'Pay Affiliates Your Way', 'payouts', [
    ['Choose Who to Pay', 'Pay everyone or selected affiliates.'],
    ['Set a Minimum', 'Only include balances above your threshold.'],
    ['Review First', 'Preview amounts before creating payouts.'],
    ['Keep Records', 'Mark payments as paid and export CSV records.'],
  ], `<div class="fstack">${uiNewPayout()}</div>`],
];


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
    <div class="tk__head split-head">
      <div>
        <p class="tk__pill" data-reveal>Tracking</p>
        <h2 id="tracking-h" class="h2 tk__h" data-reveal>Know Where Every <br>Sale <span class="tk__chip" aria-hidden="true">${ic.link}</span> Came From</h2>
      </div>
      <p class="lead muted" data-reveal>Give every affiliate a link, then follow each visit and order <br>back to the person who sent it, right on your own site.</p>
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
        <div class="cb__row"><p class="tk__pill">Commissions</p></div>
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
        <div class="cb__field" aria-hidden="true"><span>Default rate</span><div class="cb__input">10<em>%</em></div><small>Used when the product doesn’t set its own rate.</small></div>
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
    <div class="hs__media art art--hold" data-reveal>${vis}</div>
    <div class="hs__copy">
      <div class="cb__row" data-reveal><p class="tk__pill">Hold &amp; status</p></div>
      <h2 id="hold-h" class="h2 hs__h" data-reveal>Pay Commissions When They’re Ready</h2>
      <ul class="hs__list" data-reveal-stagger>
        ${rows.map(([t, d], k) => `<li><span class="hs__ic" aria-hidden="true">${[ic.clock, icSync, icRefund, icList][k]}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
      </ul>
  </div>
</section>`;

// Affiliate dashboard: bento after the "Design simple and fast" inspiration — visual on top, title + text below
const pts = [8, 14, 11, 18, 15, 24, 20, 30, 26, 22, 31, 28, 38, 34, 44];
const line = (arr, h = 120, w = 520) => arr.map((v, i) => `${(i / (arr.length - 1) * w).toFixed(1)},${(h - v / 48 * h).toFixed(1)}`).join(' ');
const affSec = (gi) => `
<section class="sec fgroup ab" id="affiliates" aria-labelledby="affiliates-h">
  <div class="wrap ab__grid" data-reveal-stagger>
    <div class="ab__card ab__hero">
      <div class="ab__win" aria-hidden="true">
        <div class="ab__chrome"><i></i><i></i><i></i><span>yourstore.com/affiliate-dashboard</span></div>
        <div class="ab__body">
          <aside>${['Dashboard', 'Referral links', 'Commissions', 'Visits', 'Payouts', 'Settings'].map((t, k) => `<span class="${k === 0 ? 'on' : ''}">${t}</span>`).join('')}</aside>
          <div class="ab__main"><b>Welcome back, Maya</b><small>Here’s how your links are doing</small><div class="ab__kpis"><span><small>Balance</small>$212.80</span><span><small>Visits</small>1,284</span><span><small>Commissions</small>46</span></div></div>
        </div>
      </div>
      <div class="ab__copy">
        <div class="cb__row"><p class="tk__pill">Affiliate dashboard</p></div>
        <h2 id="affiliates-h" class="h2 ab__h">Everything Affiliates Need to See</h2>
      </div>
    </div>
    <div class="ab__card ab__links">
      <div class="ab__vis" aria-hidden="true">${['/?affiliate=1', '/tote?affiliate=1', '/sale?affiliate=1'].map(u => `<span class="ab__lk">${ic.link}${u}</span>`).join('')}<span class="ab__copybtn">${ic.copy}Copy link</span></div>
      <h3 class="ab__t">Referral Links</h3><p class="ab__d">Access and generate links to share.</p>
    </div>
    <div class="ab__card ab__pay">
      <div class="ab__vis" aria-hidden="true"><div class="ab__ticket"><small>Payout history</small><div><span>Sep 30 payout</span><b>$184.00</b></div><div><span>Aug 31 payout</span><b>$146.50</b></div><em class="st st--paid">Paid</em></div><span class="ab__badge">${ic.wallet}<b>2</b></span></div>
      <h3 class="ab__t">Payouts</h3><p class="ab__d">See payout information in one place.</p>
    </div>
    <div class="ab__card ab__bal">
      <div class="ab__vis" aria-hidden="true"><div class="ab__amount"><small>Available balance</small><b>$212.80</b><div><span class="st st--unpaid">Unpaid $212.80</span><span class="st st--pending">Pending $48.20</span></div></div></div>
      <h3 class="ab__t">Balance</h3><p class="ab__d">Know how much is currently available.</p>
    </div>
    <div class="ab__card ab__vc">
      <div class="ab__vis" aria-hidden="true">
        <div class="ab__stats">${[[ic.chart, '1,284', 'Visits'], [ic.check, '3.6%', 'Conversion'], [ic.coin, '46', 'Commissions'], [ic.wallet, '$612.40', 'Earned']].map(([i, v, l]) => `<span>${i}<b>${v}</b><small>${l}</small></span>`).join('')}</div>
        <div class="ab__chart"><svg viewBox="0 0 520 120" preserveAspectRatio="none"><polyline class="ab__l2" points="${line([6, 9, 8, 12, 10, 14, 13, 17, 15, 14, 18, 16, 21, 19, 24])}"/><polygon class="ab__area" points="0,120 ${line(pts)} 520,120"/><polyline class="ab__l1" points="${line(pts)}"/></svg><span class="ab__tip">1,284 visits</span></div>
      </div>
      <h3 class="ab__t">Visits &amp; Commissions</h3><p class="ab__d">See referral activity and earnings.</p>
    </div>
  </div>
</section>`;

const groups = GROUPS.map(([id, label, h, art, rows, vis], gi) => id === 'tracking' ? trackSec(gi) : id === 'commissions' ? commSec(gi) : id === 'hold' ? holdSec(gi, rows, vis) : id === 'affiliates' ? affSec(gi) : `
<section class="sec fgroup${gi % 2 ? ' fgroup--flip' : ''}" id="${id}" aria-labelledby="${id}-h">
  <div class="wrap">
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
// More features (light take on the "AI tools" inspiration): icon cards left, a sticky product view right
const mi = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const MORE_IC = [
  mi('<circle cx="10" cy="8.5" r="3.6"/><path d="M3.5 19.5c1.1-3.3 3.6-5 6.5-5s5.4 1.7 6.5 5M18.5 7v6M15.5 10h6"/>'),
  mi('<circle cx="9" cy="9" r="3.2"/><path d="M3 19c.9-2.9 3.1-4.5 6-4.5s5.1 1.6 6 4.5"/><circle cx="17" cy="8" r="2.5"/><path d="M16 13.6c2.3.1 4 1.5 5 4"/>'),
  mi('<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.2"/><circle cx="4.5" cy="12" r="1.2"/><circle cx="4.5" cy="18" r="1.2"/>'),
  mi('<path d="M12 5v14M5 12h14"/>'),
  mi('<path d="m14.5 5.5 4 4L9 19H5v-4z"/><path d="m12.5 7.5 4 4"/>'),
  mi('<path d="M3 4h2.2l2.2 11h10.8L20.5 7H6.4"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>'),
  mi('<rect x="3.5" y="6" width="17" height="12" rx="2.5"/><path d="M3.5 10h17M7 14.5h4"/>'),
  mi('<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M16 13.5h1.5"/>'),
  mi('<path d="M12 4v11m-4.5-4.5L12 15l4.5-4.5M5 19h14"/>'),
  mi('<path d="M12 3.5 19 6v5.5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>'),
  mi('<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6M3 3l18 18"/>'),
  mi('<path d="M20.5 13.5 13.5 20.5a1.5 1.5 0 0 1-2.1 0L4 13.1V4h9.1l7.4 7.4a1.5 1.5 0 0 1 0 2.1Z"/><circle cx="8.5" cy="8.5" r="1.3"/>'),
];
const LEDGER = [['MK', 'Maya Khan', '#2481', '$18.40', 'pending', 18], ['JR', 'Jonas Reed', '#2476', '$9.60', 'unpaid', 200], ['AL', 'Ava Lim', '#2470', '$22.00', 'paid', 140], ['TO', 'Tomi Ola', '#2463', '$6.25', 'rejected', 280], ['SP', 'Sara Pérez', '#2459', '$4.80', 'unpaid', 30]];
const more = `
<section class="sec mf" id="more" aria-labelledby="more-h">
  <div class="wrap mf__wrap">
    <div class="mf__head">
      <h2 id="more-h" class="h2" data-reveal>More Features</h2>
      <p class="lead muted mf__sub" data-reveal>The rest of the toolkit for running your program day to day.</p>
    </div>
    <ul class="mf__cards" data-reveal-stagger>
        ${MORE.map(([t, d], k) => `<li class="mf__c"><span class="mf__ic mf__ic--${k % 6}" aria-hidden="true">${MORE_IC[k]}</span><h3>${t}</h3><p>${d}</p></li>`).join('\n        ')}
    </ul>
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
        <div class="dk__top"><p class="soon">Coming Soon</p></div>
        <img class="dk__logo" src="/assets/img/dokan-logo.svg" alt="Dokan" width="231" height="63">
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
    <div class="split-head">
      <h2 id="fw-h" class="h2" data-reveal>From Click to <br>Commission to Payout</h2>
      <p class="lead muted" data-reveal>Six steps run your whole program, from the first <br>affiliate signup to the payout you send.</p>
    </div>
    <div class="wv" data-reveal>
      <svg class="wv__path" viewBox="0 0 1200 250" preserveAspectRatio="none" aria-hidden="true"><path d="M164 60 C200.0 60 200.0 190 236 190 M364 190 C400.0 190 400.0 60 436 60 M564 60 C600.0 60 600.0 190 636 190 M764 190 C800.0 190 800.0 60 836 60 M964 60 C1000.0 60 1000.0 190 1036 190" vector-effect="non-scaling-stroke"/></svg>
      <ol class="wv__list">
        ${STEPS.map(([t, d, , , vis], k) => `<li class="wv__s${k % 2 ? ' wv__s--dn' : ''}"><span class="wv__ring" aria-hidden="true">${vis.replace('proc__glyph', 'wv__ic')}</span><h3 class="wv__t">${t}</h3><p>${d}</p></li>`).join('')}
      </ol>
    </div>
    <p class="wv__note" data-reveal><span class="wv__note-ic" aria-hidden="true">${ic.wp || ic.check}</span>One affiliate workflow. One WordPress site.</p>
  </div>
</section>`;


export default () => page({
  title: 'Features — FlyAffiliate',
  desc: 'Track referrals, manage commissions, and handle payouts from WordPress. Referral links, per-item commissions, hold periods, affiliate dashboards, payouts, and Dokan support.',
  cur: 'Features',
  bodyClass: 'page-features',
  body: [hero, `<div class="jump-scope">${groups}${more}</div>`, dokan, flowSec].join('\n'),
});
