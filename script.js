const burgerMenuButton = document.querySelector(".mobile-menu");
const navi = document.querySelector("ul");
const acceuil = document.querySelector(".contact");
burgerMenuButton.onclick = function () {
  //cacher menu tant qu'on a pas cliqué sur mobile-menu
  navi.classList.toggle("afficher-menu");
  //cacher contact quand le menu est ouvert
  acceuil.classList.toggle("afficher-contact");
};
