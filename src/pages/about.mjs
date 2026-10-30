import { page, btn, ic, CTA_URL } from '../lib.mjs';

// About — redesigned in the home/features language: split-head rows, white cards on the grey canvas, art panels, primary used sparingly.
// Facts used: built by weDevs, the team behind Dokan; runs on WordPress + WooCommerce; Dokan vendor programs are coming soon.
const ext = ' target="_blank" rel="noopener"';

// 1. Hero — heading left, intro + actions right, photo banner with a glass belief card and three product facts
const hero = `
<section class="abt-hero" aria-labelledby="a-h">
  <div class="wrap">
    <p class="abt-pill" data-reveal>About FlyAffiliate</p>
    <div class="abt-hero__row">
      <h1 id="a-h" class="abt-hero__h" data-reveal>Affiliate Marketing <br>That Lives in Your Store</h1>
      <div class="abt-hero__r" data-reveal>
        <p class="abt-hero__p">We build affiliate marketing that runs inside your <br>WordPress store, not in someone else’s network.</p>
        <div class="abt-hero__btns">${btn('Start Your Affiliate Program', CTA_URL, '', ext)}${btn('Explore Features', '/features/', 'tertiary')}</div>
      </div>
    </div>
    <div class="abt-banner art art--hero" data-reveal>
      <div class="abt-belief">
        <p class="abt-belief__t">Your affiliates. Your referrals. Your commissions. <span>Your data.</span></p>
        <p class="abt-belief__by"><span class="abt-belief__ic" aria-hidden="true">${ic.store}</span>Built by weDevs, the team behind Dokan</p>
      </div>
      <ul class="abt-facts" aria-label="FlyAffiliate at a glance">
        <li><b>0</b><span>Affiliate networks required</span></li>
        <li><b>4</b><span>Clear commission statuses</span></li>
        <li><b>6</b><span>Steps from click to payout</span></li>
      </ul>
    </div>
  </div>
</section>`;

// 2. Story — why we built it: art statement card + two plain cards
const story = `
<section class="sec" id="story" aria-labelledby="story-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="story-h" class="h2" data-reveal>Why We Built <br>FlyAffiliate</h2>
      <p class="lead muted" data-reveal>Store owners kept asking for a simple way to reward <br>the people who already recommend their products.</p>
    </div>
    <div class="abt-story" data-reveal-stagger>
      <article class="abt-story__big art art--workflow">
        <p class="abt-story__q">The people who already love your products are your best sales channel.</p>
      </article>
      <article class="abt-card">
        <span class="abt-ic" aria-hidden="true">${ic.user}</span>
        <h3 class="abt-card__t">Reward the People <br>Who Recommend You</h3>
        <p>Customers, creators and partners recommend products every day. FlyAffiliate gives them a link and a fair share of the sales they bring.</p>
      </article>
      <article class="abt-card">
        <span class="abt-ic" aria-hidden="true">${ic.wallet}</span>
        <h3 class="abt-card__t">Keep Every Record <br>on Your Own Site</h3>
        <p>Sales are tracked to WooCommerce orders, commissions follow clear rules, and payouts stay organized inside WordPress.</p>
      </article>
    </div>
  </div>
</section>`;

// 3. Principles — four cards, the first one highlighted
const PRINCIPLES = [
  ['Own Your Data', 'Affiliate accounts, referrals and commission records live on your WordPress site.', ['First-party', 'No network'], ic.shield],
  ['Built on WooCommerce', 'Commissions are tied to real orders and calculated per item, on classic and block checkout.', ['Orders', 'Classic + block'], ic.cart],
  ['Made for Marketplaces', 'From the team behind Dokan. Vendor affiliate programs are coming soon.', ['Dokan', 'Vendors'], ic.store],
  ['Clear Over Clever', 'Four statuses, a hold period, and payouts you review first. You always know who you pay and why.', ['Statuses', 'CSV records'], ic.check],
];
const principles = `
<section class="sec" id="principles" aria-labelledby="pr-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="pr-h" class="h2" data-reveal>What Guides <br>FlyAffiliate</h2>
      <p class="lead muted" data-reveal>Four ideas behind every feature we ship, <br>from owning your data to keeping things clear.</p>
    </div>
    <ul class="abt-pr" data-reveal-stagger>
      ${PRINCIPLES.map(([t, d, tags, icon], i) => `<li class="abt-pr__c${i === 0 ? ' is-acc' : ''}">
        <span class="abt-ic" aria-hidden="true">${icon}</span>
        <h3 class="abt-pr__t">${t}</h3>
        <p>${d}</p>
        <span class="abt-tags">${tags.map(x => `<span>${x}</span>`).join('')}</span>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>`;

// 4. weDevs family — Dokan first with its logo, FlyAffiliate highlighted, weDevs.com as the way out
const FAMILY = ['WP User Frontend', 'WP ERP', 'weDocs', 'WP Project Manager', 'weMail', 'wePOS', 'Appsero'];
const family = `
<section class="sec" id="family" aria-labelledby="fam-h">
  <div class="wrap">
    <div class="split-head">
      <h2 id="fam-h" class="h2" data-reveal>Built by the Team <br>Behind Dokan</h2>
      <p class="lead muted" data-reveal>FlyAffiliate is built by weDevs, the team behind <br>Dokan and other WordPress products.</p>
    </div>
    <ul class="abt-fam" data-reveal-stagger>
      <li class="abt-fam__dokan"><img src="/assets/img/dokan-logo.svg" alt="Dokan" width="150" height="41"><small>Multivendor marketplace</small></li>
      ${FAMILY.map(n => `<li><span>${n}</span></li>`).join('')}
      <li class="abt-fam__me"><span>FlyAffiliate</span><small>The newest member</small></li>
      <li class="abt-fam__more"><a href="https://wedevs.com"${ext}><span>weDevs.com</span><small>See all products ${ic.arrow}</small></a></li>
    </ul>
  </div>
</section>`;

// 5. Contact — one split card: blue info half, white form half
const contact = `
<section class="sec" id="contact" aria-labelledby="c-h">
  <div class="wrap">
    <div class="abt-contact" data-reveal>
      <div class="abt-contact__l">
        <h2 id="c-h" class="abt-contact__h">Let’s Talk</h2>
        <p class="abt-contact__p">Questions about FlyAffiliate, your store, or your <br>marketplace? Send us a note.</p>
        <ul class="abt-contact__list">
          <li><span aria-hidden="true">${ic.chat}</span>Product and setup questions</li>
          <li><span aria-hidden="true">${ic.store}</span>WooCommerce and Dokan stores</li>
          <li><span aria-hidden="true">${ic.mail}</span>We reply by email</li>
        </ul>
        <p class="abt-contact__co">Company <a href="https://wedevs.com"${ext}>weDevs</a></p>
      </div>
      <form class="abt-contact__form form" data-demo-form>
        <p class="abt-contact__ct">Have a question in mind?</p>
        <label class="sr-only" for="c-name">Name</label><input id="c-name" class="field" type="text" name="name" placeholder="Your name" autocomplete="name" required>
        <label class="sr-only" for="c-email">Email</label><input id="c-email" class="field" type="email" name="email" placeholder="you@yourstore.com" autocomplete="email" required>
        <label class="sr-only" for="c-msg">Message</label><textarea id="c-msg" class="field field--area" name="message" placeholder="Your message here…" rows="4"></textarea>
        <button class="btn abt-contact__send" type="submit"><span class="btn__t">Send Message</span><span class="btn__i" aria-hidden="true">${ic.arrow}</span></button>
        <p class="form__note" data-form-note data-ok="Thanks — message received. (Demo form: nothing was sent.)" hidden role="status"></p>
      </form>
    </div>
  </div>
</section>`;

export default () => page({
  title: 'About — FlyAffiliate',
  desc: 'FlyAffiliate is built by weDevs, the team behind Dokan and other WordPress products. Affiliate marketing that runs on your own WordPress site.',
  cur: 'About',
  bodyClass: 'page-about',
  body: [hero, story, principles, family, contact].join('\n'),
});
