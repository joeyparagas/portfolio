const navToggle = document.querySelector(".nav-toggle");
const navToggleMenu = document.querySelector(".nav-toggle-menu");
const navbar = document.querySelector("#navbar");
const navContainer = document.querySelector(".nav-container");
const navlogo = document.querySelector("#nav-logo");

// Reveal drop down menus
navToggle.addEventListener("click", showMe);
// navToggle.addEventListener("mousedown", showMe);

// On click, hide
navToggleMenu.addEventListener("mouseleave", closeMe);
navContainer.addEventListener("mouseleave", closeMe);
// navContainer.addEventListener("click", closeMe);

function closeMe() {
  navToggleMenu.classList.add("hide");
  navToggleMenu.classList.remove("show");
}

function showMe() {
  navToggleMenu.classList.remove("hide");
  navToggleMenu.classList.add("show");
}

// Hide/Show Nav Bar on Smartphones
// navlogo.addEventListener("click", function() {});

// Sticky menu trasparent background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    navbar.classList.add("navbar-T");
  } else {
    navbar.classList.remove("navbar-T");
  }
});

// Smooth Scrolling
$("#main-nav a, .btn-light, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
