const reveals = document.querySelectorAll(".reveal");

function checkRevealSections() {
  const windowHeight = window.innerHeight;

  reveals.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const shouldShow = elementTop < windowHeight - 50;

    element.classList.toggle("show", shouldShow);
  });
}

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
