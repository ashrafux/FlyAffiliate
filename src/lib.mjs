// Shared building blocks for every page. Pages import these and return plain HTML strings.

export const CTA_URL = 'https://wordpress.org/plugins/search/flyaffiliate/'; // swap for the real plugin listing
export const V = 51; // asset cache-bust, bump after CSS/JS edits

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
export const logo = '<svg class="logo__svg" viewBox="0 0 621 171" fill="none" aria-hidden="true"><path transform="translate(24 0)" d="M210.722 114H199.014V57.0645H236.784V67.8101H210.722V79.7585H235.581V90.5041H210.722V114ZM255.725 114H244.338V53.8569H255.725V114ZM270.517 130.68L277.574 113.278L260.974 71.98H273.083L283.187 100.047L293.371 71.98H305.24L281.744 130.68H270.517ZM317.329 114H305.06L326.471 57.0645H338.82L360.231 114H347.641L344.193 104.217H320.777L317.329 114ZM332.565 71.4989H332.405L324.546 93.7117H340.424L332.565 71.4989ZM378.241 71.98H384.737V80.9614H378.241V114H366.854V80.9614H360.84V71.98H366.854V68.612C366.854 58.508 372.628 53.8569 381.128 53.8569C383.133 53.8569 384.496 54.0173 384.496 54.0173V63.8006C384.496 63.8006 384.015 63.7204 382.732 63.7204C380.006 63.7204 378.241 64.843 378.241 68.3714V71.98ZM404.878 71.98H411.374V80.9614H404.878V114H393.491V80.9614H387.477V71.98H393.491V68.612C393.491 58.508 399.265 53.8569 407.765 53.8569C409.77 53.8569 411.133 54.0173 411.133 54.0173V63.8006C411.133 63.8006 410.652 63.7204 409.369 63.7204C406.643 63.7204 404.878 64.843 404.878 68.3714V71.98ZM428.856 114H417.468V53.8569H428.856V114ZM444.948 66.5271C440.939 66.5271 438.052 63.7204 438.052 59.7108C438.052 55.7013 440.939 52.8144 444.948 52.8144C448.958 52.8144 451.845 55.7013 451.845 59.7108C451.845 63.7204 448.958 66.5271 444.948 66.5271ZM439.255 114V71.98H450.642V114H439.255ZM472.491 114H461.103V53.8569H472.491V114ZM508.293 95.075L498.189 96.759C493.297 97.6411 491.773 99.4053 491.773 101.731C491.773 104.618 493.538 106.141 498.108 106.141C504.764 106.141 508.293 102.292 508.293 96.759V95.075ZM495.542 114.962C485.839 114.962 480.787 109.59 480.787 102.052C480.787 94.7542 485.839 90.4239 497.066 88.6597L508.293 86.9757V86.5747C508.293 82.485 505.727 80.4001 500.755 80.4001C495.462 80.4001 493.377 82.6454 492.976 85.5323H481.749C482.391 78.2349 487.363 71.0177 500.675 71.0177C513.024 71.0177 519.118 76.8717 519.118 86.6549V106.462C519.118 109.189 519.6 112.316 520.321 114H509.335C509.255 114 508.854 112.075 508.854 109.349C506.208 113.118 501.958 114.962 495.542 114.962ZM548.178 103.896V113.759C548.178 113.759 546.254 114.241 542.805 114.241C533.583 114.241 529.895 109.509 529.895 101.41V80.9614H524.201V71.98H529.895V61.5552H541.282V71.98H548.258V80.9614H541.282V100.207C541.282 103.014 542.565 104.297 545.532 104.297C547.055 104.297 548.178 103.896 548.178 103.896ZM593.505 96.2778H563.033C563.835 102.052 567.524 105.179 573.217 105.179C576.665 105.179 579.953 103.655 581.316 100.608H592.784C590.298 109.108 582.599 114.962 572.896 114.962C560.467 114.962 551.726 105.821 551.726 92.9098C551.726 80.4802 560.387 71.0177 572.816 71.0177C585.246 71.0177 593.666 80.4802 593.666 92.9098C593.666 94.7542 593.505 96.2778 593.505 96.2778ZM572.736 80.1595C567.524 80.1595 564.156 83.2869 563.193 88.0984H582.279C581.477 83.3671 578.029 80.1595 572.736 80.1595Z" fill="currentColor"/><path d="M126.836 0H43.6334C19.5353 0 0 19.5353 0 43.6334V126.836C0 150.934 19.5353 170.469 43.6334 170.469H126.836C150.934 170.469 170.469 150.934 170.469 126.836V43.6334C170.469 19.5353 150.934 0 126.836 0Z" fill="#7DC8FF"/><path d="M70 60C76.6274 60 82 65.3726 82 72V100C82 122.479 70.5629 133.061 42 133.938V72C42 65.3726 47.3726 60 54 60H70ZM116 37C122.627 37 128 42.3726 128 49V58C128 80.4786 116.563 91.0609 88 91.9385V49C88 42.3726 93.3726 37 100 37H116Z" fill="black"/></svg>';
export const header = cur => `
<header class="hdr">
  <div class="hdr__in">
    <a class="logo" href="/" aria-label="FlyAffiliate home"${cur === 'Home' ? ' aria-current="page"' : ''}>${logo}</a>
    <nav class="hdr__nav" aria-label="Main">
      ${NAV.map(([t, h]) => `<a class="hdr__link" href="${h}"${t === cur ? ' aria-current="page"' : ''}>${t}</a>`).join('\n      ')}
    </nav>
    ${btn('Price', '/#start', 'secondary sm').replace('class="btn ', 'class="btn hdr__cta ')}
    <button class="hdr__burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer" data-menu>${ic.menu}</button>
  </div>
</header>
<div class="drawer" id="drawer" data-drawer aria-hidden="true">
  <div class="drawer__top"><a class="logo" href="/" aria-label="FlyAffiliate home">${logo}</a><button class="drawer__x" type="button" aria-label="Close menu" data-menu-close>${ic.close}</button></div>
  <nav class="drawer__nav" aria-label="Mobile">
    ${NAV.map(([t, h], i) => `<a href="${h}"${t === cur ? ' aria-current="page"' : ''}><small>${pad(i + 1)}</small>${t}</a>`).join('\n    ')}
  </nav>
  <div class="drawer__foot">${btn('Get Started', CTA_URL, '', ' target="_blank" rel="noopener"')}<p>Free WordPress plugin</p></div>
</div>`;

export const footer = () => `
<footer class="ftr">
  <div class="wrap">
    <div class="ftr__card art art--hero" data-reveal>
      <h2 class="h3 ftr__tag">Your Products. Your Affiliates.<br>Your Program.</h2>
      <div class="ftr__cta">${btn('Start Your Affiliate Program', CTA_URL, '', ' target="_blank" rel="noopener"')}<p class="ftr__note">Free WordPress plugin</p></div>
    </div>
    <div class="ftr__row">
      <a class="logo ftr__logo" href="/" aria-label="FlyAffiliate home">${logo}</a>
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
export const page = ({ title, desc, cur, body, bodyClass = '', path = '/' }) => `<!doctype html>
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
${footer()}
<script src="/assets/js/site.js?v=${V}" defer></script>
</body>
</html>
`;
