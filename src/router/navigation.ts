export function scrollToHash(hash: string) {
  if (!hash) {
    return;
  }

  const targetId = hash.replace(/^#/, "");
  const target = document.getElementById(targetId);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function navigateTo(to: string) {
  const url = new URL(to, window.location.origin);
  const nextLocation = `${url.pathname}${url.search}${url.hash}`;
  const currentLocation = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextLocation !== currentLocation) {
    window.history.pushState({}, "", nextLocation);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  if (url.hash) {
    requestAnimationFrame(() => scrollToHash(url.hash));
    return;
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}
