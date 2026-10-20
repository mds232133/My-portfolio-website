export function initProjects() {
  document.querySelectorAll(".project-card a[href='https://github.com/']").forEach((link) => {
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}
