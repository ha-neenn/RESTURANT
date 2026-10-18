const reveals = document.querySelectorAll(".reveal");

function checkRevealSections() {
  reveals.forEach(function (element) {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom > 0) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}

document.documentElement.classList.add("reveal-enabled");
checkRevealSections();

window.addEventListener("scroll", checkRevealSections);

const form = document.querySelector(".f");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();
  });
}
