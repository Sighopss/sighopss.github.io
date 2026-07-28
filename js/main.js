(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var navToggle = document.querySelector(".nav__toggle");
  var navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var caseStudies = {
    "ai-accelerator-hub": {
      badge: "Web design · Front-end",
      title: "AI Accelerator Hub",
      role: "Designed and built by Trevor Kutto",
      summary: "A responsive editorial website for Algonquin College's AI Accelerator Hub, presenting its applied-AI products, student team, and Ottawa mainstreet mission through purposeful art direction and motion.",
      highlights: [
        "Led visual design and front-end implementation across desktop and mobile",
        "Created responsive hero art direction, accessible navigation, and reduced-motion fallbacks",
        "Built a reusable team-data generator with eight portraits, LinkedIn mapping, and schema.org profiles"
      ],
      stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Accessibility", "Structured Data"],
      image: "images/ai-accelerator-hub-site.jpg",
      live: "https://acceleratorhub.ai"
    }
  };

  function renderCaseStudy(project) {
    return '<a class="project-case__visual" href="' + project.live + '" target="_blank" rel="noopener noreferrer">' +
      '<img src="' + project.image + '" width="1440" height="900" loading="lazy" alt="AI Accelerator Hub website designed by Trevor Kutto">' +
      '<span>View live site ↗</span></a>' +
      '<div class="project-case__body"><div class="project-card__top">' +
      '<span class="project-card__badge project-card__badge--warm">' + project.badge + '</span>' +
      '<p class="project-case__role">' + project.role + '</p><h3>' + project.title + '</h3></div>' +
      '<p class="project-card__summary">' + project.summary + '</p>' +
      '<ul class="project-card__highlights">' + project.highlights.map(function (item) { return '<li>' + item + '</li>'; }).join('') + '</ul>' +
      '<div class="project-card__stack" aria-label="Technologies used">' + project.stack.map(function (item) { return '<span>' + item + '</span>'; }).join('') + '</div>' +
      '<div class="project-case__actions"><a href="' + project.live + '" target="_blank" rel="noopener noreferrer">Live site ↗</a></div></div>';
  }

  document.querySelectorAll("[data-project-case-study]").forEach(function (mount) {
    var project = caseStudies[mount.getAttribute("data-project-case-study")];
    if (project) mount.innerHTML = renderCaseStudy(project);
  });

})();
