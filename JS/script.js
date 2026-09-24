const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {
  const windowHeight = window.innerHeight;

  reveals.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
});
const form = document.querySelector(".f");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.reset();
});
