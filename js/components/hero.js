export function initHero() {
  const portrait = document.querySelector(".hero-portrait");
  portrait.addEventListener("error", () => {
    portrait.alt = "Portrait illustration is unavailable";
    portrait.hidden = true;
  }, { once: true });
}
