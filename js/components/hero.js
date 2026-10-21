export function initHero() {
  const portrait = document.querySelector(".hero-portrait");
  if (!portrait) return;

  portrait.addEventListener("error", () => {
    portrait.alt = "Portrait illustration is unavailable";
    portrait.hidden = true;
  }, { once: true });
}
