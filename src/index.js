import style from "./style.css";
//////
import homeCreator from "./home";
import menuCreator from "./menu";
import contactCreator from "./contact";
//////

document.body.append(homeCreator());

document.body.addEventListener("click", function (e) {
  const content = document.getElementById("content");
  if (
    e.target.classList.contains("home") &&
    !document.body.querySelector(".text-container")
  ) {
    content.remove();
    document.body.append(homeCreator());
    e.target.style.backgroundColor = "red";
  } else if (
    e.target.classList.contains("menu") &&
    !document.body.querySelector(".meal-container")
  ) {
    content.remove();
    document.body.append(menuCreator());
    e.target.style.backgroundColor = "red";
  } else if (e.target.classList.contains("contact")) {
    content.remove();
    document.body.append(contactCreator());
    e.target.style.backgroundColor = "red";
  }
});
