export function initFooter() {
  document.querySelector(".current-year").textContent = String(new Date().getFullYear());

  const backToTop = document.querySelector(".back-to-top");
  backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  });
}
