const menuHamburguer = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const rotateMenu = document.querySelector(".menu");

menuHamburguer.addEventListener("click", () => nav.classList.toggle("nav-active"));

rotateMenu.addEventListener("click", () => nav.classList.toggle("change"))