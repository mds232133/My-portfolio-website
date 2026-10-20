# Shipon Islam — Portfolio

A responsive, dark portfolio website built with HTML, CSS, and vanilla JavaScript. Each page section is loaded from its own HTML fragment and has a matching stylesheet and JavaScript module.

## Run locally

Component HTML is fetched at runtime, so serve this folder over HTTP instead of opening `index.html` directly. For example, use the VS Code Live Server extension or run:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Project structure

- `components/` — HTML fragments for the navbar and each portfolio section.
- `css/components/` — section-specific styles; `variables.css`, `style.css`, and `responsive.css` provide the shared design system.
- `js/components/` — interaction modules initialized after all fragments load.
- `assets/images/` — local portfolio artwork, including the profile portrait and hero banner used by the page.

Update the sample project links, experience, testimonials, contact details, and social profiles in the relevant component HTML before publishing.
