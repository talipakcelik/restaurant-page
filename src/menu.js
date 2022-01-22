import lahmacunImg from "./lahmacun.jpg";
import pideImg from "./pide.jpg";

function menu() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  nav.classList.add("container");
  const home = document.createElement("div");
  home.textContent = "HOME";
  home.classList.add("home");
  const menu = document.createElement("div");
  menu.textContent = "MENU";
  menu.classList.add("menu");
  const contact = document.createElement("div");
  contact.textContent = "CONTACT";
  contact.classList.add("contact");
  ////
  const mealContainer = document.createElement("div");
  mealContainer.classList.add("meal-container");
  const meal = document.createElement("div");
  meal.classList.add("meal");
  const lahmacun = document.createElement("img");
  lahmacun.classList.add("meal-img");
  lahmacun.src = lahmacunImg;
  lahmacun.alt = "lahmacun image";
  const mealContent = document.createElement("div");
  mealContent.classList.add("meal-content");
  const mealTitle = document.createElement("p");
  mealTitle.classList.add("meal-title-1");
  mealTitle.textContent = "Lahmacun";
  const mealTag = document.createElement("span");
  mealTag.classList.add("tag");
  mealTag.textContent = "Price: 3$";
  const mealAtts = document.createElement("ul");
  mealAtts.classList.add("meal-atts");
  const mealAtt1 = document.createElement("li");
  mealAtt1.classList.add("meal-att");
  mealAtt1.textContent = "Flat Bread";
  const mealAtt2 = document.createElement("li");
  mealAtt2.classList.add("meal-att");
  mealAtt2.textContent = "Minced Meat";
  const mealAtt3 = document.createElement("li");
  mealAtt3.classList.add("meal-att");
  mealAtt3.textContent = "Minced Vegetables";
  //////
  const meal2 = document.createElement("div");
  meal2.classList.add("meal");
  const pide = document.createElement("img");
  pide.classList.add("meal-img");
  pide.src = pideImg;
  pide.alt = "pide image";
  const mealContent2 = document.createElement("div");
  mealContent2.classList.add("meal-content");
  const mealTitle2 = document.createElement("p");
  mealTitle2.classList.add("meal-title-1");
  mealTitle2.textContent = "Pide";
  const mealTag2 = document.createElement("span");
  mealTag2.classList.add("tag");
  mealTag2.textContent = "Price: 5$";
  const mealAtts2 = document.createElement("ul");
  mealAtts2.classList.add("meal-atts");
  const mealAtt12 = document.createElement("li");
  mealAtt12.classList.add("meal-att");
  mealAtt12.textContent = "Beef Cubes";
  const mealAtt22 = document.createElement("li");
  mealAtt22.classList.add("meal-att");
  mealAtt22.textContent = "Fresh Tomato";
  const mealAtt32 = document.createElement("li");
  mealAtt32.classList.add("meal-att");
  mealAtt32.textContent = "Green Peppers";

  ///
  content.append(header);
  header.append(nav);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  header.append(mealContainer);
  mealContainer.append(meal);
  meal.append(lahmacun);
  meal.append(mealContent);
  mealContent.append(mealTag);
  mealContent.append(mealTitle);
  mealContent.append(mealAtts);
  mealAtts.append(mealAtt1);
  mealAtts.append(mealAtt2);
  mealAtts.append(mealAtt3);
  ///
  mealContainer.append(meal2);
  meal2.append(pide);
  meal2.append(mealContent2);
  mealContent2.append(mealTag2);
  mealContent2.append(mealTitle2);
  mealContent2.append(mealAtts2);
  mealAtts2.append(mealAtt12);
  mealAtts2.append(mealAtt22);
  mealAtts2.append(mealAtt32);

  return content;
}

export default menu;
