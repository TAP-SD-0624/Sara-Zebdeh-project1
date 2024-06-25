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
        cardData.stars.forEach((star) => {
          const star_li = document.createElement("li");
          const icon = document.createElement("ion-icon");
          icon.setAttribute("class", star.class);
          icon.setAttribute("name", star.name);
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

        // Add click event listener to open details page
        card.addEventListener("click", () => {
          window.location.href = `detailsPage.html?id=${cardData.id}`;
        });

        cardsContainer.appendChild(card);
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const favouritesDiv = document.querySelector(".favourites-div");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const favouriteItems = data.filter((item) => item.isFavourite);
      favouriteItems.forEach((item) => {
        const topic_div = document.createElement("div");
        topic_div.classList.add("topic");

        const topic_img_div = document.createElement("div");
        topic_img_div.classList.add("topic-img", "favourites-topic-img");

        const imgElement = document.createElement("img");
        imgElement.src = item.image;
        imgElement.alt = item.topic;

        topic_img_div.appendChild(imgElement);

        const info_div = document.createElement("div");
        info_div.classList.add("information-for-topic");

        const h3Element = document.createElement("h3");
        h3Element.textContent = item.topic;

        const stars_ul = document.createElement("ul");
        item.stars.forEach((star) => {
          const star_li = document.createElement("li");
          const icon = document.createElement("ion-icon");
          icon.setAttribute("class", star.class);
          icon.setAttribute("name", star.name);
          star_li.appendChild(icon);
          stars_ul.appendChild(star_li);
        });
        info_div.appendChild(h3Element);
        info_div.appendChild(stars_ul);

        topic_div.appendChild(topic_img_div);
        topic_div.appendChild(info_div);

        favouritesDiv.appendChild(topic_div);
      });
    });
});

let selectedCardId;
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCardId = urlParams.get("id");
  console.log(selectedCardId);
  if (selectedCardId) {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const cardData = data.find((card) => card.id == selectedCardId);
        console.log(cardData);
        if (cardData) {
          const details = document.querySelector(".details");
          const details_div = document.createElement("div");
          details_div.classList.add("details-div");
          const div = document.createElement("div");

          const h4 = document.createElement("h4");
          h4.textContent = cardData.category;
          const details_h3 = document.createElement("h3");
          details_h3.classList.add("details-h3");
          details_h3.textContent = cardData.topic;

          const stars_ul = document.createElement("ul");
          stars_ul.classList.add("details-ul");
          cardData.stars.forEach((star) => {
            const star_li = document.createElement("li");
            const icon = document.createElement("ion-icon");
            icon.setAttribute("class", star.class);
            icon.setAttribute("name", star.name);
            star_li.appendChild(icon);
            stars_ul.appendChild(star_li);
          });

          const details_p = document.createElement("p");
          details_p.classList.add("details-p");
          details_p.textContent = cardData.description;
          div.appendChild(h4);
          div.appendChild(details_h3);
          div.appendChild(stars_ul);
          details_div.appendChild(div);
          details_div.appendChild(details_p);

          const relative_container = document.createElement("div");
          relative_container.classList.add("relative-container");
          const topic_div = document.createElement("div");
          topic_div.classList.add("topic-of-card");

          const imgCard = document.createElement("div");
          imgCard.classList.add("topic-card-img");
          const image = document.createElement("img");
          image.src = cardData.image;
          image.alt = cardData.topic;

          imgCard.appendChild(image);

          const favourite_information_div = document.createElement("div");
          favourite_information_div.classList.add("favourite-information-div");

          const divElement = document.createElement("div");
          divElement.classList.add("p-h5-a-div", "gab");

          const h5 = document.createElement("h5");
          h5.textContent = cardData.topic;

          const aElement = document.createElement("a");
          aElement.href = "#"; // Set the href attribute to "#"
          aElement.textContent = cardData.name;

          divElement.appendChild(h5);
          divElement.appendChild(document.createTextNode("by "));
          divElement.appendChild(aElement);

          const favourite_div = document.createElement("div");
          favourite_div.classList.add("favourite-div");
          const favourite_div_p = document.createElement("p");
          favourite_div_p.textContent = "Interested about this topic?";
          const favourite_div_div = document.createElement("div");
          favourite_div_div.classList.add("flex", "add-to-favourite-div");
          const addToFavouriteBtn = document.createElement("button");
          addToFavouriteBtn.classList.add("flex", "gab", "btn");
          addToFavouriteBtn.id = "add-to-favourite-btn";
          const addSpan = document.createElement("span");
          addSpan.classList.add("add-span");
          addSpan.textContent = "Add to Favourites";

          const icon = document.createElement("ion-icon");
          icon.setAttribute("class", "fav-icon");
          icon.setAttribute("name", "heart-outline");

          const p2 = document.createElement("p");
          p2.classList.add("add-to-favourite-bottom");
          p2.textContent = "Unlimited Credits";

          addToFavouriteBtn.appendChild(addSpan);
          addToFavouriteBtn.appendChild(icon);

          favourite_div_div.appendChild(addToFavouriteBtn);
          favourite_div.appendChild(favourite_div_p);
          favourite_div.appendChild(favourite_div_div);
          favourite_div.appendChild(p2);

          favourite_information_div.appendChild(divElement);
          favourite_information_div.appendChild(favourite_div);

          topic_div.appendChild(imgCard);
          topic_div.appendChild(favourite_information_div);
          relative_container.appendChild(topic_div);

          details.appendChild(details_div);
          details.appendChild(relative_container);
        }
      });
  }
});
