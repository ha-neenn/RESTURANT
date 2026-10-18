const reveals = document.querySelectorAll(".reveal");

function checkRevealSections() {
  const windowHeight = window.innerHeight;

  reveals.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const shouldShow = elementTop < windowHeight - 50;

    if (shouldShow) {
      element.classList.add("show");
    }
  });
}

checkRevealSections();
document.documentElement.classList.add("reveal-enabled");

window.addEventListener("DOMContentLoaded", checkRevealSections);
window.addEventListener("load", checkRevealSections);
window.addEventListener("scroll", checkRevealSections, { passive: true });

const form = document.querySelector(".f");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();
  });
}
