# NetSuite Production Banner

Chrome extension that shows a non-intrusive scrolling banner at the top of NetSuite production pages.

## Install

1. Open Chrome and go to `chrome://extensions`.
2. Turn on `Developer mode`.
3. Click `Load unpacked`.
4. Select this folder: `netsuite-production-banner`.

## Behavior

The banner is shown on NetSuite domains unless the hostname looks like a sandbox, test drive, release preview, or other non-production account.

Examples treated as non-production:

- Hostnames containing `sandbox`
- Hostnames containing `sb`, `sb1`, `sb2`, etc.
- Hostnames containing `tstdrv`
- Hostnames containing `rp`

There are no popups, alerts, or notifications. The extension only adds the top scrolling banner.
