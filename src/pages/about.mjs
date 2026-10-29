import { page, btn, eyebrow, bracket, chips, pad, ic, CTA_URL } from '../lib.mjs';

// Draft copy — the Google Doc's About Us tab was empty. Facts used: built by weDevs, the team behind Dokan.
const hero = `
<section class="phero" aria-labelledby="a-h">
  <div class="wrap">
    <div class="phero__grid">
      <div class="phero__l">${eyebrow('Let’s introduce')}</div>
      <div class="phero__r">
        <h1 id="a-h" class="phero__h" data-reveal><span aria-hidden="true">— </span>We build affiliate marketing that lives inside your WordPress store, not in someone else’s network.</h1>
        <div class="phero__row" data-reveal><span class="chip-rate"><i>${ic.store}</i>Built by weDevs — the team behind Dokan</span></div>
      </div>
    </div>
    <div class="abanner art art--hero" data-reveal aria-hidden="true"></div>
    <div class="astats" data-reveal-stagger>
      <div><p class="eyebrow">Affiliate networks required</p><b>00</b></div>
      <div><p class="eyebrow">Commission statuses</p><b>04</b></div>
      <div><p class="eyebrow">Steps from click to payout</p><b>06</b></div>
    </div>
  </div>
</section>`;

const story = `
<section class="sec" id="story" aria-labelledby="story-h">
  <div class="wrap">
    <div class="intro__grid intro__grid--top">
      <div class="intro__l">${eyebrow('Why we built it')}</div>
      <div class="intro__r">
        <h2 id="story-h" class="statement" data-reveal><span class="dash" aria-hidden="true">—</span> The people who already love your products are your best sales channel.</h2>
        <div class="astory" data-reveal>
          <p>Customers, creators, and partners recommend products every day. FlyAffiliate gives store owners a simple way to reward them for it — without signing up for an outside affiliate network.</p>
          <p>It runs directly on WordPress. Affiliates get a link, sales are tracked to WooCommerce orders, commissions follow clear rules, and payouts stay organized — with every record kept on your own site.</p>
        </div>
      </div>
    </div>
  </div>
</section>`;

const quote = `
<section class="sec" id="belief" aria-label="What we believe">
  <div class="wrap aquote" data-reveal>
    <span class="aquote__mark" aria-hidden="true">“</span>
    <p class="aquote__t">Your affiliates. Your referrals. Your commissions. Your data. It all belongs with your store.</p>
    <p class="aquote__by"><span class="av" style="--h:18">FA</span><span><b>The FlyAffiliate team</b><small>weDevs</small></span></p>
  </div>
</section>`;

const PRINCIPLES = [
  ['Own Your Data', 'FlyAffiliate runs on your WordPress site, so affiliate accounts, referrals, and commission records stay with you.', ['First-party', 'No network'], ic.shield, 'sand'],
  ['Built on WooCommerce', 'Commissions are tied to real WooCommerce orders and calculated per item, with support for both checkout types.', ['Orders', 'Classic + block'], ic.cart, 'peach'],
  ['Made for Marketplaces', 'From the team behind Dokan: vendors can run their own affiliate programs with their own rules.', ['Dokan', 'Vendors'], ic.store, 'dune'],
  ['Clear Over Clever', 'Four statuses, a hold period, and payouts you can review first. You always know who you’re paying and why.', ['Statuses', 'CSV records'], ic.check, 'stone'],
];
const principles = `
<section class="sec" id="principles" aria-labelledby="pr-h">
  <div class="wrap">
    <div class="split-head split-head--flush">
      <div>${eyebrow('How we build')}<h2 id="pr-h" class="h2" data-reveal>What Guides <br>FlyAffiliate</h2></div>
      <p class="lead muted" data-reveal>Four ideas behind every feature we ship, <br>from owning your data to keeping things clear.</p>
    </div>
    <div class="svc" data-accordion>
      ${PRINCIPLES.map(([t, d, tags, icon, art], i) => `
      <div class="svc__row${i === 0 ? ' is-open' : ''}">
        <h3 class="svc__h"><button class="svc__head" type="button" aria-expanded="${i === 0}" aria-controls="pr-${i}"><span class="svc__t">${t}</span><span class="svc__ic" aria-hidden="true">${ic.plus}</span></button></h3>
        <div class="svc__body" id="pr-${i}" role="region"><div class="svc__in">
          <div class="svc__copy"><p>${d}</p>${chips(tags)}</div>
          <div class="svc__vis art art--${art}"><span class="svc__glyph">${icon}</span></div>
        </div></div>
      </div>`).join('')}
    </div>
  </div>
</section>`;

const FAMILY = ['Dokan', 'WP User Frontend', 'WP ERP', 'weDocs', 'WP Project Manager', 'weMail', 'wePOS', 'Appsero'];
const family = `
<section class="sec" id="family" aria-labelledby="fam-h">
  <div class="wrap">
    <div class="shead" data-reveal>${eyebrow('The weDevs family')}${bracket('WordPress products')}</div>
    <div class="split-head">
      <h2 id="fam-h" class="h2" data-reveal>Built by the Team <br>Behind Dokan</h2>
      <p class="lead muted" data-reveal>FlyAffiliate is built by weDevs, the team behind <br>Dokan and other WordPress products.</p>
    </div>
    <ul class="fam" data-reveal-stagger>
      ${FAMILY.map(n => `<li><span>${n}</span></li>`).join('')}
      <li class="fam--me"><span>FlyAffiliate<i>.</i></span><small>The newest member</small></li>
      <li class="fam--more"><a href="https://wedevs.com" target="_blank" rel="noopener"><span>weDevs.com</span><small>See all products ${ic.arrow}</small></a></li>
    </ul>
    <p class="caption" data-reveal><span class="dot" aria-hidden="true"></span>Built for WordPress. Built for WooCommerce. Built for Dokan.</p>
  </div>
</section>`;

const contact = `
<section class="sec sec--dark contact" id="contact" aria-labelledby="c-h">
  <div class="wrap contact__grid">
    <div class="contact__l">
      ${eyebrow('Contact')}
      <h2 id="c-h" class="h2xl" data-reveal>Let’s Talk</h2>
      <p class="lead contact__p" data-reveal>Questions about FlyAffiliate, your store, or your marketplace? Send us a note.</p>
      <div class="contact__meta" data-reveal><p class="muted">Company</p><a class="contact__big" href="https://wedevs.com" target="_blank" rel="noopener">weDevs</a></div>
    </div>
    <form class="contact__card form" data-demo-form data-reveal>
      <p class="contact__ct">Have a question in mind?</p>
      <label class="sr-only" for="c-name">Name</label><input id="c-name" class="field" type="text" name="name" placeholder="Your name" autocomplete="name" required>
      <label class="sr-only" for="c-email">Email</label><input id="c-email" class="field" type="email" name="email" placeholder="you@yourstore.com" autocomplete="email" required>
      <label class="sr-only" for="c-msg">Message</label><textarea id="c-msg" class="field field--area" name="message" placeholder="Your message here…" rows="4"></textarea>
      <button class="btn btn--block" type="submit"><span class="btn__t">Submit</span><span class="btn__i" aria-hidden="true">${ic.arrow}</span></button>
      <p class="form__note" data-form-note data-ok="Thanks — message received. (Demo form: nothing was sent.)" hidden role="status"></p>
    </form>
  </div>
</section>`;

export default () => page({
  title: 'About — FlyAffiliate',
  desc: 'FlyAffiliate is built by weDevs, the team behind Dokan and other WordPress products. Affiliate marketing that runs on your own WordPress site.',
  cur: 'About',
  body: [hero, story, quote, principles, family, contact].join('\n'),
});
