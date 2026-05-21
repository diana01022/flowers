const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const scrollButtons = document.querySelectorAll(".scroll-btn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    navLinks.classList.remove("active");
  });
});
