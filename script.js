const burgerMenuButton = document.querySelector(".mobile-menu");
const navi = document.querySelector("ul");
const acceuil = document.querySelector(".contact");
burgerMenuButton.onclick = function () {
  //cacher menu tant qu'on a pas cliqué sur mobile-menu
  navi.classList.toggle("afficher-menu");
  //cacher contact quand le menu est ouvert
  acceuil.classList.toggle("afficher-contact");
};

const arrowButton = document.querySelectorAll(".arrow1");
console.log(arrowButton);
const projet1 = document.querySelector(".projet1");
const projet2 = document.querySelector(".projet2");

arrowButton[0].onclick = function () {
  //changer le projet
  projet1.classList.toggle("afficherprojet1");
  projet2.classList.toggle("afficherprojet2");
};
arrowButton[1].onclick = function () {
  //changer le projet
  projet1.classList.toggle("afficherprojet1");
  projet2.classList.toggle("afficherprojet2");
};
