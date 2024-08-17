const showNavBar = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const rotateMenuIcon = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".nav-list a");


showNavBar.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    rotateMenuIcon.classList.toggle("change");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
        rotateMenuIcon.classList.remove("change");
    });
});