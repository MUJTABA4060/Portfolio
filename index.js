const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const links = document.querySelector(".links");
const btn = document.querySelector(".btn");

logo.addEventListener("click", () => {
  open ("./index.html")
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
})