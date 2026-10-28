// Shared building blocks for every page. Pages import these and return plain HTML strings.

export const CTA_URL = 'https://wordpress.org/plugins/search/flyaffiliate/'; // swap for the real plugin listing
export const V = 115; // asset cache-bust, bump after CSS/JS edits

/* ---------- icons ---------- */
export const ic = {
  arrow: '<svg viewBox="0 0 28 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 8h24M19 1.5 25.5 8 19 14.5"/></svg>',
  plus: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M10 3v14M3 10h14"/></svg>',
  minus: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 10h12"/></svg>',
  check: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m5 10.5 3.2 3L15 6.5"/></svg>',
  chevL: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 4.5 7 10l5.5 5.5"/></svg>',
  chevR: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 4.5 13 10l-5.5 5.5"/></svg>',
  star: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="m10 1.8 2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.6l-5.1 2.9L6 11.8l-4.3-4 5.8-.7z"/></svg>',
  spark: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 0c.6 5.2 4.2 8.8 10 10-5.8 1.2-9.4 4.8-10 10-.6-5.2-4.2-8.8-10-10C5.8 8.8 9.4 5.2 10 0Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3.2-3.2a4.5 4.5 0 0 0-6.4-6.4L11.6 6"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3.2 3.2a4.5 4.5 0 0 0 6.4 6.4l1.6-1.6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 8h16M4 16h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11m-4.5-4.5L12 15l4.5-4.5M5 19h14"/></svg>',
  store: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 9.5 5.5 4h13L20 9.5M4 9.5h16M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5.5 12v8h13v-8M10 20v-5h4v5"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" stroke-linecap="round"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2.2l2.2 11h10.8L20.5 7H6.4"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/></svg>',
  coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M14.6 9.3c-.5-.9-1.5-1.4-2.6-1.4-1.5 0-2.6.8-2.6 2s1.1 1.7 2.6 2 2.7.8 2.7 2.1-1.2 2.1-2.7 2.1c-1.2 0-2.3-.6-2.8-1.6M12 6.3v1.6m0 8.3v1.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4m0 16h16"/><path d="m7.5 15 3.5-4 3 2.5 5-6.5"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M16 13.5h1.5" stroke-linecap="round"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 3v2.2m0 13.6V21m9-9h-2.2M5.2 12H3m15.4-6.4-1.6 1.6M7.2 16.8l-1.6 1.6m12.8 0-1.6-1.6M7.2 7.2 5.6 5.6" stroke-linecap="round"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3.5 19 6v5.5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6z"/><path d="m9 12 2.2 2.2L15.5 10" stroke-linecap="round"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M6 3.5h8l4 4V20.5H6z"/><path d="M14 3.5v4h4M9 12.5h6M9 16h6" stroke-linecap="round"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="m4.5 7 7.5 6 7.5-6" stroke-linecap="round"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 19 17h-8l-4.5 3.5V17H5a1.5 1.5 0 0 1-1.5-1.5V7A1.5 1.5 0 0 1 5 5.5Z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12z"/></svg>',
};

/* ---------- primitives ---------- */
export const btn = (label, href, mod = '', attrs = '') =>
  `<a class="btn${mod ? ' ' + mod.split(' ').map(m => 'btn--' + m).join(' ') : ''}" href="${href}"${attrs}><span class="btn__t">${label}</span>${/\b(tertiary|secondary)\b/.test(mod) ? '' : `<span class="btn__i" aria-hidden="true">${ic.arrow}</span>`}</a>`;
export const eyebrow = (t, tag = 'p') => `<${tag} class="eyebrow">${t}</${tag}>`;
export const bracket = t => `<p class="bracket">[ ${t} ]</p>`;
export const shead = (eb, br, rule = false) =>
  `<div class="shead${rule ? ' shead--rule' : ''}" data-reveal>${eyebrow(eb)}${br ? bracket(br) : ''}</div>`;
export const chips = arr => `<ul class="tags">${arr.map(t => `<li>${t}</li>`).join('')}</ul>`;
export const flow = (arr, mod = '') =>
  `<ol class="flow${mod ? ' flow--' + mod : ''}" data-reveal-stagger>${arr.map((t, i) => `<li><span>${t}</span>${i < arr.length - 1 ? `<i aria-hidden="true">${ic.arrow}</i>` : ''}</li>`).join('')}</ol>`;
export const pad = n => String(n).padStart(2, '0');

/* ---------- product UI vignettes (sample data, built in HTML) ---------- */
const st = s => `<span class="st st--${s.toLowerCase()}">${s}</span>`;
const av = (i, h = 18) => `<span class="av" style="--h:${h}">${i}</span>`;

export const uiReferralLink = () => `
<div class="ui ui--link">
  <div class="ui__bar"><span class="ui__title">Your referral link</span><span class="ui__pill">Active</span></div>
  <div class="ui__body">
    <div class="ui-url"><span class="ui-url__ic">${ic.link}</span><span class="ui-url__t">yourstore.com/?ref=<b>maya</b></span><span class="ui-url__copy">${ic.copy}Copy</span></div>
    <div class="ui-split">
      <div><span class="ui-k">Visits</span><span class="ui-v">1,284</span></div>
      <div><span class="ui-k">Orders</span><span class="ui-v">46</span></div>
      <div><span class="ui-k">Earned</span><span class="ui-v ui-v--acc">$612.40</span></div>
    </div>
  </div>
</div>`;

const LEDGER = [
  ['MK', 'Maya Khan', '#2481', 'Leather Tote', '$18.40', 'Pending', 18],
  ['JR', 'Jonas Reed', '#2476', 'Canvas Sneakers', '$9.60', 'Unpaid', 200],
  ['AL', 'Ava Lim', '#2470', 'Wool Overshirt', '$22.00', 'Paid', 140],
  ['TO', 'Tomi Ola', '#2463', 'Desk Lamp', '$6.25', 'Rejected', 260],
  ['SP', 'Sara Pérez', '#2459', 'Travel Mug', '$4.80', 'Unpaid', 30],
  ['DN', 'Dev Nair', '#2452', 'Linen Shirt', '$12.90', 'Paid', 320],
];
export const uiLedger = (rows = 6) => `
<div class="ui ui--ledger">
  <div class="ui__bar"><span class="ui__title">Commissions</span><span class="ui__actions"><span class="ui__ghost">${ic.download}Export CSV</span><span class="ui__solid">+ Add commission</span></span></div>
  <div class="ui-tabs"><span class="on">All <i>128</i></span><span>Pending <i>24</i></span><span>Unpaid <i>41</i></span><span>Paid <i>57</i></span><span>Rejected <i>6</i></span></div>
  <div class="ui-table" role="presentation">
    <div class="ui-tr ui-th"><span>Affiliate</span><span>Order</span><span class="hide-s">Product</span><span>Commission</span><span>Status</span></div>
    ${LEDGER.slice(0, rows).map(r => `<div class="ui-tr"><span class="ui-who">${av(r[0], r[6])}${r[1]}</span><span class="ui-mono">${r[2]}</span><span class="hide-s">${r[3]}</span><span class="ui-num">${r[4]}</span><span>${st(r[5])}</span></div>`).join('')}
  </div>
</div>`;

export const uiPerItem = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Order #2481</span>${st('Pending')}</div>
  <div class="ui__body ui-lines">
    <div><span>Leather Tote</span><span>10%</span><b>$12.00</b></div>
    <div><span>Card Holder</span><span>8%</span><b>$3.20</b></div>
    <div><span>Gift Wrap</span><span>—</span><b>$0.00</b></div>
    <div class="ui-total"><span>Commission</span><b>$15.20</b></div>
  </div>
</div>`;

export const uiRates = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Product rates</span><span class="ui__pill">Default 10%</span></div>
  <div class="ui__body ui-lines">
    <div><span>Leather Tote</span><b class="ui-rate">12%</b></div>
    <div><span>Canvas Sneakers</span><b class="ui-rate">8%</b></div>
    <div><span>Wool Overshirt</span><b class="ui-rate">15%</b></div>
    <div><span>Gift Card</span><b class="ui-rate ui-rate--off">0%</b></div>
  </div>
</div>`;

export const uiMax = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Maximum commission</span></div>
  <div class="ui__body">
    <div class="ui-cap"><span class="ui-k">Per order cap</span><span class="ui-v">$50.00</span></div>
    <div class="ui-meter"><i style="width:72%"></i></div>
    <div class="ui-capnote"><span>Calculated $68.00</span><b>Paid $50.00</b></div>
  </div>
</div>`;

export const uiHold = (active = 1) => `
<div class="ui ui--hold">
  <div class="ui__bar"><span class="ui__title">Commission #C-1093</span>${st(active > 2 ? 'Unpaid' : 'Pending')}</div>
  <div class="ui__body">
    <ol class="ui-steps">
      <li class="${active >= 1 ? 'done' : ''}"><b>Order completed</b><span>WooCommerce · #2481</span></li>
      <li class="${active >= 2 ? 'done' : active === 1 ? 'now' : ''}"><b>Hold period</b><span>Pending for the days you set</span></li>
      <li class="${active >= 3 ? 'done' : ''}"><b>Payable</b><span>Moves to Unpaid</span></li>
    </ol>
  </div>
</div>`;

export const uiRefund = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Order #2463</span><span class="st st--rejected">Refunded</span></div>
  <div class="ui__body ui-lines">
    <div><span>Desk Lamp</span><b>$6.25</b></div>
    <div class="ui-total"><span>Commission</span>${st('Rejected')}</div>
  </div>
</div>`;

export const uiAffDash = () => `
<div class="ui ui--aff">
  <div class="ui__bar"><span class="ui-who">${av('MK')}<span><b>Maya Khan</b><small>Affiliate dashboard</small></span></span></div>
  <div class="ui__body">
    <div class="ui-kpis">
      <div><span class="ui-k">Balance</span><span class="ui-v">$212.80</span></div>
      <div><span class="ui-k">Visits</span><span class="ui-v">1,284</span></div>
      <div><span class="ui-k">Commissions</span><span class="ui-v">46</span></div>
    </div>
    <div class="ui-spark">${spark([3, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15])}</div>
  </div>
</div>`;

export const uiLinks = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">My links</span><span class="ui__solid">+ New link</span></div>
  <div class="ui__body ui-lines">
    <div><span class="ui-url-s">${ic.link}/?ref=maya</span><b>812</b></div>
    <div><span class="ui-url-s">${ic.link}/tote?ref=maya</span><b>304</b></div>
    <div><span class="ui-url-s">${ic.link}/sale?ref=maya</span><b>168</b></div>
  </div>
</div>`;

export const uiVisits = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Visits &amp; commissions</span><span class="ui__pill">30 days</span></div>
  <div class="ui__body">
    <div class="ui-bars">${[38, 52, 44, 66, 58, 72, 61, 84, 70, 92].map((h, i) => `<i style="--h:${h}%"${i === 9 ? ' class="on"' : ''}></i>`).join('')}</div>
    <div class="ui-split"><div><span class="ui-k">Visits</span><span class="ui-v">1,284</span></div><div><span class="ui-k">Earned</span><span class="ui-v ui-v--acc">$612.40</span></div></div>
  </div>
</div>`;

export const uiBalance = () => `
<div class="ui ui--mini">
  <div class="ui__bar"><span class="ui__title">Balance &amp; payouts</span></div>
  <div class="ui__body">
    <div class="ui-cap"><span class="ui-k">Available balance</span><span class="ui-v">$212.80</span></div>
    <div class="ui-lines ui-lines--tight">
      <div><span>Sep 30 payout</span><b>$184.00</b>${st('Paid')}</div>
      <div><span>Aug 31 payout</span><b>$146.50</b>${st('Paid')}</div>
    </div>
  </div>
</div>`;

const PAYEES = [['MK', 'Maya Khan', 212.8, 18], ['JR', 'Jonas Reed', 96.4, 200], ['AL', 'Ava Lim', 148.0, 140], ['SP', 'Sara Pérez', 38.2, 30], ['DN', 'Dev Nair', 74.5, 320]];
export const uiPayout = () => `
<div class="ui ui--payout">
  <div class="ui__bar"><span class="ui__title">New payout batch</span><span class="ui__pill">Minimum $50.00</span></div>
  <div class="ui__body ui-lines">
    ${PAYEES.map(p => `<div class="${p[2] < 50 ? 'is-under' : ''}"><span class="ui-chk${p[2] < 50 ? '' : ' on'}">${ic.check}</span><span class="ui-who">${av(p[0], p[3])}${p[1]}</span><b>$${p[2].toFixed(2)}</b></div>`).join('')}
    <div class="ui-total"><span>4 affiliates</span><b>$531.70</b></div>
  </div>
  <div class="ui__foot"><span class="ui__ghost">${ic.download}Export CSV</span><span class="ui__solid">Mark as paid</span></div>
</div>`;

export const uiWooOrder = () => `
<div class="ui ui--woo">
  <div class="ui__bar"><span class="ui__title">Order #2481 <small>· Processing</small></span><span class="ui__pill ui__pill--acc">Referred by maya</span></div>
  <div class="ui__body ui-lines">
    <div class="ui-lh"><span>Item</span><span>Qty</span><span>Total</span><span>Commission</span></div>
    <div class="ui-l4"><span>Leather Tote</span><span>1</span><span>$120.00</span><b>$12.00</b></div>
    <div class="ui-l4"><span>Card Holder</span><span>1</span><span>$40.00</span><b>$3.20</b></div>
    <div class="ui-l4"><span>Gift Wrap</span><span>1</span><span>$5.00</span><b>$0.00</b></div>
    <div class="ui-total"><span>Affiliate commission</span><b>$15.20</b></div>
  </div>
  <div class="ui__foot ui__foot--chips"><span>${ic.check}Classic checkout</span><span>${ic.check}Block checkout</span></div>
</div>`;

export function spark(vals, w = 300, h = 80) {
  const max = Math.max(...vals), min = Math.min(...vals);
  const pts = vals.map((v, i) => [(i / (vals.length - 1)) * w, h - 6 - ((v - min) / (max - min || 1)) * (h - 16)]);
  const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><path d="${d} L${w} ${h} L0 ${h}Z" class="sp-a"/><path d="${d}" class="sp-l"/></svg>`;
}

/* ---------- header / footer ---------- */
const NAV = [['Features', '/features/'], ['Blog', '/blog/'], ['Docs', '/docs/'], ['About', '/about/']];
/* FlyAffiliate logo (Figma: FlyAfflilate Logo Design, node 1:277). Wordmark follows currentColor; each copy gets its own gradient id. */
let logoN = 0;
export const logoSvg = () => { const g = `fa-logo-g${++logoN}`; return `<svg class="logo__svg" viewBox="0 0 520 145" fill="none" aria-hidden="true"><path transform="translate(15 0)" d="M178.954 96.4067H169.011V48.0548H201.087V57.1804H178.954V67.3275H200.065V76.453H178.954V96.4067ZM217.172 96.4067H207.502V45.3307H217.172V96.4067ZM229.734 110.572L235.727 95.7938L221.63 60.7216H231.913L240.494 84.5571L249.143 60.7216H259.222L239.268 110.572H229.734ZM269.489 96.4067H259.069L277.252 48.0548H287.74L305.923 96.4067H295.231L292.303 88.0984H272.417L269.489 96.4067ZM282.428 60.313H282.292L275.618 79.1771H289.102L282.428 60.313ZM321.218 60.7216H326.734V68.349H321.218V96.4067H311.548V68.349H306.44V60.7216H311.548V57.8614C311.548 49.2806 316.451 45.3307 323.67 45.3307C325.372 45.3307 326.53 45.4669 326.53 45.4669V53.7753C326.53 53.7753 326.121 53.7072 325.032 53.7072C322.716 53.7072 321.218 54.6606 321.218 57.6571V60.7216ZM343.84 60.7216H349.356V68.349H343.84V96.4067H334.169V68.349H329.062V60.7216H334.169V57.8614C334.169 49.2806 339.072 45.3307 346.291 45.3307C347.994 45.3307 349.151 45.4669 349.151 45.4669V53.7753C349.151 53.7753 348.743 53.7072 347.653 53.7072C345.338 53.7072 343.84 54.6606 343.84 57.6571V60.7216ZM364.202 96.4067H354.531V45.3307H364.202V96.4067ZM377.868 56.0907C374.463 56.0907 372.012 53.7072 372.012 50.3021C372.012 46.8971 374.463 44.4454 377.868 44.4454C381.273 44.4454 383.725 46.8971 383.725 50.3021C383.725 53.7072 381.273 56.0907 377.868 56.0907ZM373.033 96.4067V60.7216H382.704V96.4067H373.033ZM401.259 96.4067H391.588V45.3307H401.259V96.4067ZM431.663 80.3348L423.082 81.7649C418.928 82.5141 417.634 84.0123 417.634 85.9872C417.634 88.4389 419.132 89.7328 423.014 89.7328C428.667 89.7328 431.663 86.4639 431.663 81.7649V80.3348ZM420.835 97.224C412.595 97.224 408.304 92.6612 408.304 86.2596C408.304 80.0624 412.595 76.3849 422.129 74.8867L431.663 73.4566V73.1161C431.663 69.6429 429.484 67.8723 425.262 67.8723C420.767 67.8723 418.996 69.7791 418.656 72.2308H409.122C409.666 66.0335 413.889 59.9044 425.194 59.9044C435.681 59.9044 440.857 64.8758 440.857 73.1842V90.0052C440.857 92.3207 441.265 94.9766 441.878 96.4067H432.548C432.48 96.4067 432.14 94.7723 432.14 92.4569C429.892 95.6576 426.283 97.224 420.835 97.224ZM465.536 87.826V96.2024C465.536 96.2024 463.901 96.611 460.973 96.611C453.141 96.611 450.008 92.5931 450.008 85.7148V68.349H445.173V60.7216H450.008V51.8685H459.679V60.7216H465.604V68.349H459.679V84.6933C459.679 87.0769 460.768 88.1665 463.288 88.1665C464.582 88.1665 465.536 87.826 465.536 87.826ZM504.029 81.3563H478.151C478.832 86.2596 481.965 88.9156 486.8 88.9156C489.728 88.9156 492.52 87.6217 493.678 85.0338H503.416C501.305 92.2526 494.768 97.224 486.527 97.224C475.972 97.224 468.549 89.4604 468.549 78.4961C468.549 67.9404 475.903 59.9044 486.459 59.9044C497.015 59.9044 504.166 67.9404 504.166 78.4961C504.166 80.0624 504.029 81.3563 504.029 81.3563ZM486.391 67.668C481.965 67.668 479.104 70.3239 478.287 74.41H494.495C493.814 70.392 490.886 67.668 486.391 67.668Z" fill="currentColor"/><path d="M107.714 0H37.0553C16.5902 0 0 16.5902 0 37.0553V107.714C0 128.179 16.5902 144.77 37.0553 144.77H107.714C128.179 144.77 144.77 128.179 144.77 107.714V37.0553C144.77 16.5902 128.179 0 107.714 0Z" fill="#0043DA"/><path d="M69.2728 73.4424L86.6224 73.4512L86.6312 73.459H104.872C104.363 82.3335 101.799 89.8923 95.3021 96.3125C84.3555 106.546 74.8352 105.705 61.0267 105.705H57.7572L48.6107 105.671C45.5365 105.671 39.9398 103.157 39.9398 97.6201L39.9222 82.1641C39.9137 75.9901 44.7298 73.4424 49.2562 73.4424H69.2728ZM86.6224 38.2158V38.9033L86.5297 39.0654H86.5375C85.739 49.4347 78.7925 69.2558 57.6722 70.4873H39.9144V47.1328C39.9145 40.7635 45.01 38.2158 49.2562 38.2158H86.6224Z" fill="url(#${g})"/><defs><linearGradient id="${g}" x1="78.9513" y1="41.6539" x2="102.679" y2="109.094" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#70B2E6"/></linearGradient></defs></svg>`; };
export const header = cur => `
<header class="hdr">
  <div class="hdr__in">
    <a class="logo" href="/" aria-label="FlyAffiliate home"${cur === 'Home' ? ' aria-current="page"' : ''}>${logoSvg()}</a>
    <nav class="hdr__nav" aria-label="Main">
      ${NAV.map(([t, h]) => `<a class="hdr__link" href="${h}"${t === cur ? ' aria-current="page"' : ''}>${t}</a>`).join('\n      ')}
    </nav>
    ${btn('Pricing', '/pricing/', 'secondary sm').replace('class="btn ', 'class="btn hdr__cta ')}
    <button class="hdr__burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer" data-menu>${ic.menu}</button>
  </div>
</header>
<div class="drawer" id="drawer" data-drawer aria-hidden="true">
  <div class="drawer__top"><a class="logo" href="/" aria-label="FlyAffiliate home">${logoSvg()}</a><button class="drawer__x" type="button" aria-label="Close menu" data-menu-close>${ic.close}</button></div>
  <nav class="drawer__nav" aria-label="Mobile">
    ${NAV.map(([t, h], i) => `<a href="${h}"${t === cur ? ' aria-current="page"' : ''}><small>${pad(i + 1)}</small>${t}</a>`).join('\n    ')}
  </nav>
  <div class="drawer__foot">${btn('Get Started', CTA_URL, '', ' target="_blank" rel="noopener"')}<p>Free WordPress plugin</p></div>
</div>`;

export const footer = (cta = {}) => `
<footer class="ftr">
  <div class="wrap">
    <div class="ftr__card art art--cta" data-reveal>
      <div class="ftr__copy"><h2 class="h3 ftr__tag">${cta.h || 'Your Products. Your Affiliates.<br>Your Program.'}</h2>${cta.p ? `<p class="ftr__p">${cta.p}</p>` : ''}</div>
      <div class="ftr__cta">${cta.btn || btn('Start Your Affiliate Program', CTA_URL, '', ' target="_blank" rel="noopener"')}${cta.btn2 || ''}<p class="ftr__note">${cta.note ?? 'Free WordPress plugin'}</p></div>${cta.trust ? `<ul class="ftr__trust">${cta.trust.map(t => `<li>${ic.check}${t}</li>`).join('')}</ul>` : ''}
    </div>
    <div class="ftr__row">
      <a class="logo ftr__logo" href="/" aria-label="FlyAffiliate home">${logoSvg()}</a>
      <div class="ftr__col"><p class="ftr__k">Product</p><a href="/features/">Features</a><a href="/docs/">Documentation</a><a href="/blog/">Blog</a><a href="/about/">About</a></div>
      <div class="ftr__col"><p class="ftr__k">Get started</p><a href="${CTA_URL}" target="_blank" rel="noopener">Download plugin</a><a href="/docs/#quick-start">Quick start</a><a href="/#faq">FAQ</a></div>
      <div class="ftr__info">
        <div><p class="ftr__k">Built by</p><a class="ftr__v" href="https://wedevs.com" target="_blank" rel="noopener">weDevs — the team behind Dokan</a></div>
        <div><p class="ftr__k">Works with</p><p class="ftr__v">WordPress · WooCommerce · Dokan</p></div>
      </div>
    </div>
    <div class="ftr__base"><p>© 2026 FlyAffiliate by weDevs. All rights reserved.</p><p>Built for WordPress. Built for WooCommerce. Built for Dokan.</p></div>
  </div>
</footer>`;

/* ---------- page shell ---------- */
export const page = ({ title, desc, cur, body, bodyClass = '', path = '/', cta }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta name="theme-color" content="#f1f1f1">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&amp;family=Lato:wght@400;700&amp;display=swap">
<link rel="stylesheet" href="/assets/css/site.css?v=${V}">
<script>document.documentElement.classList.add('js')</script>
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Skip to content</a>
${header(cur)}
<main id="main">
${body}
</main>
${footer(cta)}
<script src="/assets/js/site.js?v=${V}" defer></script>
</body>
</html>
`;
