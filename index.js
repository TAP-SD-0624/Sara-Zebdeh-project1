const body = document.querySelector("body");

const colorThemeBtn = document.getElementById("colorThemeBtn");
const favoriteBtn = document.getElementById("favourites-click-btn");
const favouritesDiv = document.querySelector(".favourites");

const modeText = document.getElementById("mode_btn_text");
const heartColor = document.getElementById("heart-icon-btn");
const modeColor = document.getElementById("mode-icon-btn");

colorThemeBtn.addEventListener("click", () => {
  body.classList.contains("dark")
    ? body.classList.toggle("light-mode")
    : body.classList.toggle("dark-mode");
});

colorThemeBtn.addEventListener("click", () => {
  if (modeText.innerText === "Dark Mode") {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
});

favoriteBtn.addEventListener("click", () => {
  favouritesDiv.classList.toggle("show");
});

favoriteBtn.addEventListener("click", function () {
  heartColor.classList.toggle("clicked");
});

colorThemeBtn.addEventListener("click", function () {
  modeColor.classList.toggle("clicked");
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const cardsContainer = document.querySelector(".topics-container");
      data.forEach((cardData) => {
        const card = document.createElement("div");
        card.classList.add("topic");

        const imgCard = document.createElement("div");
        imgCard.classList.add("topic-img");
        const image = document.createElement("img");
        image.src = cardData.image;
        image.alt = cardData.topic;

        const information_div = document.createElement("div");
        information_div.classList.add("information-for-topic");

        const topic_p = document.createElement("p");
        topic_p.textContent = cardData.category;

        const topic_h3 = document.createElement("h3");
        topic_h3.textContent = cardData.topic;
        
        const stars_ul = document.createElement("ul");
        cardData.stars.forEach(star => {
        const star_li = document.createElement('li');
        const icon = document.createElement('ion-icon');
        icon.setAttribute('class', star.class);
        icon.setAttribute('name', star.name);
        star_li.appendChild(icon);
        stars_ul.appendChild(star_li);
        });

        const topic_auther_p = document.createElement("p");
        topic_auther_p.classList.add("auther-p");
        topic_auther_p.textContent = `Author: ${cardData.name}`;
        information_div.appendChild(topic_p);
        information_div.appendChild(topic_h3);
        information_div.appendChild(stars_ul);
        information_div.appendChild(topic_auther_p);

        imgCard.appendChild(image);

        card.appendChild(imgCard);
        card.appendChild(information_div);

        cardsContainer.appendChild(card);
      });
    });
});
