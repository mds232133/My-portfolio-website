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

let componentsLoaded = false;

try {
  await Promise.all(components.map(([selector, path]) => loadComponent(selector, path)));
  componentsLoaded = true;
} catch (error) {
  console.error("Unable to load portfolio components.", error);
  const message = window.location.protocol === "file:"
    ? "Components need a local web server. Open this page with VS Code Live Server, then refresh."
    : "Unable to load page components. Check the server and refresh the page.";
  announce(message, "error");
}

if (componentsLoaded) {
  const initializationErrors = [];

  initializers.forEach((initialize) => {
    try {
      initialize();
    } catch (error) {
      console.error(`Unable to initialize ${initialize.name}.`, error);
      initializationErrors.push(initialize.name);
    }
  });

  document.dispatchEvent(new Event("componentsLoaded"));

  if (initializationErrors.length > 0) {
    announce("Some page interactions could not start. Check the browser console.", "error");
  }
}
