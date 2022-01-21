// import hero from "./hero.jpg";

function home() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  nav.classList.add("container");
  const home = document.createElement("div");
  home.textContent = "HOME";
  const menu = document.createElement("div");
  menu.textContent = "MENU";
  const contact = document.createElement("div");
  contact.textContent = "CONTACT";

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-container");
  const textInner = document.createElement("div");
  textInner.classList.add("text-inner");

  const navHeader = document.createElement("h1");
  navHeader.textContent = "Pide & Lahmacun Turkish Pizza";

  const navP = document.createElement("p");
  navP.textContent = "Flavor from wood fire. It's oven-baked goodness. ";

  const navLink = document.createElement("a");
  navLink.href = "#";
  navLink.classList.add("btn");
  navLink.textContent = "Start eating";
  ///
  content.append(header);
  header.append(nav);
  header.append(textDiv);
  textDiv.append(textInner);
  textInner.append(navHeader);
  textInner.append(navP);
  textInner.append(navLink);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return content;
}

export default home;

// function hello() {
//   console.log("hello");
// }

// export default hello;
