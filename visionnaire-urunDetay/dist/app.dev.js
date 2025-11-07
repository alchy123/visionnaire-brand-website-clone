"use strict";

var headerButton = document.querySelector(".header__block-menu"); // Basılan buton kısmı.

var hamburgerBox = document.querySelector(".header__hamburger-box");
var menusContainer = document.querySelector(".header__menus-container");
console.log(menusContainer);
headerButton.addEventListener("click", function (e) {
  menusContainer.style.transition = "5s";
  menusContainer.classList.toggle("header__menu-open");
});