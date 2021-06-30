const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const modal = $.querySelector(".modal");
  const body = $.querySelector("body");
  const header = $.querySelector("header");

  // Add bottom border on header when scrolling on axe Y
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll !== 0) {
      header.classList.add("bordered");
    } else {
      header.classList.remove("bordered");
    }
  });

  $.querySelector(".btn-signup").addEventListener("click", () => {
    // Display modal
    modal.classList.remove("hidden");
    // Disable scroll
    body.classList.add("disable");
  });
  $.querySelector(".icon-times").addEventListener("click", () => {
    // Hide modal
    modal.classList.add("hidden");
    // Enable scroll
    body.classList.remove("disable");
  });

  // Easter Egg
  const easterEgg = $.querySelector("#surprise");
  easterEgg.addEventListener("click", () => {
    const attributeValue = easterEgg.getAttribute("src");
    if (attributeValue === "./assets/img/favicon-tripadvisor.svg") {
      easterEgg.setAttribute("src", "./assets/img/logo.png");
    } else {
      easterEgg.setAttribute("src", "./assets/img/favicon-tripadvisor.svg");
    }
  });
});
