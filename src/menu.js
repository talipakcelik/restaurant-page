function menu() {
  const deneme = document.querySelector("header");
  const denden = document.createElement("div");
  denden.textContent = "zaaa";

  deneme.append(denden);
  console.log(denden);
  return deneme;
}

export default menu;
