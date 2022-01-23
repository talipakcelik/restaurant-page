function homeCreator() {
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

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-container");
  const textInner = document.createElement("div");
  textInner.classList.add("text-inner");

  const navHeader = document.createElement("h1");
  navHeader.textContent = "Lahmacun & Pide Turkish Pizza";

  const navP = document.createElement("p");
  navP.classList.add("nav-p");
  navP.textContent = "Flavor from wood fire. It's oven-baked goodness. ";

  const navLink = document.createElement("a");
  navLink.href = "#";
  navLink.classList.add("btn");
  navLink.textContent = "Start eating";
  ///
  content.append(header);
  header.append(nav);
  header.append(textDiv);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  textDiv.append(textInner);
  textInner.append(navHeader);
  textInner.append(navP);
  textInner.append(navLink);
  //
  content.remove();

  home.style.backgroundColor = "#ffa8a8";
  home.style.color = "#333";
  return content;
}

export default homeCreator;
