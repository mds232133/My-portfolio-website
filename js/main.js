import { loadComponent, announce } from "./components.js";
import { initNavbar } from "./components/navbar.js";
import { initHero } from "./components/hero.js";
import { initAbout } from "./components/about.js";
import { initSkills } from "./components/skills.js";
import { initProjects } from "./components/projects.js";
import { initResume } from "./components/resume.js";
import { initServices } from "./components/services.js";
import { initTestimonials } from "./components/testimonials.js";
import { initBlog } from "./components/blog.js";
import { initContact } from "./components/contact.js";
import { initFooter } from "./components/footer.js";

const components = [
  ["#navbar", "components/navbar.html"],
  ["#hero", "components/hero.html"],
  ["#about", "components/about.html"],
  ["#skills", "components/skills.html"],
  ["#projects", "components/projects.html"],
  ["#resume", "components/resume.html"],
  ["#services", "components/services.html"],
  ["#testimonials", "components/testimonials.html"],
  ["#blog", "components/blog.html"],
  ["#contact", "components/contact.html"],
  ["#footer", "components/footer.html"],
];

const initializers = [
  initNavbar,
  initHero,
  initAbout,
  initSkills,
  initProjects,
  initResume,
  initServices,
  initTestimonials,
  initBlog,
  initContact,
  initFooter,
];

try {
  await Promise.all(components.map(([selector, path]) => loadComponent(selector, path)));
  initializers.forEach((initialize) => initialize());
  document.dispatchEvent(new Event("componentsLoaded"));
} catch (error) {
  console.error("Unable to initialize the portfolio page.", error);
  announce("Some page content could not be loaded. Please refresh and try again.", "error");
}
