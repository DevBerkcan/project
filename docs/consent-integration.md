# Legal Cockpit consent integration

The supplied Legal Cockpit v2 script is included once in `index.html`, which is
also the template for all prerendered pages. Its settings link lives outside the
React root because the vendor binds existing links once during initialization.
It survives client-side navigation and falls back to `/datenschutz` if the vendor
script cannot load. German and dark mode are intentional; console logging is off.

## Current status

- Configured categories: `Google Tag Manager`, `Microsoft`, `Google Analytics`.
- These are planned services, not installed trackers. No GTM container, GA4
  measurement ID, or Clarity project ID is configured. The banner's generic
  tracking description must be reviewed before publication.
- No third-party tracking script or external iframe was found in the current
  application. Do not mask the React entrypoint, SEO JSON-LD, or consent script.
- The existing external Fontshare stylesheet is not blocked by script masking.
- Legal pages still need the user's generated texts before launch.
- `data-cc-non-eu-consent="false"` is preserved from the supplied configuration;
  it is not a technical restriction on international data transfers.
- The inspected vendor script makes requests to Legal Cockpit's consent endpoint
  on first selection and changes, even with console logs disabled.

## Adding tracking

Use `type="text/plain"` AND the exact configured category, for example
`data-cookiecategory="Google Analytics"`. A generic `analytics` category does not
match this configuration. Microsoft includes Clarity in the vendor cookie list,
but the inspected script does not call Clarity's Consent API.

Do not load a whole GTM container on the assumption that this grants permission
for all its tags. Each tag must respect its own service consent. Before enabling
tracking, implement and test updates and revocation, including Clarity's current
Consent API. Removing cookies alone does not stop an already loaded tracker.

Exclude the project inquiry flow from recordings, including when reached through
client-side navigation. Never send form values or personal data to analytics.
Opening a mail client is not proof that an inquiry was sent.

For future supported embeds, use vendor placeholders instead of live iframes,
e.g. `<div data-service="Youtube" data-id="VIDEO_ID" data-autoscale></div>`.

## Browser verification before release

- Fresh visit, reject optional, selective accept, accept all, reload, and revoke.
- Inspect network, cookies and storage in every state; no optional tracking before consent.
- Reopen settings after a React route change and on a directly loaded subpage.
- Verify blocked-script fallback, mobile layout, keyboard focus, dialog scrolling,
  reduced motion, and contrast in both consent dialogs.
- Recheck when the externally hosted vendor script changes.
