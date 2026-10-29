import { page, btn, flow, pad, ic, CTA_URL, spark,
  uiLedger, uiHold, uiRefund, uiLinks, uiVisits, uiBalance } from '../lib.mjs';

const ext = ' target="_blank" rel="noopener"';

const CHIPS = [['Recruit', '#7cc8ff'], ['Track', '#86ecaa'], ['Commissions', '#ff86ad'], ['Hold', '#f2ee74'], ['Payouts', '#ec97ff']];
// 3. Trust ticker
const WORKS = [
  ['Free Plugin', '#2f6fd6', ic.bolt],
  ['Per-Item Commissions', '#e0367a', ic.coin],
  ['Hold Periods', '#d97706', ic.clock],
  ['Batch Payouts', '#2f9e44', ic.wallet],
  ['CSV Export', '#4f46e5', ic.file],
  ['No Third-Party Network', '#0ea5a4', ic.shield],
  ['Built by weDevs', '#8d4dff', ic.store],
];
const workRow = hidden => `<ul class="logos__row"${hidden ? ' aria-hidden="true"' : ''}>${WORKS.map(([t, c, i]) => `<li><span class="logos__ic" style="color:${c}">${i}</span>${t}</li>`).join('')}</ul>`;

const hero = `
<section class="uhero" aria-labelledby="hero-h">
  <div class="uhero__panel">
    <div class="uhero__copy">
      <div class="uhero__main">
        <div class="uhero__proof" data-reveal>
          <span class="uhero__avs" aria-hidden="true"><img src="/assets/img/demo-avatar-1.jpg" alt="" width="34" height="34"><img src="/assets/img/demo-avatar-2.jpg" alt="" width="34" height="34"><span>+</span></span>
          <span>For customers, creators &amp; partners</span>
        </div>
        <h1 id="hero-h" class="uhero__h1" data-reveal>Run Your Own Affiliate Program on WordPress</h1>
        <p class="uhero__p" data-reveal>Turn customers, creators, and partners into a sales channel. FlyAffiliate lets you recruit affiliates, track referrals, manage commissions, and handle payouts from WordPress.</p>
        <div class="uhero__btns" data-reveal>
          ${btn('Start Your Affiliate Program', CTA_URL, '', ext)}
          ${btn('Explore Features', '/features/', 'tertiary')}
        </div>
      </div>
    </div>
    <div class="uhero__visual">
      <div class="uhero__img" aria-hidden="true"></div>
      <div class="uhero__chips" role="list" aria-label="What FlyAffiliate handles">
        ${[CHIPS.slice(0, 3), CHIPS.slice(3)].map(row => `<div class="uhero__chiprow" data-reveal-stagger>${row.map(([t, c]) => `<span class="uhero__chip" role="listitem"><span class="uhero__chip-ic" style="background:${c}">${ic.spark}</span>${t}</span>`).join('')}</div>`).join('\n        ')}
      </div>
    </div>
  </div>
  <div class="logos" aria-label="Highlights">
    <div class="logos__track">${workRow(false)}${workRow(true)}</div>
  </div>
</section>`;

// Mockups for the commission sections: one default rate per item, capped at a maximum rate.
const uiPerItem = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Order #2481</span><span class="st st--pending">Pending</span></div>
  <div class="ui__body ui-lines">
    <div><span>Leather Tote</span><span>10%</span><b>$12.00</b></div>
    <div><span>Card Holder</span><span>10%</span><b>$4.00</b></div>
    <div><span>Gift Wrap</span><span>10%</span><b>$0.50</b></div>
    <div class="ui-total"><span>Commission</span><b>$16.50</b></div>
  </div>
</div>`;
const uiDefaultRate = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Commission settings</span></div>
  <div class="ui__body">
    <div class="ui-cap"><span class="ui-k">Default rate</span><span class="ui-v">10%</span></div>
    <div class="ui-lines ui-lines--tight"><div><span>Applies to</span><b>All products</b></div></div>
  </div>
</div>`;
const uiMaxRate = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Maximum commission</span></div>
  <div class="ui__body">
    <div class="ui-cap"><span class="ui-k">Maximum rate</span><span class="ui-v">20%</span></div>
    <div class="ui-meter"><i style="width:50%"></i></div>
    <div class="ui-capnote"><span>Default 10%</span><b>Cap 20%</b></div>
  </div>
</div>`;
const uiWooOrder = () => `
<div class="ui ui--woo">
  <div class="ui__bar"><span class="ui__title">Order #2481 <small>· Processing</small></span><span class="ui__pill ui__pill--acc">Referred by maya</span></div>
  <div class="ui__body ui-lines">
    <div class="ui-lh"><span>Item</span><span>Qty</span><span>Total</span><span>Commission</span></div>
    <div class="ui-l4"><span>Leather Tote</span><span>1</span><span>$120.00</span><b>$12.00</b></div>
    <div class="ui-l4"><span>Card Holder</span><span>1</span><span>$40.00</span><b>$4.00</b></div>
    <div class="ui-l4"><span>Gift Wrap</span><span>1</span><span>$5.00</span><b>$0.50</b></div>
    <div class="ui-total"><span>Affiliate commission</span><b>$16.50</b></div>
  </div>
  <div class="ui__foot ui__foot--chips"><span>${ic.check}Classic checkout</span><span>${ic.check}Block checkout</span></div>
</div>`;

// 4. Audience
const wpIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/><path d="M4.5 8.5 9 20m-.5-11.5L13 20l3-9m-3.5-2.5L17 20M7 8.5h4m2 0h4" stroke-linecap="round"/></svg>';
const AUD = [
  ['Bring Affiliates On Board', 'Simple registration and email activation.', ic.user],
  ['Give Every Affiliate a Link', 'Unique referral links for your store, pages and products.', ic.link],
  ['Track Referred Sales', 'Connect affiliate referrals to WooCommerce orders.', ic.cart],
  ['Keep It in WordPress', 'Manage your entire program from your own site.', wpIcon],
];
const scards = arr => `<div class="scards" data-reveal-stagger>${arr.map(([t, d, icon], i) => `
    <article class="scard${icon ? ' scard--icon' : ''}"><h3 class="scard__t">${t}</h3><p class="scard__d">${d}</p><div class="scard__foot">${icon ? `<span class="scard__ic" aria-hidden="true">${icon}</span>` : `<i class="dot" aria-hidden="true"></i><span class="scard__n" aria-hidden="true">${pad(i + 1)}</span>`}</div></article>`).join('')}
  </div>`;
const caption = t => `<p class="caption" data-reveal><span class="dot" aria-hidden="true"></span>${t}</p>`;

const audience = `
<section class="sec" id="audience" aria-labelledby="aud-h">
  <div class="wrap">
    <div class="au__head">
      <h2 id="aud-h" class="h2" data-reveal>Turn Your Audience <br>Into Sales</h2>
      <p class="au__sub" data-reveal>Give the people who recommend your products <br>a way to earn from every sale they bring.</p>
    </div>
    <div class="au" data-reveal-stagger>
      <article class="au__card au__photo">
        <span class="au__pic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="10" cy="8.5" r="3.6"/><path d="M3.5 19.5c1.1-3.3 3.6-5 6.5-5s5.4 1.7 6.5 5M18.5 7v6M15.5 10h6"/></svg></span>
        <div class="au__photo-in">
          <h3 class="au__big">${AUD[0][0]}</h3>
          <p class="au__pd">${AUD[0][1]}</p>
        </div>
      </article>
      <article class="au__card">
        <div><h3 class="au__t">${AUD[1][0]}</h3><p class="au__d">${AUD[1][1]}</p></div>
        <div class="au__foot">
          <p class="au__k"><span>yourstore.com/?affiliate=</span><b>1</b></p>
          <div class="au__avs" aria-hidden="true">${[1, 2, 3, 4].map(n => `<img src="/assets/img/demo-avatar-${n}.jpg" alt="" width="56" height="56">`).join('')}<span class="au__plus">${ic.link}</span></div>
        </div>
      </article>
      <article class="au__card">
        <div class="au__order" aria-hidden="true"><span class="au__oi">${ic.cart}</span><div><b>Order #2481</b><small>Referred by Maya</small></div><span class="st st--pending">Pending</span></div>
        <div><h3 class="au__t">${AUD[2][0]}</h3><p class="au__d">${AUD[2][1]}</p></div>
      </article>
    </div>
  </div>
</section>`;

// 5. Commission ledger
const STATUSES = [
  ['Pending', 'Still waiting to become payable.'],
  ['Unpaid', 'Ready for a payout.'],
  ['Paid', 'Payment completed.'],
  ['Rejected', 'No longer payable.'],
];
const ledger = `
<section class="sec" id="ledger" aria-labelledby="led-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="led-h" class="h2" data-reveal>Every Commission, <br>Clearly Tracked</h2>
      <p class="lead muted" data-reveal>From the first referral to the final payout, <br>keep every commission in one clear place.</p>
    </div>
    ${flow(['Referral', 'Visit', 'Order', 'Commission', 'Payout'])}
    <figure class="work" data-reveal>
      <div class="work__media art art--meadow">${uiLedger()}</div>
    </figure>
    <div class="status4" data-reveal-stagger>
      ${STATUSES.map(([s, d]) => `<article class="status"><h3 class="st st--${s.toLowerCase()}">${s}</h3><p>${d}</p></article>`).join('')}
    </div>
  </div>
</section>`;

// 6. Commission rules — accordion list (left) driving a visual card (right)
const pctIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M18 6 6 18"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>';
const capIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h16M6 14l4-4 3 3 5-6"/><path d="M4 5h16" stroke-dasharray="2 2.5"/></svg>';
const RULES = [
  { t: 'Per-Item Commissions', d: 'Calculate commissions for each product in an order.', icon: ic.coin, vis: uiPerItem(), chips: ['3 items'], meter: ['Commission on this order', '$16.50', 100] },
  { t: 'One Default Rate', d: 'Set one rate that applies across your store.', icon: pctIcon, vis: uiDefaultRate(), chips: ['All products'], meter: ['Default rate', '10%', 50] },
  { t: 'Maximum Commission', d: 'Keep every commission within your limits.', icon: capIcon, vis: uiMaxRate(), chips: ['Per item'], meter: ['Commission cap', '20%', 100] },
];
const rules = `
<section class="sec" id="rules" aria-labelledby="rules-h">
  <div class="wrap rl" data-rules>
    <div class="rl__copy">
      <h2 id="rules-h" class="h2" data-reveal>Commission Rules That Fit Your Store</h2>
      <p class="lead muted rl__sub" data-reveal>Different products. Different margins. Better control. <br>Set a rate per product, a store-wide default and a maximum.</p>
      <div class="rl__list" data-reveal>
        ${RULES.map((r, i) => `<div class="rl__row${i === 0 ? ' is-open' : ''}" data-rule>
          <h3 class="rl__h"><button class="rl__head" type="button" aria-expanded="${i === 0}" aria-controls="rule-${i}"><span class="rl__ic" aria-hidden="true">${r.icon}</span><span class="rl__t">${r.t}</span><span class="rl__pm" aria-hidden="true"></span></button></h3>
          <div class="rl__body" id="rule-${i}" role="region"><div><p class="rl__d">${r.d}</p></div></div>
          <span class="rl__bar" aria-hidden="true"></span>
        </div>`).join('\n        ')}
      </div>
    </div>
    <div class="rl__vis art" data-reveal aria-hidden="true">
      ${RULES.map((r, i) => `<div class="rl__panel rl__panel--c${i + 1}${i === 0 ? ' is-on' : ''}" data-rule-panel>
        <div class="rl__chips">${r.chips.map(c => `<span>${c}</span>`).join('')}</div>
        <div class="rl__ui">${r.vis}</div>
        <div class="rl__meter"><p><span>${r.meter[0]}</span><b>${r.meter[1]}</b></p><i style="--p:${r.meter[2]}%"></i></div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`;

// 7. Hold period
const uiSync = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Status sync</span><span class="ui__pill">Automatic</span></div>
  <div class="ui__body ui-lines">
    <div><span>Order #2481</span><b>Completed</b></div>
    <div class="ui-sync" aria-hidden="true">${ic.arrow}</div>
    <div><span>Commission</span><span class="st st--pending">Pending</span></div>
  </div>
</div>`;
const HOLD = [
  ['Set Your Hold Period', 'Choose when commissions become payable. New commissions stay pending for the period you set, so returns and cancellations can settle before anything is owed.', '', '', uiHold(1)],
  ['Follow Order Status', 'Keep commissions tied to the underlying order. As the WooCommerce order moves forward, its commission follows, so what you owe matches what actually sold.', '', '', uiSync()],
  ['Handle Refunds', 'Reject eligible commissions after refunds when enabled. When an order is refunded, its commission stops short of becoming payable, so you never pay for a sale you didn’t keep.', '', '', uiRefund()],
];
export const procCards = (rows, meta = true, icons = null) => rows.map(([t, d, k, v, vis], i) => icons ? `
      <article class="proc__card${i === 0 ? ' is-active' : ''}" data-proc-card>
        <button class="proc__hit" type="button" aria-expanded="${i === 0}" aria-label="${t}"></button>
        <div class="proc__top"><div class="proc__head"><h3 class="proc__t">${t}</h3><p class="proc__d">${d}</p></div><span class="proc__ico" aria-hidden="true">${icons[i]}</span></div>
        <div class="proc__body">${vis ? `<div class="proc__vis">${vis}</div>` : ''}</div>
        <div class="proc__foot"><span></span><span class="proc__btn" aria-hidden="true">${ic.plus}</span></div>
      </article>` : `
      <article class="proc__card${i === 0 ? ' is-active' : ''}" data-proc-card>
        <button class="proc__hit" type="button" aria-expanded="${i === 0}" aria-label="${t}"></button>
        <div class="proc__top"><h3 class="proc__t">${t}</h3><span class="proc__n">${pad(i + 1)}</span></div>
        <div class="proc__body">
          <p class="proc__d">${d}</p>
          ${vis ? `<div class="proc__vis">${vis}</div>` : ''}
        </div>
        <div class="proc__foot">${meta ? `<p class="proc__meta">${k}<i aria-hidden="true"></i>${v}</p>` : '<span></span>'}<span class="proc__btn" aria-hidden="true">${ic.plus}</span></div>
      </article>`).join('');

const syncIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3.5V8h4.5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 20.5V16h-4.5"/></svg>';
const refundIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>';
const HOLD_ICONS = [ic.clock, syncIcon, refundIcon];

const hold = `
<section class="sec" id="hold" aria-labelledby="hold-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="hold-h" class="h2" data-reveal>Hold Commissions <br>Until They’re Ready</h2>
      <p class="lead muted" data-reveal>Don’t pay commissions before the sale is ready. Set a hold <br>period and let order status guide the commission lifecycle.</p>
    </div>
    <div class="proc proc--icons" data-proc data-reveal>${procCards(HOLD, false, HOLD_ICONS)}
    </div>
  </div>
</section>`;

// 8. Admin dashboard (reports) — bento grid, first tile solid orange
const trendIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="m5 15 4-5 4 3 6-7"/><path d="M15 6h4v4"/></svg>';
// smooth curve through points (Catmull-Rom → cubic Bézier)
const smooth = pts => pts.map((p, i) => {
  if (!i) return `M${p[0]} ${p[1]}`;
  const p0 = pts[i - 2] || pts[i - 1], p1 = pts[i - 1], p3 = pts[i + 1] || p;
  const c1 = [p1[0] + (p[0] - p0[0]) / 6, p1[1] + (p[1] - p0[1]) / 6], c2 = [p[0] - (p3[0] - p1[0]) / 6, p[1] - (p3[1] - p1[1]) / 6];
  return `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`;
}).join(' ');
const pts = (vals, W, H, pad = 16, top = 22) => { const mx = Math.max(...vals), mn = Math.min(...vals); return vals.map((v, i) => [pad + i * (W - 2 * pad) / (vals.length - 1), top + (1 - (v - mn) / (mx - mn || 1)) * (H - top - pad)]); };
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
// Revenue vs costs: rounded pill bars, cost stacked at the base, last month highlighted
const pillBars = (rev, cost) => `<div class="pbars" aria-hidden="true">
  <div class="pbars__grid"><i></i><i></i><i></i></div>
  ${rev.map((v, i) => `<div class="pbar${i === rev.length - 1 ? ' on' : ''}"><div class="pbar__col" style="--h:${v}%"><i class="pbar__cost" style="--c:${Math.round(cost[i] / v * 100)}%"></i>${i === rev.length - 1 ? '<span class="pbar__tip">$48,250</span>' : ''}</div><small>${MONTHS[i]}</small></div>`).join('')}
</div>`;
// Visits: smooth gradient area with end dot + tooltip
const areaChart = (vals, id, tip) => { const W = 600, H = 220, P = pts(vals, W, H); const d = smooth(P); const e = P[P.length - 1];
  return `<div class="achart" aria-hidden="true"><svg viewBox="0 0 ${W} ${H}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b97ff" stop-opacity=".45"/><stop offset="1" stop-color="#0043DA" stop-opacity="0"/></linearGradient></defs>
  ${[0.25, 0.5, 0.75].map(f => `<line x1="0" x2="${W}" y1="${H * f}" y2="${H * f}" class="achart__grid"/>`).join('')}
  <path d="${d} L${e[0]} ${H} L${P[0][0]} ${H}Z" fill="url(#${id})"/><path d="${d}" class="achart__line"/>
  <circle cx="${e[0]}" cy="${e[1]}" r="14" class="achart__halo"/><circle cx="${e[0]}" cy="${e[1]}" r="6" class="achart__dot"/></svg>
  <span class="achart__tip" style="left:${(e[0] / W * 100).toFixed(1)}%;top:${(e[1] / H * 100).toFixed(1)}%">${tip}</span></div>`; };
// Trends: two smooth lines with day dots and labels
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const duoChart = (a, b) => { const W = 600, H = 200, all = [...a, ...b], mx = Math.max(...all), mn = Math.min(...all);
  const mk = v => v.map((x, i) => [24 + i * (W - 48) / (v.length - 1), 18 + (1 - (x - mn) / (mx - mn)) * (H - 36)]);
  const A = mk(a), B = mk(b);
  return `<div class="dchart" aria-hidden="true"><div class="dchart__leg"><span><i></i>Visits</span><span><i class="c2"></i>Conversions</span></div><svg viewBox="0 0 ${W} ${H}">
  ${A.map(p => `<line x1="${p[0]}" x2="${p[0]}" y1="0" y2="${H}" class="dchart__col"/>`).join('')}
  <path d="${smooth(B)}" class="dchart__l2"/><path d="${smooth(A)}" class="dchart__l1"/>
  ${B.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="5" class="dchart__d2"/>`).join('')}${A.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="5" class="dchart__d1"/>`).join('')}</svg>
  <div class="dchart__days">${DAYS.map(x => `<small>${x}</small>`).join('')}</div></div>`; };

const rbars = (a, b) => `<div class="chart-bars rb__bars" aria-hidden="true">${a.map((v, i) => `<span><i style="--h:${v}%"></i><i class="c2" style="--h:${b[i]}%"></i></span>`).join('')}</div>`;
const rkpi = (k, v, d) => `<div class="rb__kpi"><span>${k}</span><b>${v}</b><small>${d}</small></div>`;
const TOP = [['MK', 'Maya Khan', 92, '$4,210', 18], ['AL', 'Ava Lim', 74, '$3,380', 260], ['DN', 'Dev Nair', 58, '$2,640', 320], ['JR', 'Jonas Reed', 41, '$1,870', 200]];
const reports = `
<section class="sec sec--dark" id="reports" aria-labelledby="rep-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="rep-h" class="h2" data-reveal>Know What’s Driving <br>Your Affiliate Sales</h2>
      <p class="lead muted" data-reveal>See the numbers behind your program: the revenue affiliates <br>bring in, what commissions cost, and who performs best.</p>
    </div>
    <div class="rb" data-reveal-stagger>
      <article class="rb__tile rb__tile--wide rb__tile--orange">
        <div class="rb__head"><span class="rb__ic" aria-hidden="true">${ic.coin}</span><div><h3>Revenue &amp; Commission Costs</h3><p>See what affiliates generate and what they cost.</p></div>
          <div class="rb__kpis" aria-hidden="true">${rkpi('Revenue', '$48,250', '↑ 18%')}${rkpi('Costs', '$4,825', '10%')}</div></div>
        ${pillBars([38, 50, 44, 58, 64, 55, 70, 76, 72, 84, 80, 94], [8, 10, 9, 12, 13, 11, 14, 15, 14, 17, 16, 19])}
      </article>
      <article class="rb__tile rb__tile--tall">
        <div class="rb__head rb__head--col"><span class="rb__ic" aria-hidden="true">${ic.user}</span><h3>Top Affiliates</h3><p>Find your strongest performers.</p></div>
        <ol class="rb__rank" aria-hidden="true">${TOP.map(([i, n, w, v, h]) => `<li><span class="av" style="--h:${h}">${i}</span><span class="rb__n">${n}</span><b>${v}</b><i style="--w:${w}%"></i></li>`).join('')}</ol>
      </article>
      <article class="rb__tile">
        <div class="rb__head rb__head--col"><span class="rb__ic" aria-hidden="true">${ic.chart}</span><h3>Visits &amp; Conversions</h3><p>Track traffic and sales from affiliates.</p></div>
        ${areaChart([14, 18, 16, 24, 21, 29, 27, 35, 32, 40, 38, 46], 'ag1', '1,284 visits')}
      </article>
      <article class="rb__tile rb__tile--navy">
        <div class="rb__head rb__head--col"><span class="rb__ic" aria-hidden="true">${trendIcon}</span><h3>Performance Trends</h3><p>See visits and conversions day by day.</p></div>
        ${duoChart([42, 55, 48, 66, 61, 78, 86], [18, 24, 21, 30, 27, 35, 41])}
      </article>
    </div>
  </div>
</section>`;

// 9. Affiliate dashboard — statement card + feature rows with thumbnails
const arrowNE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const AFF = [
  ['Referral Links', 'Access and generate links.', uiLinks(), 'g1'],
  ['Visits &amp; Commissions', 'See referral activity and earnings.', uiVisits(), 'g2'],
  ['Balance &amp; Payouts', 'Track balances and payout history.', uiBalance(), 'g3'],
];
const dashboard = `
<section class="sec" id="dashboard" aria-labelledby="dash-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="dash-h" class="h2" data-reveal>Give Affiliates Their <br>Own Dashboard</h2>
      <p class="lead muted" data-reveal>Give affiliates their links, earnings and payouts in one place, <br>so they get what they need without the back-and-forth.</p>
    </div>
    <div class="ad">
      <div class="ad__card" data-reveal>
        <span class="ad__q" aria-hidden="true">“</span>
        <p class="ad__tag">You run the program. <span>They track their results.</span></p>
        <div class="ad__ui" aria-hidden="true">${uiVisits()}</div>
      </div>
      <div class="ad__list" data-reveal-stagger>
        ${AFF.map(([t, d, m, g]) => `<a class="ad__row" href="/features/#affiliates">
          <div class="ad__thumb ad__thumb--${g}" aria-hidden="true"><div>${m}</div></div>
          <div class="ad__copy"><h3>${t}</h3><p>${d}</p></div>
          <span class="ad__arr" aria-hidden="true">${arrowNE}</span>
        </a>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>`;

// 10. Payouts
const PAY = [
  ['Choose Who to Pay', 'Pay everyone or select specific affiliates.'],
  ['Set a Minimum', 'Only include balances that meet your threshold.'],
  ['Review Before Paying', 'Preview affiliates, commissions and totals.'],
  ['Keep Payment Records', 'Mark payments as paid and export CSV records.'],
];
const PAYEES = [['MK', 'Maya Khan', 212.8, 18, 1], ['AL', 'Ava Lim', 148.0, 140, 1], ['JR', 'Jonas Reed', 96.4, 200, 0], ['DN', 'Dev Nair', 74.5, 320, 0], ['SP', 'Sara Pérez', 38.2, 30, -1]];
const payouts = `
<section class="sec sec--dark" id="payouts" aria-labelledby="pay-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="pay-h" class="h2" data-reveal>Make Payouts <br>Easier to Manage</h2>
      <p class="lead muted" data-reveal>Turn unpaid commissions into organized payouts. <br>Choose who to pay, review the totals, and keep the records.</p>
    </div>
    <div class="plan" data-reveal>
      <div class="plan__l" aria-hidden="true">
        <p class="plan__amt"><span>$531.70</span><small>/ 4 affiliates</small></p>
        <ul class="plan__list">
          ${PAYEES.map(([i, n, a, h, sel]) => `<li class="${sel < 0 ? 'is-under' : ''}"><span class="ui-chk${sel >= 0 ? ' on' : ''}">${ic.check}</span><span class="av" style="--h:${h}">${i}</span><span class="plan__n">${n}</span><b>$${a.toFixed(2)}</b></li>`).join('')}
        </ul>
      </div>
      <div class="plan__r">
        <ul class="checks">
          ${PAY.map(([t, d]) => `<li><span class="checks__ic">${ic.check}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
        </ul>
        <div class="plan__foot"><p class="muted">Know who you’re paying and why.</p></div>
      </div>
    </div>
  </div>
</section>`;

// 11. Data ownership — heading left, typographic stack building up to "Your data."
const OWN = [['affiliates', ic.user], ['referrals', ic.link], ['commissions', ic.coin], ['data', ic.shield]];
const data = `
<section class="sec" id="data" aria-labelledby="data-h">
  <div class="wrap own">
    <div class="own__l">
      <h2 id="data-h" class="h2" data-reveal>Your Affiliate Data Stays With Your Store</h2>
      <p class="lead muted" data-reveal>No external affiliate network required. FlyAffiliate runs directly on your WordPress site and sends nothing to outside services.</p>
    </div>
    <ul class="own__r" data-reveal-stagger>
      ${OWN.map(([t, icon], k) => `<li class="own__ln own__ln--${k}"><span class="own__ic" aria-hidden="true">${icon}</span>Your ${t}.</li>`).join('')}
    </ul>
  </div>
</section>`;

// 12. WooCommerce
const woo = `
<section class="sec" id="woocommerce" aria-labelledby="woo-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="woo-h" class="h2" data-reveal>Built for <br>WooCommerce</h2>
      <p class="lead muted" data-reveal>Add affiliate marketing to the store you already have. <br>Referred orders, products and checkout all stay in WooCommerce.</p>
    </div>
    <div class="clients">
      <div class="clients__tiles" data-reveal-stagger>
        <article class="tile"><span class="tile__ic">${ic.cart}</span><h3>WooCommerce Orders</h3><p>Track referred orders and commissions.</p></article>
        <article class="tile"><span class="tile__ic">${ic.chart}</span><h3>Product-Level Tracking</h3><p>Calculate commissions per order item.</p></article>
        <article class="tile"><span class="tile__ic">${ic.check}</span><h3>Classic &amp; Block Checkout</h3><p>Works with both WooCommerce checkout types.</p></article>
        <article class="tile tile--dark"><p class="tile__big">Your store stays where it is.</p></article>
      </div>
      <div class="clients__media art art--woo" data-reveal>${uiWooOrder()}</div>
    </div>
  </div>
</section>`;

// 13. Dokan (coming soon) + 14. Marketplace flow (coming soon)
const icSliders = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 7h9m4 0h3M4 17h3m4 0h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/></svg>';
const icTarget = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>';
const DOKAN = [
  ['Vendor Affiliate Programs', 'Participating vendors use affiliates to promote their products.', ic.store],
  ['Vendor Commission Rules', 'Vendors control their affiliate rates.', icSliders],
  ['Vendor-Level Attribution', 'Commissions stay tied to the right vendor’s products.', icTarget],
  ['Clear Vendor Earnings', 'Affiliate commissions come out of the relevant vendor’s earnings.', ic.wallet],
];
const MK_FACES = { 'Urban Leather': [1, 2, 3], 'Northwind Home': [4, 1], 'Kiln &amp; Clay': [2, 3, 4, 1] };
const VENDORS = [['Urban Leather', '12%', ['MK', 'AL', 'JR'], 18], ['Northwind Home', '8%', ['DN', 'SP'], 200], ['Kiln &amp; Clay', '15%', ['TO', 'AL', 'DN', 'MK'], 320]];
const dokan = `
<section class="sec" id="dokan" aria-labelledby="dokan-h">
  <div class="wrap">
    <div class="dkw" data-reveal>
      <div class="dkw__head">
        <p class="soon">Coming Soon</p>
        <h2 id="dokan-h" class="h2">Turn Your Dokan Marketplace Into a Vendor-Powered Affiliate Program</h2>
        <p class="lead muted">Let vendors build their own sales networks. FlyAffiliate + Dokan will give vendors a way to promote their products through affiliates.</p>
      </div>
      <ul class="dkw__cols" data-reveal-stagger>
        ${DOKAN.map(([t, d, icon]) => `<li><span class="dkw__ic" aria-hidden="true">${icon}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}
      </ul>
    </div>
  </div>
</section>
<section class="sec sec--snug" id="marketplace" aria-labelledby="mkt-h">
  <div class="wrap">
    <p class="soon" data-reveal>Coming Soon</p>
    <div class="split-head">
      <h2 id="mkt-h" class="h2" data-reveal>One Marketplace. <br>Many Affiliate Opportunities.</h2>
      <p class="lead muted" data-reveal>One marketplace. Multiple vendor sales networks. <br>Each vendor grows its own affiliate team.</p>
    </div>
    <div class="mk2" data-reveal aria-hidden="true">
      <div class="mk2__hub"><span>${ic.store}</span>Your Dokan marketplace</div>
      <svg class="mk2__ln" viewBox="0 0 200 360" preserveAspectRatio="none"><path d="M0 180C100 180 100 60 200 60M0 180H200M0 180C100 180 100 300 200 300" fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg>
      <div class="mk2__vs" data-reveal-stagger>
        ${VENDORS.map(([n, r, affs, h]) => `<div class="mk2__v"><div><b>${n}</b><span>${r} affiliate rate</span></div><span class="mk2__affs">${affs.map((a, k) => `<img src="/assets/img/demo-avatar-${MK_FACES[n][k]}.jpg" alt="" width="36" height="36" loading="lazy">`).join('')}</span><small>${affs.length} affiliates</small></div>`).join('')}
      </div>
    </div>
    <div class="mk2__flow" data-reveal>${flow(['Vendor', 'Affiliate', 'Product', 'Sale', 'Commission'])}</div>
  </div>
</section>`;

// 15. All-in-one — photo panel, copy bottom-left, glass step stack right
const calcIc = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3.5" width="14" height="17" rx="2.5"/><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"/></svg>';
const userPlusIc = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="10" cy="8.5" r="3.6"/><path d="M3.5 19.5c1.1-3.3 3.6-5 6.5-5s5.4 1.7 6.5 5M18.5 7v6M15.5 10h6"/></svg>';
const STEPS = [['Recruit', userPlusIc], ['Share', ic.link], ['Track', ic.chart], ['Calculate', calcIc], ['Hold', ic.clock], ['Pay', ic.wallet]];
const workflow = `
<section class="sec sec--snug" id="workflow" aria-labelledby="wf-h">
  <div class="wrap">
    <div class="wf art art--workflow" data-reveal>
      <div class="wf__l">
        <h2 id="wf-h" class="h2">Everything in One WordPress Dashboard</h2>
        <p class="wf__sub">No spreadsheets. No separate affiliate platform.</p>
        <p class="wf__foot"><i aria-hidden="true">${ic.check}</i>Run your affiliate program from WordPress.</p>
      </div>
      <ol class="wf__steps" data-reveal-stagger>${STEPS.map(([s, icon]) => `<li><span class="wf__ic" aria-hidden="true">${icon}</span><b>${s}</b></li>`).join('')}</ol>
    </div>
  </div>
</section>`;

// 16. Built by + 17. Start — one split card: white team half, blue CTA half
const team = `
<section class="sec" id="team" aria-label="Built by weDevs and getting started">
  <div class="wrap">
    <div class="duo" data-reveal>
      <div class="duo__built">
        <img class="duo__dokan" src="/assets/img/dokan-logo.svg" alt="Dokan" width="150" height="40">
        <h2 id="team-h" class="duo__h">Built by the Team <br>Behind Dokan</h2>
        <p class="built__q"><b>FlyAffiliate</b> is built by <b>weDevs</b>, the team behind <b>Dokan</b> and other WordPress products.</p>
        <ul class="built__pills" data-reveal-stagger>${['Built for WordPress.', 'Built for WooCommerce.', 'Built for Dokan.'].map(t => `<li>${ic.check}${t}</li>`).join('')}</ul>
      </div>
      <div class="duo__start" id="start">
        <h2 id="start-h" class="duo__h">Start Your <br>Affiliate Program</h2>
        <p class="duo__p">Turn recommendations into revenue with an affiliate <br>program that runs right inside your WordPress store.</p>
        <ol class="duo__steps" data-reveal-stagger>${[['Give your affiliates a link.', ic.link], ['Track the sales.', ic.chart], ['Manage the commissions.', ic.coin]].map(([t, i]) => `<li><span aria-hidden="true">${i}</span>${t}</li>`).join('')}</ol>
        ${btn('Start Your Affiliate Program', CTA_URL, 'white', ext)}
      </div>
    </div>
  </div>
</section>`;

// 18. FAQ
export const FAQS = [
  ['What is FlyAffiliate?', 'FlyAffiliate lets you run your own affiliate program from WordPress.'],
  ['Does FlyAffiliate work with WooCommerce?', 'Yes. Track referred WooCommerce orders and calculate commissions.'],
  ['How does affiliate tracking work?', 'Each affiliate gets a unique referral link. FlyAffiliate tracks visits and eligible referred orders.'],
  ['How are commissions calculated?', 'Per order item, using your default rate and capped at your maximum rate.'],
  ['Can I set a commission hold period?', 'Yes. Set how long commissions stay pending before becoming payable.'],
  ['Can affiliates see their commissions?', 'Yes. Affiliates can view their links, visits, commissions, balances and payouts.'],
  ['Can I manage payouts?', 'Yes. Create payout batches, review payments, mark them as paid and export CSV records.'],
  ['Does FlyAffiliate work with Dokan?', 'The Dokan integration is in development. It will let vendors run affiliate programs for their own products.'],
  ['Does FlyAffiliate use a third-party affiliate network?', 'No. FlyAffiliate runs directly on your WordPress site.'],
  ['Is FlyAffiliate free?', 'Yes. FlyAffiliate is available as a free WordPress plugin.'],
];
export const faqBlock = ({ id = 'faq', title = 'Frequently Asked Questions', sub = '', items = FAQS, cta = '' } = {}) => `
<section class="sec" id="${id}" aria-labelledby="${id}-h">
  <div class="wrap faq">
    <div class="faq__l">
      <h2 id="${id}-h" class="h3" data-reveal>${title}</h2>
      ${sub ? `<p class="muted" data-reveal>${sub}</p>` : ''}
      ${cta ? `<div data-reveal>${cta}</div>` : ''}
    </div>
    <div class="faq__list" data-accordion data-reveal-stagger>
      ${items.map(([q, a], i) => `<div class="faq__item">
        <h3><button class="faq__q" type="button" aria-expanded="false" aria-controls="${id}-a${i}"><span>${q}</span><span class="faq__ic" aria-hidden="true">${ic.plus}</span></button></h3>
        <div class="faq__a" id="${id}-a${i}" role="region"><div><p>${a}</p></div></div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`;

export default () => page({
  title: 'FlyAffiliate — Run Your Own Affiliate Program on WordPress',
  desc: 'FlyAffiliate lets you recruit affiliates, track referrals, manage commissions and handle payouts from WordPress. Free WordPress plugin.',
  cur: 'Home',
  bodyClass: 'page-home',
  body: [hero, audience, ledger, rules, hold, reports, dashboard, payouts, data, woo, dokan, workflow, team, faqBlock()].join('\n'),
});
