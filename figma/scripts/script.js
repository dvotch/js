function seeMore() {
  let main__more = document.getElementById("main__more");
  if (main__more.textContent != "Скрыть") {
    let container__item;
    let logos = [
      "img/lenovo_logo.svg",
      "img/samsung_logo.svg",
      "img/apple_logo.svg",
    ];
    for (let i = 0; i < 3; i++) {
      createItem(logos[i]);
    }
    main__more.textContent = "Скрыть";
  } else {
    hideMore();
  }
}

function createItem(logo) {
  container__item = document.createElement("a");
  container__item.className = "container__item";
  container__item.append(createLogo(logo));
  container__item.append(createArrow());
  container.append(container__item);
}

function createLogo(logo) {
  let item__logo = document.createElement("img");
  item__logo.className = "item__logo";
  item__logo.src = logo;
  return item__logo;
}

function createArrow() {
  let item__arrow = document.createElement("button");
  item__arrow.className = "item__arrow";
  return item__arrow;
}

function hideMore() {
  for (let i = 0; i < 3; i++) {
    container.removeChild(container.lastChild);
  }
  main__more.textContent = "Показать все";
}
