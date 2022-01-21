// import { first } from "./home";
import style from "./style.css";
// import image from "./tpizza-1.jpg";

import home from "./home";
import menu from "./menu";

home();

document.body.append(home());

const homeTab = document.querySelector(".home");
const menuTab = document.querySelector(".menu");
const contactTab = document.querySelector(".contact");
const textDiv = document.querySelector(".text-container");

menuTab.addEventListener("click", function () {
  textDiv.remove();
  if (!denden.textContent === "zaaa") document.body.append(menu());
});
