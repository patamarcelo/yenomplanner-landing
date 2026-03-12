export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return false;

  if (typeof window.gtag !== "function") {
    console.log("[landing analytics blocked]", name, params);
    return false;
  }

  window.gtag("event", name, {
    ...params,
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
  });

  return true;
}