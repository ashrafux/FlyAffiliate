# FlyAffiliate product: what the plugin actually does

Source: Figma "FlyAffiliate Product Design" (file NR113Z8nfsY8VYjcyZoQyJ, page MoodBoard, frame 2:6). It contains 21 screenshots of the real WordPress admin, saved here as `screen-01.png` … `screen-21.png`. Screens 19 and 20 are the same. These notes are the source of truth for drawing product illustrations on the website, so the mockups show real screens, labels and settings instead of invented ones.

## Product chrome (use it to make mockups feel real)
- The plugin runs inside WordPress admin. The left menu item "FlyAffiliate" uses the blue logo icon.
- The submenu has: Dashboard, Affiliates, Commissions, Visits, Payouts, Extensions, Settings, License.
- The top bar shows the FlyAffiliate logo, a "Version 1.0.0" pill, a "Get Support" outline button and a "?" help button.
- The look is plain WordPress-style: white cards on a #f0f0f0 canvas, primary blue #0043DA, toggles in blue, small status pills, and empty states with a round grey icon well.
- Currency is configurable; the screenshots show Bangladeshi taka (৳) with the symbol after the amount.

## 1. Setup wizard (screens 01–03)
The wizard has four steps: **Commissions → Tracking → Email → Done**. Each page shows "Skip setup" and "Step x of 4" with Back and Continue buttons.
- **Commission basics** ("How much do affiliates earn, and how long do you hold it?"):
  - Currency.
  - Default rate (%): 10, "Used when the product doesn't set its own rate."
  - Maximum rate (%): 50, "No commission is calculated above this rate, even if a product sets a higher one."
  - Hold period (days): 30, "0 means as soon as the order is paid."
- **Track referrals**:
  - A toggle, "Track WooCommerce orders" ("Create commissions for referred WooCommerce orders").
  - Attribution window (days): 30, where "0 means until the browser closes".
- **Done** ("You're all set"): two pages are created for affiliates, each with a "Copy shortcode" button:
  - Affiliate registration `[flyaffiliate_register]`.
  - Affiliate dashboard `[flyaffiliate_dashboard]`.
  - The CTA is "Add your first affiliate".

## 2. Dashboard (screen 05)
The page is titled "How the affiliate programme is doing", with a "Last 30 days" range picker and a calendar button.
- **Earnings & payouts** (4 stat cards with icons): Referral revenue, Net revenue, Total paid, Total unpaid. There is an "All payouts →" link.
- **Performance & conversions**: Commissions, Visits, Conversion rate (%), Affiliates. There is an "All visits →" link.
- **Visits per day**: a line chart with the legend Visits (light blue) and Converted (blue), with dates on the x-axis.
- **Right column**:
  - Most valuable affiliates (empty state: "Nobody has earned yet").
  - Recent commissions.
- **Bottom row**:
  - Highest converting products ("The products that earn the most commissions appear here").
  - Recent visits ("Clicks on referral links appear here as they happen").

## 3. Affiliates (screens 04, 08, 09)
- **Add affiliate** modal ("Any WordPress user can become an affiliate. Their referral link is ready right away."):
  - User (required; choose a WordPress user).
  - Payment email (defaults to the account email; where payouts are sent).
  - Website.
  - "How will they promote you?"
- **Affiliate profile**:
  - Header: the name, an "Active" pill, "#1 · email", and "WordPress profile" and "Edit" buttons.
  - Referral link box: `…/?affiliate=1` with a copy button, plus the hint "Add ?affiliate=1 to any product URL to link straight to it".
  - Stat cards: Unpaid, Pending, Paid, Visits.
  - Tabs: Commissions, Visits, Payouts, Referral links.
  - The Commissions tab has status filters (All, Pending, Unpaid, Paid, Rejected, each with counts) and a "+ Add commission" button for manual commissions.
  - Empty state: "Referred orders will show up here once tracking is on."

## 4. Payouts (screens 06, 07)
- **Payouts list**: "A payout groups unpaid commissions into one payment per affiliate, each paid by their payout method."
  - Manual payments are sent your usual way and then marked paid.
  - Automatic methods send the money and settle on their own.
  - Buttons: "All payments" and "+ New payout".
- **New payout**:
  - The left panel is **Who to pay**:
    - Affiliates: radio choice of "Everyone with an unpaid balance", "Only the affiliates I choose" or "Everyone except the affiliates I choose".
    - Minimum amount (e.g. 50; "Affiliates below this amount wait for the next payout").
    - Period (Any time; only commissions from this period are included).
    - Title (e.g. "September payout").
    - Payment reference (e.g. a bank transfer reference).
    - A Preview button.
  - The right panel is **Preview** (empty state: "Nobody to pay right now").

## 5. Extensions (screen 10)
- A "FlyAffiliate Pro" banner reads "Grow your affiliate program": track sales from more platforms and pay affiliates the way they prefer, one switch at a time. Its icon tiles show WooCommerce, Dokan, a link, PayPal, a bank and a badge.
- Tabs: My extensions / Active / Inactive. There is also a category select, a search field and a grid/list toggle.
- **Dokan** (Integration; locked or Pro, with a toggle): "Let Dokan vendors run their own affiliate programs. Each vendor opts in and pays the commission on their own products."
- **PayPal Payouts** (Payout method, "Not connected"): "Pay affiliates straight to their PayPal account in one batch. Connect your PayPal Business account once and FlyAffiliate sends the money."
- Each card has Docs, Video and "Set up →" links.

## 6. Settings (screens 11–20)
The left navigation has a search box and these groups: General, Commissions, Payouts, Integrations, Email. The subtitle reads "A new rate or hold period applies to new orders only."
- **General → Tracking**:
  - Referral variable: `affiliate`, so links look like `?affiliate=1`.
  - Attribution window: 30 days.
- **General → Currency**: currency, symbol position (After amount), thousands separator and decimal separator.
- **General → Affiliate area**:
  - Signup: an "Open registration" toggle. When it is off, the form says the programme isn't taking new members, and admins can still add affiliates.
  - Shortcodes:
    - `[flyaffiliate_dashboard]`: referral link, balance, commissions, visits, payouts and the affiliate's own settings.
    - `[flyaffiliate_register]`: email-only signup with an activation link.
- **General → Data**: "Remove all data on uninstall" (red, off by default).
- **Commissions → Rates**:
  - Default rate 10%.
  - Maximum rate 50%.
  - Rate type: "Percentage of the item total" (percentage only for now).
- **Commissions → Rules**:
  - Hold period (30 days).
  - Base amount: "Exclude shipping" (on) and "Exclude tax" (on).
  - Eligibility: "Block self-referrals" (on; an affiliate buying through their own link earns nothing).
  - Refunds: "Reject commissions on refund" (off). Failed and cancelled orders always reject their commissions, and paid commissions are never changed.
- **Payouts → Rules**:
  - Minimum payout (৳ 50).
  - Default payout method: Manual. "Manual" means paying outside WordPress and marking it paid; a method that is switched off falls back to Manual.
- **Integrations → WooCommerce**: a toggle, "Track WooCommerce orders".
- **Email → Notifications**: "Send an activation link on signup". When it is off, new affiliates stay pending until an admin activates them.

## 7. License (screen 21)
- License Activation, with an "Active" pill: "Activate FlyAffiliate Pro with your license key for automatic updates and expert support."
- The key is masked, with buttons to "Deactivate License" and "Refresh".
- Activations remaining: e.g. 1 out of 25 (4%).
- License expiry: "Your license never expires."

## Commission statuses (used across the product)
**Pending** (in the hold period) → **Unpaid** (payable) → **Paid**. **Rejected** is used for refunds, failed or cancelled orders, or manual rejection.

## Illustration ideas for the Features page
- **Tracking**: the profile referral-link box with the `?affiliate=1` URL and copy button, an "Attribution window · 30 days" chip, and the Visits / Unpaid / Pending / Paid stat cards.
- **Commissions**: the Rates card (Default 10%, Max 50%, "Percentage of the item total"), and the Rules toggles (Exclude shipping, Exclude tax, Block self-referrals).
- **Hold & status**: a Hold period of 30 days, plus the status tabs All / Pending / Unpaid / Paid / Rejected with counts.
- **Affiliate dashboard**: the `[flyaffiliate_dashboard]` contents (referral link, balance, commissions, visits, payouts), and the Add affiliate modal.
- **Payouts**: the "Who to pay" radio list, the minimum amount and period, the preview list, and the Manual vs PayPal Payouts method.
- **Reports**: the dashboard stat rows (Referral revenue, Net revenue, Total paid, Total unpaid / Commissions, Visits, Conversion rate, Affiliates), the "Visits per day" chart, and "Most valuable affiliates".
- **Setup**: the four-step wizard (Commissions → Tracking → Email → Done) with the two auto-created pages.
- **Dokan / extensions**: the Extensions grid with the Dokan and PayPal Payouts cards and the Pro banner.
