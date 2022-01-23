function contactCreator() {
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
  const contactUs = document.createElement("div");
  contactUs.classList.add("contact-container");
  ////
  const address = document.createElement("div");
  address.classList.add("address-col");
  const addTitle = document.createElement("p");
  addTitle.textContent = "Contact us";
  addTitle.classList.add("address-heading");
  const addContent = document.createElement("address");
  addContent.classList.add("address-content");
  const addP1 = document.createElement("p");
  addP1.textContent = "Ankuva AVM Bilkent";
  const addP2 = document.createElement("p");
  const addTel = document.createElement("a");
  addTel.href = "tel:+90 999 99";
  addTel.textContent = "+90 999 99";
  const addMail = document.createElement("a");
  addMail.href = "mailto:hello@turkishpizza.com";
  addMail.textContent = "hello@turkishpizza.com";
  const br = document.createElement("br");

  //
  ///
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Company";
  const logoAtts = document.createElement("ul");
  logoAtts.classList.add("logo-atts");
  const logoAtt1 = document.createElement("li");
  logoAtt1.classList.add("logo-att");
  const logoAtt1a = document.createElement("a");
  logoAtt1a.textContent = "About TurkishPizza";
  logoAtt1a.href = "#";
  const logoAtt2 = document.createElement("li");
  logoAtt2.classList.add("logo-att");
  const logoAtt2a = document.createElement("a");
  logoAtt2a.textContent = "For Business";
  logoAtt2a.href = "#";
  const logoAtt3 = document.createElement("li");
  logoAtt3.classList.add("logo-att");
  const logoAtt3a = document.createElement("a");
  logoAtt3a.textContent = "Careers";
  logoAtt3a.href = "#";
  ///

  //
  const about = document.createElement("div");
  about.classList.add("about");
  about.textContent = "Resources";
  const aboutAtts = document.createElement("ul");
  aboutAtts.classList.add("about-atts");
  const aboutAtt1 = document.createElement("li");
  aboutAtt1.classList.add("about-att");
  const aboutAtt1a = document.createElement("a");
  aboutAtt1a.textContent = "Recipe directory";
  aboutAtt1a.href = "#";
  const aboutAtt2 = document.createElement("li");
  aboutAtt2.classList.add("about-att");
  const aboutAtt2a = document.createElement("a");
  aboutAtt2a.textContent = "Help center";
  aboutAtt2a.href = "#";
  const aboutAtt3 = document.createElement("li");
  aboutAtt3.classList.add("about-att");
  const aboutAtt3a = document.createElement("a");
  aboutAtt3a.textContent = "Privacy & terms";
  aboutAtt3a.href = "#";

  //
  const location = document.createElement("div");
  location.classList.add("location");
  const mapTitle = document.createElement("h3");
  mapTitle.classList.add("map-title");
  mapTitle.textContent = "Location";
  const map = document.createElement("iframe");
  map.classList.add("map");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.3934222116999!2d32.75566618499477!3d39.88378616142569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34772821cf99b%3A0xef4fb0ff2bd9b733!2sBilkent%20York%20Street%20Food%20Company!5e0!3m2!1str!2str!4v1642891210404!5m2!1str!2str";
  ////
  content.append(header);
  header.append(nav);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  //
  header.append(contactUs);
  contactUs.append(address);
  contactUs.append(logo);
  contactUs.append(about);
  //
  logo.append(logoAtts);
  logoAtts.append(logoAtt1);
  logoAtts.append(logoAtt2);
  logoAtts.append(logoAtt3);
  logoAtt1.append(logoAtt1a);
  logoAtt2.append(logoAtt2a);
  logoAtt3.append(logoAtt3a);
  //
  address.append(addTitle);
  address.append(addContent);
  addContent.append(addP1);
  addContent.append(addP2);
  addP2.append(addTel);
  addP2.append(br);
  addP2.append(addMail);
  //
  about.append(aboutAtts);
  aboutAtts.append(aboutAtt1);
  aboutAtt1.append(aboutAtt1a);
  aboutAtts.append(aboutAtt2);
  aboutAtt2.append(aboutAtt2a);
  aboutAtts.append(aboutAtt3);
  aboutAtt3.append(aboutAtt3a);

  header.append(location);
  location.append(mapTitle);
  location.append(map);

  contact.style.backgroundColor = "#ffa8a8";
  contact.style.color = "#333";
  return content;
}

export default contactCreator;
