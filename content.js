(function () {
  "use strict";

  const BANNER_ID = "ns-production-warning-banner";
  const BODY_CLASS = "ns-production-warning-active";

  function isNetSuiteHost(hostname) {
    return /(^|\.)netsuite\.(com|com\.au|eu|co\.uk)$/i.test(hostname);
  }

  function isSandboxHost(hostname) {
    const host = hostname.toLowerCase();

    return (
      host.includes("sandbox") ||
      /(^|[.-])sb\d*([.-]|$)/i.test(host) ||
      /(^|[.-])tstdrv\d*([.-]|$)/i.test(host) ||
      /(^|[.-])rp\d*([.-]|$)/i.test(host)
    );
  }

  function isLikelyProduction() {
    const hostname = window.location.hostname;

    if (!isNetSuiteHost(hostname)) {
      return false;
    }

    return !isSandboxHost(hostname);
  }

  function injectBanner() {
    if (!isLikelyProduction() || document.getElementById(BANNER_ID)) {
      return;
    }

    const banner = document.createElement("div");
    banner.id = BANNER_ID;
    banner.setAttribute("role", "status");
    banner.setAttribute("aria-live", "polite");

    const track = document.createElement("div");
    track.className = "ns-production-warning-track";
    track.textContent =
      "PRODUCTION NETSUITE ACCOUNT - Make changes carefully - PRODUCTION NETSUITE ACCOUNT - Make changes carefully";

    banner.appendChild(track);
    document.documentElement.appendChild(banner);
    document.documentElement.classList.add(BODY_CLASS);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectBanner, { once: true });
  } else {
    injectBanner();
  }
})();
