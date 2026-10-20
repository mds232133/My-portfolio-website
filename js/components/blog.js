export function initBlog() {
  document.querySelectorAll(".blog-card a, #blog .text-link").forEach((link) => {
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}
