"use strict";

// Immediately Invoked Function Expression
(() => {
  /* navbar */
  const navbar = document.getElementById("nav");
  const toggleMenuButton = document.getElementById("navbar-toggle");
  const ionicon = toggleMenuButton.querySelector("ion-icon");

  if (ionicon && toggleMenuButton && navbar) {
    toggleMenuButton.addEventListener("click", () => {
      const isActive = navbar.classList.toggle("active");
      ionicon.setAttribute("name", isActive ? "close" : "reorder-four-outline");
    });
  }
})();
